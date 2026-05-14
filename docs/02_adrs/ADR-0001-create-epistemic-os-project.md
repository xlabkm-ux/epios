Owner: @architect
Status: accepted

# ADR-0001 — Create Epistemic OS as a New Project

## Status
Accepted

## Context
ChatAVG v2.3 produced useful concepts and implementation fragments, but it also accumulated legacy constraints, duplicated documents and RC scope confusion. The new strategic goal is broader than ChatAVG as a product.

## Decision
Create a new project: **Epistemic Operating System v1.0**. The project is developed in a separate repository.

## Consequences
- **Positive**: clean architecture start; no inherited ChatAVG coupling; open-source project can be shaped independently; ChatAVG can become a future product shell.
- **Negative**: requires new repository setup; requires extraction/rewrite discipline; some existing code may be left behind.

## Revisit Trigger
Revisit only if separate-repo overhead blocks MVP delivery or if legal/licensing constraints prevent reuse.

