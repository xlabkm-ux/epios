import { OutboxMessage, OutboxRepositoryPort } from "@epios/ports";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { outbox } from "./schema.js";
import { eq } from "drizzle-orm";

export class PostgresOutboxRepository implements OutboxRepositoryPort {
  constructor(private readonly db: PostgresJsDatabase) {}

  async save(message: OutboxMessage): Promise<void> {
    await this.db
      .insert(outbox)
      .values({
        id: message.id,
        eventType: message.type,
        payload: message.payload,
        status: message.status,
        createdAt: message.createdAt,
      })
      .onConflictDoUpdate({
        target: outbox.id,
        set: {
          status: message.status,
          payload: message.payload,
        },
      });
  }

  async findPending(): Promise<OutboxMessage[]> {
    const records = await this.db
      .select()
      .from(outbox)
      .where(eq(outbox.status, "pending"));

    return records.map((record) => ({
      id: record.id,
      type: record.eventType,
      payload: record.payload as Record<string, unknown>,
      status: record.status as "pending" | "processed" | "failed",
      createdAt: record.createdAt,
    }));
  }

  async markProcessed(id: string): Promise<void> {
    await this.db
      .update(outbox)
      .set({
        status: "processed",
        processedAt: new Date(),
      })
      .where(eq(outbox.id, id));
  }
}
