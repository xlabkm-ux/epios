import { ValidationError } from "./errors.js";

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

export interface EpistemicNodeProps {
  id: string;
  workspaceId: string;
  type: NodeType;
  content: string;
  strength: NodeStrength;
  evidence: EvidenceRef[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export class EpistemicNode {
  private props: EpistemicNodeProps;

  constructor(props: EpistemicNodeProps) {
    this.props = { ...props };
    this.validate();
  }

  private validate(): void {
    if (!this.props.id) throw new ValidationError("NODE_ID_REQUIRED");
    if (!this.props.workspaceId)
      throw new ValidationError("WORKSPACE_ID_REQUIRED");
    if (!this.props.content?.trim())
      throw new ValidationError("NODE_CONTENT_REQUIRED");
  }

  get id() {
    return this.props.id;
  }
  get workspaceId() {
    return this.props.workspaceId;
  }
  get type() {
    return this.props.type;
  }
  get content() {
    return this.props.content;
  }
  get strength() {
    return this.props.strength;
  }
  get evidence() {
    return this.props.evidence;
  }
  get metadata() {
    return this.props.metadata;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  public updateContent(content: string): void {
    if (!content.trim()) throw new ValidationError("NODE_CONTENT_REQUIRED");
    this.props.content = content;
    this.props.updatedAt = new Date();
  }

  public setStrength(strength: NodeStrength): void {
    this.props.strength = strength;
    this.props.updatedAt = new Date();
  }

  public addEvidence(evidence: EvidenceRef): void {
    this.props.evidence = [...this.props.evidence, evidence];
    this.props.updatedAt = new Date();
  }

  public updateMetadata(metadata: Record<string, unknown>): void {
    this.props.metadata = { ...this.props.metadata, ...metadata };
    this.props.updatedAt = new Date();
  }

  public replaceEvidence(evidence: EvidenceRef[]): void {
    this.props.evidence = [...evidence];
    this.props.updatedAt = new Date();
  }

  public toProps(): EpistemicNodeProps {
    return { ...this.props };
  }

  public toJSON() {
    return this.toProps();
  }
}

export type EpistemicEdgeType =
  | "supports"
  | "contradicts"
  | "refines"
  | "addresses"
  | "triggers";

export type EpistemicEdge = {
  id: string;
  workspaceId: string;
  sourceNodeId: string;
  targetNodeId: string;
  type: EpistemicEdgeType;
  metadata: Record<string, unknown>;
  createdAt: Date;
};
