# ADR-0010 — Keep Domain Free of Infrastructure Dependencies

## Status
Accepted

## Context
Domain logic must remain independent from PostgreSQL, MCP, React, Temporal and model providers.

## Decision
Domain package **cannot import** infrastructure packages or SDKs.

## Consequences
- **Positive**: domain invariant tests are fast; clean future migrations; prevents hidden side effects.
- **Negative**: more mapping code between domain and persistence.

## Revisit Trigger
Do not revisit unless architecture is formally replaced.
