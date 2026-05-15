import { FastifyInstance } from "fastify";
import { MCPAppRegistryPort, MCPBridgePort } from "@epios/ports";
import { ExecuteToolSchema } from "@epios/infrastructure-mcp";

export async function mcpRoutes(
  fastify: FastifyInstance,
  options: {
    registry: MCPAppRegistryPort;
    bridge: MCPBridgePort;
  },
) {
  fastify.get("/mcp/apps", async () => {
    return options.registry.listApps();
  });

  fastify.post("/mcp/apps", async (request, reply) => {
    // Validation is handled by registry.registerApp usually,
    // but we cast for now. TODO: Add Zod schema for registration.
    const app = await options.registry.registerApp(
      request.body as {
        id: string;
        name: string;
        url: string;
        type: "sse" | "stdio";
        capabilities: string[];
      },
    );
    return reply.status(201).send(app);
  });

  fastify.post("/mcp/execute", async (request, reply) => {
    const parseResult = ExecuteToolSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({
        error: "Invalid request payload",
        details: parseResult.error.format(),
      });
    }

    const { appId, toolName, args } = parseResult.data;
    const result = await options.bridge.executeTool(appId, toolName, args);
    return reply.send(result);
  });
}
