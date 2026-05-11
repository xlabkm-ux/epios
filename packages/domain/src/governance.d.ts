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
  missionId: string;
  status: ApprovalStatus;
  votes: Vote[];
  requiredVotes: number;
  createdAt: Date;
  updatedAt: Date;
}
/**
 * A Claim in EPOS is a node that undergoes a formal governance process.
 */
export interface Claim extends EpistemicNode {
  governanceId?: string;
}
