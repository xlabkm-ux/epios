Owner: @architect
Status: accepted

# ADR-0019 — Use Secure MCP Bridge with Origin, Schema, Nonce and Capability Checks

## Status
Accepted

## Context
postMessage can be spoofed or replayed without validation.

## Decision
Every MCP bridge message must pass: origin validation, schema validation, nonce replay protection, timestamp validation, capability check, policy check for writes, and audit event.

## Rationale
Ensures the integrity and authenticity of communication between the shell and MCP applications.

## Consequences
- **Positive**: prevents replay/spoofing classes; testable security boundary; safer write-capable apps.
- **Negative**: extra infrastructure in Week 5.

## Revisit Trigger
Revisit after production threat model; never remove core checks.

