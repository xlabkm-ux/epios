import { FastifyInstance } from "fastify";
import { AddSourceUseCase, ListSourcesUseCase } from "@epios/application";
import { SourceType } from "@epios/domain";

export async function missionRoutes(
  fastify: FastifyInstance,
  options: {
    addSourceUseCase: AddSourceUseCase;
    listSourcesUseCase: ListSourcesUseCase;
  },
) {
  fastify.get<{ Params: { missionId: string } }>(
    "/missions/:missionId/sources",
    async (request) => {
      return options.listSourcesUseCase.execute(request.params.missionId);
    },
  );

  fastify.post<{
    Params: { missionId: string };
    Body: {
      type: SourceType;
      content: string;
      metadata?: Record<string, unknown>;
    };
  }>("/missions/:missionId/sources", async (request, reply) => {
    const source = await options.addSourceUseCase.execute({
      missionId: request.params.missionId,
      ...request.body,
    });
    return reply.status(201).send(source);
  });
}
