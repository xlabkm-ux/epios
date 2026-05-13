import { EpistemicNode } from "./node.js";

export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface Vote {
  actorId: string;
  decision: "approve" | "reject";
  rationale?: string;
  timestamp: Date;
}

export interface GovernanceProcess {
  nodeId: string;
  workspaceId: string;
  status: ApprovalStatus;
  votes: Vote[];
  requiredVotes: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * A Claim in EPIOS is a node that undergoes a formal governance process.
 */
export interface Claim extends EpistemicNode {
  governanceId?: string; // Reference to GovernanceProcess
}

export interface NodePatch {
  id: string;
  targetNodeId: string;
  workspaceId: string;
  authorId: string;
  content: string; // The proposed new content
  status: "pending" | "applied" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

export interface PatchGovernance extends GovernanceProcess {
  patchId: string;
}

export type ReadinessStatus = "ready" | "needs_review" | "blocked";

export interface ReadinessAssessment {
  id: string;
  workspaceId: string;
  profileId: string;
  methodVersion: string;
  status: ReadinessStatus;
  indicators: {
    evidenceCoverage: "high" | "medium" | "low";
    traceability: "complete" | "partial" | "missing";
    riskHandling: "explicit" | "weak" | "missing";
  };
  numericScore?: number;
  explanation: string;
  createdAt: Date;
}

export interface ArtifactVersion {
  id: string;
  artifactId: string;
  workspaceId: string;
  version: number;
  content: string;
  authorId: string;
  createdAt: Date;
}

export interface TraceEvent {
  id: string;
  workspaceId: string;
  type: string;
  actorId: string;
  targetId: string;
  metadata: Record<string, unknown>;
  timestamp: Date;
}
