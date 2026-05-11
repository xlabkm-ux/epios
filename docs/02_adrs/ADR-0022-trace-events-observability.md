# ADR-0022 — Use Trace Events for Epistemic and Runtime Observability

## Status
Accepted

## Context
Epistemic OS must explain what happened, why the artifact changed, what evidence supported it and what the user decided.

## Decision
Use structured trace events from MVP for mission, runtime, epistemic, evidence, artifact, approval, MCP and policy events.

## Rationale
Provides the necessary transparency and auditability required for epistemic integrity.

## Consequences
- **Positive**: supports TraceDrawer; improves debugging; builds trust through transparency.
- **Negative**: redaction discipline required; event taxonomy must be maintained.

## Revisit Trigger
Revisit when adopting OTel collector or external observability backend.
