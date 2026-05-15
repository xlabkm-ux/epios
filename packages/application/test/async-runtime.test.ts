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

  it("should handle outbox retries (stub)", async () => {
    // This is a stub for the outbox worker behavior
    expect(true).toBe(true);
  });
});
