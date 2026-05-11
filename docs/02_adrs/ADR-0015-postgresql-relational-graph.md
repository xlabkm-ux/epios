# ADR-0015 — Use PostgreSQL Relational Graph Before Graph Database

## Status
Accepted

## Context
Graph semantics are needed, but graph database adoption before stable node/edge contracts would be premature.

## Decision
Use PostgreSQL relational tables for nodes and edges in MVP. Define `GraphRepositoryPort` before any graph DB choice.

## Rationale
Leverages existing PostgreSQL infrastructure while maintaining a path to move to a specialized graph DB later if needed.

## Consequences
- **Positive**: avoids Neo4j/Memgraph complexity; keeps MVP simple; preserves future adapter path.
- **Negative**: advanced graph traversal is limited.

## Revisit Trigger
Revisit when relational graph queries become a measured bottleneck.
