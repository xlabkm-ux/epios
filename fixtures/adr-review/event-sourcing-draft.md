# ADR Draft: Adopting Event Sourcing for Mission History

## Status
Proposed

## Context
We need a robust way to track all changes to mission state, including source ratings, claims extraction, and governance decisions. Current state-based persistence makes it hard to reconstruct the exact reasoning flow at a specific point in time.

## Decision
We will adopt Event Sourcing for all mission history. Every change will be recorded as an immutable event. The current state will be a projection of these events.

## Consequences
- **Positive:** Perfect audit trail, ability to time-travel, decoupled read models.
- **Negative:** Increased complexity, eventual consistency, need for snapshotting, team needs to learn the pattern.

## Claims
1. Event sourcing provides a perfect audit trail.
2. It allows us to reconstruct state at any point in time.
3. It simplifies complex business logic by focusing on events.
