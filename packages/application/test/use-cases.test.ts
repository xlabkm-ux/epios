import { describe, it, expect, vi } from "vitest";
import { CreateMissionUseCase } from "../src/use-cases/create-mission.js";
import { AddNodeUseCase } from "../src/use-cases/add-node.js";
import { AddEdgeUseCase } from "../src/use-cases/add-edge.js";
import { PatchNodeUseCase } from "../src/use-cases/patch-node.js";
import { MissionRepositoryPort, GraphRepositoryPort } from "@epos/ports";
import { Mission, EpistemicNode } from "@epos/domain";

const mockMissionRepo = {
  save: vi.fn(),
  findById: vi.fn(),
} as unknown as MissionRepositoryPort;

const mockGraphRepo = {
  saveNode: vi.fn(),
  saveEdge: vi.fn(),
  findNodeById: vi.fn(),
  findEdgeById: vi.fn(),
} as unknown as GraphRepositoryPort;

describe("Use Cases", () => {
  describe("CreateMissionUseCase", () => {
    it("should create a mission", async () => {
      const useCase = new CreateMissionUseCase(mockMissionRepo);
      const request = {
        title: "Test Mission",
        brief: {
          goal: "Test Goal",
          successCriteria: [],
          constraints: [],
          unknowns: [],
        },
        createdBy: { type: "user", id: "user-1" },
      };

      const result = await useCase.execute(request);

      expect(result.id).toBeDefined();
      expect(result.title).toBe(request.title);
      expect(mockMissionRepo.save).toHaveBeenCalled();
    });
  });

  describe("AddNodeUseCase", () => {
    it("should add a node to a mission", async () => {
      const useCase = new AddNodeUseCase(mockMissionRepo, mockGraphRepo);
      vi.mocked(mockMissionRepo.findById).mockResolvedValue({
        id: "mission-1",
      } as Mission);

      const request = {
        missionId: "mission-1",
        type: "claim" as const,
        content: "Test Claim",
      };

      const result = await useCase.execute(request);

      expect(result.id).toBeDefined();
      expect(result.content).toBe(request.content);
      expect(mockGraphRepo.saveNode).toHaveBeenCalled();
    });
  });

  describe("AddEdgeUseCase", () => {
    it("should add an edge between nodes", async () => {
      const useCase = new AddEdgeUseCase(mockMissionRepo, mockGraphRepo);
      vi.mocked(mockMissionRepo.findById).mockResolvedValue({
        id: "mission-1",
      } as Mission);

      const request = {
        missionId: "mission-1",
        sourceNodeId: "node-1",
        targetNodeId: "node-2",
        type: "supports" as const,
      };

      const result = await useCase.execute(request);

      expect(result.id).toBeDefined();
      expect(mockGraphRepo.saveEdge).toHaveBeenCalled();
    });
  });

  describe("PatchNodeUseCase", () => {
    it("should patch an existing node", async () => {
      const useCase = new PatchNodeUseCase(mockGraphRepo);
      const existingNode = {
        id: "node-1",
        content: "Old Content",
        metadata: { key: "old" },
      };
      vi.mocked(mockGraphRepo.findNodeById).mockResolvedValue(
        existingNode as unknown as EpistemicNode,
      );

      const request = {
        id: "node-1",
        content: "New Content",
        metadata: { key: "new", other: "val" },
      };

      const result = await useCase.execute(request);

      expect(result.content).toBe("New Content");
      expect(result.metadata).toEqual({ key: "new", other: "val" });
      expect(mockGraphRepo.saveNode).toHaveBeenCalled();
    });
  });
});
