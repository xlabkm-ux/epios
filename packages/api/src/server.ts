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
  PostgresGovernanceRepository,
  PostgresOutboxRepository,
  PostgresMappingRepository,
  PostgresMissionRepository,
  PostgresMissionRunRepository,
  PostgresEvidenceRepository,
  PostgresArtifactRepository,
  PostgresDecisionRepository,
  PostgresApprovalRepository,
  PostgresUnitOfWorkProvider,
} from "@epios/infrastructure-postgres";
import {
  CreateWorkspaceUseCase,
  ListWorkspacesUseCase,
  PatchWorkspaceUseCase,
  AddNodeUseCase,
  AddEdgeUseCase,
  PatchNodeUseCase,
  GetWorkspaceGraphUseCase,
  SubmitClaimUseCase,
  CastVoteUseCase,
  ListADRsUseCase,
  GetADRUseCase,
  IngestSourceUseCase,
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
  RunMappingUseCase,
  GetMappingRunUseCase,
  ListMappingRunsUseCase,
  MappingProcessor,
} from "@epios/application";
import { workspaceRoutes } from "./routes/workspace.routes.js";
import { mappingRoutes } from "./routes/mapping.routes.js";
import { governanceRoutes } from "./routes/governance.routes.js";
import { adrRoutes } from "./routes/adr.routes.js";
import { mcpRoutes } from "./routes/mcp.routes.js";
import { sourceRoutes } from "./routes/source.routes.js";
import { ratingRoutes } from "./routes/rating.routes.js";
import { securityRoutes } from "./routes/security.routes.js";
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
  InMemoryUnitOfWorkProvider,
  InMemoryMissionRepository,
  InMemoryMissionRunRepository,
  InMemoryEvidenceRepository,
  InMemoryArtifactRepository,
  InMemoryDecisionRepository,
  InMemoryApprovalRepository,
  MockSecurityService,
  MOCK_ADRS,
  OutboxWorker,
} from "@epios/infrastructure-runtime";
import {
  InMemoryMCPAppRegistry,
  MockMCPBridge,
} from "@epios/infrastructure-mcp";
import { createMockData } from "./mock-data.js";
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
  MissionRepositoryPort,
  MissionRunRepositoryPort,
  EvidenceRepositoryPort,
  ArtifactRepositoryPort,
  DecisionRepositoryPort,
  ApprovalRepositoryPort,
  UnitOfWorkPort,
} from "@epios/ports";

const envConfig = dotenv.config();
import { expand } from "dotenv-expand";
expand(envConfig);

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
  startWorkers?: boolean;
};

