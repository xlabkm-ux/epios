import { Workspace } from "@epios/domain";
export interface WorkspaceRepositoryPort {
  save(workspace: Workspace): Promise<void>;
  findById(id: string): Promise<Workspace | null>;
  findAll(): Promise<Workspace[]>;
}
