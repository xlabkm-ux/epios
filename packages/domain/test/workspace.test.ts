import { describe, expect, it } from "vitest";
import { Workspace } from "../src/workspace.js";
import { ValidationError } from "../src/errors.js";

describe("Workspace Domain Logic", () => {
  const validProps = {
    id: "w1",
    title: "Valid Workspace",
    brief: {
      goal: "Solve the problem",
      successCriteria: [],
      constraints: [],
      unknowns: [],
    },
    status: "draft" as const,
    mode: "manual" as const,
    sensitivity: "internal" as const,
    createdBy: { type: "user", id: "u1" },
    createdAt: new Date(),
    updatedAt: new Date(),
    version: 1,
  };

  it("constructor throws if title is empty", () => {
    expect(() => new Workspace({ ...validProps, title: "" })).toThrow(
      ValidationError,
    );
  });

  it("assertCanRun throws if goal is empty", () => {
    const workspace = new Workspace({
      ...validProps,
      brief: { ...validProps.brief, goal: "  " },
    });

    expect(() => workspace.assertCanRun()).toThrow(ValidationError);
  });

  it("assertCanRun passes if goal is present", () => {
    const workspace = new Workspace(validProps);
    expect(() => workspace.assertCanRun()).not.toThrow();
  });

  it("archive() changes status and sets archivedAt", () => {
    const workspace = new Workspace(validProps);
    workspace.archive("Project cancelled");

    expect(workspace.status).toBe("archived");
    expect(workspace.archivedAt).toBeDefined();
    expect(workspace.archiveComment).toBe("Project cancelled");
    expect(workspace.version).toBe(2);
  });

  it("pin() and unpin() work correctly", () => {
    const workspace = new Workspace(validProps);
    workspace.pin();
    expect(workspace.isPinned).toBe(true);

    workspace.unpin();
    expect(workspace.isPinned).toBe(false);
  });
});
