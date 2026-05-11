import {
  Mission,
  MissionBrief,
  MissionActor,
  assertMissionCanRun,
} from "@epos/domain";
import { MissionRepositoryPort } from "@epos/ports";
import { tracer } from "@epos/observability";
import { randomUUID } from "crypto";

export type CreateMissionRequest = {
  title: string;
  brief: MissionBrief;
  createdBy: MissionActor;
  mode?: Mission["mode"];
  sensitivity?: Mission["sensitivity"];
};

export class CreateMissionUseCase {
  constructor(private readonly missionRepo: MissionRepositoryPort) {}

  async execute(request: CreateMissionRequest): Promise<Mission> {
    const mission: Mission = {
      id: randomUUID(),
      title: request.title,
      brief: request.brief,
      status: "draft",
      mode: request.mode ?? "manual",
      sensitivity: request.sensitivity ?? "internal",
      createdBy: request.createdBy,
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
    };

    assertMissionCanRun(mission);

    await this.missionRepo.save(mission);

    tracer.emit({
      type: "MISSION_CREATED",
      missionId: mission.id,
      payload: { title: mission.title },
    });

    return mission;
  }
}
