import { Source, SourceType } from "@epios/domain";
import { SourceRepositoryPort } from "@epios/ports";
import { randomUUID } from "crypto";

export interface AddSourceRequest {
  missionId: string;
  type: SourceType;
  content: string;
  metadata?: Record<string, unknown>;
}

export class AddSourceUseCase {
  constructor(private readonly sourceRepo: SourceRepositoryPort) {}

  async execute(request: AddSourceRequest): Promise<Source> {
    const source: Source = {
      id: randomUUID(),
      missionId: request.missionId,
      type: request.type,
      content: request.content,
      metadata: request.metadata || {},
      createdAt: new Date(),
    };

    await this.sourceRepo.save(source);
    return source;
  }
}
