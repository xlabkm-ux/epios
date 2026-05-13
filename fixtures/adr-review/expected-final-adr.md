# ADR: Adopting Append-Only Audit Trace for Mission History

## Status
Approved (Supersedes 'Proposed: Event Sourcing')

## Context
Initial proposal for full Event Sourcing was reviewed. Epistemic analysis identified high complexity and team readiness risks.

## Decision
We will implement an **Append-Only Audit Trace** using a separate database table for all mission-critical mutations. This provides the required auditability while maintaining a simple relational read model for the MVP.

## Consequences
- **Positive:** Required auditability achieved, lower complexity than full ES, easy migration.
- **Negative:** No built-in time-travel for all projections, but sufficient for legal/governance audit.

## Traceability
- **Source:** `fixtures/adr-review/event-sourcing-draft.md`
- **Readiness:** `needs_review` → `ready` (after scope narrowing)
- **Approved by:** `admin`
- **Approval Date:** 2026-05-14
