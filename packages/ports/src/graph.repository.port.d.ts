import { EpistemicNode, EpistemicEdge } from "@epios/domain";
export interface GraphRepositoryPort {
  saveNode(node: EpistemicNode): Promise<void>;
  saveEdge(edge: EpistemicEdge): Promise<void>;
  findNodesByMissionId(missionId: string): Promise<EpistemicNode[]>;
  findEdgesByMissionId(missionId: string): Promise<EpistemicEdge[]>;
  findNodeById(id: string): Promise<EpistemicNode | null>;
  findEdgeById(id: string): Promise<EpistemicEdge | null>;
}
