# ADR-0010 — Keep Domain Free of Infrastructure Dependencies

## Status
Accepted

## Context
To maintain epistemic clarity and ensure the system remains "provider-neutral," the core domain logic must be isolated from technical infrastructure like PostgreSQL, MCP, React, Temporal, or specific LLM SDKs.

## Decision
The **Domain** package is prohibited from importing any infrastructure packages, external SDKs, or UI-related libraries. All communication with external systems must occur through defined **Ports** (interfaces).

## Consequences
- **Positive**: Domain invariant tests are fast and deterministic; prevents hidden side effects; enables clean future migrations.
- **Negative**: Requires more boilerplate mapping code between domain entities and persistence/API models.

## Revisit Trigger
Do not revisit unless the foundational architecture is formally replaced.
