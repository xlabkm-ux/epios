# EPIOS-00 — Project Brief & Foundation

**Project:** Epistemic OS v1.0  
**Document ID:** `EPIOS-00-PROJECT-BRIEF`  
**Version:** Draft 0.1  
**Status:** Accepted for MVP Bootstrap  
**Repository model:** Open-source from day one  
**Target MVP horizon:** 6 weeks or faster  
**Deployment target for MVP:** Internal dev only  
**Language policy:** TypeScript core; Go/Rust allowed later for infrastructure components  

---

## 1. Purpose of This Document

This document establishes the foundation for the new project **Epistemic OS v1.0**.

It records the strategic decisions, project scope, non-goals, MVP boundary, development model and initial architectural assumptions before detailed specs are created.

This is the first document in the Epistemic OS documentation package. Later documents must not contradict it without an explicit ADR.

---

## 2. Strategic Decision

The development of **ChatAVG v2.3** as an expanding product line is closed.

A stabilized version **ChatAVG v2.4** will be released at the current functional level, with only necessary stabilization, safety and handover work.

A new project is opened:

```text
Epistemic Operating System v1.0
```

Epistemic OS is not ChatAVG v3.0. It is a new platform kernel and reference product shell built from the reusable experience of ChatAVG v2.3/v2.4.

Strategic positioning:

```text
ChatAVG v2.4 = stabilized legacy/product shell.
Epistemic OS v1.0 = new open-source platform kernel and demo shell.
ChatAVG v3.0 = possible future product shell built on Epistemic OS.
```

---

## 3. Product Definition

Epistemic OS is an operating layer for structured reasoning, evidence-backed artifacts, explicit human decisions and safe AI-assisted actions.

It is not a chat product, not a generic agent framework and not a model gateway.

Core product formula:

```text
situation → distinction → evidence → artifact → decision → action
```

Instead of optimizing for prompt-response interaction, Epistemic OS optimizes for:

- epistemic clarity;
- source-backed claims;
- explicit domain boundaries;
- durable missions;
- human-in-the-loop decisions;
- traceable artifacts;
- safe actions;
- observable quality.

---

## 4. First Product Shell

The first product shell is:

```text
Neutral Epistemic OS Demo Shell
```

It is not ChatAVG-branded.

The shell exists to prove the platform primitives:

- Mission Room;
- Epistemic Kernel;
- Evidence and Provenance;
- Living Artifact;
- Decision / Approval flow;
- MCP Apps;
- PostgreSQL-backed persistence;
- durable execution boundary;
- traceability.

The shell should be minimal, technical, clear and suitable for internal demos and architecture validation.

---

## 5. First MVP Domain

The first MVP domain is:

```text
Universal Mission Room
```

The Universal Mission Room must support demo-level functionality for four scenarios:

1. Architectural documents.
2. Project planning.
3. Research review.
4. Decision support.

The MVP is not expected to support every ChatAVG workflow. It must prove the reusable operating model behind them.

---

## 6. MVP Objective

The MVP should demonstrate one coherent end-to-end flow:

```text
Create Mission
→ Build Mission Brief
→ Extract EpistemicNodes
→ Attach EvidenceRefs
→ Propose ArtifactPatch
→ Create ConflictCard if needed
→ User approves/rejects through ApprovalApp
→ Artifact version is produced
→ ClaimApp / EvidenceViewer / TraceDrawer are available
→ Full trace is visible
```

The MVP succeeds if an internal user can use the system to create or improve a small but real artifact in one of the four demo domains and can inspect why the artifact changed.

---

## 7. Target Timeline

Target MVP horizon:

```text
6 weeks or faster
```

This is an aggressive constraint. Therefore the MVP must be scoped as a thin but coherent vertical slice, not a broad platform release.

The project must prefer:

- executable slices over broad framework work;
- minimal stable contracts over large abstract systems;
- PostgreSQL-backed correctness over heavy distributed infrastructure;
- read-first MCP Apps with limited controlled write paths;
- demo-quality Mission Room over full product UX;
- internal dev deployment over production hardening.

---

## 8. Repository and Licensing Model

The project uses a separate repository:

```text
epistemic-os
```

Repository model:

```text
open-source from day one
```

Implications:

- no secrets or private ChatAVG configuration in the repository;
- clear license from day one;
- public README must be accurate and conservative;
- public issues should not expose private project data;
- reusable ChatAVG code must be checked for ownership, license and secret leakage before copying;
- design documents should distinguish public architecture from private operational notes.

Required first repository files:

```text
README.md
LICENSE
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
docs/README.md
.env.example
.gitignore
```

License decision is captured in ADR-0026-license-choice.md (Apache-2.0).

Recommended default for discussion:

```text
Apache-2.0
```

Rationale: permissive, enterprise-friendly, includes explicit patent grant.

---

## 9. Language and Runtime Policy

Primary implementation language for v1.0:

```text
TypeScript
```

Scope of TypeScript-first policy:

- domain model;
- application services;
- API layer;
- demo shell;
- MCP Apps;
- PostgreSQL repositories;
- workflow orchestration client/adapter;
- test harness.

Future infrastructure languages:

```text
Go or Rust may be introduced later for infrastructure components only.
```

Examples of future Go/Rust candidates:

- high-throughput event relay;
- sandbox controller;
- local worker runtime;
- graph processing service;
- CLI packaging;
- policy sidecar.

Restriction:

No Go/Rust component should be introduced in MVP unless TypeScript is clearly insufficient for the 6-week target.

---

## 10. Deployment Model

MVP deployment target:

```text
internal dev only
```

Required deployment mode:

```text
local Docker Compose or equivalent internal dev stack
```

MVP does not require:

- public SaaS deployment;
- production multi-tenancy;
- managed Kubernetes;
- multi-region infrastructure;
- enterprise SSO;
- hardened public sandbox execution;
- real customer data processing.

MVP does require:

- repeatable local setup;
- PostgreSQL local/dev instance;
- deterministic seed data;
- internal demo workflow;
- clear environment variables;
- no secrets committed;
- one-command or near-one-command startup.

Target developer command:

```bash
pnpm install
pnpm dev
```

or equivalent.

---

## 11. Storage Decision

Alpha storage is PostgreSQL-first.

PostgreSQL is the system of record from the start.

Required alpha capabilities:

- schema migrations;
- mission/run/artifact/node/evidence/decision tables;
- `outbox_events` table;
- transaction boundary for projections;
- optimistic concurrency columns;
- indexes for mission-local graph queries;
- JSONB only where justified;
- audit timestamps;
- actor references;
- rollbackable migrations;
- local Docker setup.

Not required for MVP:

- Neo4j;
- Memgraph;
- Kafka;
- Redpanda;
- Debezium;
- distributed vector DB;
- production-grade pgvector tuning;
- multi-tenant sharding.

Optional but acceptable in MVP if simple:

- pgvector extension for later embedding readiness;
- PostgreSQL full-text search for minimal evidence retrieval.

---

## 12. MCP Apps Decision

MCP Apps are included in MVP v1.0.

MVP must include:

```text
MCPAppRegistry
Secure MCP bridge
ClaimApp
EvidenceViewer
ApprovalApp
```

MVP optional stretch:

```text
ConflictApp
ArtifactPatch preview app
TraceViewer
```

Security rule:

No MCP App can directly mutate domain state.

All write-capable actions must go through:

```text
typed backend command
→ schema validation
→ capability check
→ policy check
→ approval if required
→ idempotency key
→ audit event
```

MCP bridge must include:

- origin validation;
- schema validation;
- nonce replay protection;
- timestamp window;
- capability grants;
- correlation ID;
- audit logging.

---

## 13. What We Reuse from ChatAVG

Epistemic OS reuses ChatAVG as an experience base, not as a direct architecture.

Reusable concepts:

- fast path preservation;
- Mission-first thinking;
- Artifact-first result model;
- Claim Ledger;
- Domain Boundary;
- DecisionRecord;
- ConflictCard;
- ApprovalCard;
- ModelGateway boundary;
- KnowledgeGateway direction;
- MCP Tool Gateway direction;
- risk-based Forge/Sandbox;
- Policy/Cost/Audit control plane;
- Progressive disclosure;
- no hidden authority;
- human sovereignty.

Reusable code candidates after audit:

- provider adapter fragments;
- ModelGateway code fragments;
- policy/audit helpers;
- AgentRun state machine ideas;
- SemanticProtocol extractor ideas;
- KnowledgeGateway local retrieval ideas;
- MCP gateway/tool registry fragments;
- sandbox manager ideas;
- UI component concepts.

---

## 14. What We Do Not Reuse

The new project must not inherit ChatAVG v2.3 weaknesses.

Do not reuse:

- conflicting RC1/RC2 scope;
- duplicated document structures;
- legacy ChatService orchestration monolith;
- in-memory semantic state as source of truth;
- mock retriever as architecture;
- Temporal mock/random activities;
- unsafe local command execution path;
- UI-first implementation order;
- direct provider-specific domain leakage;
- graph DB commitment before GraphRepositoryPort;
- write-capable MCP Apps without security bridge;
- user-facing numerical truth/coherence score;
- sandbox-per-chat default;
- MCP as inference monolith;
- big-bang migration.

---

## 15. Non-Negotiable Architecture Principles

1. Domain-first.
2. Contract-first.
3. PostgreSQL-backed persistence from alpha.
4. Provider-neutral core.
5. UI is renderer, not business logic owner.
6. MCP Apps are safe interactive views, not trusted domain actors.
7. Every external side effect requires policy and idempotency.
8. Every human decision is explicit and traceable.
9. Every strong claim has boundary and evidence or is downgraded.
10. Durable execution is required for long-running missions.
11. Observability is part of the product, not a post-release dashboard.
12. Open-source repository must not leak private ChatAVG state.

