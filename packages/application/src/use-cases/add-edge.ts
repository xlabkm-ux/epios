import { EpistemicEdge, EpistemicEdgeType } from "@epios/domain";
import { GraphRepositoryPort, MissionRepositoryPort } from "@epios/ports";
import { tracer } from "@epios/observability";
import { randomUUID } from "crypto";

export type AddEdgeRequest = {
  missionId: string;
  sourceNodeId: string;
  targetNodeId: string;
  type: EpistemicEdgeType;
  metadata?: Record<string, unknown>;
};

export class AddEdgeUseCase {
  constructor(
    private readonly missionRepo: MissionRepositoryPort,
    private readonly graphRepo: GraphRepositoryPort,
  ) {}

  async execute(request: AddEdgeRequest): Promise<EpistemicEdge> {
    const mission = await this.missionRepo.findById(request.missionId);
    if (!mission) {
      throw new Error("MISSION_NOT_FOUND");
    }

    const edge: EpistemicEdge = {
      id: randomUUID(),
      missionId: request.missionId,
      sourceNodeId: request.sourceNodeId,
      targetNodeId: request.targetNodeId,
      type: request.type,
      metadata: request.metadata ?? {},
      createdAt: new Date(),
    };

    await this.graphRepo.saveEdge(edge);

    tracer.emit({
      type: "EDGE_ADDED",
      missionId: edge.missionId,
      payload: { edgeId: edge.id, edgeType: edge.type },
    });

    return edge;
  }
}
