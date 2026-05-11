# EPOS-05 — PostgreSQL Data Model and Persistence

**Project:** Epistemic OS v1.0  
**Document ID:** `EPOS-05-POSTGRESQL-DATA-MODEL`  
**Version:** Draft 0.1  
**Status:** For Review / Approval  
**Depends on:** `EPOS-00`, `EPOS-01`, `EPOS-02`, `EPOS-03`, `EPOS-04`  
**Storage decision:** PostgreSQL-first alpha  
**Target MVP horizon:** 6 weeks or faster  
**Deployment target:** Internal dev only  

---

## 1. Purpose of This Document

This document defines the PostgreSQL data model and persistence strategy for **Epistemic OS v1.0 MVP**.

It specifies:

- schema principles;
- table groups;
- initial PostgreSQL schema;
- indexes;
- optimistic concurrency;
- transaction boundaries;
- outbox events;
- idempotency keys;
- repository contracts;
- migrations;
- seed data;
- rollback policy;
- persistence tests.

This document does not define UI, API routes or complete implementation code.

---

## 2. Persistence Thesis

PostgreSQL is the system of record from alpha.

The database must support:

```text
Mission persistence
Epistemic graph persistence
Evidence and provenance persistence
Artifact versioning
Approval / decision history
Outbox-based projection
Idempotent write commands
Traceability
```

The database must not become the hidden domain model.

Domain rules live in domain/application services. PostgreSQL persists validated state and supports transactional consistency.

---

## 3. Design Principles

1. **PostgreSQL-first.** No SQLite as MVP system of record.
2. **Migrations from day one.** No manual schema drift.
3. **Mission-scoped data.** MVP graph and artifact operations are scoped by `mission_id`.
4. **Optimistic concurrency.** Mutable aggregates have `version`.
5. **Outbox required.** Async/projection events use `outbox_events`.
6. **Idempotency required.** Side-effecting commands use `idempotency_keys`.
7. **Traceability required.** Important mutations have actor, timestamp and correlation ID where applicable.
8. **JSONB with restraint.** JSONB is acceptable for metadata, not for core relational identity.
9. **No secret storage by accident.** Sensitive payloads require explicit encrypted/ref storage policy.
10. **Rollback-aware migrations.** Every migration must have rollback or mitigation note.

---

## 4. Schema Groups

```text
core
  missions
  mission_runs

identity/dev
  actors or dev_users

epistemic
  epistemic_nodes
  reasoning_edges
  domain_boundaries

evidence
  sources
  source_chunks
  evidence_refs

artifacts
  living_artifacts
  artifact_versions
  artifact_patches

decisions
  decision_records
  conflict_cards
  approval_requests

runtime
  outbox_events
  idempotency_keys
  trace_events
```

MVP can use one PostgreSQL schema namespace, but table names should remain explicit.

Recommended database schema name:

```sql
public
```

Future option:

```sql
epos
```

For MVP simplicity, use `public` unless the chosen migration tool makes schema names painless.

---

## 5. Common Columns

### 5.1. Standard Mutable Aggregate Columns

For mutable aggregate tables:

```sql
id UUID PRIMARY KEY,
created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
version INTEGER NOT NULL DEFAULT 1
```

### 5.2. Actor and Correlation Columns

Where relevant:

```sql
created_by_type TEXT NOT NULL,
created_by_id TEXT NOT NULL,
updated_by_type TEXT,
updated_by_id TEXT,
correlation_id UUID
```

### 5.3. Status Columns

Status fields should be `TEXT` with application-level validation for MVP.

Reason:

- faster iteration;
- easier schema evolution;
- domain still validates allowed values.

Optional later:

- PostgreSQL enum;
- lookup tables.

---

## 6. Core Tables

## 6.1. `missions`

Purpose: stores mission aggregate root.

```sql
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
```

Indexes:

```sql
CREATE INDEX idx_missions_status ON missions(status);
CREATE INDEX idx_missions_created_at ON missions(created_at DESC);
```

Notes:

- `goal` is required before mission can run.
- arrays use JSONB for MVP flexibility.
- mission brief can be normalized later if needed.

