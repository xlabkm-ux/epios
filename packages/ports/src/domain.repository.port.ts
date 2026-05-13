import { Mission } from "@epios/domain";

export interface MissionRepositoryPort {
  save(mission: Mission): Promise<void>;
  findById(id: string): Promise<Mission | null>;
  findAll(): Promise<Mission[]>;
}
