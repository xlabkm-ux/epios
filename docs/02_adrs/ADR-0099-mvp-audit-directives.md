# ADR-0099 — MVP Audit Directives for Architectural Integrity

Owner: @architect
Status: accepted

## Context
As Epistemic OS v1.0 MVP development moves from bootstrap to active delivery, there is a high risk of "architectural drift" where speed of feature development compromises the core hexagonal integrity, DDD principles, and security invariants established in the foundation documents (EPIOS-00 through EPIOS-10). 

To prevent this, a set of "Strict Audit Directives" is established. Any violation of these directives is considered a critical architectural failure (P0 blocker) and must be remediated immediately.

## Decision
Establish the following five groups of non-negotiable architectural directives for the v1.0 MVP:

### 1. Dependency Management & CI
*   **Workspace Structure**: The repository must maintain a clear `pnpm workspace` structure with isolated `apps/` and `packages/`.
*   **Layer Isolation**: Automated dependency checks (e.g., `dependency-cruiser`) must be enforced in CI. The `domain` package MUST NOT depend on `infrastructure`, `api`, or `application`.
*   **Essential Docs**: Root must contain `README.md`, `CONTRIBUTING.md`, and `SECURITY.md`. All architecture-defining ADRs must be registered.

### 2. Domain Layer (Strict DDD)
*   **Aggregate Boundaries**: Entities in different aggregates must only reference each other by ID, never by direct object reference.
*   **Rich Domain Model**: All state transition logic and business invariants must live inside domain entities or domain services. "Anemic" DTOs with public setters are forbidden at the domain level.
*   **Typed Errors**: Domain logic must throw specific, typed error classes (e.g., `DomainError`, `InvalidTransitionError`) instead of generic `Error` strings.

### 3. Application Layer (Asynchronous Integrity)
*   **Async-First Design**: Long-running operations (like mapping runs) must return a `runId` immediately, with the actual work performed by an async worker.
*   **Deterministic Delays**: Fake providers used during MVP must implement simulated delays (e.g., 2-3 seconds) to validate UX responsiveness and non-blocking behavior.
*   **Transactional Boundaries**: Every Use Case operation that mutates state and emits events must be wrapped in a transactional unit (e.g., `UnitOfWork`).

### 4. Infrastructure & Persistence
*   **Lightweight Querying**: Only `Drizzle` or `Kysely` are allowed. Heavy ORMs (Prisma/TypeORM) are prohibited to maintain performance and control.
*   **Outbox Pattern**: The Outbox pattern must be implemented with both a database table and a background worker to ensure eventual consistency and observability.
*   **Optimistic Concurrency**: All mutable tables (Workspaces, Artifacts) must include a `version` column to prevent race conditions.

### 5. Interfaces & UI State
*   **State Sync**: UI state updates must use reliable polling or SSE. Direct data return from untrusted iframes (MCP apps) to the host UI is prohibited.
*   **MCP Bridge Security**: All postMessage communication must be strictly validated using Zod schemas, including `nonce`, `origin`, and `capability` checks.

## Consequences

### Positive
- Ensures architectural longevity and maintainability.
- Prevents technical debt from accumulating during the fast-paced MVP phase.
- Guarantees security and observability invariants.

### Negative
- Increases initial development time due to strict mapping and transaction management.
- Requires higher engineering discipline and more boilerplate in the early stages.

## Revisit Trigger
Revisit only if these directives prove to be an unmanageable blocker for v1.1 delivery, or if a fundamental shift in architecture (e.g., moving away from Hexagonal) is decided.
