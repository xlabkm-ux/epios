# EPOS-09 — ADR Pack and Decision Index

**Project:** Epistemic OS v1.0  
**Document ID:** `EPOS-09-ADR-PACK-DECISION-INDEX`  
**Version:** Draft 0.1  
**Status:** Accepted for MVP Bootstrap  
**Depends on:** `EPOS-00` through `EPOS-08`  
**Purpose:** Convert accepted project, architecture, runtime, persistence, MCP and reuse decisions into an initial ADR index.  

---

## 1. Purpose of This Document

This document collects and formalizes the initial Architecture Decision Records for **Epistemic OS v1.0**.

It turns approved decisions from `EPOS-00` through `EPOS-08` into a decision index that can be copied into individual ADR files.

This document is not a replacement for full ADR files. It is the seed package and decision ledger.

---

## 2. ADR Status Values

Use these statuses:

```text
Proposed
Accepted
Superseded
Rejected
Deprecated
```

For the initial project bootstrap, most decisions in this document are marked:

```text
Accepted
```

because they were already approved through the EPOS-00…EPOS-08 sequence.

---

## 3. ADR Index

| ADR | Title | Status | Source Doc | Priority |
|---|---|---|---|---|
| ADR-0001 | Create Epistemic OS as a New Project | Accepted | EPOS-00 | P0 |
| ADR-0002 | Close ChatAVG v2.3 Development and Release v2.4 Stabilization | Accepted | EPOS-00, EPOS-08 | P0 |
| ADR-0003 | Open Source From Day One | Accepted | EPOS-00, EPOS-04 | P0 |
| ADR-0004 | Use Neutral Demo Shell as First Product Shell | Accepted | EPOS-00, EPOS-03 | P0 |
| ADR-0005 | Use Universal Mission Room as MVP Domain | Accepted | EPOS-00, EPOS-03 | P0 |
| ADR-0006 | Use TypeScript Core with Go/Rust Deferred | Accepted | EPOS-00, EPOS-04 | P1 |
| ADR-0007 | Use PostgreSQL as Alpha System of Record | Accepted | EPOS-00, EPOS-05 | P0 |
| ADR-0008 | Include MCP Apps in MVP v1.0 | Accepted | EPOS-00, EPOS-06 | P0 |
| ADR-0009 | Use Layered Hexagonal Architecture | Accepted | EPOS-01 | P0 |
| ADR-0010 | Keep Domain Free of Infrastructure Dependencies | Accepted | EPOS-01, EPOS-02 | P0 |
| ADR-0011 | Use EpistemicNode as Core Claim Primitive | Accepted | EPOS-02 | P0 |
| ADR-0012 | Use Temporal Validity for Epistemic Nodes | Accepted | EPOS-02 | P1 |
| ADR-0013 | Use LivingArtifact and ArtifactPatch as Artifact Model | Accepted | EPOS-02 | P0 |
| ADR-0014 | Use ApprovalRequest and DecisionRecord for Human Decisions | Accepted | EPOS-02, EPOS-06 | P0 |
| ADR-0015 | Use PostgreSQL Relational Graph Before Graph Database | Accepted | EPOS-01, EPOS-05 | P1 |
| ADR-0016 | Use Outbox Events from MVP | Accepted | EPOS-05 | P0 |
| ADR-0017 | Use Idempotency Keys for Side-Effecting Commands | Accepted | EPOS-05, EPOS-07 | P0 |
| ADR-0018 | Treat MCP Apps as Untrusted UI Surfaces | Accepted | EPOS-06 | P0 |
| ADR-0019 | Use Secure MCP Bridge with Origin, Schema, Nonce and Capability Checks | Accepted | EPOS-06 | P0 |
| ADR-0020 | Use Lightweight MVP Runner Behind DurableRuntimePort | Accepted | EPOS-07 | P1 |
| ADR-0021 | Keep Temporal as Future Runtime Adapter, Not MVP Blocker | Accepted | EPOS-07 | P1 |
| ADR-0022 | Use Trace Events for Epistemic and Runtime Observability | Accepted | EPOS-07 | P0 |
| ADR-0023 | Use Fake Deterministic Model Provider for MVP Reliability | Accepted | EPOS-03, EPOS-07 | P1 |
| ADR-0024 | Do Not Import ChatAVG as a Dependency | Accepted | EPOS-08 | P0 |
| ADR-0025 | Reuse ChatAVG Through Reviewed Extraction or Clean Rewrite | Accepted | EPOS-08 | P0 |
| ADR-0026 | Use Apache-2.0 as Recommended Default License | Proposed | EPOS-00, EPOS-04 | P1 |

