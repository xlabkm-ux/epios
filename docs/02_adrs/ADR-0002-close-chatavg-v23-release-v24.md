# ADR-0002 — Close ChatAVG v2.3 Development and Release v2.4 Stabilization

## Status
Accepted

## Context
ChatAVG v2.3 produced useful concepts and implementation fragments, but it also accumulated legacy constraints, duplicated documents, and release candidate (RC) scope confusion. Continuing v2.3 expansion would compete with the new Epistemic OS direction and risk preserving suboptimal legacy structures.

## Decision
Close ChatAVG v2.3 development. Release ChatAVG v2.4 as a stabilized version at the current functional level. 

The v2.4 scope is strictly limited to:
- stabilization;
- security;
- reproducibility;
- handover;
- extraction inventory.

## Consequences
- **Positive**: Prevents scope split, protects the Epistemic OS roadmap, and provides a stable legacy baseline.
- **Negative**: Some planned v2.3 features are cancelled, and users expecting RC2 expansion may need updated communication.

## Revisit Trigger
Do not revisit unless a critical maintenance obligation or security vulnerability appears in the legacy branch.
