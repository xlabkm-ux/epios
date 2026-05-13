import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
import { expand } from "dotenv-expand";
import * as schema from "./schema.js";

const envConfig = dotenv.config({ path: "../../.env" });
expand(envConfig);

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const queryClient = postgres(databaseUrl);
const db = drizzle(queryClient, { schema });

async function seed() {
  console.log("🌱 Seeding database...");

  // 1. Workspaces
  const demoWorkspaces = [
    {
      id: "m1",
      title: "Scenario A: Climate Research",
      status: "running",
      mode: "assisted",
      sensitivity: "internal",
      goal: "Synthesize Arctic melt impact",
      createdBy: "researcher-1",
    },
    {
      id: "m2",
      title: "Scenario B: Crisis Response",
      status: "running",
      mode: "assisted",
      sensitivity: "internal",
      goal: "Suez Canal blockage mitigation",
      createdBy: "logistics-ai",
    },
    {
      id: "m3",
      title: "Scenario C: AI Governance",
      status: "running",
      mode: "assisted",
      sensitivity: "internal",
      goal: "Finalize Human-in-the-loop policy",
      createdBy: "ethics-board",
    },
  ];

  for (const ws of demoWorkspaces) {
    await db.insert(schema.workspaces).values({
      id: ws.id,
      title: ws.title,
      status: ws.status as any,
      mode: ws.mode as any,
      sensitivity: ws.sensitivity as any,
      brief: { goal: ws.goal, successCriteria: [], constraints: [], unknowns: [] },
      createdBy: ws.createdBy,
    }).onConflictDoNothing();
  }

  // 2. Nodes
  const demoNodes = [
    {
      id: "n1",
      workspaceId: "m1",
      type: "hypothesis",
      content: "Arctic ice melt accelerates global sea level rise by 20% by 2050",
      strength: "moderate",
    },
    {
      id: "n2",
      workspaceId: "m1",
      type: "observation",
      content: "NOAA 2024 Report on Arctic Melt Rates",
      strength: "strong",
    },
    {
      id: "n3",
      workspaceId: "m1",
      type: "observation",
      content: "Sentinel-6 Satellite Altimetry Data",
      strength: "strong",
    },
  ];

  for (const node of demoNodes) {
    await db.insert(schema.nodes).values({
      id: node.id,
      workspaceId: node.workspaceId,
      type: node.type as any,
      content: node.content,
      strength: node.strength as any,
      evidence: [],
      metadata: {},
    }).onConflictDoNothing();
  }

  // 3. Edges
  const demoEdges = [
    {
      id: "e1",
      workspaceId: "m1",
      sourceNodeId: "n2",
      targetNodeId: "n1",
      type: "supports",
    },
    {
      id: "e2",
      workspaceId: "m1",
      sourceNodeId: "n3",
      targetNodeId: "n1",
      type: "supports",
    },
  ];

  for (const edge of demoEdges) {
    await db.insert(schema.edges).values({
      id: edge.id,
      workspaceId: edge.workspaceId,
      sourceNodeId: edge.sourceNodeId,
      targetNodeId: edge.targetNodeId,
      type: edge.type as any,
      metadata: {},
    }).onConflictDoNothing();
  }

  console.log("✅ Seeding completed successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
