import { Source, SourceType } from "@epios/domain";
import { SourceRepositoryPort } from "@epios/ports";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { sources } from "./schema.js";
import { eq } from "drizzle-orm";

export class PostgresSourceRepository implements SourceRepositoryPort {
  constructor(private readonly db: PostgresJsDatabase) {}

  async save(source: Source): Promise<void> {
    await this.db
      .insert(sources)
      .values({
        id: source.id,
        missionId: source.missionId,
        type: source.type,
        content: source.content,
        metadata: source.metadata,
        createdAt: source.createdAt,
      })
      .onConflictDoUpdate({
        target: sources.id,
        set: {
          content: source.content,
          metadata: source.metadata,
        },
      });
  }

  async findByMissionId(missionId: string): Promise<Source[]> {
    const records = await this.db
      .select()
      .from(sources)
      .where(eq(sources.missionId, missionId));

    return records.map((record) => this.mapToDomain(record));
  }

  async findById(id: string): Promise<Source | null> {
    const [record] = await this.db
      .select()
      .from(sources)
      .where(eq(sources.id, id));

    if (!record) return null;
    return this.mapToDomain(record);
  }

  private mapToDomain(record: typeof sources.$inferSelect): Source {
    return {
      id: record.id,
      missionId: record.missionId,
      type: record.type as SourceType,
      content: record.content,
      metadata: record.metadata as Record<string, unknown>,
      createdAt: record.createdAt,
    };
  }
}
