import { Workspace } from "@epios/domain";

export const createTestWorkspace = (
  overrides: Partial<Workspace> = {},
): Workspace => ({
  id: "w1",
  title: "Test Workspace",
  status: "draft",
  mode: "manual",
  sensitivity: "internal",
  version: 1,
  brief: {
    goal: "Test Goal",
    successCriteria: [],
    constraints: [],
    unknowns: [],
  },
  createdBy: { type: "user", id: "u1" },
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overrides,
});
