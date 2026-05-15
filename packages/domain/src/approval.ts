import { ActorRef } from "./mission.js";

export type ApprovalStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "edited"
  | "expired"
  | "cancelled";

export type ApprovalPreview = {
  title: string;
  summary: string;
  whatWillHappen: string[];
  dataLeavingSystem?: string[];
  rollback?: string;
};

export interface ApprovalRequestProps {
  id: string;
  missionId: string;
  runId: string;
  subjectType: "tool_call" | "artifact_patch" | "forge_action" | "external_write";
  subjectRef: string;
  preview: ApprovalPreview;
  riskClass: "low" | "medium" | "high" | "critical";
  status: ApprovalStatus;
  idempotencyKey: string;
  createdAt: Date;
  expiresAt?: Date;
  resolvedAt?: Date;
  decisionId?: string;
  version: number;
}

export class ApprovalRequest {
  private props: ApprovalRequestProps;

  constructor(props: ApprovalRequestProps) {
    this.props = { ...props };
  }

  get id() { return this.props.id; }
  get status() { return this.props.status; }
  get idempotencyKey() { return this.props.idempotencyKey; }

  public toProps(): ApprovalRequestProps { return { ...this.props }; }
}
