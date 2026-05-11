# EPOS-08 — ChatAVG Reuse and v2.4 Stabilization

**Project:** Epistemic OS v1.0  
**Document ID:** `EPOS-08-CHATAVG-REUSE-V2_4-STABILIZATION`  
**Version:** Draft 0.1  
**Status:** For Review / Approval  
**Depends on:** `EPOS-00`, `EPOS-01`, `EPOS-02`, `EPOS-03`, `EPOS-04`, `EPOS-05`, `EPOS-06`, `EPOS-07`  
**Strategic decision:** ChatAVG v2.3 development is closed; ChatAVG v2.4 is a stabilized release; Epistemic OS v1.0 is a new repository and new platform project.  

---

## 1. Purpose of This Document

This document defines how ChatAVG v2.3/v2.4 is handled after the strategic pivot to **Epistemic OS v1.0**.

It specifies:

- what is frozen;
- what is stabilized for v2.4;
- what is reused in Epistemic OS;
- what is rewritten;
- what is discarded;
- what documentation is authoritative, reference-only or superseded;
- extraction and handover process;
- v2.4 release criteria;
- gates for safe reuse in the open-source Epistemic OS repository.

This document prevents two risks:

1. Continuing v2.3 development under a new name.
2. Copying legacy complexity into Epistemic OS v1.0.

---

## 2. Strategic Closure

ChatAVG v2.3 development is closed.

ChatAVG v2.4 will be released as a stabilized version at the current functional level.

Epistemic OS v1.0 starts as a separate open-source repository.

Strategic formula:

```text
ChatAVG v2.4 = stabilized legacy/product shell.
Epistemic OS v1.0 = new open-source platform kernel and neutral demo shell.
ChatAVG v3.0 = possible future product shell on Epistemic OS.
```

No new v2.3/v2.4 feature should be accepted unless it directly supports:

- stabilization;
- security;
- reproducibility;
- extraction;
- documentation handover;
- migration clarity.

---

## 3. v2.4 Release Goal

The purpose of v2.4 is not to become a complete production-grade Epistemic OS precursor.

The purpose is:

```text
stabilize current ChatAVG functionality,
reduce security/runtime risk,
document reusable assets,
and freeze the codebase for extraction/handover.
```

v2.4 should be boring, stable and honest.

It should not contain ambitious new architecture.

---

## 4. v2.4 In Scope

### 4.1. Stabilization

v2.4 may include:

```text
- P0 security fixes;
- production boot safety;
- root setup/test scripts;
- smoke tests;
- current functionality bug fixes;
- dependency hygiene;
- release notes;
- documentation index;
- extraction inventory;
- known limitations.
```

### 4.2. Safety Fixes

Must fix or explicitly disable:

```text
- unsafe local command execution path;
- sandbox policy ordering issues;
- missing production admin password fail-fast;
- forge/sandbox enabled without provider key;
- SSRF guard gaps;
- invalid AgentRun state transitions;
- streaming/SSE completion issues;
- unhandled zod error shape mismatch;
- secret leakage in logs/config examples.
```

### 4.3. Reproducibility

v2.4 should provide:

```text
- root package scripts;
- setup instructions;
- smoke test command;
- release test command;
- .env.example;
- known limitations;
- clear current architecture map.
```

---

## 5. v2.4 Out of Scope

Do not add to v2.4:

```text
- new Mission Cockpit implementation;
- new full workflow designer;
- new MCP Apps implementation;
- graph database integration;
- Kafka/Debezium;
- PostgreSQL migration solely for v2.4;
- full Temporal production rollout;
- new product workflows;
- advanced admin console;
- semantic eval platform;
- ChatAVG v3 architecture inside v2.4;
- large UI redesign;
- production SaaS hardening beyond critical safety.
```

If a feature belongs to Epistemic OS, it must be implemented in the new repository.

---

## 6. Stop / Convert / Continue Matrix

### 6.1. Stop

| Area | Decision | Reason |
|---|---|---|
| v2.3 RC2 expansion | Stop | strategy changed |
| Legacy chat UI polish | Stop | not core to Epistemic OS |
| Full RC1/RC2 admin console | Stop | too broad; belongs to future shell |
| 13 workflow implementation | Stop | MVP uses Universal Mission Room only |
| Graph DB exploration in v2.x | Stop | GraphRepositoryPort first in EPOS |
| Kafka/Debezium in v2.x | Stop | outbox first in EPOS |
| Write-capable MCP Apps in v2.x | Stop | security model defined in EPOS |
| User-facing coherence score | Stop | risk of false authority |

