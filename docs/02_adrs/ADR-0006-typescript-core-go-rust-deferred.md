# ADR-0006 — Use TypeScript Core with Go/Rust Deferred

## Status
Accepted

## Context
The project requires fast delivery, a shared language across UI/API/Domain layers, and strong typing. We need to minimize the "switching cost" for the core development team during the bootstrap phase.

## Decision
Use **TypeScript** for the v1.0 core. Defer the use of Go or Rust to future infrastructure components only (e.g., high-throughput relays, sandbox controllers).

## Consequences
- **Positive**: Faster MVP delivery; unified codebase; lower team switching cost; easier integration between MCP, UI, and API.
- **Negative**: Some infrastructure paths may eventually require rewriting for performance; TypeScript runtime constraints may appear later for high-throughput services.

## Revisit Trigger
Revisit after the MVP if specific infrastructure bottlenecks are measured and TypeScript is proven insufficient for those components.
