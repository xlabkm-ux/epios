-- Migration: 0003_create_mission_and_evidence_tables
-- Created at: 2026-05-15

-- Missions
CREATE TABLE IF NOT EXISTS missions (
  id UUID PRIMARY KEY,
  workspace_id UUID NOT NULL REFERENCES workspaces(id),
  title TEXT NOT NULL,
  objective TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  metadata JSONB NOT NULL DEFAULT '{}'
);

-- Mission Runs
CREATE TABLE IF NOT EXISTS mission_runs (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id),
  trace_id TEXT NOT NULL,
  status TEXT NOT NULL,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE
);

-- Evidence Sources
CREATE TABLE IF NOT EXISTS evidence_sources (
  id UUID PRIMARY KEY,
  uri TEXT NOT NULL,
  type TEXT NOT NULL,
  quality DOUBLE PRECISION NOT NULL DEFAULT 1.0,
  metadata JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Evidences
CREATE TABLE IF NOT EXISTS evidences (
  id UUID PRIMARY KEY,
  source_id UUID NOT NULL REFERENCES evidence_sources(id),
  content TEXT NOT NULL,
  span_start INTEGER,
  span_end INTEGER,
  citation_status TEXT NOT NULL DEFAULT 'unverified',
  version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Evidence Sets
CREATE TABLE IF NOT EXISTS evidence_sets (
  id UUID PRIMARY KEY,
  workspace_id UUID NOT NULL REFERENCES workspaces(id),
  evidence_ids UUID[] NOT NULL DEFAULT '{}',
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Link Epistemic Nodes to Evidence Sets
ALTER TABLE epistemic_nodes ADD COLUMN IF NOT EXISTS evidence_set_id UUID REFERENCES evidence_sets(id);