---

# ADR-0001 — Create Epistemic OS as a New Project

## Status

Accepted

## Context

ChatAVG v2.3 produced useful concepts and implementation fragments, but it also accumulated legacy constraints, duplicated documents and RC scope confusion. The new strategic goal is broader than ChatAVG as a product.

## Decision

Create a new project:

```text
Epistemic Operating System v1.0
```

The project is developed in a separate repository.

## Consequences

Positive:

- clean architecture start;
- no inherited ChatAVG coupling;
- open-source project can be shaped independently;
- ChatAVG can become a future product shell.

Negative:

- requires new repository setup;
- requires extraction/rewrite discipline;
- some existing code may be left behind.

## Revisit Trigger

Revisit only if separate-repo overhead blocks MVP delivery or if legal/licensing constraints prevent reuse.

---

# ADR-0002 — Close ChatAVG v2.3 Development and Release v2.4 Stabilization

## Status

Accepted

## Context

Continuing v2.3 expansion would compete with the new Epistemic OS direction and risk preserving legacy structure.

## Decision

Close v2.3 development. Release ChatAVG v2.4 as a stabilized version at the current functional level.

v2.4 scope is limited to:

- stabilization;
- security;
- reproducibility;
- handover;
- extraction inventory.

## Consequences

Positive:

- prevents scope split;
- protects EPOS roadmap;
- provides stable legacy baseline.

Negative:

- some v2.3 planned features are cancelled;
- users expecting RC2 expansion may need updated communication.

## Revisit Trigger

Do not revisit unless a critical maintenance obligation appears.

---

# ADR-0003 — Open Source From Day One

## Status

Accepted

## Context

Epistemic OS is intended as a platform project with reusable architecture, public credibility and potential external contribution.

## Decision

Make the Epistemic OS repository open-source from day one.

## Consequences

Positive:

- transparency;
- easier community review;
- clearer architecture discipline;
- no later open-source cleanup cliff.

Negative:

- stricter secret/data hygiene required;
- public communication must avoid overpromising;
- ChatAVG reuse requires license and data review.

## Revisit Trigger

Revisit if legal/security review identifies unmanageable exposure risk.

---

# ADR-0004 — Use Neutral Demo Shell as First Product Shell

## Status

Accepted

## Context

Starting with ChatAVG v3.0 as the shell would pull in legacy branding, workflows and assumptions.

## Decision

The first product shell is:

```text
Neutral Epistemic OS Demo Shell
```

## Consequences

Positive:

- proves platform primitives without ChatAVG legacy;
- clearer open-source positioning;
- reusable for demos and internal validation.

Negative:

- ChatAVG v3.0 is delayed;
- product identity is initially less market-specific.

## Revisit Trigger

Revisit after MVP if a ChatAVG-branded shell becomes the next priority.

---

# ADR-0005 — Use Universal Mission Room as MVP Domain

## Status

Accepted

## Context

The first MVP needs a domain broad enough to prove the operating model but narrow enough for six weeks.

## Decision

Use Universal Mission Room as MVP domain with demo scenarios:

- architectural documents;
- project planning;
- research review;
- decision support.

## Consequences

Positive:

- demonstrates reusable platform flow;
- avoids implementing all ChatAVG workflows;
- aligns with Mission-first architecture.

Negative:

- some specialized workflows are deferred;
- demo templates must be carefully scoped.

## Revisit Trigger

Revisit after MVP demo feedback.

---

# ADR-0006 — Use TypeScript Core with Go/Rust Deferred

## Status

Accepted

## Context

The project needs fast delivery, shared language across UI/API/domain, and strong typing.

## Decision

Use TypeScript for v1.0 core. Defer Go/Rust to future infrastructure components only.

## Consequences

Positive:

- faster MVP;
- unified codebase;
- lower team switching cost;
- easy MCP/UI/API integration.

Negative:

- some infrastructure paths may later need rewriting;
- TypeScript runtime constraints may appear for high-throughput services.

## Revisit Trigger

Revisit after MVP if infrastructure bottlenecks are measured.

