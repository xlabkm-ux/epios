import { FastifyInstance } from "fastify";
import {
  CreateWorkspaceUseCase,
  ListWorkspacesUseCase,
} from "@epios/application";
import { CreateWorkspaceDto } from "../dto/index.js";

export async function workspaceRoutes(
  fastify: FastifyInstance,
  options: {
    createWorkspaceUseCase: CreateWorkspaceUseCase;
    listWorkspacesUseCase: ListWorkspacesUseCase;
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
}
