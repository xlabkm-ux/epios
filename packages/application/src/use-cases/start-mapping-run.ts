import { MappingRun } from "@epios/domain";
import { MappingRepositoryPort, OutboxRepositoryPort } from "@epios/ports";
import { randomUUID } from "crypto";

export interface StartMappingRunRequest {
  workspaceId: string;
}

export class StartMappingRunUseCase {
  constructor(
    private mappingRepo: MappingRepositoryPort,
    private outboxRepo: OutboxRepositoryPort,
  ) {}

  async execute(request: StartMappingRunRequest): Promise<MappingRun> {
    const runId = randomUUID();
    const now = new Date();

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
