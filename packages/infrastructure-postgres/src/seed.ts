import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
import { expand } from "dotenv-expand";
import * as schema from "./schema.js";
import { crypto } from "node:crypto";

const envConfig = dotenv.config({ path: "../../.env" });
expand(envConfig);

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const queryClient = postgres(databaseUrl);
const db = drizzle(queryClient, { schema });

// Генерируем стабильные UUID для сидинга
const ws1Id = "00000000-0000-0000-0000-000000000001";
const ws2Id = "00000000-0000-0000-0000-000000000002";
const ws3Id = "00000000-0000-0000-0000-000000000003";

const n1Id = "10000000-0000-0000-0000-000000000001";
const n2Id = "10000000-0000-0000-0000-000000000002";
const n3Id = "10000000-0000-0000-0000-000000000003";

async function seed() {
  console.log("🌱 Seeding database with UUIDs...");

  // 1. Workspaces
  const demoWorkspaces = [
    {
      id: ws1Id,
      title: "Scenario A: Climate Research",
      status: "running",
      mode: "assisted",
      sensitivity: "internal",
      goal: "Synthesize Arctic melt impact",
      createdBy: "researcher-1",
    },
    {
      id: ws2Id,
      title: "Scenario B: Crisis Response",
      status: "running",
      mode: "assisted",
      sensitivity: "internal",
      goal: "Suez Canal blockage mitigation",
      createdBy: "logistics-ai",
    },
    {
      id: ws3Id,
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
      goal: ws.goal,
      createdByType: "user",
      createdById: ws.createdBy,
      brief: { goal: ws.goal, successCriteria: [], constraints: [], unknowns: [] },
    }).onConflictDoNothing();
  }

  // 2. Nodes
  const demoNodes = [
    {
      id: n1Id,
      workspaceId: ws1Id,
      type: "hypothesis",
      content: "Arctic ice melt accelerates global sea level rise by 20% by 2050",
      strength: "moderate",
    },
    {
      id: n2Id,
      workspaceId: ws1Id,
      type: "observation",
      content: "NOAA 2024 Report on Arctic Melt Rates",
      strength: "strong",
    },
    {
      id: n3Id,
      workspaceId: ws1Id,
      type: "observation",
      content: "Sentinel-6 Satellite Altimetry Data",
      strength: "strong",
    },
  ];

  for (const node of demoNodes) {
    await db.insert(schema.epistemicNodes).values({
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
  await db.insert(schema.epistemicEdges).values({
    id: "20000000-0000-0000-0000-000000000001",
    workspaceId: ws1Id,
    sourceNodeId: n2Id,
    targetNodeId: n1Id,
    type: "supports",
    metadata: {},
  }).onConflictDoNothing();

  await db.insert(schema.epistemicEdges).values({
    id: "20000000-0000-0000-0000-000000000002",
    workspaceId: ws1Id,
    sourceNodeId: n3Id,
    targetNodeId: n1Id,
    type: "supports",
    metadata: {},
  }).onConflictDoNothing();

  console.log("✅ Seeding completed successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
