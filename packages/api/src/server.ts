import Fastify from "fastify";
import cors from "@fastify/cors";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
import {
  PostgresWorkspaceRepository,
  PostgresGraphRepository,
  PostgresSourceRepository,
  PostgresRatingRepository,
  PostgresIdentityRepository,
} from "@epios/infrastructure-postgres";
import {
  CreateWorkspaceUseCase,
  ListWorkspacesUseCase,
  AddNodeUseCase,
  AddEdgeUseCase,
  PatchNodeUseCase,
  GetWorkspaceGraphUseCase,
  SubmitClaimUseCase,
  CastVoteUseCase,
  ListADRsUseCase,
  GetADRUseCase,
  AddSourceUseCase,
  ListSourcesUseCase,
  RateNodeUseCase,
  GetNodeRatingsUseCase,
  ProposePatchUseCase,
  ListPatchesUseCase,
  AssessReadinessUseCase,
  GetReadinessUseCase,
  ApplyPatchUseCase,
  GetTraceUseCase,
  RedactNodeUseCase,
  ApplyRetentionUseCase,
} from "@epios/application";
import { workspaceRoutes } from "./routes/workspace.routes.js";
import { mappingRoutes } from "./routes/mapping.routes.js";
import { governanceRoutes } from "./routes/governance.routes.js";
import {
  StartMappingRunUseCase,
  GetMappingRunUseCase,
  ListMappingRunsUseCase,
  MappingProcessor,
} from "@epios/application";
import { adrRoutes } from "./routes/adr.routes.js";
import { mcpRoutes } from "./routes/mcp.routes.js";
import { missionRoutes } from "./routes/mission.routes.js";
import { ratingRoutes } from "./routes/rating.routes.js";
import {
  InMemoryGovernanceRepository,
  InMemoryWorkspaceRepository,
  InMemoryGraphRepository,
  InMemoryADRRepository,
  InMemorySourceRepository,
  InMemoryRatingRepository,
  InMemoryMappingRepository,
  InMemoryOutboxRepository,
  InMemoryIdentityRepository,
  MockSecurityService,
  MOCK_ADRS,
} from "@epios/infrastructure-runtime";
import {
  InMemoryMCPAppRegistry,
  MockMCPBridge,
} from "@epios/infrastructure-mcp";
import {
  Workspace,
  EpistemicNode,
  EpistemicEdge,
  WorkspaceStatus,
  WorkspaceMode,
  WorkspaceSensitivity,
  NodeType,
  NodeStrength,
  EpistemicEdgeType,
  Source,
  RedactionRule,
  RetentionPolicy,
} from "@epios/domain";

const envConfig = dotenv.config();
import { expand } from "dotenv-expand";
expand(envConfig);

import {
  WorkspaceRepositoryPort,
  GraphRepositoryPort,
  GovernanceRepositoryPort,
  SourceRepositoryPort,
  RatingRepositoryPort,
  MappingRepositoryPort,
  OutboxRepositoryPort,
  MCPAppRegistryPort,
  MCPBridgePort,
  SecurityPort,
  IdentityRepositoryPort,
} from "@epios/ports";

export type ServerDependencies = {
  workspaceRepo?: WorkspaceRepositoryPort;
  graphRepo?: GraphRepositoryPort;
  governanceRepo?: GovernanceRepositoryPort;
  sourceRepo?: SourceRepositoryPort;
  ratingRepo?: RatingRepositoryPort;
  mappingRepo?: MappingRepositoryPort;
  outboxRepo?: OutboxRepositoryPort;
  mcpRegistry?: MCPAppRegistryPort;
  mcpBridge?: MCPBridgePort;
  security?: SecurityPort;
  identityRepo?: IdentityRepositoryPort;
};

