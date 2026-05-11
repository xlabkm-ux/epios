# ADR-0021 — Keep Temporal as Future Runtime Adapter, Not MVP Blocker

## Status
Accepted

## Context
Temporal is likely the right future durable runtime, but production rollout may slow MVP.

## Decision
Keep Temporal-ready adapter boundary, but do not require Temporal for MVP.

## Rationale
Decouples the system from the specific implementation of durability while acknowledging the likely long-term solution.

## Consequences
- **Positive**: maintains future path; reduces Week 1–3 complexity.
- **Negative**: MVP runner must clearly document limitations.

## Revisit Trigger
Revisit after MVP or when runtime complexity exceeds MVP runner.
