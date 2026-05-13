import { User, UserRole, AuditRecord, AuditRecord as AuditRecordDomain } from "@epios/domain";
import { SecurityPort, IdentityRepositoryPort } from "@epios/ports";

export class InMemoryIdentityRepository implements IdentityRepositoryPort {
  private users: Map<string, User> = new Map();

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async findByUsername(username: string): Promise<User | null> {
    return Array.from(this.users.values()).find(u => u.username === username) || null;
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }
}

export class MockSecurityService implements SecurityPort {
  private currentUser: User | null = null;
  private auditLogs: AuditRecordDomain[] = [];

  constructor(private identityRepo: IdentityRepositoryPort) {}

  setCurrentUser(user: User | null) {
    this.currentUser = user;
  }

  async getCurrentUser(): Promise<User | null> {
    return this.currentUser;
  }

  async authorize(role: UserRole, action: string, resource: string): Promise<boolean> {
    if (!this.currentUser) return false;
    
    // Simple hierarchy: admin > reviewer > observer
    const rolePower = {
      admin: 3,
      reviewer: 2,
      observer: 1
    };

    const userPower = rolePower[this.currentUser.role];
    const requiredPower = rolePower[role];

    return userPower >= requiredPower;
  }

  async logAudit(record: Omit<AuditRecordDomain, "id" | "timestamp">): Promise<void> {
    const newRecord: AuditRecordDomain = {
      ...record,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date()
    };
    this.auditLogs.push(newRecord);
    console.log(`[AUDIT] ${newRecord.timestamp.toISOString()} - ${newRecord.actorId} performed ${newRecord.action} on ${newRecord.resourceType}:${newRecord.resourceId}`);
  }

  async listAuditLogs(filters: { actorId?: string; resourceType?: string }): Promise<AuditRecordDomain[]> {
    return this.auditLogs.filter(log => {
      if (filters.actorId && log.actorId !== filters.actorId) return false;
      if (filters.resourceType && log.resourceType !== filters.resourceType) return false;
      return true;
    });
  }
}
