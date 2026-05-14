Owner: @architect
Status: accepted

# ADR-0024 — Do Not Import ChatAVG as a Dependency

## Status
Accepted

## Context
Direct dependency would pull legacy coupling into EPIOS.

## Decision
Epistemic OS must not import ChatAVG as a dependency.

## Rationale
Ensures that the new project starts with a clean slate and does not inherit technical debt or architectural compromises from the previous version.

## Consequences
- **Positive**: clean architecture; avoids legacy dependency drag; open-source hygiene.
- **Negative**: more rewrite work.

## Revisit Trigger
Do not revisit for MVP.

