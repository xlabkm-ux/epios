import Fastify from "fastify";
import cors from "@fastify/cors";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
import {
  PostgresMissionRepository,
  PostgresGraphRepository,
} from "@epios/infrastructure-postgres";
import {
  CreateMissionUseCase,
  ListMissionsUseCase,
  AddNodeUseCase,
  AddEdgeUseCase,
  PatchNodeUseCase,
  GetMissionGraphUseCase,
  SubmitClaimUseCase,
  CastVoteUseCase,
} from "@epios/application";
import { missionRoutes } from "./routes/mission.routes.js";
import { mappingRoutes } from "./routes/mapping.routes.js";
import { governanceRoutes } from "./routes/governance.routes.js";
import { mcpRoutes } from "./routes/mcp.routes.js";
import {
  InMemoryGovernanceRepository,
  InMemoryMissionRepository,
  InMemoryGraphRepository,
} from "@epios/infrastructure-runtime";
import {
  InMemoryMCPAppRegistry,
  MockMCPBridge,
} from "@epios/infrastructure-mcp";
import {
  Mission,
  EpistemicNode,
  EpistemicEdge,
  MissionStatus,
  MissionMode,
  MissionSensitivity,
  NodeType,
  NodeStrength,
  EpistemicEdgeType,
} from "@epios/domain";

dotenv.config();

import {
  MissionRepositoryPort,
  GraphRepositoryPort,
  GovernanceRepositoryPort,
  MCPAppRegistryPort,
  MCPBridgePort,
} from "@epios/ports";

export type ServerDependencies = {
  missionRepo?: MissionRepositoryPort;
  graphRepo?: GraphRepositoryPort;
  governanceRepo?: GovernanceRepositoryPort;
  mcpRegistry?: MCPAppRegistryPort;
  mcpBridge?: MCPBridgePort;
};

