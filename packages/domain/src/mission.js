export function assertMissionCanRun(mission) {
  if (!mission.brief.goal.trim()) {
    throw new Error("MISSION_GOAL_REQUIRED");
  }
}
//# sourceMappingURL=mission.js.map
