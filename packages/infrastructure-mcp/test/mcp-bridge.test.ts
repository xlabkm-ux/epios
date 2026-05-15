import { describe, it, expect, vi } from "vitest";
import { MockMCPBridge } from "../src/mcp-bridge.js";
import { MCPAppRegistryPort } from "@epios/ports";

describe("MockMCPBridge", () => {
  const mockRegistry = {
    getApp: vi.fn(),
  } as unknown as MCPAppRegistryPort;

  const bridge = new MockMCPBridge(mockRegistry);

  it("should validate tool execution arguments", async () => {
    // Missing appId
    await expect(bridge.executeTool("", "tool", {})).rejects.toThrow(
      "Invalid MCP execution request",
    );

    // Missing toolName
    await expect(bridge.executeTool("app-1", "", {})).rejects.toThrow(
      "Invalid MCP execution request",
    );
  });

  it("should execute valid tool requests", async () => {
    const appId = "app-1";
    vi.mocked(mockRegistry.getApp).mockResolvedValue({
      id: appId,
      name: "Test App",
      url: "http://test.com",
      type: "sse",
      capabilities: [],
      status: "active",
    });

    const result = await bridge.executeTool(appId, "test_tool", {
      param: "value",
    });
    expect(result).toBeDefined();
    expect(mockRegistry.getApp).toHaveBeenCalledWith(appId);
  });

  it("should throw error if app not found", async () => {
    vi.mocked(mockRegistry.getApp).mockResolvedValue(null);
    await expect(bridge.executeTool("missing", "tool", {})).rejects.toThrow(
      "MCP Application missing not found",
    );
  });
});
