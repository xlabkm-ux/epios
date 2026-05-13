import { User, UserRole } from "@epios/domain";
import { IdentityRepositoryPort } from "@epios/ports";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { identities } from "./schema.js";
import { eq } from "drizzle-orm";

export class PostgresIdentityRepository implements IdentityRepositoryPort {
  constructor(private readonly db: PostgresJsDatabase) {}

  async findById(id: string): Promise<User | null> {
    const [record] = await this.db
      .select()
      .from(identities)
      .where(eq(identities.id, id));

    if (!record) return null;

    return {
      id: record.id,
      username: record.username,
      email: record.email,
      role: record.role as UserRole,
      isActive: record.isActive === 1,
      createdAt: record.createdAt,
    };
  }

  async findByUsername(username: string): Promise<User | null> {
    const [record] = await this.db
      .select()
      .from(identities)
      .where(eq(identities.username, username));

    if (!record) return null;

    return {
      id: record.id,
      username: record.username,
      email: record.email,
      role: record.role as UserRole,
      isActive: record.isActive === 1,
      createdAt: record.createdAt,
    };
  }

  async save(user: User): Promise<void> {
    await this.db
      .insert(identities)
      .values({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        isActive: user.isActive ? 1 : 0,
        createdAt: user.createdAt,
      })
      .onConflictDoUpdate({
        target: identities.id,
        set: {
          username: user.username,
          email: user.email,
          role: user.role,
          isActive: user.isActive ? 1 : 0,
        },
      });
  }
}
