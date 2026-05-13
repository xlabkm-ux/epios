import {
  GovernanceProcess,
  NodePatch,
  ReadinessAssessment,
  ArtifactVersion,
  TraceEvent,
} from "@epios/domain";

export interface GovernanceRepositoryPort {
  saveProcess(process: GovernanceProcess): Promise<void>;
  findProcessByNodeId(nodeId: string): Promise<GovernanceProcess | null>;
  findProcessesByWorkspaceId(workspaceId: string): Promise<GovernanceProcess[]>;
  listPendingProcesses(): Promise<GovernanceProcess[]>;

  savePatch(patch: NodePatch): Promise<void>;
  findPatchById(id: string): Promise<NodePatch | null>;
  findPatchesByTargetNodeId(nodeId: string): Promise<NodePatch[]>;
  findPatchesByWorkspaceId(workspaceId: string): Promise<NodePatch[]>;

  saveReadiness(assessment: ReadinessAssessment): Promise<void>;
  findReadinessByWorkspaceId(
    workspaceId: string,
  ): Promise<ReadinessAssessment | null>;

  saveArtifactVersion(version: ArtifactVersion): Promise<void>;
  findVersionsByArtifactId(artifactId: string): Promise<ArtifactVersion[]>;
  getLatestVersion(artifactId: string): Promise<ArtifactVersion | null>;

  saveTraceEvent(event: TraceEvent): Promise<void>;
  findTraceByWorkspaceId(workspaceId: string): Promise<TraceEvent[]>;
}