---

# ADR-0007 — Use PostgreSQL as Alpha System of Record

## Status

Accepted

## Context

The system needs durable persistence for missions, nodes, evidence, artifacts, approvals, decisions, traces, outbox and idempotency.

## Decision

Use PostgreSQL as the system of record from alpha.

## Consequences

Positive:

- production-shaped persistence from day one;
- transactional outbox support;
- relational graph MVP possible;
- avoids SQLite migration cliff.

Negative:

- more setup than in-memory/SQLite;
- schema discipline needed immediately.

## Revisit Trigger

Do not revisit for MVP. Revisit storage extensions after MVP.

---

# ADR-0008 — Include MCP Apps in MVP v1.0

## Status

Accepted

## Context

MCP Apps are central to interactive inspection and approval surfaces. They should not be postponed if the MVP is meant to prove the operating model.

## Decision

Include MCP Apps in MVP:

- ClaimApp;
- EvidenceViewer;
- ApprovalApp.

## Consequences

Positive:

- proves safe interactive layer;
- aligns UX with platform model;
- validates bridge security early.

Negative:

- increases MVP complexity;
- requires security testing in Week 5.

## Revisit Trigger

If schedule risk becomes critical, reduce to ClaimApp + ApprovalApp only.

---

# ADR-0009 — Use Layered Hexagonal Architecture

## Status

Accepted

## Context

The project must prevent UI, provider SDKs and database logic from owning domain rules.

## Decision

Use layered hexagonal architecture:

```text
Interfaces → Application → Domain
Infrastructure → Ports
Domain → no external dependencies
```

## Consequences

Positive:

- testable domain;
- replaceable infrastructure;
- clean provider boundaries;
- safer open-source extensibility.

Negative:

- requires discipline and dependency checks;
- may feel slower in early code.

## Revisit Trigger

Do not revisit. This is a foundational architecture decision.

---

# ADR-0010 — Keep Domain Free of Infrastructure Dependencies

## Status

Accepted

## Context

Domain logic must remain independent from PostgreSQL, MCP, React, Temporal and model providers.

## Decision

Domain package cannot import infrastructure packages or SDKs.

## Consequences

Positive:

- domain invariant tests are fast;
- clean future migrations;
- prevents hidden side effects.

Negative:

- more mapping code between domain and persistence.

## Revisit Trigger

Do not revisit unless architecture is formally replaced.

---

# ADR-0011 — Use EpistemicNode as Core Claim Primitive

## Status

Accepted

## Context

ChatAVG ClaimLedger was valuable but too narrow and implementation-coupled.

## Decision

Use `EpistemicNode` as the core primitive for claims, observations, hypotheses, risks, decisions and questions.

## Consequences

Positive:

- generalizes ClaimLedger;
- supports graph relationships;
- supports evidence, boundaries and temporal scope.

Negative:

- requires disciplined type/status/strength model.

## Revisit Trigger

Revisit after MVP if node model proves too broad or too complex.

---

# ADR-0012 — Use Temporal Validity for Epistemic Nodes

## Status

Accepted

## Context

Claims are often time-bound or version-bound. A node valid for one document version or time window may become stale.

## Decision

Every EpistemicNode has temporal scope.

## Consequences

Positive:

- prevents stale claims acting as strong evidence;
- supports architecture/research/repo scenarios;
- makes provenance more honest.

Negative:

- adds fields and validation complexity.

## Revisit Trigger

Revisit after MVP if temporal model is too heavy for simple missions.

---

# ADR-0013 — Use LivingArtifact and ArtifactPatch as Artifact Model

## Status

Accepted

## Context

The platform must produce traceable artifacts, not just messages.

## Decision

Use `LivingArtifact` for versioned outputs and `ArtifactPatch` for all meaningful mutations.

## Consequences

Positive:

- reviewable changes;
- rollback path;
- evidence/decision linkage;
- strong MVP demo value.

Negative:

- patch generation and application require careful design.

## Revisit Trigger

Revisit patch format after MVP artifact scenarios.

---

# ADR-0014 — Use ApprovalRequest and DecisionRecord for Human Decisions

## Status

Accepted

## Context

Human sovereignty and approval safety are core project principles.

## Decision

Use `ApprovalRequest` for approval lifecycle and `DecisionRecord` for human/policy/system decisions.

## Consequences

Positive:

