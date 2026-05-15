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
    const uuid = `00000000-0000-0000-0000-${ws.id.replace("m", "").padStart(12, "0")}`;
    await db
      .insert(schema.workspaces)
      .values({
        id: uuid,
        title: ws.title,
        status: "running",
        mode: "assisted",
        sensitivity: "internal",
        goal: ws.goal,
        createdByType: "user",
        createdById: "admin",
        brief: {
          goal: ws.goal,
          successCriteria: ["Map critical points", "Narrow decision scope"],
          constraints: [],
          unknowns: [],
        },
      })
      .onConflictDoUpdate({
        target: schema.workspaces.id,
        set: { title: ws.title, goal: ws.goal },
      });
  }

  // 2. Scenario E: The Massive Graph (50 nodes)
  const wsE_UUID = "00000000-0000-0000-0000-000000000005";
  console.log("Generating Scenario E (50 nodes)...");

  for (let i = 1; i <= 50; i++) {
    const nodeId = `00000000-0000-0000-0000-100000000${i.toString().padStart(3, "0")}`;
    const type =
      i % 3 === 0 ? "hypothesis" : i % 2 === 0 ? "observation" : "claim";
    const content = [
      "Recursive depth instability detected in layer " + i,
      "Gradient vanishing in cross-attention sub-block " + i,
      "Entropy collapse observed at temperature T=" + (0.1 + i / 50).toFixed(2),
      "Latent space fragmentation hypothesis #" + i,
      "Empirical trace of neuron group " + i + " firing rate saturation",
    ][i % 5];

    await db
      .insert(schema.epistemicNodes)
      .values({
        id: nodeId,
        workspaceId: wsE_UUID,
        type: type as "claim" | "hypothesis" | "observation" | "risk",
        content,
        strength: "moderate",
        evidence: [],
        metadata: { layer: i },
      })
      .onConflictDoUpdate({
        target: schema.epistemicNodes.id,
        set: { content },
      });
  }

  // 3. Scenario E: Edges (Complex web)
  for (let i = 1; i <= 50; i++) {
    const sourceId = `00000000-0000-0000-0000-100000000${i.toString().padStart(3, "0")}`;
    const targetIdx = (i + 1) % 50 || 1;
    const targetId = `00000000-0000-0000-0000-100000000${targetIdx.toString().padStart(3, "0")}`;

    await db
      .insert(schema.epistemicEdges)
      .values({
        id: `00000000-0000-0000-0000-200000000${i.toString().padStart(3, "0")}`,
        workspaceId: wsE_UUID,
        sourceNodeId: sourceId,
        targetNodeId: targetId,
        type: (i % 2 === 0 ? "supports" : "contradicts") as
          | "supports"
          | "contradicts",
        metadata: {},
      })
      .onConflictDoNothing();
  }

  // 4. Identities (Admin, Reviewer, Observer)
  console.log("Seeding identities...");
  const users = [
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
    {
      id: "viewer-1",
      username: "viewer",
      email: "viewer@epios.local",
      role: "viewer",
    },
    {
      id: "observer-1",
      username: "observer",
      email: "observer@epios.local",
      role: "viewer",
    },
  ];

  for (const user of users) {
    await db
      .insert(schema.identities)
      .values({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        isActive: 1,
      })
      .onConflictDoUpdate({
        target: schema.identities.id,
        set: { role: user.role },
      });
  }

  // 5. Scenario F: ADR Review - Event Sourcing
  console.log("Seeding Pilot Pack: Scenario F (ADR Review)...");
  const wsF_UUID = "00000000-0000-0000-0000-000000000006";

  // Source
  await db
    .insert(schema.sources)
    .values({
      id: "00000000-0000-0000-0000-300000000001",
      missionId: wsF_UUID,
      type: "file",
      content:
        "# ADR Draft: Adopting Event Sourcing for Mission History\n\n## Status\nProposed\n\n## Context\nWe need a robust way to track all changes to mission state, including source ratings, claims extraction, and governance decisions. Current state-based persistence makes it hard to reconstruct the exact reasoning flow at a specific point in time.\n\n## Decision\nWe will adopt Event Sourcing for all mission history. Every change will be recorded as an immutable event. The current state will be a projection of these events.\n\n## Consequences\n- **Positive:** Perfect audit trail, ability to time-travel, decoupled read models.\n- **Negative:** Increased complexity, eventual consistency, need for snapshotting, team needs to learn the pattern.\n\n## Claims\n1. Event sourcing provides a perfect audit trail.\n2. It allows us to reconstruct state at any point in time.\n3. It simplifies complex business logic by focusing on events.",
      metadata: {
        title: "Event Sourcing Draft ADR",
        url: "fixtures/adr-review/event-sourcing-draft.md",
        reliability: "unrated",
        author: "architect",
      },
    })
    .onConflictDoNothing();

  // Nodes for Scenario F
  const nodesF = [
    {
      id: "f1",
      type: "claim",
      content: "Event sourcing provides a perfect audit trail",
    },
    {
      id: "f2",
      type: "claim",
      content: "It allows us to reconstruct state at any point in time",
    },
    {
      id: "f3",
      type: "claim",
      content: "It simplifies complex business logic by focusing on events",
    },
    {
      id: "f4",
      type: "risk",
      content: "Increased complexity of the persistence layer",
    },
    {
      id: "f5",
      type: "observation",
      content: "Team has limited experience with event sourcing",
    },
  ];

  for (const node of nodesF) {
    await db
      .insert(schema.epistemicNodes)
      .values({
        id: `00000000-0000-0000-0000-600000000${node.id.replace("f", "").padStart(3, "0")}`,
        workspaceId: wsF_UUID,
        type: node.type as "claim" | "hypothesis" | "observation" | "risk",
        content: node.content,
        strength: "strong",
      })
      .onConflictDoUpdate({
        target: schema.epistemicNodes.id,
        set: { content: node.content },
      });
  }

  // Edges for Scenario F
  await db
    .insert(schema.epistemicEdges)
    .values([
      {
        id: "00000000-0000-0000-0000-600000001001",
        workspaceId: wsF_UUID,
        sourceNodeId: "00000000-0000-0000-0000-600000000005", // limited experience
        targetNodeId: "00000000-0000-0000-0000-600000000004", // increased complexity
        type: "supports",
      },
      {
        id: "00000000-0000-0000-0000-600000001002",
        workspaceId: wsF_UUID,
        sourceNodeId: "00000000-0000-0000-0000-600000000004", // increased complexity
        targetNodeId: "00000000-0000-0000-0000-600000000003", // simplifies logic
        type: "contradicts",
      },
    ])
    .onConflictDoNothing();

  // Patch for Scenario F
  const patchId = "00000000-0000-0000-0000-600000002001";
  await db
    .insert(schema.artifactPatches)
    .values({
      id: patchId,
      workspaceId: wsF_UUID,
      artifactType: "ADR",
      targetId: "adr-001",
      status: "proposed",
      diff: {
        added: ["Add Snapshotting pattern to mitigate complexity"],
        removed: [],
        metadata: { author: "senior-dev" },
      },
      reason:
        "Addressing the risk of increased complexity noted in Gate 4 review.",
      authorId: "contributor-1",
      authorType: "user",
      version: 1,
    })
    .onConflictDoNothing();

  // Approval for Scenario F
  await db
    .insert(schema.approvalRequests)
    .values({
      id: "00000000-0000-0000-0000-600000003001",
      workspaceId: wsF_UUID,
      targetType: "artifact_patch",
      targetId: patchId,
      status: "pending",
      requiredRole: "approver",
      metadata: {
        urgency: "high",
        context: "Sprint S7 Pilot",
      },
    })
    .onConflictDoNothing();

  // 6. Russian Demo Scenarios
  console.log("Generating Russian Demo Scenarios...");

  // Scenario 7 (10 nodes)
  const ws7_UUID = "00000000-0000-0000-0000-000000000007";
  const nodes7 = [
    "Микросервисы повышают масштабируемость системы",
    "Сложность отладки в распределенных системах увеличивается",
    "Необходимость внедрения распределенной трассировки (Jaeger/Zipkin)",
    "Выбор протокола: gRPC обеспечивает лучшую производительность чем REST",
    "Использование Kafka для асинхронного взаимодействия сервисов",
    "Риск рассогласованности данных (Eventual Consistency)",
    "Паттерн Saga для управления распределенными транзакциями",
    "Централизованное логирование (ELK Stack) критично для эксплуатации",
    "Kubernetes как стандарт оркестрации контейнеров",
    "Мониторинг через Prometheus и Grafana для контроля SLA",
  ];
  for (let i = 0; i < nodes7.length; i++) {
    await db
      .insert(schema.epistemicNodes)
      .values({
        id: `00000000-0000-0000-0000-700000000${i.toString().padStart(3, "0")}`,
        workspaceId: ws7_UUID,
        type: (i % 2 === 0 ? "claim" : "hypothesis") as
          | "claim"
          | "hypothesis"
          | "observation"
          | "risk",
        content: nodes7[i],
        strength: "moderate",
      })
      .onConflictDoUpdate({
        target: schema.epistemicNodes.id,
        set: { content: nodes7[i] },
      });
  }

  // Scenario 8 (20 nodes) - Hybrid Cloud Strategy
  const ws8_UUID = "00000000-0000-0000-0000-000000000008";
  for (let i = 0; i < 20; i++) {
    const content =
      [
        "Облачные провайдеры снижают капитальные затраты (CAPEX)",
        "Безопасность данных в публичном облаке вызывает опасения",
        "Гибридное облако — оптимальный баланс для энтерпрайза",
        "Задержка сети (Latency) между on-prem и облаком",
        "Автоматическое масштабирование (Auto-scaling) экономит ресурсы",
        "Vendor lock-in: сложность миграции между провайдерами",
        "Terraform для управления инфраструктурой как кодом (IaC)",
        "Облачные базы данных (Managed SQL) упрощают администрирование",
        "Стоимость исходящего трафика (Egress) может быть высокой",
        "Serverless (Lambda/Cloud Functions) для событийных задач",
      ][i % 10] + ` (Аргумент #${i + 1})`;

    await db
      .insert(schema.epistemicNodes)
      .values({
        id: `00000000-0000-0000-0000-800000000${i.toString().padStart(3, "0")}`,
        workspaceId: ws8_UUID,
        type: (i % 4 === 0 ? "risk" : "claim") as
          | "claim"
          | "hypothesis"
          | "observation"
          | "risk",
        content,
        strength: "moderate",
      })
      .onConflictDoUpdate({
        target: schema.epistemicNodes.id,
        set: { content },
      });
  }

  // Scenario 9 (50 nodes) - Loyalty System
  const ws9_UUID = "00000000-0000-0000-0000-000000000009";
  for (let i = 0; i < 50; i++) {
    const content =
      [
        "Бонусные баллы должны сгорать через 12 месяцев",
        "Интеграция с кассовым ПО (POS) — критическая точка отказа",
        "Мобильное приложение как основной канал взаимодействия",
        "Персонализация предложений на основе ML-моделей",
        "Риск фрода (мошенничества) с начислением баллов",
        "Высокая нагрузка в периоды распродаж (Черная пятница)",
        "Соответствие ФЗ-152 о персональных данных",
        "Омниканальность: единый баланс в онлайне и офлайне",
        "A/B тесты механик лояльности для повышения конверсии",
        "Партнерская сеть: возможность тратить баллы у партнеров",
      ][i % 10] + ` (Деталь #${i + 1})`;

    await db
      .insert(schema.epistemicNodes)
      .values({
        id: `00000000-0000-0000-0000-900000000${i.toString().padStart(3, "0")}`,
        workspaceId: ws9_UUID,
        type: (i % 5 === 0 ? "observation" : "claim") as
          | "claim"
          | "hypothesis"
          | "observation"
          | "risk",
        content,
        strength: "strong",
      })
      .onConflictDoUpdate({
        target: schema.epistemicNodes.id,
        set: { content },
      });
  }

  // Edges for Russian Scenarios
  console.log("Generating edges for Russian Demo Scenarios...");

  // Edges for WS7 (10 nodes) - simple chain and some branches
  for (let i = 0; i < 9; i++) {
    await db
      .insert(schema.epistemicEdges)
      .values({
        id: `00000000-0000-0000-0000-700000001${i.toString().padStart(3, "0")}`,
        workspaceId: ws7_UUID,
        sourceNodeId: `00000000-0000-0000-0000-700000000${i.toString().padStart(3, "0")}`,
        targetNodeId: `00000000-0000-0000-0000-700000000${(i + 1).toString().padStart(3, "0")}`,
        type: (i % 3 === 0 ? "contradicts" : "supports") as
          | "supports"
          | "contradicts",
      })
      .onConflictDoNothing();
  }

  // Edges for WS8 (20 nodes) - star topology or mixed
  for (let i = 1; i < 20; i++) {
    await db
      .insert(schema.epistemicEdges)
      .values({
        id: `00000000-0000-0000-0000-800000001${i.toString().padStart(3, "0")}`,
        workspaceId: ws8_UUID,
        sourceNodeId: `00000000-0000-0000-0000-800000000${i.toString().padStart(3, "0")}`,
        targetNodeId: `00000000-0000-0000-0000-800000000000`, // All connect back to the first node
        type: (i % 2 === 0 ? "supports" : "contradicts") as
          | "supports"
          | "contradicts",
      })
      .onConflictDoNothing();
  }

  // Edges for WS9 (50 nodes) - more complex web
  for (let i = 0; i < 50; i++) {
    const targetIdx = (i + 5) % 50;
    await db
      .insert(schema.epistemicEdges)
      .values({
        id: `00000000-0000-0000-0000-900000001${i.toString().padStart(3, "0")}`,
        workspaceId: ws9_UUID,
        sourceNodeId: `00000000-0000-0000-0000-900000000${i.toString().padStart(3, "0")}`,
        targetNodeId: `00000000-0000-0000-0000-900000000${targetIdx.toString().padStart(3, "0")}`,
        type: (i % 3 === 0 ? "contradicts" : "supports") as
          | "supports"
          | "contradicts",
      })
      .onConflictDoNothing();
  }

  console.log("✅ MASTER SYNC COMPLETED!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Sync failed:", err);
  process.exit(1);
});
