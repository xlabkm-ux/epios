# ADR-0016 — Use Outbox Events from MVP

## Status
Accepted

## Context
Async/projection consistency is required. Dual-write without outbox causes drift.

## Decision
Use `outbox_events` from MVP.

## Rationale
Ensures transactional integrity between the system of record and asynchronous processing or external notifications.

## Consequences
- **Positive**: safer projection; retryable async work; future migration path; supports reconciliation.
- **Negative**: adds worker/process complexity.

## Revisit Trigger
Do not remove. Later event streaming may supplement it.