- auditable decisions;
- safe HITL workflows;
- avoids hidden system authority.

Negative:

- extra domain objects and UI flows.

## Revisit Trigger

Revisit after MVP if approval fatigue or UX friction appears.

---

# ADR-0015 — Use PostgreSQL Relational Graph Before Graph Database

## Status

Accepted

## Context

Graph semantics are needed, but graph database adoption before stable node/edge contracts would be premature.

## Decision

Use PostgreSQL relational tables for nodes and edges in MVP. Define `GraphRepositoryPort` before any graph DB choice.

## Consequences

Positive:

- avoids Neo4j/Memgraph complexity;
- keeps MVP simple;
- preserves future adapter path.

Negative:

- advanced graph traversal is limited.

## Revisit Trigger

Revisit when relational graph queries become a measured bottleneck.

---

# ADR-0016 — Use Outbox Events from MVP

## Status

Accepted

## Context

Async/projection consistency is required. Dual-write without outbox causes drift.

## Decision

Use `outbox_events` from MVP.

## Consequences

Positive:

- safer projection;
- retryable async work;
- future migration path;
- supports reconciliation.

Negative:

- adds worker/process complexity.

## Revisit Trigger

Do not remove. Later event streaming may supplement it.

---

# ADR-0017 — Use Idempotency Keys for Side-Effecting Commands

## Status

Accepted

## Context

Approval, patch application, external action and MCP commands can be retried or duplicated.

## Decision

Use idempotency keys for side-effecting commands.

## Consequences

Positive:

- duplicate-safe operations;
- safer approval flow;
- future runtime replay compatibility.

Negative:

- requires request hashing and storage.

## Revisit Trigger

Revisit retention policy after MVP.

---

# ADR-0018 — Treat MCP Apps as Untrusted UI Surfaces

## Status

Accepted

## Context

MCP Apps execute in iframes and communicate through postMessage. They can be buggy or compromised.

## Decision

Treat MCP Apps as untrusted UI surfaces. They render state and request actions only.

## Consequences

Positive:

- safer security boundary;
- no business logic in iframe;
- clear backend authority.

Negative:

- more bridge validation and backend command mapping.

## Revisit Trigger

Do not revisit for MVP. This is a security baseline.

---

# ADR-0019 — Use Secure MCP Bridge with Origin, Schema, Nonce and Capability Checks

## Status

Accepted

## Context

postMessage can be spoofed or replayed without validation.

## Decision

Every MCP bridge message must pass:

```text
origin validation
schema validation
nonce replay protection
timestamp validation
capability check
policy check for writes
audit event
```

## Consequences

Positive:

- prevents replay/spoofing classes;
- testable security boundary;
- safer write-capable apps.

Negative:

- extra infrastructure in Week 5.

## Revisit Trigger

Revisit after production threat model; never remove core checks.

---

# ADR-0020 — Use Lightweight MVP Runner Behind DurableRuntimePort

## Status

Accepted

## Context

The MVP needs runtime structure but cannot afford heavy orchestration complexity if it threatens six-week delivery.

## Decision

Implement lightweight MVP runner behind `DurableRuntimePort`.

## Consequences

Positive:

- faster MVP;
- preserves runtime abstraction;
- avoids premature Temporal setup.

Negative:

- limited durability;
- restart/resume limitations must be documented.

## Revisit Trigger

Adopt Temporal when long-running waits/retries become necessary.

---

# ADR-0021 — Keep Temporal as Future Runtime Adapter, Not MVP Blocker

## Status

Accepted

## Context

Temporal is likely the right future durable runtime, but production rollout may slow MVP.

## Decision

Keep Temporal-ready adapter boundary, but do not require Temporal for MVP.

## Consequences

Positive:

- maintains future path;
- reduces Week 1–3 complexity.

Negative:

- MVP runner must clearly document limitations.

## Revisit Trigger

Revisit after MVP or when runtime complexity exceeds MVP runner.

---

# ADR-0022 — Use Trace Events for Epistemic and Runtime Observability

## Status

Accepted

## Context

Epistemic OS must explain what happened, why the artifact changed, what evidence supported it and what the user decided.

## Decision

Use structured trace events from MVP for mission, runtime, epistemic, evidence, artifact, approval, MCP and policy events.

## Consequences

Positive:

- supports TraceDrawer;
- improves debugging;
- builds trust through transparency.

