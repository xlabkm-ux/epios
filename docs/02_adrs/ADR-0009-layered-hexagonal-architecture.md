# ADR-0009 — Use Layered Hexagonal Architecture

## Status
Accepted

## Context
We must prevent external dependencies (UI frameworks, provider SDKs, database logic) from "owning" or leaking into the core domain rules. This is essential for long-term stability and testability.

## Decision
Adopt a **Layered Hexagonal Architecture** (Ports and Adapters):
- **Interfaces (API/UI)** → **Application** → **Domain**
- **Infrastructure (PostgreSQL/MCP)** → **Ports (Interfaces in Domain/Application)**
- **Domain** layer has no external dependencies.

## Consequences
- **Positive**: Testable domain logic; replaceable infrastructure; clean provider boundaries; safer extensibility.
- **Negative**: Requires strict discipline; initially feels "slower" due to mapping code and interface definitions.

## Revisit Trigger
Do not revisit. This is a foundational architectural decision for Epistemic OS.
