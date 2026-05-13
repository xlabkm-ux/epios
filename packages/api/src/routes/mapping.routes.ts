import { FastifyInstance } from "fastify";
import {
  AddNodeUseCase,
  AddEdgeUseCase,
  PatchNodeUseCase,
  GetWorkspaceGraphUseCase,
  StartMappingRunUseCase,
  GetMappingRunUseCase,
  ListMappingRunsUseCase,
} from "@epios/application";
import { AddNodeDto, AddEdgeDto, PatchNodeDto } from "../dto/index.js";

export async function mappingRoutes(
  fastify: FastifyInstance,
  options: {
    addNodeUseCase: AddNodeUseCase;
    addEdgeUseCase: AddEdgeUseCase;
    patchNodeUseCase: PatchNodeUseCase;
    getWorkspaceGraphUseCase: GetWorkspaceGraphUseCase;
    startMappingRunUseCase: StartMappingRunUseCase;
    getMappingRunUseCase: GetMappingRunUseCase;
    listMappingRunsUseCase: ListMappingRunsUseCase;
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

  fastify.post<{ Params: { workspaceId: string } }>(
    "/workspaces/:workspaceId/mapping/runs",
    async (request, reply) => {
      const run = await options.startMappingRunUseCase.execute({
        workspaceId: request.params.workspaceId,
      });
      return reply.status(202).send(run);
    },
  );

  fastify.get<{ Params: { workspaceId: string } }>(
    "/workspaces/:workspaceId/mapping/runs",
    async (request) => {
      return options.listMappingRunsUseCase.execute(request.params.workspaceId);
    },
  );

  fastify.get<{ Params: { workspaceId: string; runId: string } }>(
    "/workspaces/:workspaceId/mapping/runs/:runId",
    async (request, reply) => {
      const run = await options.getMappingRunUseCase.execute(
        request.params.runId,
      );
      if (!run) return reply.status(404).send({ error: "Run not found" });
      return reply.send(run);
    },
  );
}
