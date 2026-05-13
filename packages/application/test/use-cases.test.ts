import { describe, it, expect, vi } from "vitest";
import { CreateMissionUseCase } from "../src/use-cases/create-mission.js";
import { AddNodeUseCase } from "../src/use-cases/add-node.js";
import { AddEdgeUseCase } from "../src/use-cases/add-edge.js";
import { PatchNodeUseCase } from "../src/use-cases/patch-node.js";
import { SubmitClaimUseCase } from "../src/use-cases/submit-claim.js";
import { CastVoteUseCase } from "../src/use-cases/cast-vote.js";
import { ListMissionsUseCase } from "../src/use-cases/list-missions.js";
import { GetMissionGraphUseCase } from "../src/use-cases/get-mission-graph.js";
import {
  MissionRepositoryPort,
  GraphRepositoryPort,
  GovernanceRepositoryPort,
} from "@epios/ports";
import {
  Mission,
  EpistemicNode,
  EpistemicEdge,
  GovernanceProcess,
} from "@epios/domain";

const mockMissionRepo = {
  save: vi.fn(),
  findById: vi.fn(),
  findAll: vi.fn(),
} as unknown as MissionRepositoryPort;

const mockGraphRepo = {
  saveNode: vi.fn(),
  saveEdge: vi.fn(),
  findNodeById: vi.fn(),
  findEdgeById: vi.fn(),
  findNodesByMissionId: vi.fn(),
  findEdgesByMissionId: vi.fn(),
} as unknown as GraphRepositoryPort;

