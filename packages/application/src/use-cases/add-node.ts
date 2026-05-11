import {
  EpistemicNode,
  NodeType,
  NodeStrength,
  EvidenceRef,
} from "@epos/domain";
import { GraphRepositoryPort, MissionRepositoryPort } from "@epos/ports";
import { tracer } from "@epos/observability";
import { randomUUID } from "crypto";

export type AddNodeRequest = {
  missionId: string;
  type: NodeType;
  content: string;
  strength?: NodeStrength;
  evidence?: EvidenceRef[];
  metadata?: Record<string, unknown>;
};

export class AddNodeUseCase {
  constructor(
    private readonly missionRepo: MissionRepositoryPort,
    private readonly graphRepo: GraphRepositoryPort,
  ) {}

  async execute(request: AddNodeRequest): Promise<EpistemicNode> {
    const mission = await this.missionRepo.findById(request.missionId);
    if (!mission) {
      throw new Error("MISSION_NOT_FOUND");
    }

    const node: EpistemicNode = {
      id: randomUUID(),
      missionId: request.missionId,
      type: request.type,
      content: request.content,
      strength: request.strength ?? "none",
      evidence: request.evidence ?? [],
      metadata: request.metadata ?? {},
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.graphRepo.saveNode(node);

    tracer.emit({
      type: "NODE_ADDED",
      missionId: node.missionId,
      payload: { nodeId: node.id, nodeType: node.type },
    });

    return node;
  }
}
