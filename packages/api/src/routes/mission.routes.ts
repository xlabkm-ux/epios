import { FastifyInstance } from "fastify";
import { CreateMissionUseCase } from "@epos/application";
import { CreateMissionDto } from "../dto/index.js";

export async function missionRoutes(
  fastify: FastifyInstance,
  options: { createMissionUseCase: CreateMissionUseCase },
) {
  fastify.post<{ Body: CreateMissionDto }>(
    "/missions",
    async (request, reply) => {
      const mission = await options.createMissionUseCase.execute(request.body);
      return reply.status(201).send(mission);
    },
  );
}
