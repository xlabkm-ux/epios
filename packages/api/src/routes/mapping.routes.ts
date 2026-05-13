import { FastifyInstance } from "fastify";
import {
  AddNodeUseCase,
  AddEdgeUseCase,
  PatchNodeUseCase,
  GetWorkspaceGraphUseCase,
} from "@epios/application";
import { AddNodeDto, AddEdgeDto, PatchNodeDto } from "../dto/index.js";

export async function mappingRoutes(
  fastify: FastifyInstance,
  options: {
    addNodeUseCase: AddNodeUseCase;
    addEdgeUseCase: AddEdgeUseCase;
    patchNodeUseCase: PatchNodeUseCase;
    getWorkspaceGraphUseCase: GetWorkspaceGraphUseCase;
  },
) {
  fastify.get<{ Params: { workspaceId: string } }>(
    "/workspaces/:workspaceId/graph",
    async (request) => {
      return options.getWorkspaceGraphUseCase.execute(
        request.params.workspaceId,
      );
    },
  );

  fastify.post<{ Params: { workspaceId: string }; Body: AddNodeDto }>(
    "/workspaces/:workspaceId/nodes",
    async (request, reply) => {
      const node = await options.addNodeUseCase.execute({
        workspaceId: request.params.workspaceId,
        ...request.body,
      });
      return reply.status(201).send(node);
    },
  );

  fastify.post<{ Params: { workspaceId: string }; Body: AddEdgeDto }>(
    "/workspaces/:workspaceId/edges",
    async (request, reply) => {
      const edge = await options.addEdgeUseCase.execute({
        workspaceId: request.params.workspaceId,
        ...request.body,
      });
      return reply.status(201).send(edge);
    },
  );

  fastify.patch<{
    Params: { workspaceId: string; nodeId: string };
    Body: PatchNodeDto;
  }>("/workspaces/:workspaceId/nodes/:nodeId", async (request, reply) => {
    const node = await options.patchNodeUseCase.execute({
      id: request.params.nodeId,
      ...request.body,
    });
    return reply.send(node);
  });
}
