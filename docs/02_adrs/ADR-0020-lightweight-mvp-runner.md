Owner: @architect
Status: accepted

# ADR-0020 — Use Lightweight MVP Runner Behind DurableRuntimePort

## Status
Accepted

## Context
The MVP needs runtime structure but cannot afford heavy orchestration complexity if it threatens six-week delivery.

## Decision
Implement lightweight MVP runner behind `DurableRuntimePort`.

## Rationale
Allows for basic workflow execution while maintaining the interface for a more robust runtime like Temporal in the future.

## Consequences
- **Positive**: faster MVP; preserves runtime abstraction; avoids premature Temporal setup.
- **Negative**: limited durability; restart/resume limitations must be documented.

## Revisit Trigger
Adopt Temporal when long-running waits/retries become necessary.

