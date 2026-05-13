import { GovernanceProcess } from "@epios/domain";
import { GovernanceRepositoryPort } from "@epios/ports";

export class InMemoryGovernanceRepository implements GovernanceRepositoryPort {
  private processes: Map<string, GovernanceProcess> = new Map();

  async saveProcess(process: GovernanceProcess): Promise<void> {
    this.processes.set(process.nodeId, process);
  }

  async findProcessByNodeId(nodeId: string): Promise<GovernanceProcess | null> {
    return this.processes.get(nodeId) || null;
  }

  async findProcessesByWorkspaceId(
    workspaceId: string,
  ): Promise<GovernanceProcess[]> {
    return Array.from(this.processes.values()).filter(
      (p) => p.workspaceId === workspaceId,
    );
  }

  async listPendingProcesses(): Promise<GovernanceProcess[]> {
    return Array.from(this.processes.values()).filter(
      (p) => p.status === "pending",
    );
  }
}
