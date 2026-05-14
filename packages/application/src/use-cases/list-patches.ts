import { NodePatch } from "@epios/domain";
import { GovernanceRepositoryPort } from "@epios/ports";

export interface ListPatchesRequest {
  workspaceId: string;
}

export class ListPatchesUseCase {
  constructor(private governanceRepo: GovernanceRepositoryPort) {}

  async execute(request: ListPatchesRequest): Promise<NodePatch[]> {
    return this.governanceRepo.findPatchesByWorkspaceId(request.workspaceId);
  }
}
