import { ValidationError } from "./errors.js";
import { ActorRef } from "./mission.js";

export type ArtifactType =
  | "markdown_document"
  | "project_plan"
  | "architecture_document"
  | "research_review"
  | "decision_memo"
  | "code"
  | "export_package";

export interface LivingArtifactProps {
  id: string;
  missionId: string;
  artifactType: ArtifactType;
  title: string;
  currentVersion: number;
  status: "draft" | "review" | "approved" | "exported" | "archived";
  createdAt: Date;
  updatedAt: Date;
}

export class LivingArtifact {
  private props: LivingArtifactProps;

  constructor(props: LivingArtifactProps) {
    this.props = { ...props };
  }

  get id() { return this.props.id; }
  get missionId() { return this.props.missionId; }
  get currentVersion() { return this.props.currentVersion; }
  get status() { return this.props.status; }

  public toProps(): LivingArtifactProps { return { ...this.props }; }
}

export interface ArtifactPatchProps {
  id: string;
  artifactId: string;
  missionId: string;
  baseVersion: number;
  diff: string;
  reason: string;
  nodeRefs: string[];
  evidenceRefs: string[];
  decisionRefs: string[];
  riskClass: "low" | "medium" | "high" | "critical";
  author: ActorRef;
  status: "proposed" | "accepted" | "rejected" | "edited" | "applied";
  createdAt: Date;
  appliedAt?: Date;
}

export class ArtifactPatch {
  private props: ArtifactPatchProps;

  constructor(props: ArtifactPatchProps) {
    this.props = { ...props };
    if (!this.props.reason?.trim()) throw new ValidationError("PATCH_REASON_REQUIRED");
  }

  get id() { return this.props.id; }
  get status() { return this.props.status; }

  public toProps(): ArtifactPatchProps { return { ...this.props }; }
}
