import { Source } from "@epios/domain";
import { SourceRepositoryPort } from "@epios/ports";

export class ListSourcesUseCase {
  constructor(private readonly sourceRepo: SourceRepositoryPort) {}

  async execute(workspaceId: string): Promise<Source[]> {
    return this.sourceRepo.findByWorkspaceId(workspaceId);
  }
}
