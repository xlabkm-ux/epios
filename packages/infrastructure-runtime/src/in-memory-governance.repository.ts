import {
  GovernanceProcess,
  NodePatch,
  ReadinessAssessment,
  ArtifactVersion,
  TraceEvent,
  ConcurrencyError,
} from "@epios/domain";
import { GovernanceRepositoryPort } from "@epios/ports";

export class InMemoryGovernanceRepository implements GovernanceRepositoryPort {
  private processes: Map<string, GovernanceProcess> = new Map();
  private patches: Map<string, NodePatch> = new Map();
  private assessments: Map<string, ReadinessAssessment> = new Map();
  private versions: ArtifactVersion[] = [];
  private trace: TraceEvent[] = [];

  async saveProcess(process: GovernanceProcess): Promise<void> {
    const existing = this.processes.get(process.nodeId);
    if (existing && existing.version !== process.version) {
      throw new ConcurrencyError(
        `Process ${process.nodeId} concurrency conflict`,
      );
    }
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
    const existing = this.patches.get(patch.id);
    if (existing && existing.version !== patch.version) {
      throw new ConcurrencyError(`Patch ${patch.id} concurrency conflict`);
    }
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

  async saveReadiness(assessment: ReadinessAssessment): Promise<void> {
    this.assessments.set(assessment.workspaceId, assessment);
  }

  async findReadinessByWorkspaceId(
    workspaceId: string,
  ): Promise<ReadinessAssessment | null> {
    return this.assessments.get(workspaceId) || null;
  }

  async saveArtifactVersion(version: ArtifactVersion): Promise<void> {
    this.versions.push(version);
  }

  async findVersionsByArtifactId(
    artifactId: string,
  ): Promise<ArtifactVersion[]> {
    return this.versions.filter((v) => v.artifactId === artifactId);
  }

  async getLatestVersion(artifactId: string): Promise<ArtifactVersion | null> {
    const artifactVersions = this.versions.filter(
      (v) => v.artifactId === artifactId,
    );
    if (artifactVersions.length === 0) return null;
    return artifactVersions.sort((a, b) => b.version - a.version)[0];
  }

  async saveTraceEvent(event: TraceEvent): Promise<void> {
    this.trace.push(event);
  }

  async findTraceByWorkspaceId(workspaceId: string): Promise<TraceEvent[]> {
    return this.trace
      .filter((e) => e.workspaceId === workspaceId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }
}
