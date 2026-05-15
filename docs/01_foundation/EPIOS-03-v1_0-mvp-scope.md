Owner: @architect

# EPIOS-03 — MVP Scope (v1.0)

**Project:** Epistemic OS v1.0
**Document ID:** `EPIOS-03-V1_0-MVP-SCOPE`
**Status:** Accepted_contract
**Depends on:** `EPIOS-00-PROJECT-BRIEF`, `EPIOS-01-ARCHITECTURE-FOUNDATION`

---

## 1. Purpose of This Document

This document defines the finalized MVP scope for **Epistemic OS v1.0**. It serves as the acceptance baseline for the v0.1.0-rc.1 release candidate.

## 2. Scope Boundaries & Dogfooding

EPIOS distinguishes between the general platform capability and its first specialized use case:

* **v1.0 (Current MVP):** Platform proof — **Universal Mission Room**. Focuses on the core domain model (Nodes, Evidence, Patches) applicable to any structured reasoning.
* **v0.2 / v1.1 (Roadmap):** First specialized dogfooding shell — **ADR Review Workspace**. Uses the v1.0 platform to manage architectural decisions.

> [!IMPORTANT]
> **Constraint:** The ADR Review workspace must be implemented as a consumer of the v1.0 domain model. It must not redefine core primitives retroactively to fit a specific "ADR-only" model.

## 3. MVP Principle

The MVP is a thin but coherent vertical slice proving that Epistemic OS can transform material into a traceable artifact through nodes, evidence, decisions and approvals.

Core MVP flow:
1. Universal Mission Room creation.
2. Ingest source material.
3. Extract EpistemicNodes and EvidenceRefs.
4. Propose ArtifactPatch.
5. Review through ApprovalApp.
6. Apply patch and persist version.
7. Visualize trace.

## 3. Demo Scenarios

### 3.1. Scenario A — Architecture Document
**User goal:** Create or improve a short architecture document.

### 3.2. Scenario B — Project Planning
**User goal:** Turn a project idea into a structured plan.

### 3.3. Scenario C — Research Review
**User goal:** Review a research note or source-backed argument.

### 3.4. Scenario D — Decision Support
**User goal:** Clarify a decision fork.

---

## 4. MVP Scope (In Scope)

### Product / UX
- Neutral Demo Shell
- Universal Mission Room
- Mission Brief Builder
- Artifact Workspace MVP
- ClaimCard / ClaimApp
- EvidenceViewer
- ApprovalApp
- Trace Drawer MVP

### Domain
- Mission / MissionRun
- EpistemicNode / ReasoningEdge
- Source / EvidenceRef
- LivingArtifact / ArtifactPatch
- ApprovalRequest / DecisionRecord

### Infrastructure
- PostgreSQL / Drizzle
- Outbox worker (minimal)
- MCP Bridge Validation
- Local dev Docker setup
