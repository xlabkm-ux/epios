import { FastifyInstance } from "fastify";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { buildServer } from "../src/server.js";
import { MissionRepositoryPort, GraphRepositoryPort } from "@epos/ports";

describe("API E2E", () => {
  let app: FastifyInstance;

  const mockMissionRepo = {
    save: vi.fn(),
    findById: vi.fn(),
  };

  const mockGraphRepo = {
    saveNode: vi.fn(),
    saveEdge: vi.fn(),
    findNodeById: vi.fn(),
    findEdgeById: vi.fn(),
  };

  beforeEach(async () => {
    app = buildServer({
      missionRepo: mockMissionRepo as unknown as MissionRepositoryPort,
      graphRepo: mockGraphRepo as unknown as GraphRepositoryPort,
    });
    await app.ready();
  });

  it("should return health status", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/health",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({ ok: true });
  });

  it("should create a mission", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/missions",
      payload: {
        title: "Test Mission",
        brief: {
          goal: "Test Goal",
          successCriteria: ["ok"],
          constraints: [],
          unknowns: [],
        },
        createdBy: { type: "user", id: "user-1" },
      },
    });

    expect(response.statusCode).toBe(201);
    expect(response.json()).toHaveProperty("id");
    expect(mockMissionRepo.save).toHaveBeenCalled();
  });

  it("should add a node to a mission", async () => {
    mockMissionRepo.findById.mockResolvedValue({ id: "mission-1" });

    const response = await app.inject({
      method: "POST",
      url: "/missions/mission-1/nodes",
      payload: {
        type: "claim",
        content: "Test Claim",
      },
    });

    expect(response.statusCode).toBe(201);
    expect(response.json()).toHaveProperty("id");
    expect(mockGraphRepo.saveNode).toHaveBeenCalled();
  });

  it("should patch a node", async () => {
    mockGraphRepo.findNodeById.mockResolvedValue({
      id: "node-1",
      content: "Old Content",
      metadata: {},
    });

    const response = await app.inject({
      method: "PATCH",
      url: "/missions/mission-1/nodes/node-1",
      payload: {
        content: "New Content",
      },
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().content).toBe("New Content");
    expect(mockGraphRepo.saveNode).toHaveBeenCalled();
  });
});
