import { EpistemicNode, EpistemicEdge } from "@epios/domain";

export interface GraphRepositoryPort {
  saveNode(node: EpistemicNode): Promise<void>;
  saveEdge(edge: EpistemicEdge): Promise<void>;
  deleteNode(id: string): Promise<boolean>;
  deleteEdge(id: string): Promise<boolean>;
  findNodesByWorkspaceId(workspaceId: string): Promise<EpistemicNode[]>;
  findEdgesByWorkspaceId(workspaceId: string): Promise<EpistemicEdge[]>;
  findNodeById(id: string): Promise<EpistemicNode | null>;
  findEdgeById(id: string): Promise<EpistemicEdge | null>;
  findAllNodes(): Promise<EpistemicNode[]>;
}
