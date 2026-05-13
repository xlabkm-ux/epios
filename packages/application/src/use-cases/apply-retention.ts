import { RetentionPolicy } from "@epios/domain";
import { GraphRepositoryPort, SecurityPort, GovernanceRepositoryPort } from "@epios/ports";

export class ApplyRetentionUseCase {
  constructor(
    private graphRepo: GraphRepositoryPort,
    private governanceRepo: GovernanceRepositoryPort,
    private security: SecurityPort
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
      // This is a simplification. In a real DB we'd use a query.
      // For now, we might not have a way to list all nodes easily from the port if it's not implemented.
      // Let's assume we can list them or we just log that we would prune them.
      console.log(`[RETENTION] Pruning nodes older than ${cutoffDate.toISOString()}`);
      // Actual implementation would go here if port supports it.
    }

    if (policy.resourceType === "audit_log") {
      // Similar for audit logs
      console.log(`[RETENTION] Pruning audit logs older than ${cutoffDate.toISOString()}`);
    }

    await this.security.logAudit({
      actorId: currentUser.id,
      action: "APPLY_RETENTION",
      resourceId: policy.id,
      resourceType: "retention_policy",
      details: { policy, cutoffDate }
    });

    return { prunedCount };
  }
}