export function buildServer(deps: ServerDependencies = {}) {
  const app = Fastify({ logger: true });

  app.register(cors, {
    origin: "*", // For development
  });

  let missionRepo = deps.missionRepo;
  let graphRepo = deps.graphRepo;

  if (!missionRepo || !graphRepo) {
    const databaseUrl = process.env.DATABASE_URL;
    const isMockMode =
      process.env.EPIOS_DATABASE_MODE === "mock" || !databaseUrl;
    console.log(
      `[SERVER] Database Mode: ${isMockMode ? "MOCK" : "POSTGRES"} (Env: ${process.env.EPIOS_DATABASE_MODE})`,
    );

    if (isMockMode) {
      const missionEId = "m5";
      const missionENodes: EpistemicNode[] = Array.from(
        { length: 50 },
        (_, i) => ({
          id: `ne${i + 1}`,
          missionId: missionEId,
          type: (i % 3 === 0
            ? "hypothesis"
            : i % 2 === 0
              ? "observation"
              : "claim") as NodeType,
          content: [
            "Recursive depth instability detected in layer " + (i + 1),
            "Gradient vanishing in cross-attention sub-block " + (i + 1),
            "Entropy collapse observed at temperature T=" +
              (0.1 + i / 50).toFixed(2),
            "Latent space fragmentation hypothesis #" + (i + 1),
            "Empirical trace of neuron group " +
              (i + 1) +
              " firing rate saturation",
            "Ablation study of attention head #" +
              (i + 1) +
              " reveals critical vulnerability",
          ][i % 6],
          strength: "moderate" as NodeStrength,
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      );

      const missionEEdges: EpistemicEdge[] = [];
      for (let i = 0; i < 50; i++) {
        // Create a complex web: each node supports/contradicts/derives from others
        const targets = [
          (i + 1) % 50,
          (i * 7 + 3) % 50,
          Math.floor(i / 5) * 5, // Cluster base
        ];

        targets.forEach((targetIdx, j) => {
          if (targetIdx !== i) {
            missionEEdges.push({
              id: `ee${i}-${j}`,
              missionId: missionEId,
              sourceNodeId: missionENodes[i].id,
              targetNodeId: missionENodes[targetIdx].id,
              type: ["supports", "contradicts", "refines", "addresses"][
                (i + j) % 4
              ] as EpistemicEdgeType,
              metadata: {},
              createdAt: new Date(),
            });
          }
        });
      }

      const demoMissions: Mission[] = [
        {
          id: "m1",
          title: "Scenario A: Climate Research",
          status: "running" as MissionStatus,
          mode: "assisted" as MissionMode,
          sensitivity: "internal" as MissionSensitivity,
          version: 1,
          brief: {
            goal: "Synthesize Arctic melt impact",
            successCriteria: [],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "researcher-1" },
        },
        {
          id: "m2",
          title: "Scenario B: Crisis Response",
          status: "running" as MissionStatus,
          mode: "assisted" as MissionMode,
          sensitivity: "internal" as MissionSensitivity,
          version: 1,
          brief: {
            goal: "Suez Canal blockage mitigation",
            successCriteria: [],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "logistics-ai" },
        },
        {
          id: "m3",
          title: "Scenario C: AI Governance",
          status: "running" as MissionStatus,
          mode: "assisted" as MissionMode,
          sensitivity: "internal" as MissionSensitivity,
          version: 1,
          brief: {
            goal: "Finalize Human-in-the-loop policy",
            successCriteria: [],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "ethics-board" },
        },
        {
          id: "m4",
          title: "Scenario D: Knowledge Synthesis",
          status: "running" as MissionStatus,
          mode: "assisted" as MissionMode,
          sensitivity: "internal" as MissionSensitivity,
          version: 1,
          brief: {
            goal: "Neural Architecture Search summary",
            successCriteria: [],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "dev-team" },
        },
        {
          id: missionEId,
          title: "Scenario E: Neural Network Collapse",
          status: "running" as MissionStatus,
          mode: "assisted" as MissionMode,
          sensitivity: "internal" as MissionSensitivity,
          version: 1,
          brief: {
            goal: "Stress-test large-scale transformer stability",
            successCriteria: ["Map 50 critical points"],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "safety-agent" },
        },
      ];

      const demoNodes: EpistemicNode[] = [
        // Scenario A
        {
          id: "n1",
          missionId: "m1",
          type: "hypothesis",
          content:
            "Arctic ice melt accelerates global sea level rise by 20% by 2050",
          strength: "moderate",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n2",
          missionId: "m1",
          type: "observation",
          content: "NOAA 2024 Report on Arctic Melt Rates",
          strength: "strong",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n3",
          missionId: "m1",
          type: "observation",
          content: "Sentinel-6 Satellite Altimetry Data",
          strength: "strong",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n4",
          missionId: "m1",
          type: "claim",
          content: "Melting rate exceeds previous IPPC models",
          strength: "moderate",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Scenario B
        {
          id: "n5",
          missionId: "m2",
          type: "hypothesis",
          content: "Suez blockage causes 2-week semiconductor delay",
          strength: "moderate",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n6",
          missionId: "m2",
          type: "observation",
          content: "Port authority live congestion report",
          strength: "strong",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n7",
          missionId: "m2",
          type: "claim",
          content: "Reroute via Cape of Good Hope reduces delay risk",
          strength: "moderate",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Scenario C
        {
          id: "n8",
          missionId: "m3",
          type: "hypothesis",
          content: "Mandatory human approval prevents runaway loops",
          strength: "strong",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n9",
          missionId: "m3",
          type: "claim",
          content: "Adaptive thresholds minimize latency impact",
          strength: "moderate",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Scenario D
        {
          id: "n10",
          missionId: "m4",
          type: "observation",
          content: "Transformer vs SSM Comparative Study 2025",
          strength: "strong",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n11",
          missionId: "m4",
          type: "claim",
          content: "Hybrid SSM-Transformer block is optimal for edge devices",
          strength: "moderate",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Scenario E
        ...missionENodes,
      ];

      const demoEdges: EpistemicEdge[] = [
        {
          id: "e1",
          missionId: "m1",
          sourceNodeId: "n2",
          targetNodeId: "n1",
          type: "supports",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e2",
          missionId: "m1",
          sourceNodeId: "n3",
          targetNodeId: "n1",
          type: "supports",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e3",
          missionId: "m1",
          sourceNodeId: "n4",
          targetNodeId: "n2",
          type: "refines",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e4",
          missionId: "m2",
          sourceNodeId: "n6",
          targetNodeId: "n5",
          type: "supports",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e5",
          missionId: "m2",
          sourceNodeId: "n7",
          targetNodeId: "n5",
          type: "addresses",
          metadata: {},
          createdAt: new Date(),
        },
        // Scenario E
        ...missionEEdges,
      ];

      missionRepo = missionRepo ?? new InMemoryMissionRepository(demoMissions);
      graphRepo =
        graphRepo ?? new InMemoryGraphRepository(demoNodes, demoEdges);
    } else if (databaseUrl) {
      try {
        const queryClient = postgres(databaseUrl);
        const db = drizzle(queryClient);

        missionRepo = missionRepo ?? new PostgresMissionRepository(db);
        graphRepo = graphRepo ?? new PostgresGraphRepository(db);
      } catch (e) {
        console.error(
          "Failed to connect to Postgres, falling back to mock mode",
          e,
        );
        missionRepo = new InMemoryMissionRepository();
        graphRepo = new InMemoryGraphRepository();
      }
    }
  }

  const createMissionUseCase = new CreateMissionUseCase(missionRepo!);
  const listMissionsUseCase = new ListMissionsUseCase(missionRepo!);
  const addNodeUseCase = new AddNodeUseCase(missionRepo!, graphRepo!);
  const addEdgeUseCase = new AddEdgeUseCase(missionRepo!, graphRepo!);
  const patchNodeUseCase = new PatchNodeUseCase(graphRepo!);
  const getMissionGraphUseCase = new GetMissionGraphUseCase(graphRepo!);

  // Week 5: Governance & MCP
  const governanceRepo =
    deps.governanceRepo ?? new InMemoryGovernanceRepository();
  const submitClaimUseCase = new SubmitClaimUseCase(graphRepo!, governanceRepo);
  const castVoteUseCase = new CastVoteUseCase(governanceRepo, graphRepo!);

  const mcpRegistry = deps.mcpRegistry ?? new InMemoryMCPAppRegistry();
  const mcpBridge = deps.mcpBridge ?? new MockMCPBridge(mcpRegistry);

  app.get("/health", async () => {
    return {
      ok: true,
      service: "epistemic-os-api",
      timestamp: new Date().toISOString(),
    };
  });

  app.register(missionRoutes, { createMissionUseCase, listMissionsUseCase });
  app.register(mappingRoutes, {
    addNodeUseCase,
    addEdgeUseCase,
    patchNodeUseCase,
    getMissionGraphUseCase,
  });
  app.register(governanceRoutes, { submitClaimUseCase, castVoteUseCase });
  app.register(mcpRoutes, { registry: mcpRegistry, bridge: mcpBridge });

  return app;
}
