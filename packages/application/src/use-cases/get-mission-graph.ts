import { EpistemicNode, EpistemicEdge } from "@epos/domain";
import { GraphRepositoryPort } from "@epos/ports";

export interface MissionGraph {
  nodes: EpistemicNode[];
  edges: EpistemicEdge[];
}

export class GetMissionGraphUseCase {
  constructor(private readonly graphRepo: GraphRepositoryPort) {}

  async execute(missionId: string): Promise<MissionGraph> {
    const [nodes, edges] = await Promise.all([
      this.graphRepo.findNodesByMissionId(missionId),
      this.graphRepo.findEdgesByMissionId(missionId),
    ]);

    return { nodes, edges };
  }
}
