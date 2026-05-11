-- 0002_create_epistemic_tables.sql

CREATE TABLE epistemic_nodes (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  content TEXT NOT NULL,
  strength TEXT NOT NULL,
  evidence JSONB NOT NULL DEFAULT '[]'::jsonb,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE epistemic_edges (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  source_node_id UUID NOT NULL REFERENCES epistemic_nodes(id) ON DELETE CASCADE,
  target_node_id UUID NOT NULL REFERENCES epistemic_nodes(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_nodes_mission_id ON epistemic_nodes(mission_id);
CREATE INDEX idx_edges_mission_id ON epistemic_edges(mission_id);
CREATE INDEX idx_edges_source_node_id ON epistemic_edges(source_node_id);
CREATE INDEX idx_edges_target_node_id ON epistemic_edges(target_node_id);
