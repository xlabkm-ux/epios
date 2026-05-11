import { EpistemicNode, EpistemicEdge } from "@epos/domain";

export interface GraphRepositoryPort {
  saveNode(node: EpistemicNode): Promise<void>;
  saveEdge(edge: EpistemicEdge): Promise<void>;
  findNodesByMissionId(missionId: string): Promise<EpistemicNode[]>;
  findEdgesByMissionId(missionId: string): Promise<EpistemicEdge[]>;
}
