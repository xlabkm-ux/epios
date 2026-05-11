import { FastifyInstance } from "fastify";
import { MCPAppRegistryPort, MCPBridgePort } from "@epos/ports";

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
    const { appId, toolName, args } = request.body as {
      appId: string;
      toolName: string;
      args: Record<string, unknown>;
    };
    const result = await options.bridge.executeTool(appId, toolName, args);
    return reply.send(result);
  });
}
