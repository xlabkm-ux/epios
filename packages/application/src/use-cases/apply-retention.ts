import { RetentionPolicy } from "@epios/domain";
import {
  GraphRepositoryPort,
  SecurityPort,
  GovernanceRepositoryPort,
} from "@epios/ports";

export class ApplyRetentionUseCase {
  constructor(
    private graphRepo: GraphRepositoryPort,
    private governanceRepo: GovernanceRepositoryPort,
    private security: SecurityPort,
  ) {}

  async execute(policy: RetentionPolicy): Promise<{ prunedCount: number }> {
    const currentUser = await this.security.getCurrentUser();
    if (!currentUser || currentUser.role !== "admin") {
      throw new Error("Only admins can apply retention policies");
    }

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - policy.retentionDays);

    let prunedCount = 0;

    if (policy.resourceType === "node") {
      const allNodes = await this.graphRepo.findAllNodes();
      for (const node of allNodes) {
        if (node.createdAt < cutoffDate) {
          const success = await this.graphRepo.deleteNode(node.id);
          if (success) {
            prunedCount++;
            console.log(
              `[RETENTION] Pruned node ${node.id} (Created: ${node.createdAt.toISOString()})`,
            );
          }
        }
      }
    }

    if (policy.resourceType === "audit_log") {
      // Security port currently doesn't have a bulk delete for audit logs,
      // so we keep it as a log for now.
      console.log(
        `[RETENTION] Pruning audit logs older than ${cutoffDate.toISOString()}`,
      );
    }

    await this.security.logAudit({
      actorId: currentUser.id,
      action: "APPLY_RETENTION",
      resourceId: policy.id,
      resourceType: "retention_policy",
      details: { policy, cutoffDate, prunedCount },
    });

    return { prunedCount };
  }
}
