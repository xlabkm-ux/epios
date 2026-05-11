# TEST STRATEGY AND MATRIX: Epistemic OS

This document defines the testing layers and quality gates for the Epistemic OS project.

## 1. Testing Layers

| Layer | Focus | Tool | CI Gate |
|-------|-------|------|---------|
| **Unit (Domain)** | Domain invariants, entities, value objects. | Vitest | P0 |
| **Application** | Use case orchestration, policy coordination. | Vitest | P0 |
| **Contract** | API DTOs, provider adapters, MCP schemas. | Vitest | P1 |
| **Integration** | PostgreSQL repositories, migrations. | Vitest + Docker | P1 |
| **Security** | MCP bridge nonce replay, origin validation. | Vitest | P0 |
| **Runtime** | Idempotency, durable execution resume. | Vitest | P1 |
| **E2E Smoke** | End-to-end mission flow in neutral shell. | Playwright | P2 |

## 2. Requirement Traceability Matrix (MVP)

| Requirement | Test Type | Coverage | Target Week |
|-------------|-----------|----------|-------------|
| Domain Invariants | Unit | 100% core entities | Week 2 |
| PostgreSQL Persistence| Integration | Repositories + Migrations | Week 2 |
| API Contracts | Contract | All defined endpoints | Week 3 |
| MCP Bridge Security | Security | Replay, Origin, Schema | Week 5 |
| Mission Trace | Integration | Key event emission | Week 4 |
| Artifact Patching | App/E2E | Proposal to Apply flow | Week 5 |

## 3. Definition of Done (DoD)
A feature is considered done when:
1. Unit tests pass (100% line coverage for domain).
2. Integration tests pass for any persistence changes.
3. API contract is verified.
4. Security review is completed (for P0 areas).
5. Documentation (Register/Catalog) is updated.
6. Code is reviewed and merged to `main`.
