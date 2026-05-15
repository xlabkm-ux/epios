import { MappingRun } from "@epios/domain";
import { MappingRepositoryPort, OutboxRepositoryPort } from "@epios/ports";
import { randomUUID } from "crypto";

export interface StartMappingRunRequest {
  workspaceId: string;
  idempotencyKey?: string;
}

export class StartMappingRunUseCase {
  constructor(
    private mappingRepo: MappingRepositoryPort,
    private outboxRepo: OutboxRepositoryPort,
  ) {}

  async execute(request: StartMappingRunRequest): Promise<MappingRun> {
    // If idempotency key is provided, we should ideally check if a run with this key already exists.
    // For now, we use the key as the run ID if it looks like a UUID, or just log it.

    const runId = request.idempotencyKey || randomUUID();
    const now = new Date();

    // Check if already exists (Idempotency)
    const existing = await this.mappingRepo.findById(runId);
    if (existing) {
      return existing;
    }

    const run: MappingRun = {
      id: runId,
      workspaceId: request.workspaceId,
      status: "pending",
      progress: 0,
      claimsFound: 0,
      evidenceFound: 0,
      createdAt: now,
      updatedAt: now,
    };

    await this.mappingRepo.save(run);

    await this.outboxRepo.save({
      id: randomUUID(),
      type: "MAPPING_RUN_STARTED",
      payload: { runId, workspaceId: request.workspaceId },
      status: "pending",
      createdAt: now,
    });

    return run;
  }
}