### 6.2. Continue for v2.4 Stabilization

| Area | Decision | Purpose |
|---|---|---|
| Current fast chat | Continue | preserve existing functionality |
| Basic ModelGateway compatibility | Continue | keep current app usable |
| Existing auth/admin basics | Continue | current shell needs it |
| Existing audit logs | Continue | stabilization and traceability |
| Existing tests | Continue | release confidence |
| Current SQLite/local DB if used | Continue | no migration burden for v2.4 |
| Current UI | Continue | no large redesign |

### 6.3. Convert to Epistemic OS

| ChatAVG Concept | Epistemic OS Target |
|---|---|
| SemanticProtocol | EpistemicKernel / EpistemicKernelPort |
| ClaimLedger | EpistemicNode + ReasoningEdge + DomainBoundary |
| DomainBoundary | DomainBoundary aggregate/value object |
| AgentRun | MissionRun + DurableRuntimePort |
| ArtifactWorkspace | LivingArtifact + ArtifactPatch |
| ApprovalCard | ApprovalRequest + ApprovalApp |
| ConflictCard | ConflictCard + DecisionRecord |
| KnowledgeGateway | EvidenceGateway |
| ToolGateway | ActionGateway / MCP Tool boundary |
| SandboxManager / Forge | ForgeRuntime / Action boundary |
| ModelGateway | ModelGatewayPort + provider adapters |
| Audit/Cost/Policy | PolicyEnginePort + TraceEvent + future Control Plane |
| Mission UI concepts | Neutral Mission Room shell |
| MCP gateway ideas | MCPAppRegistry + secure bridge |

---

## 7. Reuse Categories

Every ChatAVG asset must be classified into one of these categories.

```text
REUSE_AS_IS
REUSE_AFTER_REFACTOR
REFERENCE_ONLY
REWRITE
DISCARD
ARCHIVE
```

### 7.1. REUSE_AS_IS

Allowed only when:

- code has no private secrets/data;
- license is compatible with open-source repo;
- dependency footprint is acceptable;
- tests exist or can be added quickly;
- it does not violate EPOS architecture rules.

Likely candidates:

```text
- small pure utility functions;
- schema fragments after review;
- test fixtures if synthetic;
- documentation snippets with cleanup.
```

### 7.2. REUSE_AFTER_REFACTOR

Most useful ChatAVG code will fall here.

Likely candidates:

```text
- ModelGateway fragments;
- provider adapter fragments;
- SemanticProtocol extraction ideas;
- KnowledgeGateway local retrieval ideas;
- MCP tool registry fragments;
- policy/audit helpers;
- state machine utilities;
- UI card concepts.
```

### 7.3. REFERENCE_ONLY

Use as design input, not code.

Likely candidates:

```text
- workflow documents;
- UI specs;
- RC plans;
- roadmaps;
- audit critiques;
- admin console concepts;
- service category separation.
```

### 7.4. REWRITE

Rewrite when the concept is useful but implementation shape conflicts with EPOS.

Likely candidates:

```text
- ChatService orchestration;
- SemanticProtocol persistence;
- Temporal mock workflows;
- KnowledgeGateway mock behavior;
- Artifact handling if tightly coupled to UI;
- sandbox local adapter;
- admin workflow settings.
```

### 7.5. DISCARD

Discard when unsafe, obsolete or strategically wrong.

Examples:

```text
- unsafe local shell execution path;
- mock behavior presented as real architecture;
- direct UI business logic;
- provider-specific domain leakage;
- duplicated/conflicting schemas;
- user-facing pseudo-objective scoring.
```

### 7.6. ARCHIVE

Archive when historically useful but no longer active.

Examples:

```text
- superseded v2.3 delivery plans;
- older RC roadmaps;
- old audit drafts;
- abandoned implementation options.
```

---

## 8. Code Reuse Review Checklist

Before copying any code from ChatAVG into Epistemic OS, check:

