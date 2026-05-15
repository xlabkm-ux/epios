import { randomUUID } from "node:crypto";
import { UnitOfWorkPort } from "@epios/ports";
import { ArtifactVersion } from "@epios/domain";

export interface ApplyPatchRequest {
  patchId: string;
  actorId: string;
}

export class ApplyPatchUseCase {
  constructor(private readonly uowProvider: UnitOfWorkPort) {}

  async execute(request: ApplyPatchRequest): Promise<ArtifactVersion> {
    return await this.uowProvider.runInTransaction(async (uow) => {
      const patch = await uow.governanceRepository.findPatchById(
        request.patchId,
      );
      if (!patch) throw new Error("PATCH_NOT_FOUND");

      if (patch.status === "applied") {
        throw new Error("PATCH_ALREADY_APPLIED");
      }

      const governanceProcess =
        await uow.governanceRepository.findProcessByNodeId(request.patchId);
      if (governanceProcess && governanceProcess.status !== "approved") {
        throw new Error("PATCH_NOT_APPROVED");
      }

      // Apply patch to target node content
      const targetNode = await uow.graphRepository.findNodeById(
        patch.targetNodeId,
      );
      if (!targetNode) throw new Error("TARGET_NODE_NOT_FOUND");

      targetNode.updateContent(patch.content);
      await uow.graphRepository.saveNode(targetNode);

      patch.apply();
      await uow.governanceRepository.savePatch(patch);

      // Create new artifact version
      const latestVersion = await uow.governanceRepository.getLatestVersion(
        patch.targetNodeId,
      );
      const newVersionNumber = latestVersion ? latestVersion.version + 1 : 1;

      const version: ArtifactVersion = {
        id: randomUUID(),
        artifactId: patch.targetNodeId,
        workspaceId: patch.workspaceId,
        version: newVersionNumber,
        content: targetNode.content,
        authorId: request.actorId,
        createdAt: new Date(),
      };

      await uow.governanceRepository.saveArtifactVersion(version);

      // Log trace event
      await uow.governanceRepository.saveTraceEvent({
        id: randomUUID(),
        workspaceId: patch.workspaceId,
        type: "artifact_version_created",
        actorId: request.actorId,
        targetId: version.id,
        metadata: { version: newVersionNumber, patchId: request.patchId },
        timestamp: new Date(),
      });

      return version;
    });
  }
}