export function buildServer(deps: ServerDependencies = {}) {
  const app = Fastify({ logger: true });

  // SEC1: Environment-aware CORS
  const isProd = process.env.NODE_ENV === "production";
  app.register(cors, {
    origin: isProd ? [process.env.FRONTEND_URL || ""] : "*",
  });

  // S1: Consistent Error Handling
  app.setErrorHandler((error, _request, reply) => {
    app.log.error(error);
    if (error.message === "FORBIDDEN") {
      return reply.status(403).send({ error: "Forbidden", code: "FORBIDDEN" });
    }
    if (error.message === "NOT_FOUND" || error.message.includes("not found")) {
      return reply.status(404).send({ error: "Not Found", code: "NOT_FOUND" });
    }
    if (error.name === "ConcurrencyError") {
      return reply
        .status(409)
        .send({ error: error.message, code: "CONCURRENCY_CONFLICT" });
    }
    return reply.status(500).send({ error: "Internal Server Error" });
  });

  let workspaceRepo: WorkspaceRepositoryPort;
  let graphRepo: GraphRepositoryPort;
  let sourceRepo: SourceRepositoryPort;
  let ratingRepo: RatingRepositoryPort;
  let identityRepo: IdentityRepositoryPort;
  let governanceRepo: GovernanceRepositoryPort;
  let outboxRepo: OutboxRepositoryPort;
  let mappingRepo: MappingRepositoryPort;
  let missionRepo: MissionRepositoryPort;
  let missionRunRepo: MissionRunRepositoryPort;
  let evidenceRepo: EvidenceRepositoryPort;
  let artifactRepo: ArtifactRepositoryPort;
  let decisionRepo: DecisionRepositoryPort;
  let approvalRepo: ApprovalRepositoryPort;
  let uowProvider: UnitOfWorkPort;

  const databaseUrl = process.env.DATABASE_URL;
  const isMockMode = process.env.EPIOS_DATABASE_MODE === "mock" || !databaseUrl;

  if (isMockMode) {
    const mock = createMockData();
    workspaceRepo =
      deps.workspaceRepo ?? new InMemoryWorkspaceRepository(mock.workspaces);
    graphRepo =
      deps.graphRepo ?? new InMemoryGraphRepository(mock.nodes, mock.edges);
    sourceRepo = deps.sourceRepo ?? new InMemorySourceRepository(mock.sources);
    ratingRepo = deps.ratingRepo ?? new InMemoryRatingRepository();
    identityRepo = deps.identityRepo ?? new InMemoryIdentityRepository();
    governanceRepo = deps.governanceRepo ?? new InMemoryGovernanceRepository();
    outboxRepo = deps.outboxRepo ?? new InMemoryOutboxRepository();
    mappingRepo = deps.mappingRepo ?? new InMemoryMappingRepository();

    missionRepo = new InMemoryMissionRepository();

    missionRunRepo = new InMemoryMissionRunRepository();

    evidenceRepo = new InMemoryEvidenceRepository();

    artifactRepo = new InMemoryArtifactRepository();

    decisionRepo = new InMemoryDecisionRepository();

    approvalRepo = new InMemoryApprovalRepository();
    uowProvider = new InMemoryUnitOfWorkProvider(
      graphRepo,
      governanceRepo,
      workspaceRepo,
      sourceRepo,
      ratingRepo,
      outboxRepo,
      missionRepo,
      missionRunRepo,
      evidenceRepo,
      artifactRepo,
      decisionRepo,
      approvalRepo,
      mappingRepo,
    );
  } else {
    const queryClient = postgres(databaseUrl!);
    const db = drizzle(queryClient);
    workspaceRepo = deps.workspaceRepo ?? new PostgresWorkspaceRepository(db);
    graphRepo = deps.graphRepo ?? new PostgresGraphRepository(db);
    sourceRepo = deps.sourceRepo ?? new PostgresSourceRepository(db);
    ratingRepo = deps.ratingRepo ?? new PostgresRatingRepository(db);
    identityRepo = deps.identityRepo ?? new PostgresIdentityRepository(db);
    governanceRepo =
      deps.governanceRepo ?? new PostgresGovernanceRepository(db);
    outboxRepo = deps.outboxRepo ?? new PostgresOutboxRepository(db);
    mappingRepo = deps.mappingRepo ?? new PostgresMappingRepository(db);
    // eslint-disable-next-line no-useless-assignment
    missionRepo = new PostgresMissionRepository(db);
    // eslint-disable-next-line no-useless-assignment
    missionRunRepo = new PostgresMissionRunRepository(db);
    // eslint-disable-next-line no-useless-assignment
    evidenceRepo = new PostgresEvidenceRepository(
      db,
    ) as unknown as EvidenceRepositoryPort;
    // eslint-disable-next-line no-useless-assignment
    artifactRepo = new PostgresArtifactRepository(db);
    // eslint-disable-next-line no-useless-assignment
    decisionRepo = new PostgresDecisionRepository(db);
    // eslint-disable-next-line no-useless-assignment
    approvalRepo = new PostgresApprovalRepository(db);
    uowProvider = new PostgresUnitOfWorkProvider(db);
  }

  // S2: Ensure non-null repositories (repos are now guaranteed defined)
  const createWorkspaceUseCase = new CreateWorkspaceUseCase(workspaceRepo);
  const listWorkspacesUseCase = new ListWorkspacesUseCase(workspaceRepo);
  const patchWorkspaceUseCase = new PatchWorkspaceUseCase(workspaceRepo);
  const addNodeUseCase = new AddNodeUseCase(workspaceRepo, graphRepo);
  const addEdgeUseCase = new AddEdgeUseCase(workspaceRepo, graphRepo);
  const patchNodeUseCase = new PatchNodeUseCase(graphRepo);
  const getWorkspaceGraphUseCase = new GetWorkspaceGraphUseCase(graphRepo);
  const ingestSourceUseCase = new IngestSourceUseCase(uowProvider);
  const listSourcesUseCase = new ListSourcesUseCase(sourceRepo);
  const rateNodeUseCase = new RateNodeUseCase(ratingRepo);
  const getNodeRatingsUseCase = new GetNodeRatingsUseCase(ratingRepo);

  const adrRepo = new InMemoryADRRepository(MOCK_ADRS);
  const listADRsUseCase = new ListADRsUseCase(adrRepo);
  const getADRUseCase = new GetADRUseCase(adrRepo);

  const submitClaimUseCase = new SubmitClaimUseCase(uowProvider);
  const proposePatchUseCase = new ProposePatchUseCase(
    governanceRepo,
    graphRepo,
  );
  const listPatchesUseCase = new ListPatchesUseCase(governanceRepo);
  const castVoteUseCase = new CastVoteUseCase(uowProvider);
  const assessReadinessUseCase = new AssessReadinessUseCase(
    governanceRepo,
    graphRepo,
  );
  const getReadinessUseCase = new GetReadinessUseCase(governanceRepo);
  const applyPatchUseCase = new ApplyPatchUseCase(uowProvider);
  const getTraceUseCase = new GetTraceUseCase(governanceRepo);

  const mcpRegistry = deps.mcpRegistry ?? new InMemoryMCPAppRegistry();
  const mcpBridge = deps.mcpBridge ?? new MockMCPBridge(mcpRegistry);

  const security = deps.security ?? new MockSecurityService(identityRepo);

  // Security identity injection
  app.addHook("onRequest", async (request) => {
    const userId = (request.headers["x-user-id"] as string) || "observer-1";
    const user = await identityRepo.findById(userId);
    (security as MockSecurityService).setCurrentUser(user);
  });

  const redactNodeUseCase = new RedactNodeUseCase(graphRepo, security);
  const applyRetentionUseCase = new ApplyRetentionUseCase(
    graphRepo,
    governanceRepo,
    security,
  );

  app.get("/health", async () => ({
    ok: true,
    service: "epistemic-os-api",
    timestamp: new Date().toISOString(),
  }));

  const runMappingUseCase = new RunMappingUseCase(uowProvider);
  const getMappingRunUseCase = new GetMappingRunUseCase(mappingRepo);
  const listMappingRunsUseCase = new ListMappingRunsUseCase(mappingRepo);

  if (deps.startWorkers !== false) {
    const mappingProcessor = new MappingProcessor(
      mappingRepo,
      outboxRepo,
      graphRepo,
    );
    mappingProcessor.start();

    const outboxWorker = new OutboxWorker(outboxRepo);
    outboxWorker.start();

    // Hook into close to stop workers
    app.addHook("onClose", async () => {
      mappingProcessor.stop();
      outboxWorker.stop();
    });
  }

  // Register Routes
  app.register(workspaceRoutes, {
    createWorkspaceUseCase,
    listWorkspacesUseCase,
    patchWorkspaceUseCase,
  });
  app.register(mappingRoutes, {
    addNodeUseCase,
    addEdgeUseCase,
    patchNodeUseCase,
    getWorkspaceGraphUseCase,
    runMappingUseCase,
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
    security,
  });
  app.register(adrRoutes, { listADRsUseCase, getADRUseCase });
  app.register(mcpRoutes, { registry: mcpRegistry, bridge: mcpBridge });
  app.register(sourceRoutes, { ingestSourceUseCase, listSourcesUseCase });
  app.register(ratingRoutes, { rateNodeUseCase, getNodeRatingsUseCase });
  app.register(securityRoutes, {
    security,
    redactNodeUseCase,
    applyRetentionUseCase,
  });

  return app;
}
