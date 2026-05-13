import { MappingRun } from "@epios/domain";
import { MappingRepositoryPort } from "@epios/ports";

export class ListMappingRunsUseCase {
  constructor(private mappingRepo: MappingRepositoryPort) {}

  async execute(workspaceId: string): Promise<MappingRun[]> {
    return this.mappingRepo.findByWorkspaceId(workspaceId);
  }
}