const mockGovernanceRepo = {
  saveProcess: vi.fn(),
  findProcessByNodeId: vi.fn(),
} as unknown as GovernanceRepositoryPort;

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

    it("should throw if mission not found", async () => {
      const useCase = new AddNodeUseCase(mockMissionRepo, mockGraphRepo);
      vi.mocked(mockMissionRepo.findById).mockResolvedValue(null);

      const request = {
        missionId: "invalid",
        type: "claim" as const,
        content: "Test",
      };

      await expect(useCase.execute(request)).rejects.toThrow(
        "MISSION_NOT_FOUND",
      );
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

    it("should throw if mission not found", async () => {
      const useCase = new AddEdgeUseCase(mockMissionRepo, mockGraphRepo);
      vi.mocked(mockMissionRepo.findById).mockResolvedValue(null);

      const request = {
        missionId: "invalid",
        sourceNodeId: "n1",
        targetNodeId: "n2",
        type: "supports" as const,
      };

      await expect(useCase.execute(request)).rejects.toThrow(
        "MISSION_NOT_FOUND",
      );
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

    it("should throw if node not found", async () => {
      const useCase = new PatchNodeUseCase(mockGraphRepo);
      vi.mocked(mockGraphRepo.findNodeById).mockResolvedValue(null);

      const request = {
        id: "invalid",
        content: "New",
      };

      await expect(useCase.execute(request)).rejects.toThrow("NODE_NOT_FOUND");
    });
  });

  describe("SubmitClaimUseCase", () => {
    it("should submit a claim and create a governance process", async () => {
      const useCase = new SubmitClaimUseCase(mockGraphRepo, mockGovernanceRepo);
      const request = {
        missionId: "mission-1",
        content: "New Claim Content",
      };

      const result = await useCase.execute(request);

      expect(result.id).toBeDefined();
      expect(result.content).toBe(request.content);
      expect(mockGraphRepo.saveNode).toHaveBeenCalled();
      expect(mockGovernanceRepo.saveProcess).toHaveBeenCalled();
    });
  });

  describe("CastVoteUseCase", () => {
    it("should cast a vote and keep status as pending if threshold not met", async () => {
      const useCase = new CastVoteUseCase(mockGovernanceRepo, mockGraphRepo);
      const mockProcess = {
        nodeId: "node-1",
        missionId: "mission-1",
        status: "pending",
        votes: [],
        requiredVotes: 2,
      };
      vi.mocked(mockGovernanceRepo.findProcessByNodeId).mockResolvedValue(
        mockProcess as unknown as GovernanceProcess,
      );

      const request = {
        nodeId: "node-1",
        actorId: "voter-1",
        decision: "approve" as const,
      };

      await useCase.execute(request);

      expect(mockGovernanceRepo.saveProcess).toHaveBeenCalledWith(
        expect.objectContaining({ status: "pending" }),
      );
    });

    it("should finalize process as approved if threshold met", async () => {
      const useCase = new CastVoteUseCase(mockGovernanceRepo, mockGraphRepo);
      const mockProcess = {
        nodeId: "node-1",
        missionId: "mission-1",
        status: "pending",
        votes: [{ actorId: "voter-1", decision: "approve" }],
        requiredVotes: 2,
      };
      vi.mocked(mockGovernanceRepo.findProcessByNodeId).mockResolvedValue(
        mockProcess as unknown as GovernanceProcess,
      );
      vi.mocked(mockGraphRepo.findNodeById).mockResolvedValue({
        id: "node-1",
      } as unknown as EpistemicNode);

      const request = {
        nodeId: "node-1",
        actorId: "voter-2",
        decision: "approve" as const,
      };

      await useCase.execute(request);

      expect(mockGovernanceRepo.saveProcess).toHaveBeenCalledWith(
        expect.objectContaining({ status: "approved" }),
      );
      expect(mockGraphRepo.saveNode).toHaveBeenCalledWith(
        expect.objectContaining({ strength: "strong" }),
      );
    });

    it("should finalize process as rejected if rejection threshold met", async () => {
      const useCase = new CastVoteUseCase(mockGovernanceRepo, mockGraphRepo);
      const mockProcess = {
        nodeId: "node-1",
        missionId: "mission-1",
        status: "pending",
        votes: [{ actorId: "voter-1", decision: "reject" }],
        requiredVotes: 2,
      };
      vi.mocked(mockGovernanceRepo.findProcessByNodeId).mockResolvedValue(
        mockProcess as unknown as GovernanceProcess,
      );

      const request = {
        nodeId: "node-1",
        actorId: "voter-2",
        decision: "reject" as const,
      };

      await useCase.execute(request);

      expect(mockGovernanceRepo.saveProcess).toHaveBeenCalledWith(
        expect.objectContaining({ status: "rejected" }),
      );
    });

    it("should throw if process not found", async () => {
      const useCase = new CastVoteUseCase(mockGovernanceRepo, mockGraphRepo);
      vi.mocked(mockGovernanceRepo.findProcessByNodeId).mockResolvedValue(null);

      const request = {
        nodeId: "invalid",
        actorId: "v1",
        decision: "approve" as const,
      };

      await expect(useCase.execute(request)).rejects.toThrow(
        "GOVERNANCE_PROCESS_NOT_FOUND",
      );
    });

    it("should throw if process already finalized", async () => {
      const useCase = new CastVoteUseCase(mockGovernanceRepo, mockGraphRepo);
      vi.mocked(mockGovernanceRepo.findProcessByNodeId).mockResolvedValue({
        status: "approved",
      } as unknown as Mission);

      const request = {
        nodeId: "node-1",
        actorId: "v1",
        decision: "approve" as const,
      };

      await expect(useCase.execute(request)).rejects.toThrow(
        "PROCESS_ALREADY_FINALIZED",
      );
    });
  });

  describe("ListMissionsUseCase", () => {
    it("should list all missions", async () => {
      const useCase = new ListMissionsUseCase(mockMissionRepo);
      vi.mocked(mockMissionRepo.findAll).mockResolvedValue([
        { id: "m1", title: "M1" },
      ] as unknown as Mission[]);

      const result = await useCase.execute();
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("M1");
    });
  });

  describe("GetMissionGraphUseCase", () => {
    it("should return the graph for a mission", async () => {
      const useCase = new GetMissionGraphUseCase(mockGraphRepo);
      vi.mocked(mockGraphRepo.findNodesByMissionId).mockResolvedValue([]);
      vi.mocked(mockGraphRepo.findEdgesByMissionId).mockResolvedValue([]);

      const result = await useCase.execute("mission-1");
      expect(result.nodes).toBeDefined();
      expect(result.edges).toBeDefined();
    });
  });
});