```text
[ ] Is the code owned/licensed for open-source reuse?
[ ] Does it contain secrets, credentials or private paths?
[ ] Does it include private project data?
[ ] Does it depend on ChatAVG-specific globals/config?
[ ] Does it violate domain/application/infrastructure boundaries?
[ ] Does it import provider SDK where a port should be used?
[ ] Does it use hidden global state?
[ ] Does it have tests?
[ ] Can tests be written in less than one day?
[ ] Does it support the MVP vertical slice?
[ ] Is rewriting cheaper than refactoring?
```

Default rule:

```text
When in doubt, reference the code and rewrite cleanly.
```

---

## 9. Documentation Reuse Register

### 9.1. Document Statuses

Every ChatAVG document should be tagged:

```text
AUTHORITATIVE_FOR_V2_4
REFERENCE_FOR_EPOS
SUPERSEDED_BY_EPOS
ARCHIVED
DISCARD
```

### 9.2. Likely Classification

| Document Type | Status for EPOS | Notes |
|---|---|---|
| Technical Concept v2 architecture | REFERENCE_FOR_EPOS | useful concepts, not binding |
| ModelGateway Workflow Concept | REFERENCE_FOR_EPOS | strong boundary ideas |
| UI Workflow Interface Spec | REFERENCE_FOR_EPOS | UI patterns, not implementation order |
| Workflow Modification Plan | REFERENCE_FOR_EPOS | WorkflowContract ideas |
| User Workflow Appendix | REFERENCE_FOR_EPOS | product language and workflows |
| RC1 Stabilization Plan | AUTHORITATIVE_FOR_V2_4 | release stabilization source |
| RC2 Roadmap | ARCHIVED | strategy changed |
| Remediation Sprint Plan | AUTHORITATIVE_FOR_V2_4 | P0 fixes |
| Auditor reports | REFERENCE_FOR_EPOS | governance and risk input |
| Old duplicated plans | SUPERSEDED_BY_EPOS | do not keep active |

### 9.3. Required Register

Create:

```text
CHATAVG_DOCUMENT_HANDOVER_REGISTER.md
```

Fields:

```text
file name
status
used by EPOS doc
owner
notes
superseded by
```

---

## 10. v2.4 Stabilization Backlog

### P0 — Required

```text
V24-01 Lock scope: no new features except stabilization.
V24-02 Fix/disable unsafe local command execution path.
V24-03 Enforce production admin password fail-fast.
V24-04 Enforce sandbox/forge fail-closed without provider key.
V24-05 Add/verify SSRF guard tests.
V24-06 Fix invalid AgentRun state transitions.
V24-07 Fix SSE completion behavior.
V24-08 Fix zod error shape handling.
V24-09 Add root setup/test scripts.
V24-10 Add .env.example without secrets.
V24-11 Add release smoke test.
V24-12 Add v2.4 known limitations.
```

### P1 — Important

```text
V24-13 Current architecture map.
V24-14 Extraction inventory.
V24-15 Dependency/security scan.
V24-16 Test current ModelGateway paths.
V24-17 Test current MCP gateway basics.
V24-18 Audit logging sanity check.
V24-19 Release notes.
```

### P2 — Optional

```text
V24-20 Improve developer setup docs.
V24-21 Add minimal health dashboard notes.
V24-22 Add migration notes toward EPOS.
V24-23 Archive superseded docs.
```

---

## 11. v2.4 Release Criteria

v2.4 can be released when:

### Functional

```text
[ ] Existing core app starts.
[ ] Current fast chat path works.
[ ] Current configured provider path works or limitation documented.
[ ] Current admin/auth basics work or limitation documented.
[ ] No new feature scope added.
```

### Safety

```text
[ ] No known unsafe local command execution by default.
[ ] Production admin password fail-fast works.
[ ] Sandbox/forge fail-closed works if enabled without required key.
[ ] SSRF guard smoke passes.
[ ] No secrets in .env.example or logs.
```

### Runtime

```text
[ ] AgentRun invalid transition fixed or documented as blocked.
[ ] SSE completion behavior fixed or documented.
[ ] Release smoke test passes.
[ ] Known runtime limitations documented.
```

### Documentation

```text
[ ] v2.4 release notes.
[ ] Known limitations.
[ ] Current architecture map.
[ ] Document handover register.
[ ] Extraction inventory.
[ ] EPOS pointer added.
```

---

## 12. Extraction Inventory

Create:

```text
CHATAVG_EXTRACTION_INVENTORY.md
```

Template:

```md
# ChatAVG Extraction Inventory

| Asset | Type | Location | Category | Target EPOS Module | Risk | Action |
|---|---|---|---|---|---|---|
| ModelGateway | code | path | REUSE_AFTER_REFACTOR | infrastructure-models | medium | extract contract ideas |
```

Fields:

```text
Asset
Type: code/doc/test/schema/config
Location
Category
Target EPOS module
Owner
Reuse risk
License/secrets check
Tests available
Action
Status
```

---

## 13. Suggested Extraction Targets

### 13.1. ModelGateway

Category:

```text
REUSE_AFTER_REFACTOR
```

Target:

```text
packages/ports/ModelGatewayPort
packages/infrastructure-models
```

Reuse:

- event normalization ideas;
- provider selection patterns;
- fallback concepts;
- usage/cost trace concepts.

Do not reuse blindly:

- provider-specific domain leakage;
- ChatAVG config globals;
- workflow ownership logic.

### 13.2. SemanticProtocol / ClaimLedger

Category:

```text
REFERENCE_ONLY / REWRITE
```

Target:

```text
packages/domain/EpistemicKernel
packages/domain/EpistemicNode
```

Reuse:

- claim typing ideas;
- boundary/downgrade logic;
- semantic event ideas.

Rewrite:

- persistence model;
- in-memory state;
- hidden coupling to chat flow.

### 13.3. KnowledgeGateway

Category:

```text
REUSE_AFTER_REFACTOR
```

Target:

```text
EvidenceGatewayPort
infrastructure-postgres retrieval
```

Reuse:

- FTS/local retrieval ideas;
- answerability policy concepts;
- context formatting lessons.

Rewrite:

- evidence model;
- citation validation;
- source quality/freshness model.

### 13.4. AgentRun / Execution

Category:

```text
REUSE_AFTER_REFACTOR
```

Target:

```text
MissionRun
DurableRuntimePort
TraceEvent
```

Reuse:

- state/event persistence ideas;
- SSE/run visibility lessons;
- run lifecycle concepts.

Rewrite:

- mission state machine;
- durable runtime boundary;
- idempotency model.

### 13.5. ToolGateway / MCP Gateway

Category:

```text
REUSE_AFTER_REFACTOR
```

Target:

```text
ActionGatewayPort
MCPAppRegistry
infrastructure-mcp
```

Reuse:

- tool registry ideas;
- risk classification concepts;
- MCP server experience.

Rewrite:

- write-capable action security;
- MCP bridge protocol;
- capability grants.

### 13.6. Sandbox / Forge

Category:

```text
REFERENCE_ONLY / REWRITE
```

Target:

```text
future ForgeRuntime
ActionGateway
```

Reuse:

- fail-closed principle;
- egress/TTL/artifact scan concepts;
- risk-based sandbox idea.

Discard:

- unsafe local command execution by default;
- sandbox-per-chat assumption.

### 13.7. UI Concepts

Category:

```text
REFERENCE_ONLY
```

Target:

```text
apps/demo-shell
MCP Apps
```

Reuse:

- Mission Cockpit layout;
- Artifact Workspace pattern;
- ClaimCard;
- ConflictCard;
- ApprovalCard;
- TraceDrawer;
- progressive disclosure.

Do not reuse blindly:

- legacy UI implementation;
- admin-heavy flows;
- ChatAVG branding for neutral shell.

---

## 14. Open-Source Reuse Safety

Because Epistemic OS is open-source from day one, extraction must be strict.

Before moving any asset:

```text
- remove private customer/project data;
- remove internal URLs if sensitive;
- remove credentials/tokens;
- remove private comments;
- verify license compatibility;
- rewrite if ownership is unclear;
- add attribution if needed;
- prefer clean-room rewrite for risky assets.
```

No ChatAVG `.env`, logs, test data or private docs should be copied into EPOS.

---

## 15. Handover Process

### Step 1 — Freeze v2.3 Scope

```text
No new v2.3 features.
Only v2.4 stabilization tasks accepted.
```

### Step 2 — Create v2.4 Branch/Tag

```text
branch: release/v2.4
final tag: v2.4.0
```

### Step 3 — Stabilize

Complete P0 stabilization backlog.

### Step 4 — Document Current State

Create:

```text
CURRENT_STATE_V2_4.md
KNOWN_LIMITATIONS_V2_4.md
CHATAVG_DOCUMENT_HANDOVER_REGISTER.md
CHATAVG_EXTRACTION_INVENTORY.md
```

