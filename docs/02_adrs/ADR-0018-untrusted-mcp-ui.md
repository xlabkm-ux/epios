Owner: @architect
Status: accepted

# ADR-0018 — Treat MCP Apps as Untrusted UI Surfaces

## Status
Accepted

## Context
MCP Apps execute in iframes and communicate through postMessage. They can be buggy or compromised.

## Decision
Treat MCP Apps as untrusted UI surfaces. They render state and request actions only.

## Rationale
Maintains a strict security boundary and ensures that all state mutations are validated by the backend.

## Consequences
- **Positive**: safer security boundary; no business logic in iframe; clear backend authority.
- **Negative**: more bridge validation and backend command mapping.

## Revisit Trigger
Do not revisit for MVP. This is a security baseline.

