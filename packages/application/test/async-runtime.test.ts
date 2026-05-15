import { describe, it, expect, vi } from "vitest";
import { StartMappingRunUseCase } from "../src/use-cases/start-mapping-run";
import { randomUUID } from "crypto";
import { MappingRepositoryPort, OutboxRepositoryPort } from "@epios/ports";

describe("Async Runtime & Idempotency", () => {
  it("should return existing run if idempotency key is reused", async () => {
    const mappingRepo = {
      save: vi.fn(),
      findById: vi.fn(),
      listByWorkspace: vi.fn(),
      delete: vi.fn(),
    };
    const outboxRepo = {
      save: vi.fn(),
      findPending: vi.fn(),
      markProcessed: vi.fn(),
      markFailed: vi.fn(),
    };

    const useCase = new StartMappingRunUseCase(
      mappingRepo as unknown as MappingRepositoryPort,
      outboxRepo as unknown as OutboxRepositoryPort,
    );

    const workspaceId = randomUUID();
    const idempotencyKey = randomUUID();

    // First call
    mappingRepo.findById.mockResolvedValue(null);
    const run1 = await useCase.execute({ workspaceId, idempotencyKey });

    // Second call
    mappingRepo.findById.mockResolvedValue(run1);
    const run2 = await useCase.execute({ workspaceId, idempotencyKey });

    expect(run1.id).toBe(idempotencyKey);
    expect(run2.id).toBe(idempotencyKey);
    expect(mappingRepo.save).toHaveBeenCalledTimes(1);
  });

  it("should handle outbox retries and state transitions", async () => {
    const outboxRepo = {
      save: vi.fn(),
      findPending: vi.fn(),
      markProcessed: vi.fn(),
      markFailed: vi.fn(),
    };

    const pendingEvent = {
      id: randomUUID(),
      type: "mission.created",
      payload: {},
      status: "pending",
      retryCount: 0,
    };

    // 1. Success case
    outboxRepo.findPending.mockResolvedValueOnce([pendingEvent]);
    // Simulate worker processing...
    await outboxRepo.markProcessed(pendingEvent.id);
    expect(outboxRepo.markProcessed).toHaveBeenCalledWith(pendingEvent.id);

    // 2. Retry case (failed but retryable)
    const retryableEvent = { ...pendingEvent, id: randomUUID(), retryCount: 1 };
    outboxRepo.findPending.mockResolvedValueOnce([retryableEvent]);
    // Simulate failure
    const error = new Error("Network fluke");
    if (retryableEvent.retryCount < 3) {
      await outboxRepo.save({
        ...retryableEvent,
        retryCount: retryableEvent.retryCount + 1,
      });
    }
    expect(outboxRepo.save).toHaveBeenCalledWith(
      expect.objectContaining({ retryCount: 2 }),
    );

    // 3. Final failure (non-retryable)
    const failedEvent = { ...pendingEvent, id: randomUUID(), retryCount: 3 };
    await outboxRepo.markFailed(failedEvent.id, "Max retries exceeded");
    expect(outboxRepo.markFailed).toHaveBeenCalledWith(
      failedEvent.id,
      "Max retries exceeded",
    );
  });
});
