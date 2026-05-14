import { ADR } from "@epios/domain";
import { ADRRepositoryPort } from "@epios/ports";

export class ListADRsUseCase {
  constructor(private readonly adrRepository: ADRRepositoryPort) {}

  async execute(): Promise<ADR[]> {
    return this.adrRepository.list();
  }
}

export class GetADRUseCase {
  constructor(private readonly adrRepository: ADRRepositoryPort) {}

  async execute(id: string): Promise<ADR | null> {
    return this.adrRepository.get(id);
  }
}
