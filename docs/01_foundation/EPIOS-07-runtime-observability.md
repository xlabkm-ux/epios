# EPIOS-07 — Runtime, Observability and Release Gates

**Project:** Epistemic OS v1.0  
**Document ID:** `EPIOS-07-RUNTIME-OBSERVABILITY-RELEASE-GATES`  
**Version:** Draft 0.1  
**Status:** Accepted_concept for MVP Bootstrap  
**Depends on:** `EPIOS-00`, `EPIOS-01`, `EPIOS-02`, `EPIOS-03`, `EPIOS-04`, `EPIOS-05`, `EPIOS-06`  
**Target MVP horizon:** 6 weeks or faster  
**Deployment target:** Internal dev only  
**Runtime strategy:** Lightweight MVP runner behind `DurableRuntimePort`; Temporal-ready adapter boundary  

---

## 1. Purpose of This Document

This document defines the runtime, observability and release gate strategy for **Epistemic OS v1.0 MVP**.

It specifies:

- runtime ownership;
- `DurableRuntimePort`;
- lightweight MVP runner;
- Temporal-ready adapter boundary;
- MissionRun execution model;
- idempotency;
- activity result snapshots;
- LLM activity snapshots;
- trace taxonomy;
- metrics and logs;
- semantic/evidence evals;
- release gates;
- operational runbooks.

This document is scoped to internal dev MVP. It avoids overbuilding production orchestration while preserving a clean path to Temporal or equivalent durable runtime later.

---

## 2. Runtime Thesis

Epistemic OS needs durable mission execution, but the 6-week MVP must avoid building a full workflow platform too early.

The runtime strategy is:

```text
Define durable runtime contract now.
Implement lightweight MVP runner now.
Keep Temporal-ready boundary from day one.
Move to Temporal when mission waits, retries and long-running workflows exceed MVP runner capability.
```

Primary invariant:

```text
MissionRun state is owned by Epistemic OS, not by HTTP requests, UI state or LLM provider state.
```

---

## 3. Runtime Ownership

Runtime owns:

- MissionRun lifecycle;
- step progression;
- waiting for approval;
- cancellation;
- retry policy;
- idempotency boundary;
- activity execution boundary;
- runtime trace events.

Runtime does not own:

- epistemic truth;
- artifact patch validity;
- evidence validity;
- policy decisions;
- UI state;
- model provider state as source of truth.

---

## 4. DurableRuntimePort

### 4.1. Interface

```ts
interface DurableRuntimePort {
  start(command: StartMissionRunCommand): Promise<MissionRunRef>;
  signal(runId: string, signal: MissionSignal): Promise<void>;
  cancel(runId: string, reason: string): Promise<void>;
  query(runId: string): Promise<MissionRunStatusView>;
}
```

### 4.2. Commands

```ts
type StartMissionRunCommand = {
  missionId: string;
  workflowCode: string;
  actor: ActorRef;
  idempotencyKey: string;
  correlationId: string;
  input?: unknown;
};
```

### 4.3. Signals

```ts
type MissionSignal =
  | {
      type: 'approval.resolved';
      signalId: string;
      approvalId: string;
      resolution: 'approve' | 'reject' | 'edit_then_approve';
      actor: ActorRef;
      idempotencyKey: string;
      correlationId: string;
    }
  | {
      type: 'run.cancel_requested';
      signalId: string;
      reason: string;
      actor: ActorRef;
      correlationId: string;
    }
  | {
      type: 'run.resume_requested';
      signalId: string;
      actor: ActorRef;
      correlationId: string;
    };
```

### 4.4. Query Result

```ts
type MissionRunStatusView = {
  runId: string;
  missionId: string;
  status:
    | 'queued'
    | 'running'
    | 'requires_action'
    | 'waiting'
    | 'completed'
    | 'failed'
    | 'cancelled'
    | 'expired';
  currentStage?: string;
  pendingApprovalIds: string[];
  lastEventAt?: string;
  failure?: {
    code: string;
    message: string;
    retryable: boolean;
  };
};
```

---

## 5. Lightweight MVP Runner

### 5.1. Purpose

The lightweight MVP runner executes short internal demo workflows without committing to full Temporal deployment during the first six weeks.

It must still respect runtime boundaries.

