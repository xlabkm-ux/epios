import { GovernanceRepositoryPort } from "@epios/ports";
import { TraceEvent } from "@epios/domain";

export class GetTraceUseCase {
  constructor(private governanceRepo: GovernanceRepositoryPort) {}

  async execute(workspaceId: string): Promise<TraceEvent[]> {
    return this.governanceRepo.findTraceByWorkspaceId(workspaceId);
  }
}