Negative:

- redaction discipline required;
- event taxonomy must be maintained.

## Revisit Trigger

Revisit when adopting OTel collector or external observability backend.

---

# ADR-0023 — Use Fake Deterministic Model Provider for MVP Reliability

## Status

Accepted

## Context

A six-week MVP should be demoable without provider instability, cost or secrets.

## Decision

Implement fake deterministic provider as required MVP adapter. Optional real provider adapter may be added if time permits.

## Consequences

Positive:

- deterministic tests;
- no secret requirement;
- stable internal demo.

Negative:

- real model behavior not fully validated;
- optional adapter still needed for credibility later.

## Revisit Trigger

Revisit once vertical slice is stable.

---

# ADR-0024 — Do Not Import ChatAVG as a Dependency

## Status

Accepted

## Context

Direct dependency would pull legacy coupling into EPOS.

## Decision

Epistemic OS must not import ChatAVG as a dependency.

## Consequences

Positive:

- clean architecture;
- avoids legacy dependency drag;
- open-source hygiene.

Negative:

- more rewrite work.

## Revisit Trigger

Do not revisit for MVP.

---

# ADR-0025 — Reuse ChatAVG Through Reviewed Extraction or Clean Rewrite

## Status

Accepted

## Context

ChatAVG contains valuable ideas and code, but also unsafe/legacy/mock components.

## Decision

Reuse through reviewed extraction categories:

```text
REUSE_AS_IS
REUSE_AFTER_REFACTOR
REFERENCE_ONLY
REWRITE
DISCARD
ARCHIVE
```

Default rule:

```text
When in doubt, reference the code and rewrite cleanly.
```

## Consequences

Positive:

- prevents copying legacy bugs;
- preserves conceptual value;
- protects open-source repo.

Negative:

- more initial engineering effort.

## Revisit Trigger

Revisit only per asset through extraction inventory.

---

# ADR-0026 — Use Apache-2.0 as Recommended Default License

## Status

Proposed

## Context

The project is open-source from day one and needs a license. Apache-2.0 is permissive and enterprise-friendly.

## Decision

Recommended default:

```text
Apache-2.0
```

This ADR remains Proposed until explicitly approved.

## Consequences

Positive:

- permissive reuse;
- patent grant;
- enterprise compatibility.

Negative:

- does not force derivative source disclosure;
- may be less protective than copyleft.

## Alternatives

```text
MIT
AGPL-3.0
MPL-2.0
dual license
```

## Revisit Trigger

Approve before public repository launch.

---

## 4. ADR File Creation Plan

Create files:

```text
docs/02_adrs/ADR-0001-create-epistemic-os-project.md
docs/02_adrs/ADR-0002-close-chatavg-v23-release-v24.md
docs/02_adrs/ADR-0003-open-source-from-day-one.md
docs/02_adrs/ADR-0004-neutral-demo-shell-first.md
docs/02_adrs/ADR-0005-universal-mission-room-mvp.md
docs/02_adrs/ADR-0006-typescript-core-go-rust-deferred.md
docs/02_adrs/ADR-0007-postgresql-alpha-system-of-record.md
docs/02_adrs/ADR-0008-mcp-apps-in-mvp.md
docs/02_adrs/ADR-0009-layered-hexagonal-architecture.md
docs/02_adrs/ADR-0010-domain-free-of-infrastructure.md
...
```

For MVP speed, ADR-0001 through ADR-0010 should be created first. ADR-0011 through ADR-0026 can be generated after repository bootstrap but before Week 2 gate.

---

## 5. Approval Checklist

This document is approved when the project owner confirms:

- ADR index is acceptable;
- ADR statuses are acceptable;
- Apache-2.0 remains Proposed or is accepted;
- no accepted decision contradicts EPOS-00…EPOS-08;
- ADR file creation plan is acceptable.

---

## 6. Next Step After Approval

After approval, choose one:

1. Generate the actual ADR markdown files.
2. Create `EPOS-10 — Implementation Bootstrap Checklist`.
3. Export the EPOS documentation package for repository inclusion.

Recommended next document:

```text
EPOS-10 — Implementation Bootstrap Checklist
```

Purpose:

- convert EPOS docs into initial GitHub issues;
- define Week 1 tasks;
- define exact repository bootstrap commands/files;
- define first PR sequence.

