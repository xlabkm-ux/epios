import { describe, expect, it } from "vitest";
import { assertMissionCanRun, Mission } from "../src/mission";

describe("Mission Domain Logic", () => {
  it("assertMissionCanRun throws if goal is empty", () => {
    const mission: Mission = {
      id: "m1",
      title: "Empty Mission",
      brief: {
        goal: "  ",
        successCriteria: [],
        constraints: [],
        unknowns: [],
      },
      status: "draft",
      mode: "manual",
      sensitivity: "internal",
      createdBy: { type: "user", id: "u1" },
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
    };

    expect(() => assertMissionCanRun(mission)).toThrow("MISSION_GOAL_REQUIRED");
  });

  it("assertMissionCanRun passes if goal is present", () => {
    const mission: Mission = {
      id: "m1",
      title: "Valid Mission",
      brief: {
        goal: "Solve the problem",
        successCriteria: [],
        constraints: [],
        unknowns: [],
      },
      status: "draft",
      mode: "manual",
      sensitivity: "internal",
      createdBy: { type: "user", id: "u1" },
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
    };

    expect(() => assertMissionCanRun(mission)).not.toThrow();
  });
});
