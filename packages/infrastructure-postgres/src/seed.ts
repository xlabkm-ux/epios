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

// Генерируем стабильные UUID для сидинга
const ws1Id = "00000000-0000-0000-0000-000000000001";
const ws2Id = "00000000-0000-0000-0000-000000000002";
const ws3Id = "00000000-0000-0000-0000-000000000003";

async function seed() {
  console.log("🌱 Seeding database with diverse scenarios...");

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
    }).onConflictDoUpdate({
      target: schema.workspaces.id,
      set: { title: ws.title, goal: ws.goal }
    });
  }

  // 2. Nodes for Scenario A (Climate)
  const nodesA = [
    { id: "10000000-0000-0000-0000-000000000001", workspaceId: ws1Id, type: "hypothesis", content: "Arctic ice melt accelerates global sea level rise by 20% by 2050", strength: "moderate" },
    { id: "10000000-0000-0000-0000-000000000002", workspaceId: ws1Id, type: "observation", content: "NOAA 2024 Report on Arctic Melt Rates", strength: "strong" },
  ];

  // 3. Nodes for Scenario B (Crisis)
  const nodesB = [
    { id: "20000000-0000-0000-0000-000000000001", workspaceId: ws2Id, type: "hypothesis", content: "Suez blockage causes 2-week semiconductor delay", strength: "moderate" },
    { id: "20000000-0000-0000-0000-000000000002", workspaceId: ws2Id, type: "observation", content: "Ever Given blockage duration: 6 days", strength: "strong" },
  ];

  // 4. Nodes for Scenario C (AI)
  const nodesC = [
    { id: "30000000-0000-0000-0000-000000000001", workspaceId: ws3Id, type: "claim", content: "Mandatory human approval prevents runaway loops", strength: "strong" },
  ];

  const allNodes = [...nodesA, ...nodesB, ...nodesC];

  for (const node of allNodes) {
    await db.insert(schema.epistemicNodes).values({
      id: node.id,
      workspaceId: node.workspaceId,
      type: node.type as any,
      content: node.content,
      strength: node.strength as any,
      evidence: [],
      metadata: {},
    }).onConflictDoUpdate({
      target: schema.epistemicNodes.id,
      set: { content: node.content }
    });
  }

  console.log("✅ Seeding completed with 3 unique scenarios!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
