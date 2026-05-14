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
  StartMappingRunUseCase,
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
  MockSecurityService,
  MOCK_ADRS,
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
    return reply.status(500).send({ error: "Internal Server Error" });
  });

  let workspaceRepo: WorkspaceRepositoryPort;
  let graphRepo: GraphRepositoryPort;
  let sourceRepo: SourceRepositoryPort;
  let ratingRepo: RatingRepositoryPort;
  let identityRepo: IdentityRepositoryPort;
  let governanceRepo: GovernanceRepositoryPort;

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
  } else {
    const queryClient = postgres(databaseUrl!);
    const db = drizzle(queryClient);
    workspaceRepo = deps.workspaceRepo ?? new PostgresWorkspaceRepository(db);
    graphRepo = deps.graphRepo ?? new PostgresGraphRepository(db);
    sourceRepo = deps.sourceRepo ?? new PostgresSourceRepository(db);
    ratingRepo = deps.ratingRepo ?? new PostgresRatingRepository(db);
    identityRepo = deps.identityRepo ?? new PostgresIdentityRepository(db);
    governanceRepo = deps.governanceRepo ?? new InMemoryGovernanceRepository(); // Fallback for governance
  }

  const mappingRepo = deps.mappingRepo ?? new InMemoryMappingRepository();
  const outboxRepo = deps.outboxRepo ?? new InMemoryOutboxRepository();

  // S2: Ensure non-null repositories (repos are now guaranteed defined)
  const createWorkspaceUseCase = new CreateWorkspaceUseCase(workspaceRepo);
  const listWorkspacesUseCase = new ListWorkspacesUseCase(workspaceRepo);
  const addNodeUseCase = new AddNodeUseCase(workspaceRepo, graphRepo);
  const addEdgeUseCase = new AddEdgeUseCase(workspaceRepo, graphRepo);
  const patchNodeUseCase = new PatchNodeUseCase(graphRepo);
  const getWorkspaceGraphUseCase = new GetWorkspaceGraphUseCase(graphRepo);
  const addSourceUseCase = new AddSourceUseCase(sourceRepo);
  const listSourcesUseCase = new ListSourcesUseCase(sourceRepo);
  const rateNodeUseCase = new RateNodeUseCase(ratingRepo);
  const getNodeRatingsUseCase = new GetNodeRatingsUseCase(ratingRepo);

  const adrRepo = new InMemoryADRRepository(MOCK_ADRS);
  const listADRsUseCase = new ListADRsUseCase(adrRepo);
  const getADRUseCase = new GetADRUseCase(adrRepo);

  const submitClaimUseCase = new SubmitClaimUseCase(graphRepo, governanceRepo);
  const proposePatchUseCase = new ProposePatchUseCase(
    governanceRepo,
    graphRepo,
  );
  const listPatchesUseCase = new ListPatchesUseCase(governanceRepo);
  const castVoteUseCase = new CastVoteUseCase(governanceRepo, graphRepo);
  const assessReadinessUseCase = new AssessReadinessUseCase(
    governanceRepo,
    graphRepo,
  );
  const getReadinessUseCase = new GetReadinessUseCase(governanceRepo);
  const applyPatchUseCase = new ApplyPatchUseCase(governanceRepo, graphRepo);
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

  const startMappingRunUseCase = new StartMappingRunUseCase(
    mappingRepo,
    outboxRepo,
  );
  const getMappingRunUseCase = new GetMappingRunUseCase(mappingRepo);
  const listMappingRunsUseCase = new ListMappingRunsUseCase(mappingRepo);

  const mappingProcessor = new MappingProcessor(
    mappingRepo,
    outboxRepo,
    graphRepo,
  );
  mappingProcessor.start();

  // Register Routes
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
    security,
  });
  app.register(adrRoutes, { listADRsUseCase, getADRUseCase });
  app.register(mcpRoutes, { registry: mcpRegistry, bridge: mcpBridge });
  app.register(sourceRoutes, { addSourceUseCase, listSourcesUseCase });
  app.register(ratingRoutes, { rateNodeUseCase, getNodeRatingsUseCase });
  app.register(securityRoutes, {
    security,
    redactNodeUseCase,
    applyRetentionUseCase,
  });

  return app;
}
