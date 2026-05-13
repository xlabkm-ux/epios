import { GovernanceRepositoryPort } from "@epios/ports";
import { ReadinessAssessment } from "@epios/domain";

export class GetReadinessUseCase {
  constructor(private governanceRepo: GovernanceRepositoryPort) {}

  async execute(workspaceId: string): Promise<ReadinessAssessment | null> {
    return this.governanceRepo.findReadinessByWorkspaceId(workspaceId);
  }
}
