import { describe, expect, it, vi } from "vitest";
import { CreateMissionUseCase } from "../src/use-cases/create-mission";
import { MissionRepositoryPort } from "@epios/ports";

describe("CreateMissionUseCase", () => {
  it("should create and save a new mission", async () => {
    const mockRepo: MissionRepositoryPort = {
      save: vi.fn(),
      findById: vi.fn(),
      findAll: vi.fn(),
      delete: vi.fn(),
    };

    const useCase = new CreateMissionUseCase(mockRepo);

    const request = {
      title: "Test Mission",
      brief: {
        goal: "Test Goal",
        successCriteria: ["Goal met"],
        constraints: [],
        unknowns: [],
      },
      createdBy: { type: "user", id: "user-1" },
    };

    const result = await useCase.execute(request);

    expect(result.id).toBeDefined();
    expect(result.title).toBe(request.title);
    expect(mockRepo.save).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Test Mission",
        status: "draft",
      }),
    );
  });

  it("should throw if mission goal is empty", async () => {
    const mockRepo: MissionRepositoryPort = {
      save: vi.fn(),
      findById: vi.fn(),
      findAll: vi.fn(),
      delete: vi.fn(),
    };

    const useCase = new CreateMissionUseCase(mockRepo);

    const request = {
      title: "Invalid Mission",
      brief: {
        goal: "",
        successCriteria: [],
        constraints: [],
        unknowns: [],
      },
      createdBy: { type: "user", id: "user-1" },
    };

    await expect(useCase.execute(request)).rejects.toThrow(
      "MISSION_GOAL_REQUIRED",
    );
  });
});
