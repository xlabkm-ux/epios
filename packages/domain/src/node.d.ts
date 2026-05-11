export type NodeType =
  | "claim"
  | "observation"
  | "hypothesis"
  | "risk"
  | "decision"
  | "question";
export type NodeStrength =
  | "none"
  | "weak"
  | "moderate"
  | "strong"
  | "indisputable";
export type EvidenceRef = {
  id: string;
  sourceType: string;
  sourceUri: string;
  snippet?: string;
  timestamp: Date;
};
export type EpistemicNode = {
  id: string;
  missionId: string;
  type: NodeType;
  content: string;
  strength: NodeStrength;
  evidence: EvidenceRef[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
};
export type EpistemicEdgeType =
  | "supports"
  | "contradicts"
  | "refines"
  | "addresses"
  | "triggers";
export type EpistemicEdge = {
  id: string;
  missionId: string;
  sourceNodeId: string;
  targetNodeId: string;
  type: EpistemicEdgeType;
  metadata: Record<string, unknown>;
  createdAt: Date;
};
