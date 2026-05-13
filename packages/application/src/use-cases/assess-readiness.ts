import { GovernanceRepositoryPort, GraphRepositoryPort } from "@epios/ports";
import { ReadinessAssessment, ReadinessStatus } from "@epios/domain";

export interface AssessReadinessRequest {
  workspaceId: string;
  profileId: string;
}

export class AssessReadinessUseCase {
  constructor(
    private governanceRepo: GovernanceRepositoryPort,
    private graphRepo: GraphRepositoryPort,
  ) {}

  async execute(request: AssessReadinessRequest): Promise<ReadinessAssessment> {
    const nodes = await this.graphRepo.findNodesByWorkspaceId(
      request.workspaceId,
    );

    // Simple heuristic for readiness v0.1
    // Evidence Coverage
    const nodesWithEvidence = nodes.filter(
      (n) => n.evidence && n.evidence.length > 0,
    ).length;
    const coverageRatio =
      nodes.length > 0 ? nodesWithEvidence / nodes.length : 0;

    let evidenceCoverage: "high" | "medium" | "low" = "low";
    if (coverageRatio > 0.8) evidenceCoverage = "high";
    else if (coverageRatio > 0.4) evidenceCoverage = "medium";

    // Traceability
    const processes = await this.governanceRepo.findProcessesByWorkspaceId(
      request.workspaceId,
    );
    let traceability: "complete" | "partial" | "missing" = "missing";
    if (processes.length > 0) traceability = "partial";
    if (processes.every((p) => p.status !== "pending"))
      traceability = "complete";

    // Risk Handling
    const risks = nodes.filter((n) => n.type === "risk").length;
    let riskHandling: "explicit" | "weak" | "missing" = "missing";
    if (risks > 2) riskHandling = "explicit";
    else if (risks > 0) riskHandling = "weak";

    // Status
    let status: ReadinessStatus = "needs_review";
    if (
      evidenceCoverage === "high" &&
      traceability === "complete" &&
      riskHandling === "explicit"
    ) {
      status = "ready";
    } else if (riskHandling === "missing") {
      status = "blocked"; // Hard block if no risks addressed
    }

    const assessment: ReadinessAssessment = {
      id: crypto.randomUUID(),
      workspaceId: request.workspaceId,
      profileId: request.profileId,
      methodVersion: "v0.1",
      status,
      indicators: {
        evidenceCoverage,
        traceability,
        riskHandling,
      },
      numericScore: Math.round(coverageRatio * 100),
      explanation: `Readiness assessed based on ${nodes.length} nodes. Evidence coverage is ${Math.round(coverageRatio * 100)}%. ${status === "blocked" ? "Critical: No risks identified/handled." : ""}`,
      createdAt: new Date(),
    };

    await this.governanceRepo.saveReadiness(assessment);

    // Log trace event
    await this.governanceRepo.saveTraceEvent({
      id: crypto.randomUUID(),
      workspaceId: request.workspaceId,
      type: "readiness_assessed",
      actorId: "system",
      targetId: assessment.id,
      metadata: { status, score: assessment.numericScore },
      timestamp: new Date(),
    });

    return assessment;
  }
}
