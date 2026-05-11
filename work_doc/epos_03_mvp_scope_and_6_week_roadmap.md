# EPOS-03 — MVP Scope and 6-Week Roadmap

**Project:** Epistemic OS v1.0  
**Document ID:** `EPOS-03-MVP-SCOPE-ROADMAP`  
**Version:** Draft 0.1  
**Status:** Accepted for MVP Bootstrap  
**Depends on:** `EPOS-00-PROJECT-BRIEF`, `EPOS-01-ARCHITECTURE-FOUNDATION`, `EPOS-02-DOMAIN-MODEL`  
**Target MVP horizon:** 6 weeks or faster  
**Repository model:** Open-source from day one  
**Deployment target:** Internal dev only  
**Storage:** PostgreSQL-first  
**MVP shell:** Neutral Epistemic OS Demo Shell  
**MVP domain:** Universal Mission Room  

---

## 1. Purpose of This Document

This document defines the MVP scope and 6-week delivery roadmap for **Epistemic OS v1.0**.

It specifies:

- MVP vertical slice;
- demo scenarios;
- what is in/out of MVP;
- weekly delivery plan;
- acceptance gates;
- backlog priorities;
- project workflow;
- release candidate criteria.

This document is designed for execution. It should prevent scope expansion while still enabling a coherent, impressive internal demo.

---

## 2. MVP Principle

The MVP is not a broad platform release.

The MVP is a thin but coherent vertical slice proving that Epistemic OS can transform material into a traceable artifact through nodes, evidence, decisions and approvals.

Core MVP flow:

```text
Universal Mission Room
→ create mission
→ build mission brief
→ ingest or paste source material
→ extract EpistemicNodes
→ attach EvidenceRefs
→ propose ArtifactPatch
→ show ClaimApp and EvidenceViewer
→ request approval through ApprovalApp
→ apply patch
→ persist artifact version
→ show trace
```

If a feature does not strengthen this vertical slice, it is not MVP.

---

## 3. MVP Success Definition

MVP succeeds when an internal user can complete this demo in the neutral shell:

1. Create a mission.
2. Select one demo scenario.
3. Enter or paste material.
4. Build a mission brief.
5. Generate an epistemic mapping.
6. Inspect at least 3 EpistemicNodes.
7. Inspect evidence for at least one node.
8. Produce or update a LivingArtifact.
9. Review an ArtifactPatch.
10. Approve or reject the patch through ApprovalApp.
11. See the resulting artifact version.
12. Open trace and understand what happened.

The MVP must be demonstrable from a clean local/internal dev setup.

---

## 4. Demo Scenarios

MVP supports four demo scenarios. They share the same platform flow and differ only in prompts/templates/sample data/artifact type.

### 4.1. Scenario A — Architecture Document

**User goal:** create or improve a short architecture document.

Input examples:

- architectural proposal;
- module design notes;
- migration plan;
- architecture critique.

Expected artifact:

```text
Architecture Decision / Architecture Note
```

Required outputs:

- claims about architecture;
- boundaries and risks;
- evidence from supplied text;
- artifact patch;
- decision card if trade-off exists.

### 4.2. Scenario B — Project Planning

**User goal:** turn a project idea into a structured plan.

Input examples:

- project concept;
- rough backlog;
- milestone plan;
- implementation concern.

Expected artifact:

```text
Project Plan / Delivery Outline
```

Required outputs:

- goals and constraints;
- assumptions;
- risk nodes;
- milestone patch;
- approval for plan update.

### 4.3. Scenario C — Research Review

**User goal:** review a research note or source-backed argument.

Input examples:

- article excerpt;
- notes from documents;
- research summary;
- competing claims.

Expected artifact:

```text
Research Review Memo
```

Required outputs:

- factual vs interpretive nodes;
- evidence quality;
- weak/unsupported claims;
- citation validation status;
- revised memo patch.

### 4.4. Scenario D — Decision Support

**User goal:** clarify a decision fork.

Input examples:

- trade-off statement;
- option list;
- risk description;
- product/architecture decision.

Expected artifact:

```text
Decision Support Memo
```

Required outputs:

