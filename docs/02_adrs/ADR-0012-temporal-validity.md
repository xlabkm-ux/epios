Owner: @architect
Status: accepted

# ADR-0012 — Use Temporal Validity for Epistemic Nodes

## Status
Accepted

## Context
Claims are often time-bound or version-bound. A node valid for one document version or time window may become stale.

## Decision
Every EpistemicNode has temporal scope.

## Rationale
Ensures that claims are not treated as universal truths if they are context-dependent.

## Consequences
- **Positive**: prevents stale claims acting as strong evidence; supports architecture/research/repo scenarios; makes provenance more honest.
- **Negative**: adds fields and validation complexity.

## Revisit Trigger
Revisit after MVP if temporal model is too heavy for simple missions.

