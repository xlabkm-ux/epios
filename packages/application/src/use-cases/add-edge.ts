import { EpistemicEdge, EpistemicEdgeType } from "@epios/domain";
import { GraphRepositoryPort, WorkspaceRepositoryPort } from "@epios/ports";
import { tracer } from "@epios/observability";
import { randomUUID } from "crypto";

export type AddEdgeRequest = {
  workspaceId: string;
  sourceNodeId: string;
  targetNodeId: string;
  type: EpistemicEdgeType;
  metadata?: Record<string, unknown>;
};

export class AddEdgeUseCase {
  constructor(
    private readonly workspaceRepo: WorkspaceRepositoryPort,
    private readonly graphRepo: GraphRepositoryPort,
  ) {}

  async execute(request: AddEdgeRequest): Promise<EpistemicEdge> {
    const workspace = await this.workspaceRepo.findById(request.workspaceId);
    if (!workspace) {
      throw new Error("WORKSPACE_NOT_FOUND");
    }

    const edge: EpistemicEdge = {
      id: randomUUID(),
      workspaceId: request.workspaceId,
      sourceNodeId: request.sourceNodeId,
      targetNodeId: request.targetNodeId,
      type: request.type,
      metadata: request.metadata ?? {},
      createdAt: new Date(),
    };

    await this.graphRepo.saveEdge(edge);

    tracer.emit({
      type: "EDGE_ADDED",
      workspaceId: edge.workspaceId,
      payload: { edgeId: edge.id, edgeType: edge.type },
    });

    return edge;
  }
}
