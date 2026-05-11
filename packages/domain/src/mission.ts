export type MissionStatus =
  | "draft"
  | "briefed"
  | "running"
  | "waiting_for_decision"
  | "review"
  | "completed"
  | "archived";

export type MissionMode = "autonomous" | "assisted" | "manual";

export type MissionSensitivity =
  | "public"
  | "internal"
  | "confidential"
  | "restricted";

export type MissionBrief = {
  goal: string;
  context?: string;
  successCriteria: string[];
  constraints: string[];
  unknowns: string[];
};

export type MissionActor = {
  type: string;
  id: string;
};

export type Mission = {
  id: string;
  title: string;
  brief: MissionBrief;
  status: MissionStatus;
  mode: MissionMode;
  sensitivity: MissionSensitivity;
  desiredArtifactType?: string;
  createdBy: MissionActor;
  createdAt: Date;
  updatedAt: Date;
  version: number;
};

export function assertMissionCanRun(mission: Mission): void {
  if (!mission.brief.goal.trim()) {
    throw new Error("MISSION_GOAL_REQUIRED");
  }
}
