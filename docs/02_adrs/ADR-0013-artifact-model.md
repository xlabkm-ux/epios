Owner: @architect
Status: accepted

# ADR-0013 — Use LivingArtifact and ArtifactPatch as Artifact Model

## Status
Accepted

## Context
The platform must produce traceable artifacts, not just messages.

## Decision
Use `LivingArtifact` for versioned outputs and `ArtifactPatch` for all meaningful mutations.

## Rationale
Allows for precise tracking of changes and attribution to evidence or decisions.

## Consequences
- **Positive**: reviewable changes; rollback path; evidence/decision linkage; strong MVP demo value.
- **Negative**: patch generation and application require careful design.

## Revisit Trigger
Revisit patch format after MVP artifact scenarios.