### 5.2. Allowed MVP Runner Behavior

Allowed:

- start run;
- update run state in PostgreSQL;
- execute deterministic step sequence;
- pause at approval;
- resume after approval signal;
- emit trace events;
- store activity results;
- enforce idempotency;
- fail gracefully.

Not allowed:

- hidden in-memory source of truth;
- long waits that cannot survive process restart;
- side effects without idempotency;
- provider calls in UI handlers;
- artifact patch application outside application service;
- direct domain mutation from runner bypassing use cases.

### 5.3. MVP Runner Shape

```ts
interface MissionWorkflowRunner {
  run(command: StartMissionRunCommand): Promise<MissionRunRef>;
  handleSignal(runId: string, signal: MissionSignal): Promise<void>;
}
```

Recommended internal structure:

```text
MissionWorkflowRunner
  → MissionRunRepository
  → Application use cases
  → ActivityExecutor
  → TraceEventWriter
  → IdempotencyService
```

### 5.4. Restart Behavior

For MVP internal dev:

```text
- completed and failed states persist;
- pending approvals persist;
- process restart does not lose mission/artifact/domain state;
- in-flight non-approved demo step may be retried manually;
- limitation documented.
```

This is acceptable only for MVP. Later production runtime must support robust resume/replay.

---

## 6. Temporal-Ready Boundary

### 6.1. Why Temporal-Ready

Epistemic OS is expected to eventually support:

- long-running missions;
- durable approval waits;
- retries with backoff;
- cancellation;
- worker restarts;
- activity heartbeats;
- replay safety;
- versioned workflows.

Temporal or equivalent durable execution system is the intended future adapter.

### 6.2. Boundary Rules

To keep migration easy:

```text
- workflow orchestration uses DurableRuntimePort;
- all side effects are activities/use cases;
- workflow state transitions are explicit;
- signals are typed;
- activity results are serializable;
- provider calls are never hidden inside UI/API handlers;
- idempotency keys are mandatory for side-effecting activities.
```

### 6.3. Future Temporal Adapter

```ts
class TemporalDurableRuntimeAdapter implements DurableRuntimePort {
  start(command: StartMissionRunCommand): Promise<MissionRunRef>;
  signal(runId: string, signal: MissionSignal): Promise<void>;
  cancel(runId: string, reason: string): Promise<void>;
  query(runId: string): Promise<MissionRunStatusView>;
}
```

### 6.4. Temporal Adoption Trigger

Adopt Temporal when at least two are true:

```text
- missions wait longer than a single interactive session;
- approval waits must survive worker restart automatically;
- retries/backoff become complex;
- external tool actions become frequent;
- parallel steps become necessary;
- replay debugging becomes valuable;
- MVP runner limitations block product scenarios.
```

---

## 7. Runtime Activities

### 7.1. Activity Definition

An activity is any operation with side effects, external dependency or long-running behavior.

MVP activities:

```text
model.mapping
source.ingest
evidence.retrieve
epistemic.map
artifact.patch_propose
approval.create
approval.resolve
artifact.patch_apply
trace.write
```

### 7.2. Activity Contract

```ts
type ActivityContext = {
  activityId: string;
  runId: string;
  missionId: string;
  actor: ActorRef;
  idempotencyKey?: string;
  correlationId: string;
  startedAt: string;
};

type ActivityResult<T> = {
  activityId: string;
  status: 'completed' | 'failed' | 'skipped';
  output?: T;
  error?: {
    code: string;
    message: string;
    retryable: boolean;
  };
  startedAt: string;
  completedAt: string;
};
```

### 7.3. Idempotent Activity Wrapper

```ts
function idempotentActivity<TInput, TResult>(
  name: string,
  handler: (input: TInput, ctx: ActivityContext) => Promise<TResult>
): (input: TInput, ctx: ActivityContext) => Promise<ActivityResult<TResult>>;
```

Rules:

```text
- if idempotency key was completed, return stored result;
- if same key with different request hash, return conflict;
- if previous attempt failed retryably, allow retry according to policy;
- store result or failure summary.
```

---

## 8. Activity Snapshots

### 8.1. Purpose

Activity snapshots support debugging, audit and future replay/reconstruction.

They are not a substitute for persisted domain state.

