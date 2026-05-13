import { ADR } from "@epios/domain";

export class ListADRsUseCase {
  constructor(private readonly adrRepository: { list(): Promise<ADR[]> }) {}

  async execute(): Promise<ADR[]> {
    return this.adrRepository.list();
  }
}

export class GetADRUseCase {
  constructor(
    private readonly adrRepository: { get(id: string): Promise<ADR | null> },
  ) {}

  async execute(id: string): Promise<ADR | null> {
    return this.adrRepository.get(id);
  }
}
