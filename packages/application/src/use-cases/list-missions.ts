import { Mission } from "@epios/domain";
import { MissionRepositoryPort } from "@epios/ports";

export class ListMissionsUseCase {
  constructor(private readonly missionRepo: MissionRepositoryPort) {}

  async execute(): Promise<Mission[]> {
    return this.missionRepo.findAll();
  }
}
