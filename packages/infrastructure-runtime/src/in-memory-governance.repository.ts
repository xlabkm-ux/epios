import { GovernanceProcess, NodePatch } from "@epios/domain";
import { GovernanceRepositoryPort } from "@epios/ports";

export class InMemoryGovernanceRepository implements GovernanceRepositoryPort {
  private processes: Map<string, GovernanceProcess> = new Map();
  private patches: Map<string, NodePatch> = new Map();

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

  async savePatch(patch: NodePatch): Promise<void> {
    this.patches.set(patch.id, patch);
  }

  async findPatchById(id: string): Promise<NodePatch | null> {
    return this.patches.get(id) || null;
  }

  async findPatchesByTargetNodeId(nodeId: string): Promise<NodePatch[]> {
    return Array.from(this.patches.values()).filter(
      (p) => p.targetNodeId === nodeId,
    );
  }

  async findPatchesByWorkspaceId(workspaceId: string): Promise<NodePatch[]> {
    return Array.from(this.patches.values()).filter(
      (p) => p.workspaceId === workspaceId,
    );
  }
}
