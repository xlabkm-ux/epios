import { EpistemicNode, NodeStrength, EvidenceRef } from "@epios/domain";
import { GraphRepositoryPort } from "@epios/ports";

export type PatchNodeRequest = {
  id: string;
  type?: EpistemicNode["type"];
  content?: string;
  strength?: NodeStrength;
  evidence?: EvidenceRef[];
  metadata?: Record<string, unknown>;
};

export class PatchNodeUseCase {
  constructor(private readonly graphRepo: GraphRepositoryPort) {}

  async execute(request: PatchNodeRequest): Promise<EpistemicNode> {
    const node = await this.graphRepo.findNodeById(request.id);
    if (!node) {
      throw new Error("NODE_NOT_FOUND");
    }

    if (request.type !== undefined) node.type = request.type;
    if (request.content !== undefined) node.content = request.content;
    if (request.strength !== undefined) node.strength = request.strength;
    if (request.evidence !== undefined) node.evidence = request.evidence;
    if (request.metadata !== undefined) {
      node.metadata = { ...node.metadata, ...request.metadata };
    }

    node.updatedAt = new Date();

    await this.graphRepo.saveNode(node);

    return node;
  }
}
