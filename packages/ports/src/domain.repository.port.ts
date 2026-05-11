import { Mission } from "@epos/domain";

export interface MissionRepositoryPort {
  save(mission: Mission): Promise<void>;
  findById(id: string): Promise<Mission | null>;
  findAll(): Promise<Mission[]>;
}
