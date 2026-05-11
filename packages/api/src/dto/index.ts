import {
  MissionBrief,
  MissionActor,
  NodeType,
  NodeStrength,
  EvidenceRef,
  EpistemicEdgeType,
} from "@epos/domain";

export interface CreateMissionDto {
  title: string;
  brief: MissionBrief;
  createdBy: MissionActor;
  mode?: "autonomous" | "assisted" | "manual";
  sensitivity?: "public" | "internal" | "confidential" | "restricted";
}

export interface AddNodeDto {
  type: NodeType;
  content: string;
  strength?: NodeStrength;
  evidence?: EvidenceRef[];
  metadata?: Record<string, unknown>;
}

export interface AddEdgeDto {
  sourceNodeId: string;
  targetNodeId: string;
  type: EpistemicEdgeType;
  metadata?: Record<string, unknown>;
}

export interface PatchNodeDto {
  type?: NodeType;
  content?: string;
  strength?: NodeStrength;
  evidence?: EvidenceRef[];
  metadata?: Record<string, unknown>;
}
