# ADR-0025 — Reuse ChatAVG Through Reviewed Extraction or Clean Rewrite

## Status
Accepted

## Context
ChatAVG contains valuable ideas and code, but also unsafe/legacy/mock components.

## Decision
Reuse through reviewed extraction categories: REUSE_AS_IS, REUSE_AFTER_REFACTOR, REFERENCE_ONLY, REWRITE, DISCARD, ARCHIVE. Default rule: When in doubt, reference the code and rewrite cleanly.

## Rationale
Allows the project to benefit from previous work while ensuring that only high-quality, relevant code is incorporated into the new repository.

## Consequences
- **Positive**: prevents copying legacy bugs; preserves conceptual value; protects open-source repo.
- **Negative**: more initial engineering effort.

## Revisit Trigger
Revisit only per asset through extraction inventory.
