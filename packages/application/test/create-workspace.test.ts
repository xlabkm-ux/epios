import { describe, expect, it, vi } from "vitest";
import { CreateWorkspaceUseCase } from "../src/use-cases/create-workspace";
import { WorkspaceRepositoryPort } from "@epios/ports";

describe("CreateWorkspaceUseCase", () => {
  it("should create and save a new workspace", async () => {
    const mockRepo: WorkspaceRepositoryPort = {
      save: vi.fn(),
      findById: vi.fn(),
      findAll: vi.fn(),
    };

    const useCase = new CreateWorkspaceUseCase(mockRepo);

    const request = {
      title: "Test Workspace",
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
        title: "Test Workspace",
        status: "draft",
      }),
    );
  });

  it("should throw if workspace goal is empty", async () => {
    const mockRepo: WorkspaceRepositoryPort = {
      save: vi.fn(),
      findById: vi.fn(),
      findAll: vi.fn(),
    };

    const useCase = new CreateWorkspaceUseCase(mockRepo);

    const request = {
      title: "Invalid Workspace",
      brief: {
        goal: "",
        successCriteria: [],
        constraints: [],
        unknowns: [],
      },
      createdBy: { type: "user", id: "user-1" },
    };

    await expect(useCase.execute(request)).rejects.toThrow(
      "WORKSPACE_GOAL_REQUIRED",
    );
  });
});
