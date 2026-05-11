# ADR-0017 — Use Idempotency Keys for Side-Effecting Commands

## Status
Accepted

## Context
Approval, patch application, external action and MCP commands can be retried or duplicated.

## Decision
Use idempotency keys for side-effecting commands.

## Rationale
Prevents duplicate execution of actions that change state or interact with external systems.

## Consequences
- **Positive**: duplicate-safe operations; safer approval flow; future runtime replay compatibility.
- **Negative**: requires request hashing and storage.

## Revisit Trigger
Revisit retention policy after MVP.
