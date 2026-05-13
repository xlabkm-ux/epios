import { FastifyInstance } from "fastify";
import { CreateMissionUseCase, ListMissionsUseCase } from "@epios/application";
import { CreateMissionDto } from "../dto/index.js";

export async function missionRoutes(
  fastify: FastifyInstance,
  options: {
    createMissionUseCase: CreateMissionUseCase;
    listMissionsUseCase: ListMissionsUseCase;
  },
) {
  fastify.get("/missions", async () => {
    console.log("[API] GET /missions called");
    try {
      const missions = await options.listMissionsUseCase.execute();
      console.log(`[API] Returning ${missions.length} missions`);
      return missions;
    } catch (e) {
      console.error("[API] Error in GET /missions:", e);
      throw e;
    }
  });

  fastify.post<{ Body: CreateMissionDto }>(
    "/missions",
    async (request, reply) => {
      const mission = await options.createMissionUseCase.execute(request.body);
      return reply.status(201).send(mission);
    },
  );
}
