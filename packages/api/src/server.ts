import Fastify from "fastify";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
import {
  PostgresMissionRepository,
  PostgresGraphRepository,
} from "@epos/infrastructure-postgres";
import {
  CreateMissionUseCase,
  ListMissionsUseCase,
  AddNodeUseCase,
  AddEdgeUseCase,
  PatchNodeUseCase,
  GetMissionGraphUseCase,
} from "@epos/application";
import { missionRoutes } from "./routes/mission.routes.js";
import { mappingRoutes } from "./routes/mapping.routes.js";

dotenv.config();

export type ServerDependencies = {
  missionRepo?: PostgresMissionRepository;
  graphRepo?: PostgresGraphRepository;
};

export function buildServer(deps: ServerDependencies = {}) {
  const app = Fastify({ logger: true });

  let missionRepo = deps.missionRepo;
  let graphRepo = deps.graphRepo;

  if (!missionRepo || !graphRepo) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined");
    }

    const queryClient = postgres(databaseUrl);
    const db = drizzle(queryClient);

    missionRepo = missionRepo ?? new PostgresMissionRepository(db);
    graphRepo = graphRepo ?? new PostgresGraphRepository(db);
  }

  const createMissionUseCase = new CreateMissionUseCase(missionRepo);
  const listMissionsUseCase = new ListMissionsUseCase(missionRepo);
  const addNodeUseCase = new AddNodeUseCase(missionRepo, graphRepo);
  const addEdgeUseCase = new AddEdgeUseCase(missionRepo, graphRepo);
  const patchNodeUseCase = new PatchNodeUseCase(graphRepo);
  const getMissionGraphUseCase = new GetMissionGraphUseCase(graphRepo);

  app.get("/health", async () => {
    return {
      ok: true,
      service: "epistemic-os-api",
      timestamp: new Date().toISOString(),
    };
  });

  app.register(missionRoutes, { createMissionUseCase, listMissionsUseCase });
  app.register(mappingRoutes, {
    addNodeUseCase,
    addEdgeUseCase,
    patchNodeUseCase,
    getMissionGraphUseCase,
  });

  return app;
}