### 8.2. Generic Activity Snapshot

```ts
type ActivitySnapshot = {
  snapshotId: string;
  runId: string;
  missionId: string;
  activityId: string;
  activityType: string;
  requestHash: string;
  responseHash?: string;
  status: 'completed' | 'failed';
  inputRef?: string;
  outputRef?: string;
  redactionPolicyId?: string;
  createdAt: string;
};
```

### 8.3. LLM Activity Snapshot

```ts
type LlmActivitySnapshot = {
  snapshotId: string;
  workflowRunId: string;
  activityId: string;
  modelRunId: string;
  promptVersion: string;
  modelId: string;
  providerId: string;
  temperature?: number;
  seed?: number;
  requestHash: string;
  responseHash: string;
  rawRequestRef?: string;
  rawResponseRef?: string;
  redactionPolicyId: string;
  createdAt: string;
};
```

Rules:

```text
- do not store raw secrets;
- raw request/response storage is optional and must be redacted;
- hash-only snapshot is acceptable for MVP fake provider;
- future Temporal replay must not call provider again to reproduce output.
```

---

## 9. Idempotency Model

### 9.1. Required Idempotency

Idempotency is required for:

- starting a MissionRun;
- resolving approval;
- applying artifact patch;
- executing external action;
- writing outbox event for retryable command;
- MCP command that can cause state change.

### 9.2. Idempotency Behavior

```text
same key + same request hash + completed:
  return stored response

same key + different request hash:
  reject with IDEMPOTENCY_CONFLICT

same key + in_progress:
  return retryable conflict or wait status

expired key:
  treat according to scope-specific policy
```

### 9.3. Idempotency Scope

Recommended scopes:

```text
mission_run.start
approval.resolve
artifact_patch.apply
mcp.command
outbox.event
```

---

## 10. Observability Thesis

Observability in Epistemic OS must cover both system behavior and epistemic behavior.

Traditional observability:

```text
latency
errors
throughput
resource usage
```

Epistemic observability:

```text
node creation
strength downgrade
boundary violation
weak evidence
contradiction
approval required
artifact patch reason
citation validity
human decision point
```

The user and developer must be able to answer:

```text
What happened?
Why did the artifact change?
What evidence supported it?
Where did the system downgrade or stop?
What did the human decide?
```

---

## 11. Trace Taxonomy

### 11.1. Required Trace Fields

Every significant event should include:

```ts
type TraceEvent = {
  eventId: string;
  eventType: string;
  missionId?: string;
  runId?: string;
  artifactId?: string;
  nodeId?: string;
  evidenceId?: string;
  approvalId?: string;
  decisionId?: string;
  correlationId?: string;
  idempotencyKey?: string;
  actor?: ActorRef;
  payload?: Record<string, unknown>;
  createdAt: string;
};
```

### 11.2. MVP Event Names

Mission:

```text
mission.created
mission.brief_updated
mission.completed
```

Runtime:

```text
run.started
run.state_changed
run.failed
run.cancelled
activity.started
activity.completed
activity.failed
```

Epistemic:

```text
epistemic.node_created
epistemic.node_downgraded
epistemic.boundary_added
epistemic.conflict_required
```

Evidence:

```text
evidence.source_ingested
evidence.retrieved
evidence.ref_created
evidence.citation_validated
evidence.citation_invalid
```

Artifact:

```text
artifact.created
artifact.patch_proposed
artifact.patch_rejected
artifact.patch_applied
artifact.version_created
```

Approval / Decision:

```text
approval.created
approval.resolved
decision.recorded
conflict.created
conflict.resolved
```

MCP:

```text
mcp.app.rendered
mcp.message.received
mcp.message.rejected
mcp.message.accepted
mcp.command.submitted
mcp.command.completed
mcp.command.failed
```

Policy:

```text
policy.allowed
policy.denied
policy.approval_required
policy.downgrade_required
```

---

## 12. Logging and Redaction

### 12.1. Log Levels

```text
DEBUG:
  local developer diagnostics only.

INFO:
  normal mission/run/activity events.

WARN:
  degraded evidence, rejected MCP message, retryable failure.

ERROR:
  failed use case, failed activity, persistence error.

SECURITY:
  approval bypass attempt, invalid origin, replayed nonce, secret scan issue.
```

