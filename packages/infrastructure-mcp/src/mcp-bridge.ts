import { MCPBridgePort, MCPAppRegistryPort } from "@epos/ports";

export class MockMCPBridge implements MCPBridgePort {
  constructor(private registry: MCPAppRegistryPort) {}

  async executeTool(
    appId: string,
    toolName: string,
    args: Record<string, unknown>,
  ): Promise<unknown> {
    const app = await this.registry.getApp(appId);
    if (!app) {
      throw new Error(`MCP Application ${appId} not found`);
    }

    // Mock execution logic
    console.log(
      `Executing tool ${toolName} on app ${app.name} with args:`,
      args,
    );

    if (toolName === "submit_claim") {
      return {
        success: true,
        claimId: `claim-${Math.random().toString(36).substr(2, 9)}`,
        status: "pending",
      };
    }

    return { success: true, result: "Mock result" };
  }

  async callResource(appId: string, resourceUri: string): Promise<unknown> {
    const app = await this.registry.getApp(appId);
    if (!app) {
      throw new Error(`MCP Application ${appId} not found`);
    }

    return { uri: resourceUri, content: "Mock resource content" };
  }

  async getAppMetadata(appId: string): Promise<unknown> {
    const app = await this.registry.getApp(appId);
    if (!app) {
      throw new Error(`MCP Application ${appId} not found`);
    }

    return {
      version: "1.0.0",
      capabilities: app.capabilities,
      tools: [
        {
          name: "submit_claim",
          description: "Submit a new claim to the mission",
        },
        {
          name: "add_evidence",
          description: "Add evidence to an existing node",
        },
      ],
    };
  }
}
