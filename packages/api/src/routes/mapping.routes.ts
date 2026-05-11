import { FastifyInstance } from "fastify";
import {
  AddNodeUseCase,
  AddEdgeUseCase,
  PatchNodeUseCase,
  GetMissionGraphUseCase,
} from "@epos/application";
import { AddNodeDto, AddEdgeDto, PatchNodeDto } from "../dto/index.js";

export async function mappingRoutes(
  fastify: FastifyInstance,
  options: {
    addNodeUseCase: AddNodeUseCase;
    addEdgeUseCase: AddEdgeUseCase;
    patchNodeUseCase: PatchNodeUseCase;
    getMissionGraphUseCase: GetMissionGraphUseCase;
  },
) {
  fastify.get<{ Params: { missionId: string } }>(
    "/missions/:missionId/graph",
    async (request) => {
      return options.getMissionGraphUseCase.execute(request.params.missionId);
    },
  );

  fastify.post<{ Params: { missionId: string }; Body: AddNodeDto }>(
    "/missions/:missionId/nodes",
    async (request, reply) => {
      const node = await options.addNodeUseCase.execute({
        missionId: request.params.missionId,
        ...request.body,
      });
      return reply.status(201).send(node);
    },
  );

  fastify.post<{ Params: { missionId: string }; Body: AddEdgeDto }>(
    "/missions/:missionId/edges",
    async (request, reply) => {
      const edge = await options.addEdgeUseCase.execute({
        missionId: request.params.missionId,
        ...request.body,
      });
      return reply.status(201).send(edge);
    },
  );

  fastify.patch<{
    Params: { missionId: string; nodeId: string };
    Body: PatchNodeDto;
  }>("/missions/:missionId/nodes/:nodeId", async (request, reply) => {
    const node = await options.patchNodeUseCase.execute({
      id: request.params.nodeId,
      ...request.body,
    });
    return reply.send(node);
  });
}
