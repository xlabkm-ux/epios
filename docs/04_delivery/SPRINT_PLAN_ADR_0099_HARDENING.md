# SPRINT PLAN: ADR-0099 Architectural Hardening (S1)

**Status:** Proposed
**Owner:** Antigravity (AI Agent)
**Date:** 2026-05-15
**Traceability:** Implements [ADR-0099](../02_adrs/ADR-0099-mvp-audit-directives.md) (Directives 3.3, 4.2, 4.3, 5.2)

## 1. Goal
Achieve full compliance with the "P0 Hardening" requirements of ADR-0099, focusing on transactional integrity, reliable event emission (Outbox), and secure iframe communication.

## 2. Scope & Tasks

### 2.1. Transactional Integrity (Directive 3.3)
- [ ] **Define `UnitOfWorkPort`**: Interface in `packages/ports` for transaction management.
- [ ] **Implement `PostgresUnitOfWork`**: Drizzle-based transaction manager in `infrastructure-postgres`.
- [ ] **Domain Events**: Add `domainEvents` collection to `EpistemicNode` and `GovernanceProcess` classes to capture side effects.
- [ ] **Refactor Use Cases**: Update `CastVote`, `SubmitClaim`, and `ApplyPatch` to use the `UnitOfWork` for atomic execution.

### 2.2. Reliability (Directive 4.2 & 4.3)
- [ ] **Outbox Worker**: Implement a background worker in `infrastructure-runtime` to process events from the `outbox` table.
- [ ] **Optimistic Concurrency**: Add `version: number` property to `EpistemicNode` and ensure it is checked during repository `save()`.

### 2.3. Security (Directive 5.2)
- [ ] **Secure MCP Bridge**: Refactor `packages/infrastructure-mcp` to use Zod for strict message validation.
- [ ] **Bridge Protocol**: Implement `nonce` and `origin` checks for all `postMessage` communications.

## 3. Success Criteria
1. [ ] All P0 Use Cases (`CastVote`, `SubmitClaim`) are wrapped in transactions.
2. [ ] Events are emitted via the Outbox worker and logged to `auditLogger`.
3. [ ] `pnpm test` passes for both `InMemory` and `Postgres` integration tests.
4. [ ] `dependency-cruiser` confirms no boundary violations.

## 4. Risks & Mitigation
- **Risk**: Complexity of Drizzle transactions in a layered architecture. 
- **Mitigation**: Use a lightweight `UnitOfWork` pattern that provides repository instances injected with the current transaction client.
- **Risk**: Performance impact of outbox polling. 
- **Mitigation**: Use 5-10s interval for MVP, move to `LISTEN/NOTIFY` if needed later.

---
*Created by Antigravity Agent as part of the Epistemic OS development cycle.*
