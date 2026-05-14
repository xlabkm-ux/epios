export type WorkspaceStatus =
  | "draft"
  | "briefed"
  | "running"
  | "waiting_for_decision"
  | "review"
  | "completed"
  | "archived";

export type WorkspaceMode = "autonomous" | "assisted" | "manual";

export type WorkspaceSensitivity =
  | "public"
  | "internal"
  | "confidential"
  | "restricted";

export type WorkspaceBrief = {
  goal: string;
  context?: string;
  successCriteria: string[];
  constraints: string[];
  unknowns: string[];
};

export type WorkspaceActor = {
  type: string;
  id: string;
};

export type Workspace = {
  id: string;
  title: string;
  brief: WorkspaceBrief;
  status: WorkspaceStatus;
  mode: WorkspaceMode;
  sensitivity: WorkspaceSensitivity;
  desiredArtifactType?: string;
  createdBy: WorkspaceActor;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  isPinned?: boolean;
  archivedAt?: Date;
  archiveComment?: string;
};

export function assertWorkspaceCanRun(workspace: Workspace): void {
  if (!workspace.brief.goal.trim()) {
    throw new Error("WORKSPACE_GOAL_REQUIRED");
  }
}
