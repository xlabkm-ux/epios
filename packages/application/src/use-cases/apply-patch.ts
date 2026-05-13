import crypto from "node:crypto";
import { GovernanceRepositoryPort, GraphRepositoryPort } from "@epios/ports";
import { ArtifactVersion } from "@epios/domain";

export interface ApplyPatchRequest {
  patchId: string;
  actorId: string;
}

export class ApplyPatchUseCase {
  constructor(
    private governanceRepo: GovernanceRepositoryPort,
    private graphRepo: GraphRepositoryPort,
  ) {}

  async execute(request: ApplyPatchRequest): Promise<ArtifactVersion> {
    const patch = await this.governanceRepo.findPatchById(request.patchId);
    if (!patch) throw new Error("PATCH_NOT_FOUND");

    if (patch.status === "applied") {
      throw new Error("PATCH_ALREADY_APPLIED");
    }

    const process = await this.governanceRepo.findProcessByNodeId(
      request.patchId,
    );
    if (process && process.status !== "approved") {
      throw new Error("PATCH_NOT_APPROVED");
    }

    // Apply patch to target node content
    const targetNode = await this.graphRepo.findNodeById(patch.targetNodeId);
    if (!targetNode) throw new Error("TARGET_NODE_NOT_FOUND");

    targetNode.content = patch.content;
    targetNode.updatedAt = new Date();
    await this.graphRepo.saveNode(targetNode);

    patch.status = "applied";
    patch.updatedAt = new Date();
    await this.governanceRepo.savePatch(patch);

    // Create new artifact version
    const latestVersion = await this.governanceRepo.getLatestVersion(
      patch.targetNodeId,
    );
    const newVersionNumber = latestVersion ? latestVersion.version + 1 : 1;

    const version: ArtifactVersion = {
      id: crypto.randomUUID(),
      artifactId: patch.targetNodeId,
      workspaceId: patch.workspaceId,
      version: newVersionNumber,
      content: targetNode.content,
      authorId: request.actorId,
      createdAt: new Date(),
    };

    await this.governanceRepo.saveArtifactVersion(version);

    // Log trace event
    await this.governanceRepo.saveTraceEvent({
      id: crypto.randomUUID(),
      workspaceId: patch.workspaceId,
      type: "artifact_version_created",
      actorId: request.actorId,
      targetId: version.id,
      metadata: { version: newVersionNumber, patchId: request.patchId },
      timestamp: new Date(),
    });

    return version;
  }
}
