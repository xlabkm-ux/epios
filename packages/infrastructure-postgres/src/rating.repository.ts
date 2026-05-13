import { Rating, EpistemicRatingValue } from "@epios/domain";
import { RatingRepositoryPort } from "@epios/ports";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ratings } from "./schema.js";
import { eq } from "drizzle-orm";

export class PostgresRatingRepository implements RatingRepositoryPort {
  constructor(private readonly db: PostgresJsDatabase) {}

  async save(rating: Rating): Promise<void> {
    await this.db
      .insert(ratings)
      .values({
        id: rating.id,
        nodeId: rating.nodeId,
        actorId: rating.actorId,
        value: rating.value,
        comment: rating.comment ?? null,
        createdAt: rating.createdAt,
      })
      .onConflictDoUpdate({
        target: ratings.id,
        set: {
          value: rating.value,
          comment: rating.comment ?? null,
        },
      });
  }

  async findByNodeId(nodeId: string): Promise<Rating[]> {
    const records = await this.db
      .select()
      .from(ratings)
      .where(eq(ratings.nodeId, nodeId));

    return records.map((record) => this.mapToDomain(record));
  }

  private mapToDomain(record: typeof ratings.$inferSelect): Rating {
    return {
      id: record.id,
      nodeId: record.nodeId,
      actorId: record.actorId,
      value: record.value as EpistemicRatingValue,
      comment: record.comment ?? undefined,
      createdAt: record.createdAt,
    };
  }
}