### 12.2. Redaction Rules

Never log:

- provider API keys;
- authorization headers;
- database credentials;
- raw secrets;
- private ChatAVG data;
- full raw prompt if it may contain sensitive data;
- hidden system instructions;
- MCP iframe tokens.

Allowed:

- IDs;
- hashes;
- redacted snippets;
- source titles;
- event types;
- status and error codes.

---

## 13. Metrics

### 13.1. Runtime Metrics

```text
mission_runs_started_total
mission_runs_completed_total
mission_runs_failed_total
mission_run_duration_ms
activity_duration_ms
approval_wait_duration_ms
idempotency_conflicts_total
outbox_pending_count
outbox_failed_count
```

### 13.2. Epistemic Metrics

```text
epistemic_nodes_created_total
epistemic_nodes_downgraded_total
boundary_violations_total
conflicts_created_total
unsupported_strong_claims_blocked_total
expired_node_revalidation_required_total
```

### 13.3. Evidence Metrics

```text
sources_ingested_total
evidence_refs_created_total
citation_invalid_total
citation_stale_total
weak_evidence_downgrades_total
```

### 13.4. MCP Metrics

```text
mcp_messages_received_total
mcp_messages_rejected_total
mcp_nonce_replays_total
mcp_capability_denied_total
mcp_commands_submitted_total
```

### 13.5. Demo Metrics

```text
time_to_create_mission_ms
time_to_first_node_ms
time_to_patch_proposal_ms
time_to_approval_resolution_ms
time_to_artifact_version_ms
```

---

## 14. Evaluation Strategy

### 14.1. MVP Semantic Eval Smoke

MVP does not need a full semantic eval platform, but it must include a small smoke set.

Minimum cases:

```text
- factual claim with evidence;
- unsupported strong claim;
- hypothesis that must remain weak;
- expired/stale source case;
- contradiction requiring decision;
- artifact patch requiring evidence;
- high-risk patch requiring approval.
```

### 14.2. Evidence Eval Smoke

Minimum cases:

```text
- valid citation span;
- invalid citation span;
- stale source;
- weak source quality;
- no evidence found;
- source linked to wrong node.
```

### 14.3. MCP Security Eval

Covered by EPIOS-06 security tests.

Must be part of release gate.

---

## 15. Release Gates

## 15.1. Gate W1 — Foundation

Pass criteria:

```text
- repository runs locally;
- PostgreSQL starts;
- migrations apply;
- first domain test passes;
- no secrets committed;
- README quick start exists.
```

## 15.2. Gate W2 — Domain and Persistence

Pass criteria:

```text
- Mission persists;
- EpistemicNode persists;
- EvidenceRef persists;
- ArtifactPatch persists;
- ApprovalRequest persists;
- P0 domain invariant tests pass;
- repository integration tests pass.
```

## 15.3. Gate W3 — API and Use Cases

Pass criteria:

```text
- create mission through API;
- update brief through API;
- run mapping through API;
- propose patch through API;
- resolve approval through API;
- trace events stored;
- typed errors returned.
```

## 15.4. Gate W4 — Demo Shell

Pass criteria:

```text
- neutral shell loads;
- Universal Mission Room works;
- scenario selector works;
- nodes visible;
- artifact patch visible;
- trace visible;
- state persists after reload.
```

## 15.5. Gate W5 — MCP Apps

Pass criteria:

```text
- ClaimApp renders node;
- EvidenceViewer renders evidence;
- ApprovalApp resolves approval through backend command;
- invalid origin/schema/nonce rejected;
- all MCP commands audited;
- app cannot mutate domain directly.
```

## 15.6. Gate W6 — MVP RC

Pass criteria:

```text
- at least one scenario end-to-end works;
- four scenarios have templates or documented partial support;
- clean setup works;
- P0/P1 tests green;
- release notes complete;
- known limitations documented;
- internal demo script complete.
```

---

## 16. Release Candidate Checklist

### 16.1. Product

```text
[ ] Create mission
[ ] Build mission brief
[ ] Ingest/paste source material
[ ] Generate EpistemicNodes
[ ] Attach/view EvidenceRefs
[ ] Propose ArtifactPatch
[ ] Approve/reject through ApprovalApp
[ ] Apply patch
[ ] View artifact version
[ ] View trace
```

