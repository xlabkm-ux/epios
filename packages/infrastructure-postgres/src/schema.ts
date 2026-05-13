import {
  pgTable,
  uuid,
  text,
  jsonb,
  timestamp,
  integer,
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
  missionId: uuid("mission_id")
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
