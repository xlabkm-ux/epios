import { randomUUID } from "node:crypto";
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

    // Simple heuristic for readiness v1.1
    // Evidence Coverage
    const nodesWithEvidence = nodes.filter(
      (n) => n.evidence && n.evidence.length > 0,
    ).length;
    const coverageRatio =
      nodes.length > 0 ? nodesWithEvidence / nodes.length : 0;
    const coverage: "high" | "medium" | "low" =
      coverageRatio > 0.8 ? "high" : coverageRatio > 0.4 ? "medium" : "low";

    // Traceability
    const processes = await this.governanceRepo.findProcessesByWorkspaceId(
      request.workspaceId,
    );
    let traceability: "complete" | "partial" | "missing" = "missing";
    if (processes.length > 0) traceability = "partial";
    if (processes.length > 0 && processes.every((p) => p.status !== "pending"))
      traceability = "complete";

    // Risk Handling
    const risks = nodes.filter((n) => n.type === "risk").length;
    let riskHandling: "explicit" | "weak" | "missing" = "missing";
    if (risks > 2) riskHandling = "explicit";
    else if (risks > 0) riskHandling = "weak";

    // Status
    const readiness: ReadinessStatus =
      coverage === "high" &&
      traceability === "complete" &&
      riskHandling === "explicit"
        ? "ready"
        : riskHandling === "missing"
          ? "blocked"
          : "needs_review";

    const score = Math.round(coverageRatio * 100);

    const assessment: ReadinessAssessment = {
      id: randomUUID(),
      workspaceId: request.workspaceId,
      profileId: request.profileId,
      methodVersion: "1.1",
      status: readiness,
      indicators: {
        evidenceCoverage: coverage,
        traceability: traceability,
        riskHandling: riskHandling,
      },
      numericScore: score,
      explanation: `Readiness: ${readiness}. Score: ${score}%. Evidence Coverage: ${coverage}. Traceability: ${traceability}.`,
      createdAt: new Date(),
    };

    await this.governanceRepo.saveReadiness(assessment);

    // Log trace event
    await this.governanceRepo.saveTraceEvent({
      id: randomUUID(),
      workspaceId: request.workspaceId,
      type: "readiness_assessed",
      actorId: "system",
      targetId: request.workspaceId,
      metadata: { status: readiness, score },
      timestamp: new Date(),
    });

    return assessment;
  }
}
