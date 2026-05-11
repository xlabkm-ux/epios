# ADR-0023 — Use Fake Deterministic Model Provider for MVP Reliability

## Status
Accepted

## Context
A six-week MVP should be demoable without provider instability, cost or secrets.

## Decision
Implement fake deterministic provider as required MVP adapter. Optional real provider adapter may be added if time permits.

## Rationale
Ensures that demos and tests are reliable and not dependent on external API availability or costs.

## Consequences
- **Positive**: deterministic tests; no secret requirement; stable internal demo.
- **Negative**: real model behavior not fully validated; optional adapter still needed for credibility later.

## Revisit Trigger
Revisit once vertical slice is stable.
