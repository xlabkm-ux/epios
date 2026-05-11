import {
  pgTable,
  uuid,
  text,
  jsonb,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const missions = pgTable("missions", {
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
  createdByEmail: text("created_by_email"), // Note: the migration had created_by_type/id, I should match it
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
  missionId: uuid("mission_id")
    .notNull()
    .references(() => missions.id, { onDelete: "cascade" }),
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
  missionId: uuid("mission_id")
    .notNull()
    .references(() => missions.id, { onDelete: "cascade" }),
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
