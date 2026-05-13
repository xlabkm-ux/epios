import { MappingRun } from "@epios/domain";

export interface MappingRepositoryPort {
  save(run: MappingRun): Promise<void>;
  findById(id: string): Promise<MappingRun | null>;
  findByWorkspaceId(workspaceId: string): Promise<MappingRun[]>;
}
