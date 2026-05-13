import { Workspace } from "@epios/domain";
import { WorkspaceRepositoryPort } from "@epios/ports";

export class ListWorkspacesUseCase {
  constructor(private readonly workspaceRepo: WorkspaceRepositoryPort) {}

  async execute(): Promise<Workspace[]> {
    return this.workspaceRepo.findAll();
  }
}
