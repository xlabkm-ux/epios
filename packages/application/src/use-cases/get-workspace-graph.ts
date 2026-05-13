import { EpistemicNode, EpistemicEdge } from "@epios/domain";
import { GraphRepositoryPort } from "@epios/ports";

export interface WorkspaceGraph {
  nodes: EpistemicNode[];
  edges: EpistemicEdge[];
}

export class GetWorkspaceGraphUseCase {
  constructor(private readonly graphRepo: GraphRepositoryPort) {}

  async execute(workspaceId: string): Promise<WorkspaceGraph> {
    const [nodes, edges] = await Promise.all([
      this.graphRepo.findNodesByWorkspaceId(workspaceId),
      this.graphRepo.findEdgesByWorkspaceId(workspaceId),
    ]);

    return { nodes, edges };
  }
}
