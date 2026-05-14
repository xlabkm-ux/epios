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
    try {
      return await options.listWorkspacesUseCase.execute();
    } catch (error) {
      console.error("GET /workspaces error:", error);
      throw error;
    }
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

  fastify.patch<{
    Params: { id: string };
    Body: Partial<PatchWorkspaceDto> & { archivedAt?: string | Date };
  }>("/workspaces/:id", async (request, reply) => {
    const data = { ...request.body };
    if (data.archivedAt) {
      data.archivedAt = new Date(data.archivedAt);
    }
    const workspace = await options.patchWorkspaceUseCase.execute({
      id: request.params.id,
      ...data,
    });
    return reply.send(workspace);
  });
}
