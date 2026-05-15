import { EvidenceSet } from "@epios/domain";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { evidenceSets } from "./schema.js";
import { eq, sql, and } from "drizzle-orm";

export class PostgresEvidenceRepository {
  constructor(private readonly db: PostgresJsDatabase) {}

  async saveSet(set: EvidenceSet): Promise<void> {
    const props = set.toProps();
    const [existing] = await this.db
      .select()
      .from(evidenceSets)
      .where(eq(evidenceSets.id, props.id));

    if (!existing) {
      await this.db.insert(evidenceSets).values({
        id: props.id,
        workspaceId: props.workspaceId,
        missionId: props.missionId,
        evidenceIds: props.evidenceIds,
        version: 1,
        updatedAt: props.updatedAt,
      });
    } else {
      await this.db
        .update(evidenceSets)
        .set({
          evidenceIds: props.evidenceIds,
          updatedAt: props.updatedAt,
          version: sql`${evidenceSets.version} + 1`,
        })
        .where(
          and(
            eq(evidenceSets.id, props.id),
            eq(evidenceSets.version, props.version),
          ),
        );
    }
  }

  async findSetById(id: string): Promise<EvidenceSet | null> {
    const [record] = await this.db
      .select()
      .from(evidenceSets)
      .where(eq(evidenceSets.id, id));

    if (!record) return null;

    return new EvidenceSet({
      id: record.id,
      workspaceId: record.workspaceId,
      missionId: record.missionId,
      evidenceIds: record.evidenceIds as string[],
      version: record.version,
      updatedAt: record.updatedAt,
    });
  }
}
