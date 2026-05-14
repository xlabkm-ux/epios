Owner: @architect
Status: accepted

# ADR-0014 — Use ApprovalRequest and DecisionRecord for Human Decisions

## Status
Accepted

## Context
Human sovereignty and approval safety are core project principles.

## Decision
Use `ApprovalRequest` for approval lifecycle and `DecisionRecord` for human/policy/system decisions.

## Rationale
Explicitly captures human intent and provides an audit trail for all system actions that require authorization.

## Consequences
- **Positive**: auditable decisions; safe HITL workflows; avoids hidden system authority.
- **Negative**: extra domain objects and UI flows.

## Revisit Trigger
Revisit after MVP if approval fatigue or UX friction appears.

