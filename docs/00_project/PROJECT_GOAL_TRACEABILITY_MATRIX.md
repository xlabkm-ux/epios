Owner: @architect
Status: Accepted_concept

# PROJECT_GOAL_TRACEABILITY_MATRIX

This matrix links high-level project goals to their architectural justifications (ADRs), formal specifications, implementation evidence (Tests), and release milestones.

| Goal | Document (Foundation) | ADR | Spec / Use Case | implementation / Test | Release Milestone |
|------|----------------------|-----|-----------------|----------------------|-------------------|
| **Measurable Trust Layer** | [EPIOS-01](../01_foundation/EPIOS-01-architecture-foundation.md) | ADR-0005, ADR-0011 | `APPLICATION_USE_CASE_CONTRACTS.md` | `pnpm test` (Domain) | v0.1.0-rc.1 |
| **Traceable Reasoning** | [EPIOS-07](../01_foundation/EPIOS-07-runtime-observability.md) | ADR-0022 | `TRACE_EVENT_CATALOG.md` | `test:trace` | v1.0 MVP |
| **Evidence-Backed Artifacts** | [EPIOS-02](../01_foundation/EPIOS-02-domain-model.md) | ADR-0013 | `ApplyArtifactPatch` | `PostgresGraphRepository.test.ts` | v1.0 MVP |
| **Human-in-the-loop Approvals** | [EPIOS-01](../01_foundation/EPIOS-01-architecture-foundation.md) | ADR-0014 | `ResolveApproval` | `ApprovalWorkflow.test.ts` | v1.0 MVP |
| **Safe AI-Assisted Actions** | [EPIOS-06](../01_foundation/EPIOS-06-mcp-apps-security.md) | ADR-0018, ADR-0019 | `ProposeArtifactPatch` | `test:security`, MCP Bridge Tests | v0.2.0 |
| **Architectural Hardening** | [EPIOS-10](../01_foundation/EPIOS-10-bootstrap-checklist.md) | ADR-0099 | [Audit Directives](../02_adrs/ADR-0099-mvp-audit-directives.md) | `pnpm verify`, Dependency Cruiser | v0.1.0-rc.1 |
| **Dogfooding: ADR Review** | [EPIOS-03-R](../01_foundation/EPIOS-v1_1-adr-review-roadmap.md) | ADR-0005 | `ADR_REVIEW_WORKFLOW_MVP.md` | `qa:adr-review` | v0.2.0 / v1.1 |

## Maintenance
This matrix is updated when:
1. A new strategic goal is defined.
2. A P0 ADR changes core behavior.
3. A new release milestone is planned.
