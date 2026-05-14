Owner: @architect
Status: accepted

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

