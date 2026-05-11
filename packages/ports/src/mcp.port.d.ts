/**
 * Port for MCP Application Registry.
 * Manages the registration and discovery of MCP-compatible applications.
 */
export interface MCPApp {
  id: string;
  name: string;
  url: string;
  type: "sse" | "stdio";
  capabilities: string[];
  status: "active" | "inactive" | "error";
}
export interface MCPAppRegistryPort {
  registerApp(app: Omit<MCPApp, "status">): Promise<MCPApp>;
  unregisterApp(id: string): Promise<void>;
  getApp(id: string): Promise<MCPApp | null>;
  listApps(): Promise<MCPApp[]>;
  updateAppStatus(id: string, status: MCPApp["status"]): Promise<void>;
}
/**
 * Port for MCP Bridge.
 * Orchestrates communication between EPOS and registered MCP apps.
 */
export interface MCPBridgePort {
  executeTool(
    appId: string,
    toolName: string,
    args: Record<string, unknown>,
  ): Promise<unknown>;
  callResource(appId: string, resourceUri: string): Promise<unknown>;
  getAppMetadata(appId: string): Promise<unknown>;
}
