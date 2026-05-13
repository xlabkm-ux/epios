# ADR: Adopting Event Sourcing for Mission History

## Status: Draft
## Context
Our current system uses a traditional relational model for mission history. 
As the complexity of epistemic traces grows, we need better auditability and the ability to replay history.

## Decision
We propose to use event sourcing for all mission-related state changes.

## Consequences
- Full audit log of every change.
- Ability to reconstruct state at any point in time.
- Increased complexity in query models (CQRS).
- Team needs to learn event sourcing patterns.
- Migration cost from current relational schema.
