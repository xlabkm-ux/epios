# ADR-0008 — Include MCP Apps in MVP v1.0

## Status
Accepted

## Context
Model Context Protocol (MCP) Apps are central to the interactive inspection and approval surfaces (e.g., ClaimApp, ApprovalApp). They are a core part of the "operating layer" we are building.

## Decision
Include **MCP Apps** in the MVP v1.0, specifically:
- ClaimApp
- EvidenceViewer
- ApprovalApp

## Consequences
- **Positive**: Proves the safe interactive layer; aligns UX with the platform model; validates bridge security early.
- **Negative**: Increases MVP complexity; requires significant security testing (Week 5).

## Revisit Trigger
If schedule risk becomes critical, reduce the scope to only ClaimApp and ApprovalApp.
