import { User, UserRole, AuditRecord } from "@epios/domain";

export interface SecurityPort {
  getCurrentUser(): Promise<User | null>;
  authorize(role: UserRole, action: string, resource: string): Promise<boolean>;
  logAudit(record: Omit<AuditRecord, "id" | "timestamp">): Promise<void>;
  listAuditLogs(filters: { actorId?: string; resourceType?: string }): Promise<AuditRecord[]>;
}

export interface IdentityRepositoryPort {
  findById(id: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
