import { Mission } from "@epios/domain";

export const createTestMission = (
  overrides: Partial<Mission> = {},
): Mission => ({
  missionId: "m1",
  title: "Test Mission",
  status: "draft",
  version: 1,
  brief: {
    goal: "Test Goal",
    successCriteria: [],
    constraints: [],
    unknowns: [],
  },
  ...overrides,
});
