# ADR-0003 — Open Source From Day One

## Status
Accepted

## Context
Epistemic OS is intended as a platform project with reusable architecture, public credibility, and potential for external contribution. It aims to solve "document drift" and "unclear ownership" by being transparent and architecture-governed from the start.

## Decision
Make the Epistemic OS repository open-source from day one.

## Consequences
- **Positive**: Transparency, easier community review, clearer architecture discipline, and avoids a later "open-source cleanup" effort.
- **Negative**: Stricter secret/data hygiene required; public communication must be conservative; ChatAVG reuse requires careful license and data review.

## Revisit Trigger
Revisit if legal or security reviews identify unmanageable exposure risks that cannot be mitigated in a public repository.
