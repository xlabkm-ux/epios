-- 0001_create_core_tables.sql

CREATE TABLE missions (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT NOT NULL,
  mode TEXT NOT NULL,
  sensitivity TEXT NOT NULL,
  goal TEXT NOT NULL,
  context TEXT,
  success_criteria JSONB NOT NULL DEFAULT '[]'::jsonb,
  constraints JSONB NOT NULL DEFAULT '[]'::jsonb,
  unknowns JSONB NOT NULL DEFAULT '[]'::jsonb,
  desired_artifact_type TEXT,
  created_by_type TEXT NOT NULL,
  created_by_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  version INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE mission_runs (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  current_stage TEXT,
  wait_reason TEXT,
  failure_code TEXT,
  failure_message TEXT,
  failure_retryable BOOLEAN,
  idempotency_key TEXT,
  runtime_ref TEXT,
  started_by_type TEXT NOT NULL,
  started_by_id TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  version INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE trace_events (
  id UUID PRIMARY KEY,
  event_type TEXT NOT NULL,
  mission_id UUID REFERENCES missions(id) ON DELETE CASCADE,
  run_id UUID REFERENCES mission_runs(id) ON DELETE SET NULL,
  actor_type TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  correlation_id TEXT
);
