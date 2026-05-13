import { GovernanceProcess, NodePatch } from "@epios/domain";

export interface GovernanceRepositoryPort {
  saveProcess(process: GovernanceProcess): Promise<void>;
  findProcessByNodeId(nodeId: string): Promise<GovernanceProcess | null>;
  findProcessesByWorkspaceId(workspaceId: string): Promise<GovernanceProcess[]>;
  listPendingProcesses(): Promise<GovernanceProcess[]>;

  savePatch(patch: NodePatch): Promise<void>;
  findPatchById(id: string): Promise<NodePatch | null>;
  findPatchesByTargetNodeId(nodeId: string): Promise<NodePatch[]>;
  findPatchesByWorkspaceId(workspaceId: string): Promise<NodePatch[]>;
}
