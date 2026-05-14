Owner: @architect
Status: accepted

# ADR-0007 — Use PostgreSQL as Alpha System of Record

## Status
Accepted

## Context
The system needs durable persistence for missions, nodes, evidence, artifacts, approvals, decisions, traces, outbox and idempotency.

## Decision
Use **PostgreSQL** as the system of record from alpha.

## Consequences
- **Positive**: production-shaped persistence from day one; transactional outbox support; relational graph MVP possible; avoids SQLite migration cliff.
- **Negative**: more setup than in-memory/SQLite; schema discipline needed immediately.

## Revisit Trigger
Do not revisit for MVP. Revisit storage extensions after MVP.