---

## 6.2. `mission_runs`

Purpose: stores durable run state and execution stage.

```sql
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
```

Indexes:

```sql
CREATE INDEX idx_mission_runs_mission_id ON mission_runs(mission_id);
CREATE INDEX idx_mission_runs_status ON mission_runs(status);
CREATE UNIQUE INDEX idx_mission_runs_idempotency_key
  ON mission_runs(idempotency_key)
  WHERE idempotency_key IS NOT NULL;
```

---

## 7. Epistemic Tables

## 7.1. `epistemic_nodes`

Purpose: stores mission-local epistemic nodes.

```sql
CREATE TABLE epistemic_nodes (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,

  semantic_core TEXT NOT NULL,
  node_type TEXT NOT NULL,
  reality_level TEXT NOT NULL,
  strength TEXT NOT NULL,
  status TEXT NOT NULL,

  valid_from TIMESTAMPTZ NOT NULL,
  valid_to TIMESTAMPTZ,
  observed_at TIMESTAMPTZ,
  asserted_at TIMESTAMPTZ NOT NULL,
  temporal_resolution TEXT NOT NULL,
  validity_basis TEXT NOT NULL,

  created_by_type TEXT NOT NULL,
  created_by_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  version INTEGER NOT NULL DEFAULT 1
);
```

Indexes:

```sql
CREATE INDEX idx_epistemic_nodes_mission_id ON epistemic_nodes(mission_id);
CREATE INDEX idx_epistemic_nodes_mission_status ON epistemic_nodes(mission_id, status);
CREATE INDEX idx_epistemic_nodes_mission_strength ON epistemic_nodes(mission_id, strength);
CREATE INDEX idx_epistemic_nodes_temporal_validity
  ON epistemic_nodes(mission_id, valid_from, valid_to);
CREATE INDEX idx_epistemic_nodes_search
  ON epistemic_nodes USING GIN (to_tsvector('simple', semantic_core));
```

Notes:

- Use mission-scoped indexes for MVP.
- No graph DB required.
- `to_tsvector('simple')` avoids language-specific assumptions for MVP.

---

## 7.2. `reasoning_edges`

Purpose: stores typed relations between nodes.

```sql
CREATE TABLE reasoning_edges (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  from_node_id UUID NOT NULL REFERENCES epistemic_nodes(id) ON DELETE CASCADE,
  to_node_id UUID NOT NULL REFERENCES epistemic_nodes(id) ON DELETE CASCADE,

  edge_type TEXT NOT NULL,
  strength TEXT NOT NULL,

  created_by_type TEXT NOT NULL,
  created_by_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT reasoning_edges_no_self_loop CHECK (from_node_id <> to_node_id)
);
```

Indexes:

```sql
CREATE INDEX idx_reasoning_edges_mission_id ON reasoning_edges(mission_id);
CREATE INDEX idx_reasoning_edges_from ON reasoning_edges(from_node_id);
CREATE INDEX idx_reasoning_edges_to ON reasoning_edges(to_node_id);
CREATE INDEX idx_reasoning_edges_type ON reasoning_edges(mission_id, edge_type);
```

Application invariant:

```text
from_node and to_node must belong to the same mission.
```

This is easiest to enforce in application/domain for MVP. A later DB constraint can be added with composite foreign keys if needed.

---

## 7.3. `domain_boundaries`

Purpose: stores boundary records for nodes.

