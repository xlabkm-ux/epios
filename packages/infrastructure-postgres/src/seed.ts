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

  // 1. Workspaces & Missions
  const workspaces = [
    { id: "m1", title: "Scenario A: Climate Research", goal: "Synthesize Arctic melt impact" },
    { id: "m2", title: "Scenario B: Crisis Response", goal: "Suez Canal blockage mitigation" },
    { id: "m3", title: "Scenario C: AI Governance", goal: "Finalize Human-in-the-loop policy" },
    { id: "m4", title: "Scenario D: Knowledge Synthesis", goal: "Neural Architecture Search summary" },
    { id: "m5", title: "Scenario E: Neural Network Collapse", goal: "Stress-test large-scale transformer stability" },
    { id: "m6", title: "Scenario F: ADR Review - Event Sourcing", goal: "Review and finalize ADR for event-driven architecture" },
    { id: "m7", title: "Демо: Микросервисы (10 нод)", goal: "Оценка архитектурных рисков при переходе на микросервисы" },
    { id: "m8", title: "Демо: Облачная миграция (20 нод)", goal: "Синтез стратегии переноса legacy-систем в облако" },
    { id: "m9", title: "Демо: Система лояльности (50 нод)", goal: "Глубокий анализ требований и противоречий новой системы" },
  ];

  for (const ws of workspaces) {
    const wsUuid = `00000000-0000-0000-0000-${ws.id.replace("m", "").padStart(12, "0")}`;
    const missionUuid = `00000000-0000-0000-0001-${ws.id.replace("m", "").padStart(12, "0")}`;
    const runUuid = `00000000-0000-0000-0002-${ws.id.replace("m", "").padStart(12, "0")}`;

    await db.insert(schema.workspaces).values({
      id: wsUuid,
      title: ws.title,
      status: "running",
      mode: "assisted",
      sensitivity: "internal",
      goal: ws.goal,
      createdByType: "user",
      createdById: "admin",
    }).onConflictDoUpdate({ target: schema.workspaces.id, set: { title: ws.title } });

    await db.insert(schema.missions).values({
      id: missionUuid,
      workspaceId: wsUuid,
      title: "Primary Mission",
      status: "active",
      mode: "assisted",
      sensitivity: "internal",
      goal: ws.goal,
      createdByType: "user",
      createdById: "admin",
    }).onConflictDoUpdate({ target: schema.missions.id, set: { title: "Primary Mission" } });

    await db.insert(schema.missionRuns).values({
      id: runUuid,
      missionId: missionUuid,
      status: "running",
      startedByType: "user",
      startedById: "admin",
    }).onConflictDoUpdate({ target: schema.missionRuns.id, set: { status: "running" } });
  }

  // 2. Scenario E: The Massive Graph (50 nodes)
  const wsE_UUID = "00000000-0000-0000-0000-000000000005";
  const missionE_UUID = "00000000-0000-0000-0001-000000000005";
  console.log("Generating Scenario E (50 nodes)...");

  for (let i = 1; i <= 50; i++) {
    const nodeId = `00000000-0000-0000-0000-100000000${i.toString().padStart(3, "0")}`;
    await db.insert(schema.epistemicNodes).values({
      id: nodeId,
      workspaceId: wsE_UUID,
      missionId: missionE_UUID,
      type: (i % 3 === 0 ? "hypothesis" : i % 2 === 0 ? "observation" : "claim") as any,
      content: [
        "Recursive depth instability detected in layer " + i,
        "Gradient vanishing in cross-attention sub-block " + i,
        "Entropy collapse observed at temperature T=" + (0.1 + i / 50).toFixed(2),
        "Latent space fragmentation hypothesis #" + i,
        "Empirical trace of neuron group " + i + " firing rate saturation",
      ][i % 5],
      strength: "moderate",
      metadata: { layer: i },
    }).onConflictDoUpdate({ target: schema.epistemicNodes.id, set: { content: "Updated content " + i } });
    
    // Edges for E
    if (i > 1) {
      await db.insert(schema.epistemicEdges).values({
        id: `00000000-0000-0000-0000-200000000${i.toString().padStart(3, "0")}`,
        workspaceId: wsE_UUID,
        sourceNodeId: `00000000-0000-0000-0000-100000000${(i-1).toString().padStart(3, "0")}`,
        targetNodeId: nodeId,
        type: i % 2 === 0 ? "supports" : "contradicts",
      }).onConflictDoNothing();
    }
  }

  // 3. Scenario F: Pilot Pack (ADR Review)
  const wsF_UUID = "00000000-0000-0000-0000-000000000006";
  const missionF_UUID = "00000000-0000-0000-0001-000000000006";
  const runF_UUID = "00000000-0000-0000-0002-000000000006";
  console.log("Generating Scenario F (ADR Review)...");

  // Identities
  await db.insert(schema.identities).values([
    { id: "admin-1", username: "admin", email: "admin@epios.local", role: "approver" },
    { id: "approver-1", username: "approver", email: "approver@epios.local", role: "approver" },
    { id: "contributor-1", username: "contributor", email: "contributor@epios.local", role: "contributor" },
  ]).onConflictDoNothing();

  // Nodes for F
  const nodesF = [
    { id: "f1", type: "claim", content: "Event sourcing provides a perfect audit trail" },
    { id: "f2", type: "claim", content: "It allows us to reconstruct state at any point in time" },
    { id: "f3", type: "claim", content: "It simplifies complex business logic by focusing on events" },
    { id: "f4", type: "risk", content: "Increased complexity of the persistence layer" },
    { id: "f5", type: "observation", content: "Team has limited experience with event sourcing" },
  ];

  for (const node of nodesF) {
    const nodeId = `00000000-0000-0000-0000-600000000${node.id.replace("f", "").padStart(3, "0")}`;
    await db.insert(schema.epistemicNodes).values({
      id: nodeId,
      workspaceId: wsF_UUID,
      missionId: missionF_UUID,
      type: node.type as any,
      content: node.content,
      strength: "strong",
    }).onConflictDoUpdate({ target: schema.epistemicNodes.id, set: { content: node.content } });
  }

  // Artifact
  const artifactId = "00000000-0000-0000-0000-500000000001";
  await db.insert(schema.livingArtifacts).values({
    id: artifactId,
    missionId: missionF_UUID,
    artifactType: "ADR",
    title: "Event Sourcing Strategy",
    status: "draft",
    currentVersion: 1,
  }).onConflictDoNothing();

  // Patch
  const patchId = "00000000-0000-0000-0000-600000002001";
  await db.insert(schema.artifactPatches).values({
    id: patchId,
    artifactId: artifactId,
    missionId: missionF_UUID,
    baseVersion: 1,
    diff: "Add Snapshotting pattern to mitigate complexity",
    reason: "Addressing complexity risks",
    riskClass: "medium",
    status: "proposed",
    authorType: "user",
    authorId: "contributor-1",
  }).onConflictDoNothing();

  // Approval
  await db.insert(schema.approvalRequests).values({
    id: "00000000-0000-0000-0000-600000003001",
    missionId: missionF_UUID,
    runId: runF_UUID,
    subjectType: "artifact_patch",
    subjectRef: patchId,
    preview: { title: "Patch Review" },
    riskClass: "medium",
    status: "pending",
    idempotencyKey: "seed-patch-1",
  }).onConflictDoNothing();

  // 4. Demo Scenarios (7, 8, 9)
  console.log("Generating Demo Scenarios (7, 8, 9)...");
  const demoConfigs = [
    { id: "m7", nodes: 10, prefix: "7" },
    { id: "m8", nodes: 20, prefix: "8" },
    { id: "m9", nodes: 50, prefix: "9" },
  ];

  for (const config of demoConfigs) {
    const wsUuid = `00000000-0000-0000-0000-${config.id.replace("m", "").padStart(12, "0")}`;
    const missionUuid = `00000000-0000-0000-0001-${config.id.replace("m", "").padStart(12, "0")}`;
    
    for (let i = 1; i <= config.nodes; i++) {
      const nodeId = `00000000-0000-0000-0000-${config.prefix}00000000${i.toString().padStart(3, "0")}`;
      await db.insert(schema.epistemicNodes).values({
        id: nodeId,
        workspaceId: wsUuid,
        missionId: missionUuid,
        type: "claim",
        content: `Demo ${config.id} - Node ${i}`,
        strength: "moderate",
      }).onConflictDoNothing();
    }
  }

  console.log("Seed completed.");
}

seed().catch(err => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
}).finally(() => queryClient.end());
