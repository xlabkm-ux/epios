import { Mission, MissionBrief, ActorRef } from "@epios/domain";
import { UnitOfWorkPort, OutboxMessage } from "@epios/ports";
import { randomUUID } from "node:crypto";

export interface CreateMissionRequest {
  workspaceId: string;
  title: string;
  brief: MissionBrief;
  createdBy: ActorRef;
  mode?: Mission["mode"];
  sensitivity?: Mission["sensitivity"];
}

export class CreateMissionUseCase {
  constructor(private readonly uowProvider: UnitOfWorkPort) {}

  async execute(request: CreateMissionRequest): Promise<Mission> {
    return await this.uowProvider.runInTransaction(async (uow) => {
      const mission = new Mission({
        id: randomUUID(),
        workspaceId: request.workspaceId,
        title: request.title,
        brief: request.brief,
        status: "draft",
        mode: request.mode ?? "studio",
        sensitivity: request.sensitivity ?? "medium",
        artifactIds: [],
        runIds: [],
        createdBy: request.createdBy,
        createdAt: new Date(),
        updatedAt: new Date(),
        version: 1,
      });

      await uow.missionRepository.save(mission);

      // Persist domain events
      for (const event of mission.domainEvents) {
        await uow.outboxRepository.save({
          id: randomUUID(),
          aggregateType: "Mission",
          aggregateId: mission.id,
          type: "mission_created",
          payload: event.payload,
          status: "pending",
          createdAt: event.occurredAt,
        });
      }
      mission.clearDomainEvents();

      // Log trace event
      await uow.governanceRepository.saveTraceEvent({
        id: randomUUID(),
        workspaceId: request.workspaceId,
        type: "mission_created",
        actorId: request.createdBy.actorId,
        targetId: mission.id,
        metadata: { title: mission.title },
        timestamp: new Date(),
      });

      return mission;
    });
  }
}
