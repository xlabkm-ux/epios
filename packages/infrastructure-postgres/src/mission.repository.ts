import {
  Mission,
  MissionStatus,
  MissionMode,
  MissionSensitivity,
} from "@epios/domain";
import { MissionRepositoryPort } from "@epios/ports";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { missions } from "./schema.js";
import { eq } from "drizzle-orm";

export class PostgresMissionRepository implements MissionRepositoryPort {
  constructor(private readonly db: PostgresJsDatabase) {}

  async save(mission: Mission): Promise<void> {
    await this.db
      .insert(missions)
      .values({
        id: mission.id,
        title: mission.title,
        status: mission.status,
        mode: mission.mode,
        sensitivity: mission.sensitivity,
        goal: mission.brief.goal,
        context: mission.brief.context,
        successCriteria: mission.brief.successCriteria,
        constraints: mission.brief.constraints,
        unknowns: mission.brief.unknowns,
        desiredArtifactType: mission.desiredArtifactType,
        createdByType: mission.createdBy.type,
        createdById: mission.createdBy.id,
        createdAt: mission.createdAt,
        updatedAt: mission.updatedAt,
        version: mission.version,
      })
      .onConflictDoUpdate({
        target: missions.id,
        set: {
          title: mission.title,
          status: mission.status,
          mode: mission.mode,
          sensitivity: mission.sensitivity,
          goal: mission.brief.goal,
          context: mission.brief.context,
          successCriteria: mission.brief.successCriteria,
          constraints: mission.brief.constraints,
          unknowns: mission.brief.unknowns,
          desiredArtifactType: mission.desiredArtifactType,
          updatedAt: mission.updatedAt,
          version: mission.version,
        },
      });
  }

  async findById(id: string): Promise<Mission | null> {
    const [record] = await this.db
      .select()
      .from(missions)
      .where(eq(missions.id, id));

    if (!record) return null;

    return this.mapToDomain(record);
  }

  async findAll(): Promise<Mission[]> {
    const records = await this.db.select().from(missions);
    return records.map((record) => this.mapToDomain(record));
  }

  private mapToDomain(record: typeof missions.$inferSelect): Mission {
    return {
      id: record.id,
      title: record.title,
      status: record.status as MissionStatus,
      mode: record.mode as MissionMode,
      sensitivity: record.sensitivity as MissionSensitivity,
      brief: {
        goal: record.goal,
        context: record.context ?? undefined,
        successCriteria: record.successCriteria as string[],
        constraints: record.constraints as string[],
        unknowns: record.unknowns as string[],
      },
      desiredArtifactType: record.desiredArtifactType ?? undefined,
      createdBy: {
        type: record.createdByType,
        id: record.createdById,
      },
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      version: record.version,
    };
  }
}
