import { ADR } from "@epios/domain";

export interface ADRRepositoryPort {
  list(): Promise<ADR[]>;
  get(id: string): Promise<ADR | null>;
  save(adr: ADR): Promise<void>;
}
