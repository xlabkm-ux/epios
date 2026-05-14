import { ValidationError, InvalidTransitionError } from "./errors.js";
import { EpistemicNode } from "./node.js";

export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface Vote {
  actorId: string;
  decision: "approve" | "reject";
  rationale?: string;
  timestamp: Date;
}

export interface GovernanceProcessProps {
  nodeId: string;
  workspaceId: string;
  status: ApprovalStatus;
  votes: Vote[];
  requiredVotes: number;
  createdAt: Date;
  updatedAt: Date;
}

export class GovernanceProcess {
  protected props: GovernanceProcessProps;
  private _status: ApprovalStatus;

  constructor(props: GovernanceProcessProps) {
    this.props = { ...props, votes: [...props.votes] };
    this._status = props.status;
    this.validate();
  }

  private validate(): void {
    if (!this.props.nodeId) throw new ValidationError("NODE_ID_REQUIRED");
    if (!this.props.workspaceId)
      throw new ValidationError("WORKSPACE_ID_REQUIRED");
    if (this.props.requiredVotes <= 0)
      throw new ValidationError("REQUIRED_VOTES_POSITIVE");
  }

  get nodeId() {
    return this.props.nodeId;
  }
  get workspaceId() {
    return this.props.workspaceId;
  }
  get status() {
    return this._status;
  }
  get votes() {
    return this.props.votes;
  }
  get requiredVotes() {
    return this.props.requiredVotes;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  public castVote(vote: Vote): void {
    if (this._status !== "pending") {
      throw new InvalidTransitionError(this._status, "finalized");
    }

    // Business rule: one vote per actor (can be enforced here or in use case)
    const existingVoteIdx = this.props.votes.findIndex(
      (v) => v.actorId === vote.actorId,
    );
    if (existingVoteIdx >= 0) {
      this.props.votes[existingVoteIdx] = vote;
    } else {
      this.props.votes.push(vote);
    }

    this.updateStatus();
    this.props.updatedAt = new Date();
  }

  private updateStatus(): void {
    const approvals = this.props.votes.filter(
      (v) => v.decision === "approve",
    ).length;
    const rejections = this.props.votes.filter(
      (v) => v.decision === "reject",
    ).length;

    if (approvals >= this.props.requiredVotes) {
      this._status = "approved";
    } else if (rejections >= this.props.requiredVotes) {
      this._status = "rejected";
    }
  }

  public toProps(): GovernanceProcessProps {
    return {
      ...this.props,
      status: this._status,
      votes: [...this.props.votes],
    };
  }

  public toJSON() {
    return this.toProps();
  }
}

/**
 * A Claim in EPIOS is a node that undergoes a formal governance process.
 */
export interface Claim extends EpistemicNode {
  governanceId?: string; // Reference to GovernanceProcess
}

export interface NodePatchProps {
  id: string;
  targetNodeId: string;
  workspaceId: string;
  authorId: string;
  content: string;
  status: "pending" | "applied" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

export class NodePatch {
  private props: NodePatchProps;

  constructor(props: NodePatchProps) {
    this.props = { ...props };
  }

  get id() {
    return this.props.id;
  }
  get targetNodeId() {
    return this.props.targetNodeId;
  }
  get workspaceId() {
    return this.props.workspaceId;
  }
  get authorId() {
    return this.props.authorId;
  }
  get content() {
    return this.props.content;
  }
  get status() {
    return this.props.status;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  public apply(): void {
    this.props.status = "applied";
    this.props.updatedAt = new Date();
  }

  public reject(): void {
    this.props.status = "rejected";
    this.props.updatedAt = new Date();
  }

  public toProps(): NodePatchProps {
    return { ...this.props };
  }

  public toJSON() {
    return this.toProps();
  }
}

export interface PatchGovernanceProps extends GovernanceProcessProps {
  patchId: string;
}

export class PatchGovernance extends GovernanceProcess {
  private patchProps: PatchGovernanceProps;

  constructor(props: PatchGovernanceProps) {
    super(props);
    this.patchProps = { ...props };
  }

  get patchId() {
    return this.patchProps.patchId;
  }

  public toProps(): PatchGovernanceProps {
    return { ...super.toProps(), patchId: this.patchProps.patchId };
  }
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