- options;
- consequences;
- conflict card;
- decision record;
- artifact update after decision.

---

## 5. MVP Scope

## 5.1. In Scope

### Product / UX

```text
Neutral Demo Shell
Universal Mission Room
Mission Brief Builder
Artifact Workspace MVP
ClaimCard / ClaimApp
EvidenceViewer
ApprovalApp
Trace Drawer MVP
```

### Domain

```text
Mission
MissionRun
EpistemicNode
ReasoningEdge basic support/contradicts
DomainBoundary
Source
EvidenceRef
LivingArtifact
ArtifactPatch
DecisionRecord
ApprovalRequest
ConflictCard basic
```

### Application

```text
CreateMission
UpdateMissionBrief
IngestSource
RunEpistemicMapping
CreateEvidenceRefs
ProposeArtifactPatch
CreateApprovalRequest
ResolveApproval
ApplyArtifactPatch
GetMissionReadModel
GetTraceForMission
```

### Infrastructure

```text
PostgreSQL
Migrations
Repositories
Outbox table
Basic outbox worker
Fake deterministic model provider
Optional OpenAI-compatible adapter
MCP App Registry
MCP bridge validation
Local dev Docker Compose
```

### Quality

```text
Domain invariant tests
Repository integration tests
MCP bridge security tests
Demo flow E2E smoke
Basic trace event tests
```

---

## 5.2. Out of Scope

```text
ChatAVG v3.0 shell
Public SaaS deployment
Enterprise multi-tenancy
Billing
SSO
Advanced admin console
Full marketplace
Production sandbox for arbitrary code
Neo4j/Memgraph
Kafka/Redpanda/Debezium
3D graph UI
Autonomous long-running agents
Complex multi-agent role-pass system
Advanced retrieval/reranking
Full Temporal production rollout if too costly for 6 weeks
External write integrations beyond internal controlled demo
Mobile-first UX
```

---

## 6. MVP Architecture Slice

### 6.1. Vertical Slice Components

```text
apps/demo-shell
  Mission Room UI
  Artifact Workspace
  MCP App host

packages/api
  HTTP/BFF routes
  DTO validation

packages/application
  Mission use cases
  Mapping use cases
  Artifact use cases
  Approval use cases

packages/domain
  Domain model and invariants

packages/infrastructure-postgres
  Repositories
  Migrations
  Outbox

packages/infrastructure-models
  Fake deterministic model provider
  Optional provider adapter

packages/infrastructure-mcp
  MCPAppRegistry
  Bridge validation
  ClaimApp
  EvidenceViewer
  ApprovalApp

packages/observability
  Trace events
  Local trace store/log
```

### 6.2. MVP Data Flow

```text
User input
→ Mission Brief
→ Mapping Use Case
→ EpistemicKernel
→ EpistemicNode / EvidenceRef persistence
→ ArtifactPatch proposal
→ ApprovalRequest
→ ApprovalApp command
→ ApplyArtifactPatch
→ ArtifactVersion
→ TraceDrawer
```

---

## 7. Weekly Roadmap

## Week 1 — Repository, Foundation, PostgreSQL Baseline

### Goal

Create a working open-source repository with architecture skeleton, local dev setup, PostgreSQL and first domain tests.

### Scope

```text
- repository bootstrap;
- pnpm workspace;
- package structure;
- Docker Compose with PostgreSQL;
- initial migrations;
- domain package skeleton;
- application package skeleton;
- API package skeleton;
- demo shell skeleton;
- fake deterministic provider skeleton;
- basic CI commands;
- initial README and contribution/security files.
```

### Deliverables

```text
README.md
LICENSE
CONTRIBUTING.md
SECURITY.md
CODE_OF_CONDUCT.md
pnpm-workspace.yaml
docker-compose.yml
.env.example
packages/domain
packages/application
packages/api
packages/infrastructure-postgres
apps/demo-shell
initial migrations
```

### Gate W1

```text
- pnpm install works;
- pnpm test works;
- pnpm dev starts API and shell or documented partial start;
- PostgreSQL starts locally;
- first migration applies;
- first domain invariant test passes;
- no secrets committed.
```

