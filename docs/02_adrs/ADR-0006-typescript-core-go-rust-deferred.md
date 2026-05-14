Owner: @architect
Status: accepted

# ADR-0006 — Use TypeScript Core with Go/Rust Deferred

## Status
Accepted

## Context
The project needs fast delivery, shared language across UI/API/domain, and strong typing.

## Decision
Use **TypeScript** for v1.0 core. Defer Go/Rust to future infrastructure components only.

## Consequences
- **Positive**: faster MVP; unified codebase; lower team switching cost; easy MCP/UI/API integration.
- **Negative**: some infrastructure paths may later need rewriting; TypeScript runtime constraints may appear for high-throughput services.

## Revisit Trigger
Revisit after MVP if infrastructure bottlenecks are measured.

