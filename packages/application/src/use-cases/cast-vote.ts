import { GovernanceRepositoryPort, GraphRepositoryPort } from "@epios/ports";
import { Vote } from "@epios/domain";
import { auditLogger } from "@epios/observability";

export interface CastVoteRequest {
  nodeId: string;
  actorId: string;
  decision: "approve" | "reject";
  rationale?: string;
}

export class CastVoteUseCase {
  constructor(
    private governanceRepo: GovernanceRepositoryPort,
    private graphRepo: GraphRepositoryPort,
  ) {}

  async execute(request: CastVoteRequest): Promise<void> {
    const process = await this.governanceRepo.findProcessByNodeId(
      request.nodeId,
    );
    if (!process) {
      throw new Error("GOVERNANCE_PROCESS_NOT_FOUND");
    }

    if (process.status !== "pending") {
      throw new Error("PROCESS_ALREADY_FINALIZED");
    }

    const vote: Vote = {
      actorId: request.actorId,
      decision: request.decision,
      rationale: request.rationale,
      timestamp: new Date(),
    };

    process.votes.push(vote);
    process.updatedAt = new Date();

    auditLogger.log({
      actorId: request.actorId,
      action: "cast_vote",
      targetId: request.nodeId,
      metadata: { decision: request.decision, rationale: request.rationale },
    });

    // Check if process should be finalized
    const approvals = process.votes.filter(
      (v) => v.decision === "approve",
    ).length;
    const rejections = process.votes.filter(
      (v) => v.decision === "reject",
    ).length;

    if (approvals >= process.requiredVotes) {
      process.status = "approved";

      // 1. Try to find if this is a Patch
      const patch = await this.governanceRepo.findPatchById(request.nodeId);
      if (patch) {
        const targetNode = await this.graphRepo.findNodeById(
          patch.targetNodeId,
        );
        if (targetNode) {
          targetNode.content = patch.content;
          targetNode.updatedAt = new Date();
          await this.graphRepo.saveNode(targetNode);

          patch.status = "applied";
          patch.updatedAt = new Date();
          await this.governanceRepo.savePatch(patch);
        }
      } else {
        // 2. Otherwise assume it's a regular node (Claim)
        const node = await this.graphRepo.findNodeById(request.nodeId);
        if (node) {
          node.strength = "strong";
          node.updatedAt = new Date();
          await this.graphRepo.saveNode(node);
        }
      }
    } else if (
      rejections > 0 &&
      (process.votes.length >= process.requiredVotes ||
        rejections >= process.requiredVotes)
    ) {
      process.status = "rejected";

      const patch = await this.governanceRepo.findPatchById(request.nodeId);
      if (patch) {
        patch.status = "rejected";
        patch.updatedAt = new Date();
        await this.governanceRepo.savePatch(patch);
      }
    }

    await this.governanceRepo.saveProcess(process);
  }
}
