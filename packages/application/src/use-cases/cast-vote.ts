import { randomUUID } from "node:crypto";
import { GovernanceRepositoryPort, GraphRepositoryPort } from "@epios/ports";
import { Vote, ArtifactVersion } from "@epios/domain";
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

          // Create Artifact Version
          const latestVersion = await this.governanceRepo.getLatestVersion(
            patch.targetNodeId,
          );
          const newVersionNumber = latestVersion
            ? latestVersion.version + 1
            : 1;

          const version: ArtifactVersion = {
            id: randomUUID(),
            artifactId: patch.targetNodeId,
            workspaceId: patch.workspaceId,
            version: newVersionNumber,
            content: targetNode.content,
            authorId: request.actorId,
            createdAt: new Date(),
          };

          await this.governanceRepo.saveArtifactVersion(version);

          // Log trace event for artifact version
          await this.governanceRepo.saveTraceEvent({
            id: randomUUID(),
            workspaceId: patch.workspaceId,
            type: "artifact_version_created",
            actorId: request.actorId,
            targetId: version.id,
            metadata: { version: newVersionNumber, patchId: patch.id },
            timestamp: new Date(),
          });
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
