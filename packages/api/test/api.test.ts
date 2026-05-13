import { FastifyInstance } from "fastify";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { buildServer } from "../src/server.js";
import {
  MissionRepositoryPort,
  GraphRepositoryPort,
  GovernanceRepositoryPort,
  MCPAppRegistryPort,
  MCPBridgePort,
} from "@epios/ports";

describe("API E2E", () => {
  let app: FastifyInstance;

  const mockMissionRepo = {
    save: vi.fn(),
    findById: vi.fn(),
    findAll: vi.fn(),
  };

  const mockGraphRepo = {
    saveNode: vi.fn(),
    saveEdge: vi.fn(),
    findNodeById: vi.fn(),
    findEdgeById: vi.fn(),
    findNodesByMissionId: vi.fn(),
    findEdgesByMissionId: vi.fn(),
  };

  const mockGovernanceRepo = {
    saveProcess: vi.fn(),
    findProcessByNodeId: vi.fn(),
  };

  const mockMCPRegistry = {
    listApps: vi.fn().mockResolvedValue([]),
    registerApp: vi.fn().mockResolvedValue({ id: "app-1" }),
  };

  const mockMCPBridge = {
    executeTool: vi.fn().mockResolvedValue({ success: true }),
  };

  beforeEach(async () => {
    app = buildServer({
      missionRepo: mockMissionRepo as unknown as MissionRepositoryPort,
      graphRepo: mockGraphRepo as unknown as GraphRepositoryPort,
      governanceRepo: mockGovernanceRepo as unknown as GovernanceRepositoryPort,
      mcpRegistry: mockMCPRegistry as unknown as MCPAppRegistryPort,
      mcpBridge: mockMCPBridge as unknown as MCPBridgePort,
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
  });

  it("should submit a governance claim", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/governance/claims",
      payload: {
        missionId: "m1",
        content: "Governance Claim",
      },
    });

    expect(response.statusCode).toBe(201);
    expect(mockGovernanceRepo.saveProcess).toHaveBeenCalled();
  });

  it("should cast a governance vote", async () => {
    mockGovernanceRepo.findProcessByNodeId.mockResolvedValue({
      status: "pending",
      votes: [],
      requiredVotes: 2,
    });

    const response = await app.inject({
      method: "POST",
      url: "/governance/votes",
      payload: {
        nodeId: "n1",
        actorId: "v1",
        decision: "approve",
      },
    });

    expect(response.statusCode).toBe(204);
  });

  it("should list and register MCP apps", async () => {
    const listRes = await app.inject({ method: "GET", url: "/mcp/apps" });
    expect(listRes.statusCode).toBe(200);

    const regRes = await app.inject({
      method: "POST",
      url: "/mcp/apps",
      payload: {
        id: "a1",
        name: "App",
        url: "http://h",
        type: "sse",
        capabilities: [],
      },
    });
    expect(regRes.statusCode).toBe(201);
  });

  it("should execute MCP tool", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/mcp/execute",
      payload: { appId: "a1", toolName: "t1", args: {} },
    });
    expect(response.statusCode).toBe(200);
    expect(mockMCPBridge.executeTool).toHaveBeenCalled();
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

  it("should list missions", async () => {
    mockMissionRepo.findAll.mockResolvedValue([{ id: "m1", title: "M1" }]);
    const response = await app.inject({ method: "GET", url: "/missions" });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveLength(1);
  });

  it("should add an edge between nodes", async () => {
    mockMissionRepo.findById.mockResolvedValue({ id: "mission-1" });
    const response = await app.inject({
      method: "POST",
      url: "/missions/mission-1/edges",
      payload: { sourceNodeId: "n1", targetNodeId: "n2", type: "supports" },
    });
    expect(response.statusCode).toBe(201);
  });

  it("should get mission graph", async () => {
    mockGraphRepo.findNodesByMissionId.mockResolvedValue([]);
    mockGraphRepo.findEdgesByMissionId.mockResolvedValue([]);
    const response = await app.inject({
      method: "GET",
      url: "/missions/mission-1/graph",
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveProperty("nodes");
  });
});
