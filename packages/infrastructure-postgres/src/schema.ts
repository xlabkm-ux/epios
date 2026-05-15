import {
  pgTable,
  uuid,
  text,
  jsonb,
  timestamp,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const workspaces = pgTable("workspaces", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  status: text("status").notNull(),
  mode: text("mode").notNull(),
  sensitivity: text("sensitivity").notNull(),
  goal: text("goal").notNull(),
  context: text("context"),
  successCriteria: jsonb("success_criteria").notNull().default([]),
  constraints: jsonb("constraints").notNull().default([]),
  unknowns: jsonb("unknowns").notNull().default([]),
  desiredArtifactType: text("desired_artifact_type"),
  createdByEmail: text("created_by_email"),
  createdByType: text("created_by_type").notNull(),
  createdById: text("created_by_id").notNull(),
  isPinned: boolean("is_pinned").notNull().default(false),
  archivedAt: timestamp("archived_at", { withTimezone: true }),
  archiveComment: text("archive_comment"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  version: integer("version").notNull().default(1),
});

export const epistemicNodes = pgTable("epistemic_nodes", {
  id: uuid("id").primaryKey(),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  content: text("content").notNull(),
  strength: text("strength").notNull(),
  evidence: jsonb("evidence").notNull().default([]),
  metadata: jsonb("metadata").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  version: integer("version").notNull().default(1),
});

export const epistemicEdges = pgTable("epistemic_edges", {
  id: uuid("id").primaryKey(),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  sourceNodeId: uuid("source_node_id")
    .notNull()
    .references(() => epistemicNodes.id, { onDelete: "cascade" }),
  targetNodeId: uuid("target_node_id")
    .notNull()
    .references(() => epistemicNodes.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  metadata: jsonb("metadata").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const sources = pgTable("sources", {
  id: uuid("id").primaryKey(),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  content: text("content").notNull(),
  metadata: jsonb("metadata").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const ratings = pgTable("ratings", {
  id: uuid("id").primaryKey(),
  nodeId: uuid("node_id")
    .notNull()
    .references(() => epistemicNodes.id, { onDelete: "cascade" }),
  actorId: text("actor_id").notNull(),
  value: integer("value").notNull(),
  comment: text("comment"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const identities = pgTable("identities", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull(),
  isActive: integer("is_active").notNull().default(1), // 1 for true
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const governanceProcesses = pgTable("governance_processes", {
  nodeId: uuid("node_id")
    .primaryKey()
    .references(() => epistemicNodes.id, { onDelete: "cascade" }),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  status: text("status").notNull(),
  votes: jsonb("votes").notNull().default([]),
  requiredVotes: integer("required_votes").notNull(),
  patchId: uuid("patch_id").references(() => nodePatches.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  version: integer("version").notNull().default(1),
});

export const nodePatches = pgTable("node_patches", {
  id: uuid("id").primaryKey(),
  targetNodeId: uuid("target_node_id")
    .notNull()
    .references(() => epistemicNodes.id, { onDelete: "cascade" }),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  authorId: text("author_id").notNull(),
  content: text("content").notNull(),
  status: text("status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  version: integer("version").notNull().default(1),
});

export const readinessAssessments = pgTable("readiness_assessments", {
  id: uuid("id").primaryKey(),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  profileId: text("profile_id").notNull(),
  methodVersion: text("method_version").notNull(),
  status: text("status").notNull(),
  indicators: jsonb("indicators").notNull().default({}),
  numericScore: integer("numeric_score"),
  explanation: text("explanation").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const artifactVersions = pgTable("artifact_versions", {
  id: uuid("id").primaryKey(),
  artifactId: uuid("artifact_id").notNull(),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  version: integer("version").notNull(),
  content: text("content").notNull(),
  authorId: text("author_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const traceEvents = pgTable("trace_events", {
  id: uuid("id").primaryKey(),
  workspaceId: uuid("workspace_id")
    .notNull()
    .references(() => workspaces.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  actorId: text("actor_id").notNull(),
  targetId: text("target_id").notNull(),
  metadata: jsonb("metadata").notNull().default({}),
  timestamp: timestamp("timestamp", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const outbox = pgTable("outbox", {
  id: uuid("id").primaryKey(),
  eventType: text("event_type").notNull(),
  payload: jsonb("payload").notNull(),
  status: text("status").notNull().default("pending"), // pending, processed, failed
  error: text("error"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  processedAt: timestamp("processed_at", { withTimezone: true }),
});
