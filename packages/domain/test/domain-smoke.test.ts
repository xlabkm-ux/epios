import { describe, expect, it } from "vitest";
import { assertWorkspaceCanRun, Workspace } from "../src";

describe("Workspace invariants", () => {
  it("rejects running a workspace without a goal", () => {
    const workspace: Workspace = {
      id: "w1",
      title: "Untitled",
      status: "draft",
      mode: "assisted",
      sensitivity: "internal",
      createdBy: { type: "user", id: "u1" },
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
      brief: {
        goal: "",
        successCriteria: [],
        constraints: [],
        unknowns: [],
      },
    };

    expect(() => assertWorkspaceCanRun(workspace)).toThrow(
      "WORKSPACE_GOAL_REQUIRED",
    );
  });

  it("allows running a workspace with a goal", () => {
    const workspace: Workspace = {
      id: "w1",
      title: "Test Workspace",
      status: "draft",
      mode: "assisted",
      sensitivity: "internal",
      createdBy: { type: "user", id: "u1" },
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
      brief: {
        goal: "Prove the domain skeleton works",
        successCriteria: [],
        constraints: [],
        unknowns: [],
      },
    };

    expect(() => assertWorkspaceCanRun(workspace)).not.toThrow();
  });
});
