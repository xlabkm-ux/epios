import { Mission } from "@epos/domain";
import { MissionRepositoryPort } from "@epos/ports";

export class ListMissionsUseCase {
  constructor(private readonly missionRepo: MissionRepositoryPort) {}

  async execute(): Promise<Mission[]> {
    return this.missionRepo.findAll();
  }
}