```sql
CREATE TABLE domain_boundaries (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  applies_to_node_id UUID NOT NULL REFERENCES epistemic_nodes(id) ON DELETE CASCADE,

  scope_description TEXT NOT NULL,
  valid_reality_levels JSONB NOT NULL DEFAULT '[]'::jsonb,
  excluded_scopes JSONB NOT NULL DEFAULT '[]'::jsonb,
  downgrade_policy TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Indexes:

```sql
CREATE INDEX idx_domain_boundaries_mission_id ON domain_boundaries(mission_id);
CREATE INDEX idx_domain_boundaries_node ON domain_boundaries(applies_to_node_id);
```

---

## 8. Evidence Tables

## 8.1. `sources`

Purpose: stores source metadata.

```sql
CREATE TABLE sources (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,

  source_type TEXT NOT NULL,
  title TEXT NOT NULL,
  uri TEXT,
  content_hash TEXT,
  freshness TIMESTAMPTZ,
  source_quality TEXT NOT NULL DEFAULT 'unknown',

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Indexes:

```sql
CREATE INDEX idx_sources_mission_id ON sources(mission_id);
CREATE INDEX idx_sources_type ON sources(mission_id, source_type);
CREATE UNIQUE INDEX idx_sources_mission_content_hash
  ON sources(mission_id, content_hash)
  WHERE content_hash IS NOT NULL;
```

---

## 8.2. `source_chunks`

Purpose: stores source chunks for retrieval and citation spans.

```sql
CREATE TABLE source_chunks (
  id UUID PRIMARY KEY,
  source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,

  ordinal INTEGER NOT NULL,
  content TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Indexes:

```sql
CREATE INDEX idx_source_chunks_source_id ON source_chunks(source_id);
CREATE INDEX idx_source_chunks_mission_id ON source_chunks(mission_id);
CREATE INDEX idx_source_chunks_search
  ON source_chunks USING GIN (to_tsvector('simple', content));
CREATE UNIQUE INDEX idx_source_chunks_source_ordinal
  ON source_chunks(source_id, ordinal);
```

Optional MVP extension:

```sql
-- if pgvector is enabled later:
-- embedding vector(1536)
```

---

## 8.3. `evidence_refs`

Purpose: links evidence to nodes.

```sql
CREATE TABLE evidence_refs (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  chunk_id UUID REFERENCES source_chunks(id) ON DELETE SET NULL,

  quote TEXT,
  start_offset INTEGER,
  end_offset INTEGER,
  locator TEXT,
  relevance_score DOUBLE PRECISION,
  citation_status TEXT NOT NULL DEFAULT 'unverified',
  boundary_note TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Indexes:

```sql
CREATE INDEX idx_evidence_refs_mission_id ON evidence_refs(mission_id);
CREATE INDEX idx_evidence_refs_source_id ON evidence_refs(source_id);
CREATE INDEX idx_evidence_refs_chunk_id ON evidence_refs(chunk_id);
CREATE INDEX idx_evidence_refs_status ON evidence_refs(mission_id, citation_status);
```

---

## 8.4. `epistemic_node_evidence_refs`

Purpose: many-to-many link between nodes and evidence.

```sql
CREATE TABLE epistemic_node_evidence_refs (
  node_id UUID NOT NULL REFERENCES epistemic_nodes(id) ON DELETE CASCADE,
  evidence_id UUID NOT NULL REFERENCES evidence_refs(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (node_id, evidence_id)
);
```

Indexes:

```sql
CREATE INDEX idx_node_evidence_evidence_id ON epistemic_node_evidence_refs(evidence_id);
```

---

## 9. Artifact Tables

## 9.1. `living_artifacts`

Purpose: stores artifact aggregate metadata.

```sql
CREATE TABLE living_artifacts (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,

  artifact_type TEXT NOT NULL,
  title TEXT NOT NULL,
  current_version INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft',

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  version INTEGER NOT NULL DEFAULT 1
);
```

Indexes:

```sql
CREATE INDEX idx_living_artifacts_mission_id ON living_artifacts(mission_id);
CREATE INDEX idx_living_artifacts_status ON living_artifacts(mission_id, status);
```

---

## 9.2. `artifact_versions`

Purpose: stores artifact versions.

For MVP, content can be stored inline as text. Later, large content can move to object storage.

```sql
CREATE TABLE artifact_versions (
  artifact_id UUID NOT NULL REFERENCES living_artifacts(id) ON DELETE CASCADE,
  version INTEGER NOT NULL,
  content TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  patch_id UUID,

  created_by_type TEXT NOT NULL,
  created_by_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  PRIMARY KEY (artifact_id, version)
);
```

Indexes:

```sql
CREATE INDEX idx_artifact_versions_patch_id ON artifact_versions(patch_id);
```

Note:

`patch_id` FK can be added after `artifact_patches` is created, or left application-validated for MVP to avoid circular migration complexity.

---

## 9.3. `artifact_patches`

Purpose: stores proposed/applied artifact mutations.

```sql
CREATE TABLE artifact_patches (
  id UUID PRIMARY KEY,
  artifact_id UUID NOT NULL REFERENCES living_artifacts(id) ON DELETE CASCADE,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,

  base_version INTEGER NOT NULL,
  target_version INTEGER,
  diff TEXT NOT NULL,
  reason TEXT NOT NULL,
  risk_class TEXT NOT NULL,
  status TEXT NOT NULL,

  author_type TEXT NOT NULL,
  author_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  applied_at TIMESTAMPTZ,
  version INTEGER NOT NULL DEFAULT 1
);
```

Indexes:

```sql
CREATE INDEX idx_artifact_patches_artifact_id ON artifact_patches(artifact_id);
CREATE INDEX idx_artifact_patches_mission_id ON artifact_patches(mission_id);
CREATE INDEX idx_artifact_patches_status ON artifact_patches(mission_id, status);
```

---

## 9.4. `artifact_patch_node_refs`

```sql
CREATE TABLE artifact_patch_node_refs (
  patch_id UUID NOT NULL REFERENCES artifact_patches(id) ON DELETE CASCADE,
  node_id UUID NOT NULL REFERENCES epistemic_nodes(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (patch_id, node_id)
);
```

## 9.5. `artifact_patch_evidence_refs`

```sql
CREATE TABLE artifact_patch_evidence_refs (
  patch_id UUID NOT NULL REFERENCES artifact_patches(id) ON DELETE CASCADE,
  evidence_id UUID NOT NULL REFERENCES evidence_refs(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (patch_id, evidence_id)
);
```

## 9.6. `artifact_patch_decision_refs`

```sql
CREATE TABLE artifact_patch_decision_refs (
  patch_id UUID NOT NULL REFERENCES artifact_patches(id) ON DELETE CASCADE,
  decision_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (patch_id, decision_id)
);
```

`decision_id` FK should be added after `decision_records` exists.

---

## 10. Decision and Approval Tables

## 10.1. `decision_records`

Purpose: stores human, policy and system decisions.

```sql
CREATE TABLE decision_records (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  run_id UUID REFERENCES mission_runs(id) ON DELETE SET NULL,

  decision_type TEXT NOT NULL,
  subject_type TEXT NOT NULL,
  subject_ref TEXT NOT NULL,
  options JSONB NOT NULL DEFAULT '[]'::jsonb,
  selected_option_id TEXT,
  rationale TEXT,

  actor_type TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Indexes:

```sql
CREATE INDEX idx_decision_records_mission_id ON decision_records(mission_id);
CREATE INDEX idx_decision_records_subject ON decision_records(subject_type, subject_ref);
CREATE INDEX idx_decision_records_run_id ON decision_records(run_id);
```

---

## 10.2. `approval_requests`

Purpose: stores approval lifecycle.

```sql
CREATE TABLE approval_requests (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  run_id UUID NOT NULL REFERENCES mission_runs(id) ON DELETE CASCADE,

  subject_type TEXT NOT NULL,
  subject_ref TEXT NOT NULL,
  preview JSONB NOT NULL,
  risk_class TEXT NOT NULL,
  status TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,

  decision_id UUID REFERENCES decision_records(id) ON DELETE SET NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ,
  version INTEGER NOT NULL DEFAULT 1
);
```

Indexes:

```sql
CREATE INDEX idx_approval_requests_mission_id ON approval_requests(mission_id);
CREATE INDEX idx_approval_requests_run_id ON approval_requests(run_id);
CREATE INDEX idx_approval_requests_status ON approval_requests(mission_id, status);
CREATE UNIQUE INDEX idx_approval_requests_idempotency_key ON approval_requests(idempotency_key);
```

---

## 10.3. `conflict_cards`

Purpose: stores explicit decision forks.

```sql
CREATE TABLE conflict_cards (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,

  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  options JSONB NOT NULL DEFAULT '[]'::jsonb,
  severity TEXT NOT NULL,
  status TEXT NOT NULL,
  decision_id UUID REFERENCES decision_records(id) ON DELETE SET NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  version INTEGER NOT NULL DEFAULT 1
);
```

Indexes:

```sql
CREATE INDEX idx_conflict_cards_mission_id ON conflict_cards(mission_id);
CREATE INDEX idx_conflict_cards_status ON conflict_cards(mission_id, status);
CREATE INDEX idx_conflict_cards_decision_id ON conflict_cards(decision_id);
```

Optional link tables:

```sql
conflict_card_node_refs
conflict_card_evidence_refs
```

These can be added in MVP if ConflictCard becomes active in the demo. Otherwise keep as P1.

---

## 11. Runtime Tables

## 11.1. `outbox_events`

Purpose: transactional async event handoff.

```sql
CREATE TABLE outbox_events (
  id UUID PRIMARY KEY,
  aggregate_type TEXT NOT NULL,
  aggregate_id TEXT NOT NULL,
  aggregate_version INTEGER,
  event_type TEXT NOT NULL,
  payload JSONB NOT NULL,
  idempotency_key TEXT,

  status TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  available_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  processed_at TIMESTAMPTZ
);
```

Indexes:

```sql
CREATE INDEX idx_outbox_pending
  ON outbox_events(status, available_at, created_at)
  WHERE status = 'pending';

CREATE INDEX idx_outbox_aggregate
  ON outbox_events(aggregate_type, aggregate_id);

CREATE UNIQUE INDEX idx_outbox_idempotency_key
  ON outbox_events(idempotency_key)
  WHERE idempotency_key IS NOT NULL;
```

Rules:

```text
- outbox event is written in same transaction as aggregate change;
- worker processes idempotently;
- failed events retain error;
- event payload contains IDs and small metadata, not large documents.
```

---

## 11.2. `idempotency_keys`

Purpose: prevent duplicate command execution.

```sql
CREATE TABLE idempotency_keys (
  key TEXT PRIMARY KEY,
  scope TEXT NOT NULL,
  request_hash TEXT NOT NULL,
  response_json JSONB,
  status TEXT NOT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ
);
```

Indexes:

```sql
CREATE INDEX idx_idempotency_keys_scope ON idempotency_keys(scope);
CREATE INDEX idx_idempotency_keys_expires_at ON idempotency_keys(expires_at);
```

Rules:

```text
- same key + same request_hash returns stored response if completed;
- same key + different request_hash returns idempotency conflict;
- keys may expire after MVP-defined retention.
```

---

## 11.3. `trace_events`

Purpose: MVP local trace/event store.

```sql
CREATE TABLE trace_events (
  id UUID PRIMARY KEY,
  event_type TEXT NOT NULL,
  mission_id UUID REFERENCES missions(id) ON DELETE CASCADE,
  run_id UUID REFERENCES mission_runs(id) ON DELETE SET NULL,
  artifact_id UUID REFERENCES living_artifacts(id) ON DELETE SET NULL,
  node_id UUID REFERENCES epistemic_nodes(id) ON DELETE SET NULL,
  evidence_id UUID REFERENCES evidence_refs(id) ON DELETE SET NULL,
  approval_id UUID REFERENCES approval_requests(id) ON DELETE SET NULL,

  correlation_id UUID,
  idempotency_key TEXT,

  actor_type TEXT,
  actor_id TEXT,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Indexes:

```sql
CREATE INDEX idx_trace_events_mission_id ON trace_events(mission_id, created_at DESC);
CREATE INDEX idx_trace_events_run_id ON trace_events(run_id, created_at DESC);
CREATE INDEX idx_trace_events_event_type ON trace_events(event_type, created_at DESC);
CREATE INDEX idx_trace_events_correlation_id ON trace_events(correlation_id);
```

Security note:

Trace payload must be redacted before storage.

---

## 12. Transaction Boundaries

### 12.1. Create Mission

Transaction:

```text
insert missions
insert trace_events: mission.created
optional insert outbox_events: mission.created
commit
```

### 12.2. Run Mapping

Transaction:

```text
insert/update mission_runs
insert epistemic_nodes
insert domain_boundaries
insert evidence_refs and links
insert trace_events
insert outbox_events if projections needed
commit
```

### 12.3. Propose Artifact Patch

Transaction:

```text
validate artifact current_version
insert artifact_patches
insert patch refs
insert approval_request if required
insert trace_events
commit
```

### 12.4. Resolve Approval

Transaction:

```text
load approval_request FOR UPDATE
validate pending status
validate idempotency
insert decision_record
update approval_request status + decision_id
insert trace_events
commit
```

### 12.5. Apply Artifact Patch

Transaction:

```text
load artifact FOR UPDATE
load patch FOR UPDATE
validate base_version
validate approval if required
insert artifact_versions next version
update living_artifacts current_version/status/version
update artifact_patches status/applied_at/target_version
insert trace_events
insert outbox_events if needed
commit
```

---

## 13. Optimistic Concurrency

Mutable aggregate tables include `version`.

Update pattern:

```sql
UPDATE living_artifacts
SET current_version = $nextVersion,
    updated_at = now(),
    version = version + 1
WHERE id = $artifactId
  AND version = $expectedVersion;
```

If no row updated:

```text
return CONFLICT / PATCH_BASE_VERSION_CONFLICT / AGGREGATE_VERSION_CONFLICT
```

Use optimistic concurrency for:

- missions;
- mission_runs;
- living_artifacts;
- artifact_patches;
- approval_requests;
- conflict_cards;
- epistemic_nodes where updates occur.

---

## 14. Migration Strategy

### 14.1. Migration Tool

Recommended candidates:

```text
Drizzle migrations
Kysely migrations
node-pg-migrate
```

Decision should align with data access tool.

### 14.2. Migration Rules

Every migration must include:

- up migration;
- rollback/down migration or mitigation note;
- human-readable description;
- test on clean database;
- test on database with seed data when relevant.

### 14.3. Initial Migration Sequence

```text
0001_create_core_tables
0002_create_epistemic_tables
0003_create_evidence_tables
0004_create_artifact_tables
0005_create_decision_approval_tables
0006_create_runtime_tables
0007_add_trace_indexes
0008_seed_demo_data_optional
```

### 14.4. Backward Compatibility

During MVP, backward compatibility between migrations is not required beyond clean setup and developer reset.

But destructive migrations must be avoided once weekly tags are created.

---

## 15. Seed Data

MVP seed data should include:

```text
1 demo actor
4 scenario templates
1 architecture document mission sample
1 project planning mission sample
1 research review mission sample
1 decision support mission sample
sample source documents
sample artifact templates
```

Seed data must not include private ChatAVG data.

Seed data should be explicitly synthetic or public-safe.

Recommended command:

```bash
pnpm db:seed
```

Recommended reset:

```bash
pnpm db:reset
```

---

## 16. Data Access Policy

### 16.1. Repository Pattern

Application services access persistence through repositories and transaction manager.

No direct SQL in UI.

No direct SQL in domain.

### 16.2. Query Boundaries

MVP read models may use optimized SQL queries in infrastructure layer.

Example:

```text
MissionReadModelRepository
```

Allowed:

- joins for read model composition;
- projection queries;
- JSON aggregation for API read model.

Not allowed:

- hidden business decisions in read queries;
- artifact mutation through read model repository;
- policy bypass through direct update queries.

---

## 17. Repository Contracts

### 17.1. MissionRepository

```ts
interface MissionRepository {
  create(mission: Mission, tx?: Tx): Promise<void>;
  save(mission: Mission, expectedVersion: number, tx?: Tx): Promise<void>;
  findById(id: MissionId, tx?: Tx): Promise<Mission | null>;
}
```

### 17.2. EpistemicGraphRepository

```ts
interface EpistemicGraphRepository {
  upsertNode(node: EpistemicNode, tx?: Tx): Promise<void>;
  insertEdge(edge: ReasoningEdge, tx?: Tx): Promise<void>;
  insertBoundary(boundary: DomainBoundary, tx?: Tx): Promise<void>;
  findMissionGraph(missionId: MissionId, tx?: Tx): Promise<EpistemicSubgraph>;
  findNode(id: NodeId, tx?: Tx): Promise<EpistemicNode | null>;
}
```

### 17.3. EvidenceRepository

```ts
interface EvidenceRepository {
  createSource(source: Source, tx?: Tx): Promise<void>;
  createChunk(chunk: SourceChunk, tx?: Tx): Promise<void>;
  createEvidenceRef(ref: EvidenceRef, tx?: Tx): Promise<void>;
  linkEvidenceToNode(nodeId: NodeId, evidenceId: EvidenceId, tx?: Tx): Promise<void>;
}
```

### 17.4. ArtifactRepository

```ts
interface ArtifactRepository {
  createArtifact(artifact: LivingArtifact, tx?: Tx): Promise<void>;
  createVersion(version: ArtifactVersion, tx?: Tx): Promise<void>;
  createPatch(patch: ArtifactPatch, tx?: Tx): Promise<void>;
  applyPatch(input: ApplyPatchPersistenceInput, tx?: Tx): Promise<void>;
  findArtifact(id: ArtifactId, tx?: Tx): Promise<LivingArtifact | null>;
}
```

### 17.5. ApprovalRepository

```ts
interface ApprovalRepository {
  create(request: ApprovalRequest, tx?: Tx): Promise<void>;
  findById(id: ApprovalId, tx?: Tx): Promise<ApprovalRequest | null>;
  resolve(input: ResolveApprovalPersistenceInput, tx?: Tx): Promise<void>;
}
```

---

## 18. Persistence Tests

### 18.1. P0 Tests

```text
migrations apply on clean DB
create mission persists
update mission with expected version succeeds
update mission with stale version fails
create node persists
link evidence to node persists
create artifact + version persists
propose patch persists
apply patch increments artifact version
approval resolve creates decision and updates approval
outbox event written in same transaction
idempotency conflict detected
trace event stored with mission id
```

### 18.2. P1 Tests

```text
source dedup by content hash
source chunk search returns expected chunk
mission read model query returns nodes/evidence/artifact
pending outbox batch returns only available pending events
failed outbox event preserves error
trace events sorted newest/oldest as expected
artifact patch refs roundtrip
```

---

## 19. MVP Data Model Non-Goals

Do not implement in MVP unless absolutely necessary:

- multi-tenant org tables;
- billing tables;
- enterprise auth tables;
- graph database replication;
- event sourcing for all aggregates;
- full audit retention policy;
- object storage abstraction for small artifacts;
- vector embedding storage if not used;
- complex permission model;
- row-level security.

---

## 20. Security and Privacy Notes

Even internal dev data must follow basic safety rules:

```text
- no secrets in source content;
- no private ChatAVG docs as seed data;
- no raw API keys in trace_events;
- no full prompt payload in trace_events unless redacted;
- no external user personal data in public repo;
- sample data must be synthetic or public-safe.
```

Future production work must add:

- encryption at rest policy;
- retention/deletion policy;
- tenant isolation;
- row-level security or equivalent;
- audit retention controls.

---

## 21. Approval Checklist

This document is approved when the project owner confirms:

- table groups are acceptable;
- core schema is acceptable;
- epistemic schema is acceptable;
- evidence schema is acceptable;
- artifact schema is acceptable;
- decision/approval schema is acceptable;
- outbox and idempotency design is acceptable;
- transaction boundaries are acceptable;
- migration strategy is acceptable;
- seed data plan is acceptable;
- MVP data non-goals are acceptable.

---

## 22. Next Document After Approval

After this document is approved, create:

```text
EPOS-06 — MCP Apps and Security
```

That document should define:

- MCP App Registry;
- app manifests;
- `ui://` resources;
- bridge protocol;
- origin/schema/nonce validation;
- capability grants;
- ClaimApp;
- EvidenceViewer;
- ApprovalApp;
- audit events;
- MCP security tests.