export function buildServer(deps: ServerDependencies = {}) {
  const app = Fastify({ logger: true });

  app.register(cors, {
    origin: "*", // For development
  });

  let workspaceRepo = deps.workspaceRepo;
  let graphRepo = deps.graphRepo;
  let sourceRepo = deps.sourceRepo;
  let ratingRepo = deps.ratingRepo;
  let mappingRepo = deps.mappingRepo;
  let outboxRepo = deps.outboxRepo;
  let identityRepo = deps.identityRepo;

  if (!workspaceRepo || !graphRepo) {
    const databaseUrl = process.env.DATABASE_URL;
    const isMockMode =
      process.env.EPIOS_DATABASE_MODE === "mock" || !databaseUrl;
    console.log(
      `[SERVER] Database Mode: ${isMockMode ? "MOCK" : "POSTGRES"} (Env: ${process.env.EPIOS_DATABASE_MODE})`,
    );

    if (isMockMode) {
      const workspaceEId = "m5";
      const workspaceENodes: EpistemicNode[] = Array.from(
        { length: 50 },
        (_, i) => ({
          id: `ne${i + 1}`,
          workspaceId: workspaceEId,
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

      const workspaceEEdges: EpistemicEdge[] = [];
      for (let i = 0; i < 50; i++) {
        // Create a complex web: each node supports/contradicts/derives from others
        const targets = [
          (i + 1) % 50,
          (i * 7 + 3) % 50,
          Math.floor(i / 5) * 5, // Cluster base
        ];

        targets.forEach((targetIdx, j) => {
          if (targetIdx !== i) {
            workspaceEEdges.push({
              id: `ee${i}-${j}`,
              workspaceId: workspaceEId,
              sourceNodeId: workspaceENodes[i].id,
              targetNodeId: workspaceENodes[targetIdx].id,
              type: ["supports", "contradicts", "refines", "addresses"][
                (i + j) % 4
              ] as EpistemicEdgeType,
              metadata: {},
              createdAt: new Date(),
            });
          }
        });
      }

      const demoWorkspaces: Workspace[] = [
        {
          id: "m1",
          title: "Scenario A: Climate Research",
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
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
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
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
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
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
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
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
          id: "m5",
          title: "Scenario E: Neural Network Collapse",
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
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
        {
          id: "m6",
          title: "Scenario F: ADR Review - Event Sourcing",
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
          version: 1,
          brief: {
            goal: "Review and finalize ADR for event-driven architecture",
            successCriteria: ["Map critical points", "Narrow decision scope"],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "architect-1" },
        },
        {
          id: "m7",
          title: "Демо: Микросервисы (10 нод)",
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
          version: 1,
          brief: {
            goal: "Оценка архитектурных рисков при переходе на микросервисы",
            successCriteria: ["Выявить 5 рисков"],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "architect-1" },
        },
        {
          id: "m8",
          title: "Демо: Облачная миграция (20 нод)",
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
          version: 1,
          brief: {
            goal: "Синтез стратегии переноса legacy-систем в облако",
            successCriteria: ["Сформировать 3 стратегии"],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "cloud-architect" },
        },
        {
          id: "m9",
          title: "Демо: Система лояльности (50 нод)",
          status: "running" as WorkspaceStatus,
          mode: "assisted" as WorkspaceMode,
          sensitivity: "internal" as WorkspaceSensitivity,
          version: 1,
          brief: {
            goal: "Глубокий анализ требований и противоречий новой системы",
            successCriteria: ["Покрыть 50 аспектов системы"],
            constraints: [],
            unknowns: [],
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: { type: "user", id: "business-analyst" },
        },
      ];

      const demoNodes: EpistemicNode[] = [
        // Scenario A
        {
          id: "n1",
          workspaceId: "m1",
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
          workspaceId: "m1",
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
          workspaceId: "m1",
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
          workspaceId: "m1",
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
          workspaceId: "m2",
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
          workspaceId: "m2",
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
          workspaceId: "m2",
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
          workspaceId: "m3",
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
          workspaceId: "m3",
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
          workspaceId: "m4",
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
          workspaceId: "m4",
          type: "claim",
          content: "Hybrid SSM-Transformer block is optimal for edge devices",
          strength: "moderate",
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Scenario E
        ...workspaceENodes,
        // Russian Demo Scenarios
        ...Array.from({ length: 10 }, (_, i) => ({
          id: `ws7-n${i}`,
          workspaceId: "m7",
          type: (i % 2 === 0 ? "claim" : "hypothesis") as NodeType,
          content: [
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
          ][i],
          strength: "moderate" as NodeStrength,
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
        ...Array.from({ length: 20 }, (_, i) => ({
          id: `ws8-n${i}`,
          workspaceId: "m8",
          type: (i % 4 === 0 ? "risk" : "claim") as NodeType,
          content:
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
            ][i % 10] + ` (Аргумент #${i + 1})`,
          strength: "moderate" as NodeStrength,
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
        ...Array.from({ length: 50 }, (_, i) => ({
          id: `ws9-n${i}`,
          workspaceId: "m9",
          type: (i % 5 === 0 ? "observation" : "claim") as NodeType,
          content:
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
            ][i % 10] + ` (Деталь #${i + 1})`,
          strength: "strong" as NodeStrength,
          evidence: [],
          metadata: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
      ];

      const demoEdges: EpistemicEdge[] = [
        {
          id: "e1",
          workspaceId: "m1",
          sourceNodeId: "n2",
          targetNodeId: "n1",
          type: "supports",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e2",
          workspaceId: "m1",
          sourceNodeId: "n3",
          targetNodeId: "n1",
          type: "supports",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e3",
          workspaceId: "m1",
          sourceNodeId: "n4",
          targetNodeId: "n2",
          type: "refines",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e4",
          workspaceId: "m2",
          sourceNodeId: "n6",
          targetNodeId: "n5",
          type: "supports",
          metadata: {},
          createdAt: new Date(),
        },
        {
          id: "e5",
          workspaceId: "m2",
          sourceNodeId: "n7",
          targetNodeId: "n5",
          type: "addresses",
          metadata: {},
          createdAt: new Date(),
        },
        // Scenario E
        ...workspaceEEdges,
      ];

      const demoSources: Source[] = [
        {
          id: "s1",
          missionId: "m6",
          type: "file",
          content:
            "Proposed decision to adopt Event Sourcing for all mission history.",
          metadata: {
            title: "Event Sourcing Draft ADR",
            url: "fixtures/adr-review/event-sourcing-draft.md",
            reliability: "unrated",
            author: "architect",
          },
          createdAt: new Date(),
        },
      ];

      workspaceRepo =
        workspaceRepo ?? new InMemoryWorkspaceRepository(demoWorkspaces);
      graphRepo =
        graphRepo ?? new InMemoryGraphRepository(demoNodes, demoEdges);
      sourceRepo = sourceRepo ?? new InMemorySourceRepository(demoSources);
      ratingRepo = ratingRepo ?? new InMemoryRatingRepository();
      identityRepo = identityRepo ?? new InMemoryIdentityRepository();
    } else if (databaseUrl) {
      try {
        const queryClient = postgres(databaseUrl);
        const db = drizzle(queryClient);

        workspaceRepo = workspaceRepo ?? new PostgresWorkspaceRepository(db);
        graphRepo = graphRepo ?? new PostgresGraphRepository(db);
        sourceRepo = sourceRepo ?? new PostgresSourceRepository(db);
        ratingRepo = deps.ratingRepo ?? new PostgresRatingRepository(db);
        identityRepo = deps.identityRepo ?? new PostgresIdentityRepository(db);
      } catch (e) {
        console.error(
          "Failed to connect to Postgres, falling back to mock mode",
          e,
        );
        workspaceRepo = new InMemoryWorkspaceRepository();
        graphRepo = new InMemoryGraphRepository();
        sourceRepo = new InMemorySourceRepository();
        ratingRepo = new InMemoryRatingRepository();
      }
    }

    mappingRepo = mappingRepo ?? new InMemoryMappingRepository();
    outboxRepo = outboxRepo ?? new InMemoryOutboxRepository();
  }

  const createWorkspaceUseCase = new CreateWorkspaceUseCase(workspaceRepo!);
  const listWorkspacesUseCase = new ListWorkspacesUseCase(workspaceRepo!);
  const addNodeUseCase = new AddNodeUseCase(workspaceRepo!, graphRepo!);
  const addEdgeUseCase = new AddEdgeUseCase(workspaceRepo!, graphRepo!);
  const patchNodeUseCase = new PatchNodeUseCase(graphRepo!);
  const getWorkspaceGraphUseCase = new GetWorkspaceGraphUseCase(graphRepo!);
  const addSourceUseCase = new AddSourceUseCase(sourceRepo!);
  const listSourcesUseCase = new ListSourcesUseCase(sourceRepo!);
  const rateNodeUseCase = new RateNodeUseCase(ratingRepo!);
  const getNodeRatingsUseCase = new GetNodeRatingsUseCase(ratingRepo!);

  // Sprint 1: ADR Contracts
  const adrRepo = new InMemoryADRRepository(MOCK_ADRS);
  const listADRsUseCase = new ListADRsUseCase(adrRepo);
  const getADRUseCase = new GetADRUseCase(adrRepo);

  // Week 5: Governance & MCP
  const governanceRepo =
    deps.governanceRepo ?? new InMemoryGovernanceRepository();
  const submitClaimUseCase = new SubmitClaimUseCase(graphRepo!, governanceRepo);
  const proposePatchUseCase = new ProposePatchUseCase(
    governanceRepo,
    graphRepo!,
  );
  const listPatchesUseCase = new ListPatchesUseCase(governanceRepo);
  const castVoteUseCase = new CastVoteUseCase(governanceRepo, graphRepo!);

  const assessReadinessUseCase = new AssessReadinessUseCase(
    governanceRepo,
    graphRepo!,
  );
  const getReadinessUseCase = new GetReadinessUseCase(governanceRepo);
  const applyPatchUseCase = new ApplyPatchUseCase(governanceRepo, graphRepo!);
  const getTraceUseCase = new GetTraceUseCase(governanceRepo);

  const mcpRegistry = deps.mcpRegistry ?? new InMemoryMCPAppRegistry();
  const mcpBridge = deps.mcpBridge ?? new MockMCPBridge(mcpRegistry);

  // Security Initialization
  const security = deps.security ?? new MockSecurityService(identityRepo!);

  // Security Middleware-like hook
  app.addHook("onRequest", async (request) => {
    const userId = (request.headers["x-user-id"] as string) || "observer-1";
    const user = await identityRepo!.findById(userId);
    (security as MockSecurityService).setCurrentUser(user);
  });

  const redactNodeUseCase = new RedactNodeUseCase(graphRepo!, security);
  const applyRetentionUseCase = new ApplyRetentionUseCase(
    graphRepo!,
    governanceRepo,
    security,
  );

  app.get("/health", async () => {
    return {
      ok: true,
      service: "epistemic-os-api",
      timestamp: new Date().toISOString(),
    };
  });

  app.get("/api/v1/system/stats", async () => {
    const user = await security.getCurrentUser();
    if (!user || user.role !== "admin") {
      throw new Error("Forbidden");
    }
    const wsCount = (await workspaceRepo!.findAll()).length;
    return {
      workspaces: wsCount,
      users: (await identityRepo!.findById("admin-1")) ? 3 : 0,
      uptime: process.uptime(),
      version: "1.1.0-alpha",
    };
  });

  app.get("/api/v1/security/me", async () => {
    const user = await security.getCurrentUser();
    return { user };
  });

  app.get("/api/v1/security/audit", async (_request) => {
    const user = await security.getCurrentUser();
    if (!user || user.role !== "admin") {
      throw new Error("Forbidden");
    }
    const logs = await security.listAuditLogs({});
    return { logs };
  });

  app.post("/api/v1/security/redact", async (request) => {
    const { nodeId, rules } = request.body as {
      nodeId: string;
      rules: RedactionRule[];
    };
    const node = await redactNodeUseCase.execute(nodeId, rules);
    return { node };
  });

  app.post("/api/v1/security/retention", async (request) => {
    const { policy } = request.body as { policy: RetentionPolicy };
    const result = await applyRetentionUseCase.execute(policy);
    return result;
  });

  const startMappingRunUseCase = new StartMappingRunUseCase(
    mappingRepo!,
    outboxRepo!,
  );
  const getMappingRunUseCase = new GetMappingRunUseCase(mappingRepo!);
  const listMappingRunsUseCase = new ListMappingRunsUseCase(mappingRepo!);

  const mappingProcessor = new MappingProcessor(
    mappingRepo!,
    outboxRepo!,
    graphRepo!,
  );
  mappingProcessor.start();

  app.register(workspaceRoutes, {
    createWorkspaceUseCase,
    listWorkspacesUseCase,
  });
  app.register(mappingRoutes, {
    addNodeUseCase,
    addEdgeUseCase,
    patchNodeUseCase,
    getWorkspaceGraphUseCase,
    startMappingRunUseCase,
    getMappingRunUseCase,
    listMappingRunsUseCase,
  });
  app.register(governanceRoutes, {
    submitClaimUseCase,
    castVoteUseCase,
    proposePatchUseCase,
    listPatchesUseCase,
    assessReadinessUseCase,
    getReadinessUseCase,
    applyPatchUseCase,
    getTraceUseCase,
  });

  app.register(adrRoutes, { listADRsUseCase, getADRUseCase });
  app.register(mcpRoutes, { registry: mcpRegistry, bridge: mcpBridge });
  app.register(missionRoutes, { addSourceUseCase, listSourcesUseCase });
  app.register(ratingRoutes, { rateNodeUseCase, getNodeRatingsUseCase });

  return app;
}
