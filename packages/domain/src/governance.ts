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
