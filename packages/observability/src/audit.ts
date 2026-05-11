export interface AuditEntry {
  timestamp: Date;
  actorId: string;
  action: string;
  targetId: string;
  metadata: Record<string, unknown>;
}

export class AuditLogger {
  log(entry: Omit<AuditEntry, "timestamp">): void {
    const fullEntry: AuditEntry = {
      ...entry,
      timestamp: new Date(),
    };

    // In a real app, this would go to a database or a central logging service
    console.log(
      `[AUDIT] ${fullEntry.timestamp.toISOString()} | Actor: ${fullEntry.actorId} | Action: ${fullEntry.action} | Target: ${fullEntry.targetId}`,
      fullEntry.metadata,
    );
  }
}

export const auditLogger = new AuditLogger();
