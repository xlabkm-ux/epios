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
    console.log("[API] GET /workspaces called");
    try {
      const workspaces = await options.listWorkspacesUseCase.execute();
      console.log(`[API] Returning ${workspaces.length} workspaces`);
      return workspaces;
    } catch (e) {
      console.error("[API] Error in GET /workspaces:", e);
      throw e;
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
}
