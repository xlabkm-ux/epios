import { randomUUID } from "node:crypto";
import { GovernanceRepositoryPort, GraphRepositoryPort } from "@epios/ports";
import { Vote } from "@epios/domain";
import { auditLogger } from "@epios/observability";
import { ApplyPatchUseCase } from "./apply-patch.js";

export interface CastVoteRequest {
  nodeId: string;
  actorId: string;
  decision: "approve" | "reject";
  rationale?: string;
}

export class CastVoteUseCase {
  private applyPatchUseCase: ApplyPatchUseCase;

  constructor(
    private governanceRepo: GovernanceRepositoryPort,
    private graphRepo: GraphRepositoryPort,
  ) {
    this.applyPatchUseCase = new ApplyPatchUseCase(governanceRepo, graphRepo);
  }

  async execute(request: CastVoteRequest): Promise<void> {
    const governanceProcess = await this.governanceRepo.findProcessByNodeId(
      request.nodeId,
    );
    if (!governanceProcess) {
      throw new Error("GOVERNANCE_PROCESS_NOT_FOUND");
    }

    if (governanceProcess.status !== "pending") {
      throw new Error("PROCESS_ALREADY_FINALIZED");
    }

    const vote: Vote = {
      actorId: request.actorId,
      decision: request.decision,
      rationale: request.rationale,
      timestamp: new Date(),
    };

    governanceProcess.votes.push(vote);
    governanceProcess.updatedAt = new Date();

    auditLogger.log({
      actorId: request.actorId,
      action: "cast_vote",
      targetId: request.nodeId,
      metadata: { decision: request.decision, rationale: request.rationale },
    });

    // Log trace event for the vote
    await this.governanceRepo.saveTraceEvent({
      id: randomUUID(),
      workspaceId: governanceProcess.workspaceId,
      type: "vote_cast",
      actorId: request.actorId,
      targetId: request.nodeId,
      metadata: { decision: request.decision, rationale: request.rationale },
      timestamp: new Date(),
    });

    // Check if governanceProcess should be finalized
    const approvals = governanceProcess.votes.filter(
      (v) => v.decision === "approve",
    ).length;
    const rejections = governanceProcess.votes.filter(
      (v) => v.decision === "reject",
    ).length;

    if (approvals >= governanceProcess.requiredVotes) {
      governanceProcess.status = "approved";

      // Check if this is a Patch governance — delegate to ApplyPatchUseCase
      const patch = await this.governanceRepo.findPatchById(request.nodeId);
      if (patch && patch.status === "pending") {
        await this.applyPatchUseCase.execute({
          patchId: patch.id,
          actorId: request.actorId,
        });
      } else if (!patch) {
        // Regular node (Claim) — strengthen on approval
        const node = await this.graphRepo.findNodeById(request.nodeId);
        if (node) {
          node.strength = "strong";
          node.updatedAt = new Date();
          await this.graphRepo.saveNode(node);
        }
      }

      // Log governanceProcess approved event
      await this.governanceRepo.saveTraceEvent({
        id: randomUUID(),
        workspaceId: governanceProcess.workspaceId,
        type: "governance_approved",
        actorId: "system",
        targetId: request.nodeId,
        metadata: { approvals },
        timestamp: new Date(),
      });
    } else if (
      rejections > 0 &&
      (governanceProcess.votes.length >= governanceProcess.requiredVotes ||
        rejections >= governanceProcess.requiredVotes)
    ) {
      governanceProcess.status = "rejected";

      const patch = await this.governanceRepo.findPatchById(request.nodeId);
      if (patch) {
        patch.status = "rejected";
        patch.updatedAt = new Date();
        await this.governanceRepo.savePatch(patch);
      }

      // Log governanceProcess rejected event
      await this.governanceRepo.saveTraceEvent({
        id: randomUUID(),
        workspaceId: governanceProcess.workspaceId,
        type: "governance_rejected",
        actorId: "system",
        targetId: request.nodeId,
        metadata: { rejections },
        timestamp: new Date(),
      });
    }

    await this.governanceRepo.saveProcess(governanceProcess);
  }
}