---

## Week 2 — Domain Kernel and Persistence

### Goal

Implement MVP domain model and PostgreSQL persistence for mission, nodes, evidence and artifacts.

### Scope

```text
- Mission aggregate;
- MissionRun state machine;
- EpistemicNode;
- ReasoningEdge basic;
- DomainBoundary;
- Source;
- EvidenceRef;
- LivingArtifact;
- ArtifactPatch;
- ApprovalRequest;
- DecisionRecord;
- PostgreSQL repositories;
- transaction manager;
- domain invariant tests;
- repository integration tests.
```

### Deliverables

```text
domain model implementation
repository ports
PostgreSQL repository implementations
migration files
domain test matrix P0
repository integration tests
```

### Gate W2

```text
- create mission persists;
- create nodes persists;
- attach evidence persists;
- create artifact persists;
- propose patch persists;
- approval request persists;
- invalid run transition rejected;
- strong system node without evidence downgraded/rejected;
- stale patch baseVersion rejected.
```

---

## Week 3 — Application Use Cases and API/BFF

### Goal

Expose typed use cases through API and enable the first end-to-end non-UI flow.

### Scope

```text
- CreateMission;
- UpdateMissionBrief;
- IngestSource;
- RunEpistemicMapping MVP;
- ProposeArtifactPatch MVP;
- CreateApprovalRequest;
- ResolveApproval;
- ApplyArtifactPatch;
- GetMissionReadModel;
- GetTraceForMission;
- API routes;
- DTO validation;
- error contract;
- fake model mapping path.
```

### Deliverables

```text
application use cases
API routes
DTO schemas
ErrorResponse contract
fake mapping implementation
trace event emission MVP
API smoke tests
```

### Gate W3

```text
- API can create mission;
- API can update brief;
- API can run mapping;
- API can return mission read model;
- API can propose patch;
- API can create/resolve approval;
- API can apply patch;
- trace events emitted;
- typed errors returned.
```

---

## Week 4 — Demo Shell and Mission Room MVP

### Goal

Build the neutral demo shell with a working Universal Mission Room.

### Scope

```text
- demo shell layout;
- scenario selector;
- Mission Brief Builder;
- Mission read model view;
- Artifact Workspace MVP;
- ClaimCard component;
- Evidence panel;
- Approval panel placeholder;
- TraceDrawer MVP;
- local demo data;
- end-to-end manual demo path.
```

### Deliverables

```text
Neutral Demo Shell
Universal Mission Room
Scenario templates
Mission Brief UI
Artifact Workspace MVP
ClaimCard UI
EvidenceViewer placeholder or embedded panel
TraceDrawer MVP
```

### Gate W4

```text
- user can create mission from UI;
- user can select one of four demo scenarios;
- user can enter brief/material;
- user can run mapping from UI;
- nodes visible in UI;
- artifact patch visible in UI;
- trace visible in UI;
- page reload preserves persisted state.
```

---

## Week 5 — MCP Apps MVP and Approval Flow

### Goal

Integrate MCP Apps as MVP surfaces with secure bridge validation.

### Scope

```text
- MCPAppRegistry;
- MCPBridgeMessage schema;
- origin/schema/nonce/timestamp validation;
- ClaimApp MVP;
- EvidenceViewer MVP;
- ApprovalApp MVP;
- typed backend command submission;
- audit/trace for MCP commands;
- MCP bridge security tests.
```

### Deliverables

```text
MCPAppRegistry
MCP bridge validator
ClaimApp
EvidenceViewer
ApprovalApp
MCP command audit events
MCP bridge tests
```

### Gate W5

```text
- ClaimApp renders selected node;
- EvidenceViewer renders evidence for node;
- ApprovalApp approves/rejects patch through backend command;
- invalid schema rejected;
- invalid origin rejected or simulated rejection test passes;
- replayed nonce rejected;
- all MCP commands traced/audited;
- UI cannot apply patch directly without backend use case.
```

---

## Week 6 — Hardening, Demo Scenarios, Release Candidate

### Goal

Finalize MVP release candidate for internal dev demo.

### Scope

