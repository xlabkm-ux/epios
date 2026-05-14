import { FastifyInstance } from "fastify";
import { AddSourceUseCase, ListSourcesUseCase } from "@epios/application";
import { SourceType } from "@epios/domain";

export async function sourceRoutes(
  fastify: FastifyInstance,
  options: {
    addSourceUseCase: AddSourceUseCase;
    listSourcesUseCase: ListSourcesUseCase;
  },
) {
  fastify.get<{ Params: { workspaceId: string } }>(
    "/workspaces/:workspaceId/sources",
    async (request) => {
      return options.listSourcesUseCase.execute(request.params.workspaceId);
    },
  );

  fastify.post<{
    Params: { workspaceId: string };
    Body: {
      type: SourceType;
      content: string;
      metadata?: Record<string, unknown>;
    };
  }>("/workspaces/:workspaceId/sources", async (request, reply) => {
    const source = await options.addSourceUseCase.execute({
      workspaceId: request.params.workspaceId,
      ...request.body,
    });
    return reply.status(201).send(source);
  });
}
