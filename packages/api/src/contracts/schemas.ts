import { z } from "zod";

export const MissionStatusSchema = z.enum([
  "draft",
  "running",
  "completed",
  "archived",
]);

export const MissionBriefSchema = z.object({
  goal: z.string(),
  successCriteria: z.array(z.string()),
  constraints: z.array(z.string()),
  unknowns: z.array(z.string()),
});

export const MissionReadModelSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  brief: MissionBriefSchema,
  status: MissionStatusSchema,
  version: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const CreateMissionSchema = z.object({
  title: z.string().min(1),
  context: z.string().optional(),
});

export const UpdateMissionBriefSchema = z.object({
  briefPatch: z.string(),
});

export const IngestSourceSchema = z.object({
  sourceType: z.enum(["text", "url"]),
  content: z.string().min(1),
});

export const StartRunSchema = z.object({
  runType: z.enum(["mapping", "refinement"]),
});

export const ResolveApprovalSchema = z.object({
  decision: z.enum(["approved", "rejected"]),
  comment: z.string().optional(),
});

export const ErrorResponseSchema = z.object({
  error: z.string(),
  code: z.string(),
  message: z.string(),
  traceId: z.string().optional(),
  details: z.record(z.string(), z.unknown()).optional(),
});
