import { describe, expect, it } from "vitest";
import { assertWorkspaceCanRun, Workspace } from "../src/workspace";

describe("Workspace Domain Logic", () => {
  it("assertWorkspaceCanRun throws if goal is empty", () => {
    const workspace: Workspace = {
      id: "w1",
      title: "Empty Workspace",
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

    expect(() => assertWorkspaceCanRun(workspace)).toThrow(
      "WORKSPACE_GOAL_REQUIRED",
    );
  });

  it("assertWorkspaceCanRun passes if goal is present", () => {
    const workspace: Workspace = {
      id: "w1",
      title: "Valid Workspace",
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

    expect(() => assertWorkspaceCanRun(workspace)).not.toThrow();
  });
});
