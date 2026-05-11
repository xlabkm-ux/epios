import { Mission } from '@epos/domain';

export interface MissionRepositoryPort {
  save(mission: Mission): Promise<void>;
  findById(missionId: string): Promise<Mission | null>;
}