---

## 16. MVP Non-Goals

MVP v1.0 does not include:

- full ChatAVG replacement;
- ChatAVG v3.0 product shell;
- enterprise multi-tenancy;
- public SaaS launch;
- all 13 ChatAVG workflows;
- production-grade graph database;
- Kafka/Debezium event streaming;
- 3D/spatial graph UI;
- autonomous agents acting without human oversight;
- full plugin marketplace;
- real external write integrations beyond controlled internal demos;
- production sandbox hardening for arbitrary untrusted code;
- advanced admin console;
- billing;
- enterprise SSO;
- mobile-first UX.

---

## 17. Initial Success Criteria

The MVP is successful if it demonstrates:

1. A mission can be created in the neutral demo shell.
2. A Mission Brief can be built.
3. EpistemicNodes can be created from user material.
4. Nodes have strength, reality level, temporal scope and provenance.
5. EvidenceRefs can be attached and viewed.
6. A LivingArtifact can be created.
7. ArtifactPatch can be proposed and applied after approval.
8. ApprovalApp works through the secure MCP bridge.
9. ClaimApp and EvidenceViewer work inside the Mission Room.
10. PostgreSQL persists mission, nodes, evidence, artifact and decisions.
11. Basic trace shows model/evidence/policy/artifact events.
12. Critical invariants are tested.
13. Internal developer can run the full demo locally.

---

## 18. Initial Documentation Set

This document is the first document.

Planned document sequence:

1. `EPIOS-00-PROJECT-BRIEF.md` — current document.
2. `EPIOS-01-ARCHITECTURE-FOUNDATION.md` — layers, C4, core components, ports.
3. `EPIOS-02-DOMAIN-MODEL.md` — Mission, EpistemicNode, Evidence, Artifact, Decision.
4. `EPIOS-03-MVP-SCOPE-AND-ROADMAP.md` — 6-week delivery plan.
5. `EPIOS-04-REPOSITORY-AND-ENGINEERING-PROCESS.md` — open-source, CI, ADR, RFC, DORA, contribution model.
6. `EPIOS-05-POSTGRESQL-DATA-MODEL.md` — schemas, migrations, outbox.
7. `EPIOS-06-MCP-APPS-AND-SECURITY.md` — registry, bridge, apps, policy.
8. `EPIOS-07-RUNTIME-AND-OBSERVABILITY.md` — durable runtime, traces, evals, release gates.
9. `EPIOS-08-CHATAVG-REUSE-AND-V2_4-STABILIZATION.md` — extraction matrix and v2.4 closure.
10. `EPIOS-09-ADR-PACK-AND-DECISION-INDEX.md` — central ADR and decision ledger.
11. `EPIOS-10-BOOTSTRAP-CHECKLIST.md` — technical implementation sequence for Week 1.
12. `EPIOS-11-WEEK-1-ISSUES.md` — GitHub issues and PR bodies for Week 1.

EPIOS-00 is the strategic foundation, not the current full document index. The current authoritative document index lives in `docs/00_project/DOCUMENT_REGISTER.md`.

Each document should be reviewed and approved before creating the next one.

---

## 19. Open Decisions

The following decisions remain open:

| Decision | Options | Recommended Default | Status |
|---|---|---|---|
| License | Apache-2.0 / MIT / AGPL / dual license | Apache-2.0 | Accepted (ADR-0026) |
| Package manager | pnpm / npm / yarn | pnpm | Accepted |
| Web framework | Next.js / Vite React / Remix | Vite React for demo shell | Accepted |
| API framework | Express / Fastify / Hono / NestJS | Fastify or Hono | Accepted (Fastify) |
| ORM/query | Drizzle / Prisma / Kysely / raw SQL | Drizzle or Kysely | Accepted (Drizzle) |
| Workflow runtime | Temporal / lightweight runner | lightweight runner | Accepted (Internal) |
| Auth in MVP | none / dev auth / local user | dev auth | Accepted |
| LLM provider | OpenAI / fake / both | fake + OpenAI | Accepted |

The current authoritative list of open and closed technical decisions lives in `docs/00_project/OPEN_DECISIONS_REGISTER.md`.
ADR numbering is authoritative in EPIOS-09.

---

## 20. Approval Checklist

This document is approved when the project owner confirms:

- separate repository decision is correct;
- open-source from day one is correct;
- neutral demo shell is correct;
- Universal Mission Room MVP is correct;
- four demo scenarios are correct;
- PostgreSQL-first alpha is correct;
- MCP Apps in MVP is correct;
- 6-week target is correct;
- MVP non-goals are acceptable;
- planned document sequence is acceptable.

---

## 21. Immediate Next Step After Approval

After this document is approved, create:

```text
EPIOS-01 — Architecture Foundation
```

That document should define:

- C4 Context;
- C4 Container;
- layer boundaries;
- module map;
- core ports;
- dependency rules;
- first MVP runtime topology;
- architecture anti-patterns.

