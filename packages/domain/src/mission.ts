export type MissionStatus =
  | "draft"
  | "briefed"
  | "running"
  | "waiting_for_decision"
  | "review"
  | "completed"
  | "archived";

export type MissionBrief = {
  goal: string;
  context?: string;
  successCriteria: string[];
  constraints: string[];
  unknowns: string[];
};

export type Mission = {
  missionId: string;
  title: string;
  brief: MissionBrief;
  status: MissionStatus;
  version: number;
};

export function assertMissionCanRun(mission: Mission): void {
  if (!mission.brief.goal.trim()) {
    throw new Error("MISSION_GOAL_REQUIRED");
  }
}