### 16.2. Architecture

```text
[ ] domain has no infrastructure imports
[ ] application uses ports
[ ] PostgreSQL is system of record
[ ] MCP Apps cannot mutate domain directly
[ ] ModelGateway is not workflow owner
[ ] runtime uses DurableRuntimePort
```

### 16.3. Persistence

```text
[ ] migrations apply cleanly
[ ] seed data loads
[ ] optimistic concurrency tested
[ ] idempotency tested
[ ] outbox table exists
[ ] trace events stored
```

### 16.4. Security

```text
[ ] no secrets in repo
[ ] invalid MCP messages rejected
[ ] replayed nonce rejected
[ ] write path requires backend command
[ ] approval cannot be resolved twice inconsistently
[ ] trace payload redaction reviewed
```

### 16.5. Documentation

```text
[ ] README quick start
[ ] .env.example
[ ] known limitations
[ ] runbook
[ ] demo script
[ ] EPIOS-00 to EPIOS-07 accepted or marked draft with owner
```

---

## 17. Runbooks

## 17.1. Local Dev Startup Runbook

```bash
pnpm install
cp .env.example .env
pnpm db:up
pnpm db:migrate
pnpm db:seed
pnpm dev
```

Expected result:

```text
API running
Demo shell running
PostgreSQL running
Seed mission available
```

## 17.2. Reset Local State

```bash
pnpm db:reset
pnpm db:migrate
pnpm db:seed
```

Warning:

```text
This deletes local dev data.
```

## 17.3. Demo Runbook

```text
1. Open demo shell.
2. Create mission.
3. Select scenario: Architecture Document.
4. Paste sample architecture note.
5. Build mission brief.
6. Run mapping.
7. Open ClaimApp.
8. Open EvidenceViewer.
9. Propose artifact patch.
10. Resolve approval through ApprovalApp.
11. View artifact version.
12. Open trace.
```

## 17.4. Failed Migration Runbook

```text
1. Stop dev services.
2. Inspect migration error.
3. Reset DB if local-only.
4. Re-run migrations.
5. If migration already tagged, create fix migration instead of editing old one.
```

## 17.5. MCP Bridge Failure Runbook

```text
1. Check app manifest status.
2. Check allowed origin.
3. Check schemaVersion.
4. Check nonce table for replay.
5. Check capability grant.
6. Check policy decision.
7. Inspect mcp.message.rejected trace event.
```

---

## 18. MVP Operational Non-Goals

MVP does not require:

- production SLOs;
- multi-region reliability;
- high availability;
- production-grade Temporal deployment;
- centralized log platform;
- enterprise incident process;
- production on-call;
- long-term retention policy;
- public uptime guarantee.

MVP still requires:

- reproducible local dev;
- clear error messages;
- safe security defaults;
- no secrets;
- traceable demo flow;
- documented limitations.

---

## 19. Post-MVP Runtime Evolution

Recommended order after MVP:

```text
1. Replace lightweight runner with Temporal adapter if needed.
2. Add real activity snapshots table/object storage.
3. Add retry/backoff policies.
4. Add long-running approval wait support.
5. Add workflow versioning.
6. Add chaos/restart tests.
7. Add stronger OTel pipeline.
8. Add semantic eval dashboard.
```

---

## 20. Approval Checklist

This document is approved when the project owner confirms:

- runtime strategy is acceptable;
- lightweight MVP runner is acceptable;
- Temporal-ready boundary is acceptable;
- activity/idempotency model is acceptable;
- snapshot model is acceptable;
- trace taxonomy is acceptable;
- metrics are acceptable;
- eval smoke strategy is acceptable;
- release gates are acceptable;
- runbooks are acceptable;
- post-MVP runtime evolution is acceptable.

---

## 21. Next Document After Approval

After this document is approved, create:

```text
EPIOS-08 — ChatAVG Reuse and v2.4 Stabilization
```

That document should define:

- ChatAVG v2.4 stabilization scope;
- what to freeze;
- what to fix;
- what to extract;
- what to discard;
- reuse matrix;
- migration/handover checklist;
- repository hygiene;
- v2.4 release criteria.

