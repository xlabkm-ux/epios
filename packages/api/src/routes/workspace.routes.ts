import { FastifyInstance } from "fastify";
import {
  CreateWorkspaceUseCase,
  ListWorkspacesUseCase,
  PatchWorkspaceUseCase,
  PatchWorkspaceDto,
} from "@epios/application";
import { CreateWorkspaceDto } from "../dto/index.js";

export async function workspaceRoutes(
  fastify: FastifyInstance,
  options: {
    createWorkspaceUseCase: CreateWorkspaceUseCase;
    listWorkspacesUseCase: ListWorkspacesUseCase;
    patchWorkspaceUseCase: PatchWorkspaceUseCase;
  },
) {
  fastify.get("/workspaces", async () => {
    return options.listWorkspacesUseCase.execute();
  });

  fastify.post<{ Body: CreateWorkspaceDto }>(
    "/workspaces",
    async (request, reply) => {
      const workspace = await options.createWorkspaceUseCase.execute(
        request.body,
      );
      return reply.status(201).send(workspace);
    },
  );

  fastify.patch<{ Params: { id: string }; Body: PatchWorkspaceDto }>(
    "/workspaces/:id",
    async (request, reply) => {
      const workspace = await options.patchWorkspaceUseCase.execute({
        id: request.params.id,
        ...request.body,
      });
      return reply.send(workspace);
    },
  );
}
