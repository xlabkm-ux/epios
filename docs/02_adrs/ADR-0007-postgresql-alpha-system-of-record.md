# ADR-0007 — Use PostgreSQL as Alpha System of Record

## Status
Accepted

## Context
Epistemic OS requires durable persistence for missions, nodes, evidence, artifacts, approvals, decisions, traces, outbox events, and idempotency. In-memory or simple file-based storage is insufficient for architecture validation.

## Decision
Use **PostgreSQL** as the primary system of record from the alpha phase.

## Consequences
- **Positive**: Production-shaped persistence from day one; supports transactional outbox; enables a relational graph MVP; avoids a later "SQLite migration cliff."
- **Negative**: Requires more local setup (Docker) than in-memory storage; schema discipline and migration management are required immediately.

## Revisit Trigger
Do not revisit for the MVP. Consider storage extensions (e.g., specialized graph or vector DBs) after the MVP phase.