### Step 5 — Release v2.4

Tag release and freeze.

### Step 6 — Extract / Rewrite into EPOS

Use extraction inventory. Do not copy uncontrolled legacy blocks.

### Step 7 — Archive Superseded Plans

Move old docs to archive or mark superseded.

---

## 16. EPOS Import Policy

Epistemic OS should not import ChatAVG as a dependency.

Allowed:

```text
- copy small reviewed code fragments;
- rewrite modules based on concepts;
- port tests after sanitization;
- reference docs with status;
- create new EPOS contracts inspired by ChatAVG.
```

Not allowed:

```text
- direct dependency on ChatAVG repo;
- copying private configs;
- copying large legacy services without refactor;
- importing ChatService orchestration;
- importing unsafe sandbox code;
- importing duplicated schema definitions blindly.
```

---

## 17. Legacy Risk Register

| Risk | Priority | Mitigation |
|---|---:|---|
| v2.4 expands into v3 work | P0 | strict scope lock |
| unsafe code copied to EPOS | P0 | extraction checklist |
| private data leaked to open-source repo | P0 | secret/data review |
| duplicate docs confuse EPOS | P1 | document register |
| ChatService monolith shape infects EPOS | P1 | rewrite use cases cleanly |
| mock components treated as production | P1 | mark reference-only/rewrite |
| ModelGateway owns workflow again | P1 | enforce port boundary |
| MCP write flow bypasses security | P0 | EPOS-06 gates |
| v2.4 consumes team capacity | P1 | timebox stabilization |

---

## 18. Recommended Parallel Plan

Run two parallel tracks.

### Track A — ChatAVG v2.4 Stabilization

Duration:

```text
1–2 weeks maximum
```

Goal:

```text
safe stable handover release
```

### Track B — Epistemic OS Phase 0 / Week 1

Duration:

```text
starts immediately
```

Goal:

```text
new repo, clean foundation, PostgreSQL baseline, domain skeleton
```

Rule:

```text
Track A must not block Track B except for specific reusable asset review.
```

---

## 19. Final Handover Deliverables

ChatAVG side:

```text
v2.4.0 tag
v2.4 release notes
CURRENT_STATE_V2_4.md
KNOWN_LIMITATIONS_V2_4.md
CHATAVG_DOCUMENT_HANDOVER_REGISTER.md
CHATAVG_EXTRACTION_INVENTORY.md
SECURITY_STABILIZATION_NOTES.md
```

Epistemic OS side:

```text
EPOS repo initialized
EPOS-00 to EPOS-08 docs accepted
ADR-0001 to ADR-0010 created
initial package structure
PostgreSQL dev setup
first domain tests
reuse inventory linked
```

---

## 20. v2.4 Release Notes Template

```md
# ChatAVG v2.4.0 Release Notes

## Status
Stabilized release after closure of v2.3 development.

## What Works
- ...

## Stabilization Fixes
- ...

## Security Notes
- ...

## Known Limitations
- ...

## Not Included
- No new v3/Epistemic OS features.
- No new Mission Cockpit.
- No MCP Apps.
- No graph database migration.

## Relationship to Epistemic OS
ChatAVG v2.4 is a stabilized legacy/product shell.
Epistemic OS v1.0 is the new open-source platform project.

## Upgrade / Setup
- ...

## Test Commands
- ...
```

---

## 21. Approval Checklist

This document is approved when the project owner confirms:

- v2.4 stabilization scope is acceptable;
- v2.4 out-of-scope list is acceptable;
- Stop/Convert/Continue matrix is acceptable;
- reuse categories are acceptable;
- extraction checklist is acceptable;
- documentation register approach is acceptable;
- v2.4 release criteria are acceptable;
- extraction targets are acceptable;
- open-source reuse safety rules are acceptable;
- parallel plan is acceptable.

---

## 22. Next Step After Approval

After approval:

1. Create `EPOS-09 — ADR Pack and Decision Index`, or
2. Export/compile EPOS-00 through EPOS-08 into a release package, or
3. Start implementation planning for Week 1 repository bootstrap.

Recommended next document:

```text
EPOS-09 — ADR Pack and Decision Index
```

It should convert accepted decisions from EPOS-00 through EPOS-08 into initial ADRs.

