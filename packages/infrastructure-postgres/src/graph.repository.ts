import {
  EpistemicNode,
  EpistemicEdge,
  NodeType,
  NodeStrength,
  EpistemicEdgeType,
} from "@epos/domain";
import { GraphRepositoryPort } from "@epos/ports";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { epistemicNodes, epistemicEdges } from "./schema.js";
import { eq } from "drizzle-orm";

export class PostgresGraphRepository implements GraphRepositoryPort {
  constructor(private readonly db: PostgresJsDatabase) {}

  async saveNode(node: EpistemicNode): Promise<void> {
    await this.db
      .insert(epistemicNodes)
      .values({
        id: node.id,
        missionId: node.missionId,
        type: node.type,
        content: node.content,
        strength: node.strength,
        evidence: node.evidence,
        metadata: node.metadata,
        createdAt: node.createdAt,
        updatedAt: node.updatedAt,
      })
      .onConflictDoUpdate({
        target: epistemicNodes.id,
        set: {
          type: node.type,
          content: node.content,
          strength: node.strength,
          evidence: node.evidence,
          metadata: node.metadata,
          updatedAt: node.updatedAt,
        },
      });
  }

  async saveEdge(edge: EpistemicEdge): Promise<void> {
    await this.db
      .insert(epistemicEdges)
      .values({
        id: edge.id,
        missionId: edge.missionId,
        sourceNodeId: edge.sourceNodeId,
        targetNodeId: edge.targetNodeId,
        type: edge.type,
        metadata: edge.metadata,
        createdAt: edge.createdAt,
      })
      .onConflictDoUpdate({
        target: epistemicEdges.id,
        set: {
          type: edge.type,
          metadata: edge.metadata,
        },
      });
  }

  async findNodesByMissionId(missionId: string): Promise<EpistemicNode[]> {
    const records = await this.db
      .select()
      .from(epistemicNodes)
      .where(eq(epistemicNodes.missionId, missionId));

    return records.map((record) => ({
      id: record.id,
      missionId: record.missionId,
      type: record.type as NodeType,
      content: record.content,
      strength: record.strength as NodeStrength,
      evidence:
        record.evidence as unknown as import("@epos/domain").EvidenceRef[],
      metadata: record.metadata as Record<string, unknown>,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    }));
  }

  async findEdgesByMissionId(missionId: string): Promise<EpistemicEdge[]> {
    const records = await this.db
      .select()
      .from(epistemicEdges)
      .where(eq(epistemicEdges.missionId, missionId));

    return records.map((record) => ({
      id: record.id,
      missionId: record.missionId,
      sourceNodeId: record.sourceNodeId,
      targetNodeId: record.targetNodeId,
      type: record.type as EpistemicEdgeType,
      metadata: record.metadata as Record<string, unknown>,
      createdAt: record.createdAt,
    }));
  }

  async findNodeById(id: string): Promise<EpistemicNode | null> {
    const [record] = await this.db
      .select()
      .from(epistemicNodes)
      .where(eq(epistemicNodes.id, id));

    if (!record) return null;

    return {
      id: record.id,
      missionId: record.missionId,
      type: record.type as NodeType,
      content: record.content,
      strength: record.strength as NodeStrength,
      evidence:
        record.evidence as unknown as import("@epos/domain").EvidenceRef[],
      metadata: record.metadata as Record<string, unknown>,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
  }

  async findEdgeById(id: string): Promise<EpistemicEdge | null> {
    const [record] = await this.db
      .select()
      .from(epistemicEdges)
      .where(eq(epistemicEdges.id, id));

    if (!record) return null;

    return {
      id: record.id,
      missionId: record.missionId,
      sourceNodeId: record.sourceNodeId,
      targetNodeId: record.targetNodeId,
      type: record.type as EpistemicEdgeType,
      metadata: record.metadata as Record<string, unknown>,
      createdAt: record.createdAt,
    };
  }
}