```text
- complete four demo scenarios;
- polish Mission Room demo flow;
- fix P0/P1 bugs;
- add E2E smoke;
- add release gates;
- add seed data;
- write MVP limitations;
- write runbook;
- prepare demo script;
- tag MVP RC.
```

### Deliverables

```text
Four scenario templates
Seed data
E2E smoke test
MVP release checklist
Known limitations
Runbook
Demo script
MVP RC tag
```

### Gate W6

```text
- clean setup works;
- all W1-W5 gates still pass;
- four scenarios can be demoed;
- core domain tests green;
- repository integration tests green;
- MCP security tests green;
- E2E smoke green;
- no known P0 security issue;
- release notes complete.
```

---

## 8. Faster-than-6-Weeks Option

If speed is critical, reduce MVP to 3–4 weeks by cutting scope:

### Keep

```text
PostgreSQL
Mission
EpistemicNode
EvidenceRef
LivingArtifact
ArtifactPatch
ApprovalRequest
Neutral Demo Shell
ClaimApp
ApprovalApp
one demo scenario
```

### Cut

```text
all four scenarios → one scenario only
ReasoningEdge advanced usage
ConflictCard
EvidenceViewer as separate app
TraceDrawer full UI
outbox worker beyond minimal table
optional OpenAI adapter
advanced UI polish
```

### Fast MVP Demo

```text
architecture document only
→ mission brief
→ 3 nodes
→ 2 evidence refs
→ 1 patch
→ approval
→ versioned artifact
```

---

## 9. Backlog Priorities

### P0 — Must Have for MVP

```text
Repository bootstrap
PostgreSQL setup
Domain model
Mission CRUD
EpistemicNode persistence
EvidenceRef persistence
LivingArtifact persistence
ArtifactPatch proposal/apply
ApprovalRequest lifecycle
Neutral Demo Shell
Mission Brief Builder
Claim display
ApprovalApp
Trace basics
MCP bridge validation
Core tests
Demo script
```

### P1 — Should Have for MVP

```text
Four scenario templates
EvidenceViewer App
ReasoningEdge basic
ConflictCard basic
Outbox table + minimal worker
DecisionRecord UI
Artifact diff viewer
E2E smoke
OpenAI-compatible optional adapter
TraceDrawer tabs
```

### P2 — Defer Unless Easy

```text
Temporal adapter
Forge sandbox
External write tools
Advanced graph visualization
pgvector retrieval
Full admin console
Advanced semantic evals
Role-pass system
Conflict auto-detection
Multi-user collaboration
```

---

## 10. Delivery Model

### 10.1. Work Style

Use short, reviewable vertical slices.

Every PR should answer:

```text
What user-visible or architecture-critical slice does this enable?
What contract did it add/change?
What invariant is tested?
What is the rollback path?
```

### 10.2. Branching

Recommended for 6-week MVP:

```text
main protected
short-lived feature branches
PR required
squash merge
release tags for weekly milestones
```

### 10.3. PR Requirements

Every PR must include:

- tests or explicit reason no test is needed;
- documentation update if contract changes;
- migration file if database changes;
- no secrets;
- no dependency direction violation;
- clear acceptance note.

### 10.4. Daily Cadence

For a 6-week target:

```text
Daily 15-minute delivery check:
  yesterday completed slice;
  today's target slice;
  blocker;
  risk to MVP vertical flow.
```

Twice weekly:

```text
architecture drift review
```

Weekly:

```text
gate review and demo
```

---

## 11. Release Candidate Criteria

MVP RC can be declared only if:

### Product Criteria

```text
- Universal Mission Room demo works;
- at least one scenario works end-to-end;
- four scenarios have templates or documented partial support;
- artifact can be produced and versioned;
- user can inspect claims and evidence;
- user can approve/reject patch through ApprovalApp.
```

### Architecture Criteria

```text
- domain package has no infrastructure imports;
- application services use ports;
- PostgreSQL is system of record;
- MCP App cannot mutate domain directly;
- provider adapter is not workflow owner.
```

### Quality Criteria

