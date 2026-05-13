import { NodePatch } from "@epios/domain";
import { GovernanceRepositoryPort } from "@epios/ports";

export interface ListPatchesRequest {
  workspaceId: string;
}

export class ListPatchesUseCase {
  constructor(private governanceRepo: GovernanceRepositoryPort) {}

  async execute(request: ListPatchesRequest): Promise<NodePatch[]> {
    // For now, let's assume we can find all patches for a workspace
    // We might need to add this method to the port if it's not there
    const processes = await this.governanceRepo.findProcessesByWorkspaceId(
      request.workspaceId,
    );

    // This is a bit tricky because findProcessesByWorkspaceId returns GovernanceProcess[]
    // We need to filter those that are for patches and then get the patch details.
    // Or we can just add findPatchesByWorkspaceId to the port.

    // Let's go with adding findPatchesByWorkspaceId to the port.
    return this.governanceRepo.findPatchesByWorkspaceId(request.workspaceId);
  }
}
