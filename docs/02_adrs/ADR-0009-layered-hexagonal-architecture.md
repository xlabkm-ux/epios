# ADR-0009 — Use Layered Hexagonal Architecture

## Status
Accepted

## Context
The project must prevent UI, provider SDKs and database logic from owning domain rules.

## Decision
Use **layered hexagonal architecture**: Interfaces → Application → Domain; Infrastructure → Ports; Domain → no external dependencies.

## Consequences
- **Positive**: testable domain; replaceable infrastructure; clean provider boundaries; safer open-source extensibility.
- **Negative**: requires discipline and dependency checks; may feel slower in early code.

## Revisit Trigger
Do not revisit. This is a foundational architecture decision.
