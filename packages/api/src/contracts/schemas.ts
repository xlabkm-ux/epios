import { z } from "zod";

/**
 * EPIOS API Core Schemas (Source of Truth)
 */

export const NodeTypeSchema = z.enum([
  "claim",
  "observation",
  "hypothesis",
  "risk",
  "decision",
]);

export const NodeStrengthSchema = z.number().min(0).max(1);

export const EvidenceRefSchema = z.object({
  sourceId: z.string(),
  excerpt: z.string().optional(),
  relevance: z.number().min(0).max(1).optional(),
});

export const CreateWorkspaceSchema = z.object({
  title: z.string().min(1),
  brief: z.string().optional(),
  mode: z.enum(["autonomous", "assisted", "manual"]).default("manual"),
  sensitivity: z
    .enum(["public", "internal", "confidential", "restricted"])
    .default("internal"),
});

export const AddNodeSchema = z.object({
  type: NodeTypeSchema,
  content: z.string().min(1),
  strength: NodeStrengthSchema.optional(),
  evidence: z.array(EvidenceRefSchema).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const EpistemicEdgeTypeSchema = z.enum([
  "supports",
  "contradicts",
  "refines",
  "addresses",
]);

export const AddEdgeSchema = z.object({
  sourceNodeId: z.string().uuid(),
  targetNodeId: z.string().uuid(),
  type: EpistemicEdgeTypeSchema,
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const PatchNodeSchema = z.object({
  type: NodeTypeSchema.optional(),
  content: z.string().optional(),
  strength: NodeStrengthSchema.optional(),
  evidence: z.array(EvidenceRefSchema).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ErrorResponseSchema = z.object({
  error: z.string(),
  code: z.string(),
  message: z.string(),
  traceId: z.string().optional(),
  details: z.record(z.string(), z.unknown()).optional(),
});
