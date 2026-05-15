import { randomUUID } from "node:crypto";
import { User, UserRole, AuditRecord } from "@epios/domain";
import { SecurityPort, IdentityRepositoryPort } from "@epios/ports";

export class InMemoryIdentityRepository implements IdentityRepositoryPort {
  private users: Map<string, User> = new Map();

  async findById(id: string): Promise<User | null> {
    const user = this.users.get(id) || null;
    return user;
  }

  async findByUsername(username: string): Promise<User | null> {
    return (
      Array.from(this.users.values()).find((u) => u.username === username) ||
      null
    );
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }
}

export class MockSecurityService implements SecurityPort {
  private currentUser: User | null = null;
  private auditLogs: AuditRecord[] = [];

  constructor(private identityRepo: IdentityRepositoryPort) {}

  setCurrentUser(user: User | null) {
    this.currentUser = user;
  }

  async getCurrentUser(): Promise<User | null> {
    return this.currentUser;
  }

  async authorize(
    role: UserRole,
    _action: string,
    _resource: string,
  ): Promise<boolean> {
    if (!this.currentUser) return false;

    // Simple hierarchy: system > approver > contributor > viewer
    const rolePower: Record<UserRole, number> = {
      system: 4,
      approver: 3,
      contributor: 2,
      viewer: 1,
    };

    const userPower = rolePower[this.currentUser.role] || 0;
    const requiredPower = rolePower[role] || 0;

    return userPower >= requiredPower;
  }

  async logAudit(record: Omit<AuditRecord, "id" | "timestamp">): Promise<void> {
    const newRecord: AuditRecord = {
      ...record,
      id: randomUUID(),
      timestamp: new Date(),
    };
    this.auditLogs.push(newRecord);
    console.log(
      `[AUDIT] ${newRecord.timestamp.toISOString()} - ${newRecord.actorId} performed ${newRecord.action} on ${newRecord.resourceType}:${newRecord.resourceId}`,
    );
  }

  async listAuditLogs(filters: {
    actorId?: string;
    resourceType?: string;
  }): Promise<AuditRecord[]> {
    return this.auditLogs.filter((log) => {
      if (filters.actorId && log.actorId !== filters.actorId) return false;
      if (filters.resourceType && log.resourceType !== filters.resourceType)
        return false;
      return true;
    });
  }
}
