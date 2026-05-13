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
  console.log("🚀 Starting Master Synchronization of all data...");

  // 1. Workspaces (A, B, C, D, E)
  const workspaces = [
    { id: "m1", title: "Scenario A: Climate Research", goal: "Synthesize Arctic melt impact" },
    { id: "m2", title: "Scenario B: Crisis Response", goal: "Suez Canal blockage mitigation" },
    { id: "m3", title: "Scenario C: AI Governance", goal: "Finalize Human-in-the-loop policy" },
    { id: "m4", title: "Scenario D: Knowledge Synthesis", goal: "Neural Architecture Search summary" },
    { id: "m5", title: "Scenario E: Neural Network Collapse", goal: "Stress-test large-scale transformer stability" },
  ];

  for (const ws of workspaces) {
    const uuid = ws.id.padEnd(36, "0").replace(/m(\d)/, "00000000-0000-0000-0000-00000000000$1");
    await db.insert(schema.workspaces).values({
      id: uuid,
      title: ws.title,
      status: "running",
      mode: "assisted",
      sensitivity: "internal",
      goal: ws.goal,
      createdByType: "user",
      createdById: "admin",
      brief: { goal: ws.goal, successCriteria: ["Map critical points"], constraints: [], unknowns: [] },
    }).onConflictDoUpdate({ target: schema.workspaces.id, set: { title: ws.title } });
  }

  // 2. Scenario E: The Massive Graph (50 nodes)
  const wsE_UUID = "00000000-0000-0000-0000-000000000005";
  console.log("Generating Scenario E (50 nodes)...");
  
  for (let i = 1; i <= 50; i++) {
    const nodeId = `00000000-0000-0000-0000-100000000${i.toString().padStart(3, "0")}`;
    const type = (i % 3 === 0 ? "hypothesis" : i % 2 === 0 ? "observation" : "claim");
    const content = [
      "Recursive depth instability detected in layer " + i,
      "Gradient vanishing in cross-attention sub-block " + i,
      "Entropy collapse observed at temperature T=" + (0.1 + i / 50).toFixed(2),
      "Latent space fragmentation hypothesis #" + i,
      "Empirical trace of neuron group " + i + " firing rate saturation",
    ][i % 5];

    await db.insert(schema.epistemicNodes).values({
      id: nodeId,
      workspaceId: wsE_UUID,
      type: type as any,
      content,
      strength: "moderate",
      evidence: [],
      metadata: { layer: i },
    }).onConflictDoUpdate({ target: schema.epistemicNodes.id, set: { content } });
  }

  // 3. Scenario E: Edges (Complex web)
  for (let i = 1; i <= 50; i++) {
    const sourceId = `00000000-0000-0000-0000-100000000${i.toString().padStart(3, "0")}`;
    const targetIdx = (i + 1) % 50 || 1;
    const targetId = `00000000-0000-0000-0000-100000000${targetIdx.toString().padStart(3, "0")}`;
    
    await db.insert(schema.epistemicEdges).values({
      id: `00000000-0000-0000-0000-200000000${i.toString().padStart(3, "0")}`,
      workspaceId: wsE_UUID,
      sourceNodeId: sourceId,
      targetNodeId: targetId,
      type: (i % 2 === 0 ? "supports" : "contradicts") as any,
      metadata: {},
    }).onConflictDoNothing();
  }

  console.log("✅ MASTER SYNC COMPLETED!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Sync failed:", err);
  process.exit(1);
});
