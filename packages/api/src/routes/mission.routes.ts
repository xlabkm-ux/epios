import { FastifyInstance } from "fastify";
import { CreateMissionUseCase, ListMissionsUseCase } from "@epos/application";
import { CreateMissionDto } from "../dto/index.js";

export async function missionRoutes(
  fastify: FastifyInstance,
  options: {
    createMissionUseCase: CreateMissionUseCase;
    listMissionsUseCase: ListMissionsUseCase;
  },
) {
  fastify.get("/missions", async () => {
    return options.listMissionsUseCase.execute();
  });

  fastify.post<{ Body: CreateMissionDto }>(
    "/missions",
    async (request, reply) => {
      const mission = await options.createMissionUseCase.execute(request.body);
      return reply.status(201).send(mission);
    },
  );
}
