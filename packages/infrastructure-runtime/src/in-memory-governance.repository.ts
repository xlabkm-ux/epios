import { GovernanceProcess } from "@epos/domain";
import { GovernanceRepositoryPort } from "@epos/ports";

export class InMemoryGovernanceRepository implements GovernanceRepositoryPort {
  private processes: Map<string, GovernanceProcess> = new Map();

  async saveProcess(process: GovernanceProcess): Promise<void> {
    this.processes.set(process.nodeId, process);
  }

  async findProcessByNodeId(nodeId: string): Promise<GovernanceProcess | null> {
    return this.processes.get(nodeId) || null;
  }

  async findProcessesByMissionId(
    missionId: string,
  ): Promise<GovernanceProcess[]> {
    return Array.from(this.processes.values()).filter(
      (p) => p.missionId === missionId,
    );
  }

  async listPendingProcesses(): Promise<GovernanceProcess[]> {
    return Array.from(this.processes.values()).filter(
      (p) => p.status === "pending",
    );
  }
}
