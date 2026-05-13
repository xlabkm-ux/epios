import { MCPApp, MCPAppRegistryPort } from "@epios/ports";

export class InMemoryMCPAppRegistry implements MCPAppRegistryPort {
  private apps: Map<string, MCPApp> = new Map();

  async registerApp(app: Omit<MCPApp, "status">): Promise<MCPApp> {
    const newApp: MCPApp = {
      ...app,
      status: "active",
    };
    this.apps.set(newApp.id, newApp);
    return newApp;
  }

  async unregisterApp(id: string): Promise<void> {
    this.apps.delete(id);
  }

  async getApp(id: string): Promise<MCPApp | null> {
    return this.apps.get(id) || null;
  }

  async listApps(): Promise<MCPApp[]> {
    return Array.from(this.apps.values());
  }

  async updateAppStatus(id: string, status: MCPApp["status"]): Promise<void> {
    const app = this.apps.get(id);
    if (app) {
      app.status = status;
      this.apps.set(id, app);
    }
  }
}
