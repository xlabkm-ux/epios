import { GovernanceProcess } from "@epos/domain";
export interface GovernanceRepositoryPort {
  saveProcess(process: GovernanceProcess): Promise<void>;
  findProcessByNodeId(nodeId: string): Promise<GovernanceProcess | null>;
  findProcessesByMissionId(missionId: string): Promise<GovernanceProcess[]>;
  listPendingProcesses(): Promise<GovernanceProcess[]>;
}
