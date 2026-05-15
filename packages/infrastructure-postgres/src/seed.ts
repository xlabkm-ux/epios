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

  // 1. Workspaces & Missions (A, B, C, D, E, F, G, H, I)
  const workspaces = [
    {
      id: "m1",
      title: "Scenario A: Climate Research",
      goal: "Synthesize Arctic melt impact",
    },
    {
      id: "m2",
      title: "Scenario B: Crisis Response",
      goal: "Suez Canal blockage mitigation",
    },
    {
      id: "m3",
      title: "Scenario C: AI Governance",
      goal: "Finalize Human-in-the-loop policy",
    },
    {
      id: "m4",
      title: "Scenario D: Knowledge Synthesis",
      goal: "Neural Architecture Search summary",
    },
    {
      id: "m5",
      title: "Scenario E: Neural Network Collapse",
      goal: "Stress-test large-scale transformer stability",
    },
    {
      id: "m6",
      title: "Scenario F: ADR Review - Event Sourcing",
      goal: "Review and finalize ADR for event-driven architecture",
    },
    {
      id: "m7",
      title: "Демо: Микросервисы (10 нод)",
      goal: "Оценка архитектурных рисков при переходе на микросервисы",
    },
    {
      id: "m8",
      title: "Демо: Облачная миграция (20 нод)",
      goal: "Синтез стратегии переноса legacy-систем в облако",
    },
    {
      id: "m9",
      title: "Демо: Система лояльности (50 нод)",
      goal: "Глубокий анализ требований и противоречий новой системы",
    },
  ];

  for (const ws of workspaces) {
    const wsUuid = `00000000-0000-0000-0000-${ws.id.replace("m", "").padStart(12, "0")}`;
    const missionUuid = `00000000-0000-0000-0001-${ws.id.replace("m", "").padStart(12, "0")}`;
    const runUuid = `00000000-0000-0000-0002-${ws.id.replace("m", "").padStart(12, "0")}`;

    await db
      .insert(schema.workspaces)
      .values({
        id: wsUuid,
        title: ws.title,
        status: "running",
        mode: "assisted",
        sensitivity: "internal",
        goal: ws.goal,
        createdByType: "user",
        createdById: "admin",
      })
      .onConflictDoUpdate({
        target: schema.workspaces.id,
        set: { title: ws.title },
      });

    await db
      .insert(schema.missions)
      .values({
        id: missionUuid,
        workspaceId: wsUuid,
        title: "Primary Mission",
        status: "active",
        mode: "assisted",
        sensitivity: "internal",
        goal: ws.goal,
        createdByType: "user",
        createdById: "admin",
      })
      .onConflictDoUpdate({
        target: schema.missions.id,
        set: { title: "Primary Mission" },
      });

    await db
      .insert(schema.missionRuns)
      .values({
        id: runUuid,
        missionId: missionUuid,
        status: "running",
        startedByType: "user",
        startedById: "admin",
      })
      .onConflictDoUpdate({
        target: schema.missionRuns.id,
        set: { status: "running" },
      });
  }

  // 2. Scenario E: The Massive Graph (50 nodes)
  const wsE_UUID = "00000000-0000-0000-0000-000000000005";
  const missionE_UUID = "00000000-0000-0000-0001-000000000005";
  console.log("Generating Scenario E (50 nodes)...");

  for (let i = 1; i <= 50; i++) {
    const nodeId = `00000000-0000-0000-0000-100000000${i.toString().padStart(3, "0")}`;
    await db
      .insert(schema.epistemicNodes)
      .values({
        id: nodeId,
        workspaceId: wsE_UUID,
        missionId: missionE_UUID,
        type: (i % 3 === 0
          ? "hypothesis"
          : i % 2 === 0
            ? "observation"
            : "claim") as "claim" | "hypothesis" | "observation" | "risk",
        content: `Scenario E - Node ${i}`,
        strength: "moderate",
        metadata: { layer: i },
      })
      .onConflictDoUpdate({
        target: schema.epistemicNodes.id,
        set: { content: `Scenario E - Node ${i}` },
      });
  }

  // 3. Scenario F: Pilot Pack (ADR Review)
  const missionF_UUID = "00000000-0000-0000-0001-000000000006";
  const runF_UUID = "00000000-0000-0000-0002-000000000006";
  console.log("Generating Scenario F (ADR Review)...");

  // Identities
  await db
    .insert(schema.identities)
    .values([
      {
        id: "admin-1",
        username: "admin",
        email: "admin@epios.local",
        role: "approver",
      },
      {
        id: "approver-1",
        username: "approver",
        email: "approver@epios.local",
        role: "approver",
      },
      {
        id: "contributor-1",
        username: "contributor",
        email: "contributor@epios.local",
        role: "contributor",
      },
    ])
    .onConflictDoNothing();

  // Artifact
  const artifactId = "00000000-0000-0000-0000-500000000001";
  await db
    .insert(schema.livingArtifacts)
    .values({
      id: artifactId,
      missionId: missionF_UUID,
      artifactType: "ADR",
      title: "Event Sourcing Strategy",
      status: "draft",
      currentVersion: 1,
    })
    .onConflictDoNothing();

  // Patch
  const patchId = "00000000-0000-0000-0000-600000002001";
  await db
    .insert(schema.artifactPatches)
    .values({
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
    })
    .onConflictDoNothing();

  // Approval
  await db
    .insert(schema.approvalRequests)
    .values({
      id: "00000000-0000-0000-0000-600000003001",
      missionId: missionF_UUID,
      runId: runF_UUID,
      subjectType: "artifact_patch",
      subjectRef: patchId,
      preview: { title: "Patch Review" },
      riskClass: "medium",
      status: "pending",
      idempotencyKey: "seed-patch-1",
    })
    .onConflictDoNothing();

  console.log("Seed completed.");
}

seed()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(() => queryClient.end());