```text
- P0 domain tests green;
- repository integration tests green;
- API smoke green;
- MCP bridge security tests green;
- E2E demo smoke green;
- migrations apply on clean DB.
```

### Security Criteria

```text
- no secrets in repo;
- invalid MCP messages rejected;
- write path requires backend command;
- high-risk action requires approval or is out of scope;
- internal dev warning visible in docs.
```

### Documentation Criteria

```text
- README quick start;
- .env.example;
- runbook;
- known limitations;
- demo script;
- architecture docs EPOS-00 to EPOS-03 approved.
```

---

## 12. MVP Known Limitations to Document

MVP should explicitly disclose:

```text
- internal dev only;
- not production hardened;
- no enterprise auth;
- no billing;
- no public SaaS deployment;
- limited demo sources;
- limited evidence retrieval;
- limited workflow runtime;
- limited external actions;
- deterministic/fake provider may be used for core demo;
- MCP Apps are MVP implementations;
- no graph database yet;
- no advanced semantic eval suite yet.
```

---

## 13. Risk Register

| Risk | Priority | Mitigation |
|---|---:|---|
| 6-week scope too large | P0 | Cut to one scenario if needed |
| MCP Apps consume too much time | P0 | ClaimApp + ApprovalApp minimum; EvidenceViewer can be simple |
| PostgreSQL schema churn slows delivery | P1 | Keep schema minimal; avoid over-normalization |
| Domain model overbuilt | P1 | Enforce MVP include/exclude list |
| Demo shell becomes product UI project | P1 | Keep shell neutral and minimal |
| Fake provider hides integration issues | P1 | Optional provider adapter P1, but fake is required for deterministic demo |
| Approval flow bypass risk | P0 | Backend-only patch apply; MCP tests |
| Open-source repo leaks private data | P0 | No ChatAVG secrets/data; review reused code |
| Outbox adds complexity | P2 | Minimal outbox table first; worker P1/P2 |
| Temporal setup slows MVP | P2 | Use DurableRuntimePort; defer Temporal if needed |

---

## 14. Initial Epic Plan

### Epic 0 — Foundation

```text
Repo bootstrap
Open-source files
Workspace setup
Docker Compose
CI baseline
```

### Epic 1 — Domain and Persistence

```text
Domain model
PostgreSQL schema
Repositories
Invariant tests
```

### Epic 2 — Use Cases and API

```text
Mission use cases
Mapping use case
Artifact patch use cases
Approval use cases
API routes
```

### Epic 3 — Demo Shell

```text
Universal Mission Room
Mission Brief Builder
Artifact Workspace
Claim/Evidence/Trace panels
```

### Epic 4 — MCP Apps

```text
MCPAppRegistry
Bridge security
ClaimApp
EvidenceViewer
ApprovalApp
```

### Epic 5 — Release Candidate

```text
Demo scenarios
E2E smoke
Runbook
Known limitations
Release notes
```

---

## 15. Week-by-Week Gate Summary

| Week | Gate | Expected Result |
|---:|---|---|
| 1 | Foundation Gate | repo runs locally, PostgreSQL migration works |
| 2 | Domain Gate | core aggregates persist and invariants pass |
| 3 | API Gate | end-to-end non-UI flow works via API |
| 4 | UI Gate | Mission Room creates mission and shows nodes/artifact |
| 5 | MCP Gate | ClaimApp/EvidenceViewer/ApprovalApp work safely |
| 6 | RC Gate | internal demo works, tests/docs complete |

---

## 16. Approval Checklist

This document is approved when the project owner confirms:

- MVP vertical slice is correct;
- four demo scenarios are correct;
- in/out scope is correct;
- weekly roadmap is acceptable;
- faster-than-6-weeks fallback is acceptable;
- P0/P1/P2 priorities are acceptable;
- release candidate criteria are acceptable.

---

## 17. Next Document After Approval

After this document is approved, create:

```text
EPOS-04 — Repository and Engineering Process
```

That document should define:

- repository governance;
- open-source contribution model;
- ADR/RFC process;
- branching and PR rules;
- CI gates;
- DORA metrics;
- issue taxonomy;
- code ownership;
- documentation lifecycle;
- security disclosure process.

