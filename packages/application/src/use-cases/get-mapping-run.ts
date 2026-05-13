import { MappingRun } from "@epios/domain";
import { MappingRepositoryPort } from "@epios/ports";

export class GetMappingRunUseCase {
  constructor(private mappingRepo: MappingRepositoryPort) {}

  async execute(runId: string): Promise<MappingRun | null> {
    return this.mappingRepo.findById(runId);
  }
}
