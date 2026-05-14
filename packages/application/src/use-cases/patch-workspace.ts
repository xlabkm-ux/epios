import { WorkspaceRepositoryPort } from "@epios/ports";
import { Workspace, WorkspaceStatus } from "@epios/domain";

export type PatchWorkspaceDto = {
  id: string;
  status?: WorkspaceStatus;
  isPinned?: boolean;
  archivedAt?: Date;
  archiveComment?: string;
};

export class PatchWorkspaceUseCase {
  constructor(private readonly workspaceRepository: WorkspaceRepositoryPort) {}

  async execute(dto: PatchWorkspaceDto): Promise<Workspace> {
    const workspace = await this.workspaceRepository.findById(dto.id);
    if (!workspace) {
      throw new Error("WORKSPACE_NOT_FOUND");
    }

    if (dto.status !== undefined) workspace.status = dto.status;
    if (dto.isPinned !== undefined) workspace.isPinned = dto.isPinned;
    if (dto.archivedAt !== undefined) workspace.archivedAt = dto.archivedAt;
    if (dto.archiveComment !== undefined)
      workspace.archiveComment = dto.archiveComment;

    workspace.updatedAt = new Date();

    await this.workspaceRepository.save(workspace);

    return workspace;
  }
}
