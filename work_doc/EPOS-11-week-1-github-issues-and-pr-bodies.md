# EPOS-11 — Week 1 GitHub Issues and PR Bodies

**Project:** Epistemic OS v1.0  
**Document ID:** `EPOS-11-WEEK-1-GITHUB-ISSUES-PR-BODIES`  
**Version:** Draft 0.1  
**Status:** Accepted for MVP Bootstrap  
**Depends on:** `EPOS-00` through `EPOS-10`  
**Target:** Week 1 execution package  
**Repository:** `epistemic-os`  
**Repository model:** Open-source from day one  
**MVP horizon:** 6 weeks or faster  
**Last updated:** 2026-05-11  

---

## 1. Purpose of This Document

This document converts `EPOS-10 — Implementation Bootstrap Checklist` into copy-ready GitHub execution artifacts for Week 1.

It provides:

- Week 1 milestone definition;
- GitHub label set;
- issue-to-PR mapping;
- copy-ready PR descriptions for `PR-001` through `PR-006`;
- copy-ready GitHub issue bodies for issues `#1` through `#24`;
- Week 1 acceptance gate;
- Week 2 handoff checklist.

This document is intentionally operational. It is not another architecture document. Its job is to make the first implementation week executable with minimal ambiguity.

---

## 2. Source Alignment

This document is aligned with:

| Source | Used For |
|---|---|
| `EPOS-00` | project foundation, open-source model, internal-dev MVP boundary |
| `EPOS-01` | architecture boundaries, package map, dependency rules |
| `EPOS-02` | domain smoke model and invariant direction |
| `EPOS-03` | 6-week roadmap and Week 1 gate |
| `EPOS-04` | repository process, PR template, labels, ADR/RFC process, CI rules |
| `EPOS-05` | PostgreSQL baseline and first migration direction |
| `EPOS-06` | MCP security placeholder and future Week 5 gate |
| `EPOS-07` | release gates, local runbook, observability baseline |
| `EPOS-08` | ChatAVG reuse safety and no-private-data rule |
| `EPOS-09` | ADR index and ADR file list |
| `EPOS-10` | Week 1 bootstrap checklist, PR sequence and issue list |

Conflict rule:

```text
If this document conflicts with EPOS-00 through EPOS-10, the earlier accepted EPOS document wins until an ADR updates the decision.
```

---

## 3. Week 1 Operating Principle

Week 1 is foundation only.

The goal is:

```text
Repository exists
→ workspace installs
→ packages exist
→ PostgreSQL starts
→ first migration applies
→ first domain invariant test passes
→ API health endpoint works
→ demo shell loads
→ CI baseline is green
→ no secrets are committed
```

Week 1 must not drift into product implementation.

Allowed:

```text
repo skeleton
workspace skeleton
package boundaries
local PostgreSQL
first migration
first domain smoke test
API /health
demo shell skeleton
CI baseline
docs and governance files
```

Not allowed in Week 1:

```text
full domain model implementation
full persistence schema beyond core baseline
MCP Apps implementation
artifact patch engine
real model provider integration
ChatAVG code import
UI polish
production auth
Temporal rollout
```

---

## 4. GitHub Milestones

Create these milestones at repository bootstrap.

| Milestone | Purpose | Exit Condition |
|---|---|---|
| `mvp-w1-foundation` | Repository, workspace, PostgreSQL baseline, smoke tests, CI | Week 1 acceptance gate passes |
| `mvp-w2-domain` | Domain kernel and persistence | Week 2 issues exist before Week 1 closes |
| `mvp-w3-api` | Application use cases and API/BFF | Prepared after Week 2 planning |
| `mvp-w4-shell` | Neutral demo shell and Mission Room | Prepared after API contracts stabilize |
| `mvp-w5-mcp` | MCP Apps and bridge security | Placeholder issue exists in Week 1 |
| `mvp-w6-rc` | MVP hardening and release candidate | Prepared after Week 5 gate |

Week 1 issues use milestone:

```text
mvp-w1-foundation
```

Week 5 MCP placeholder uses milestone:

```text
mvp-w5-mcp
```

---

## 5. GitHub Labels

Create the following labels before or during `PR-006`.

### 5.1. Type Labels

```text
type:feature
type:bug
type:docs
type:security
type:architecture
type:spike
type:test
type:infra
type:ux
type:release
```

### 5.2. Priority Labels

```text
P0
P1
P2
P3
```

### 5.3. Area Labels

```text
area:domain
area:application
area:postgres
area:api
area:demo-shell
area:mcp
area:runtime
area:evidence
area:artifact
area:approval
area:observability
area:docs
area:security
```

### 5.4. Status Labels

```text
status:triage
status:ready
status:in-progress
status:blocked
status:review
status:done
status:deferred
```

### 5.5. Decision Labels

```text
decision:accepted
decision:rejected
decision:research
decision:adr-needed
```

---

## 6. Week 1 PR Sequence

| PR | Title | Primary Issues | Purpose | Merge Order |
|---:|---|---|---|---:|
| PR-001 | Repository Skeleton | #1, #2, #11, #13, #14, #15, #16, #23, #24 | Public-safe repository foundation | 1 |
| PR-002 | Workspace and Package Skeleton | #3, #4 | TypeScript workspace and architecture package boundaries | 2 |
| PR-003 | PostgreSQL Local Dev and First Migration | #5, #6, #17 | PostgreSQL system-of-record baseline | 3 |
| PR-004 | Domain Smoke Model and First Invariant Test | #7 | Domain package proof and first invariant | 4 |
| PR-005 | API Health and Demo Shell Skeleton | #8, #9 | API and web app startup proof | 5 |
| PR-006 | CI Baseline and Process Automation | #10, #18, #20, #21, #22 | CI, labels, PR template, CODEOWNERS, secret scan baseline | 6 |

Issue `#12 Add ADR-0001 through ADR-0010` may be completed in `PR-001` if docs are copied during the initial skeleton. If this makes `PR-001` too large, split it into a docs-only follow-up before Week 1 closes.

Issue `#19 Add MCP security placeholder issue for Week 5` may be completed through GitHub UI and linked from `PR-006` or tracked as a no-code process task.

---

## 7. Common PR Body Template

Use this for every Week 1 PR.

~~~md
## Purpose

What foundation slice does this PR enable?

## Scope

What changed?

## Contract Changes

- API:
- Domain:
- DB:
- MCP Bridge:
- Events:

## Linked Issues

Closes #<issue-number>

## Tests / Checks

- [ ] `pnpm install`
- [ ] `pnpm typecheck`
- [ ] `pnpm test`
- [ ] relevant package-specific command
- [ ] no secrets committed

## Risks

What could break or drift?

## Rollback

How do we revert safely?

## Screenshots / Demo

Required only when UI changed.

## Acceptance

- [ ] acceptance item 1
- [ ] acceptance item 2
~~~

---

# 8. Pull Request Bodies

---

## PR-001 — Repository Skeleton

**Branch:** `chore/repository-skeleton`  
**Milestone:** `mvp-w1-foundation`  
**Primary labels:** `type:infra`, `type:docs`, `P0`, `area:docs`, `area:security`  
**Linked issues:** `#1`, `#2`, `#11`, `#13`, `#14`, `#15`, `#16`, `#23`, `#24`; optionally `#12`

~~~md
## Purpose

Create the public-safe foundation for the `epistemic-os` repository.

This PR establishes the repository identity, governance files, initial documentation structure and conservative public README. It must make the repository safe to publish without private ChatAVG data, secrets or overclaiming production readiness.

## Scope

Adds:

- `README.md`
- `LICENSE`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `.gitignore`
- `.editorconfig`
- `.node-version`
- root `package.json`
- `pnpm-workspace.yaml`
- `docs/` directory structure
- `docs/00_project/DOCUMENT_REGISTER.md`
- initial EPOS docs copied or linked
- weekly milestone tags plan

Optional in this PR if size remains reviewable:

- `docs/02_adrs/ADR-0001` through `ADR-0010`
- `docs/02_adrs/ADR-0026-license-choice.md`

## Contract Changes

- API: none
- Domain: none
- DB: none
- MCP Bridge: none
- Events: none

## Linked Issues

Closes #1
Closes #2
Closes #11
Closes #13
Closes #14
Closes #15
Closes #16
Closes #23
Closes #24

Optionally closes #12 if ADR files are included.

## Tests / Checks

- [ ] `pnpm install` does not fail because of missing workspace packages
- [ ] repository contains no secrets
- [ ] `.env` is ignored
- [ ] `.env.example` is not introduced here unless it contains placeholders only
- [ ] README clearly states MVP is internal-dev only and not production-ready
- [ ] license file is present
- [ ] security reporting path exists in `SECURITY.md`

## Risks

- Repository becomes public before license is accepted.
- Private ChatAVG data or internal URLs are copied into docs.
- README overpromises production readiness.
- ADR files copied in this PR make the PR too large.

## Rollback

Revert the PR before repository publication. If already public, rotate any accidentally leaked secret immediately and remove private data from history according to security procedure.

## Acceptance

- [ ] repository root files exist
- [ ] license is present and matches accepted license decision
- [ ] README is conservative and accurate
- [ ] `SECURITY.md` exists
- [ ] `CONTRIBUTING.md` exists
- [ ] `CODE_OF_CONDUCT.md` exists
- [ ] docs directory structure exists
- [ ] document register exists
- [ ] no private ChatAVG data is present
- [ ] no secrets are committed
~~~

---

## PR-002 — Workspace and Package Skeleton

**Branch:** `chore/workspace-package-skeleton`  
**Milestone:** `mvp-w1-foundation`  
**Primary labels:** `type:infra`, `type:architecture`, `P0`, `area:domain`, `area:application`  
**Linked issues:** `#3`, `#4`

~~~md
## Purpose

Add the TypeScript workspace and package boundaries that make the target architecture explicit from day one.

This PR should make the correct architecture the easiest path: domain, ports, application, interfaces and infrastructure packages exist as separate workspaces with clear dependency direction.

## Scope

Adds package skeletons:

- `apps/demo-shell`
- `packages/domain`
- `packages/ports`
- `packages/application`
- `packages/api`
- `packages/infrastructure-postgres`
- `packages/infrastructure-models`
- `packages/infrastructure-mcp`
- `packages/infrastructure-runtime`
- `packages/observability`
- `packages/testing`

Adds shared TypeScript baseline:

- `tsconfig.base.json`
- package-level `package.json` files
- package-level `src/index.ts` files
- root scripts for `build`, `typecheck`, `test`, `lint`, `format`

## Contract Changes

- API: none
- Domain: package boundary created only
- DB: none
- MCP Bridge: none
- Events: none

## Linked Issues

Closes #3
Closes #4

## Tests / Checks

- [ ] `pnpm install`
- [ ] `pnpm typecheck`
- [ ] `pnpm test` runs even if tests are placeholders
- [ ] package names use `@epos/*`
- [ ] domain package has no infrastructure dependency
- [ ] app package does not import database packages directly

## Risks

- Tooling debate slows implementation.
- Package graph is created but dependency rules are undocumented.
- Placeholder scripts hide broken packages.

## Rollback

Revert the workspace skeleton PR. No data migration is involved.

## Acceptance

- [ ] pnpm workspace installs
- [ ] all MVP packages exist
- [ ] TypeScript baseline exists
- [ ] package dependency direction is documented
- [ ] root scripts exist
- [ ] no package imports against architecture direction
~~~

---

## PR-003 — PostgreSQL Local Dev and First Migration

**Branch:** `feat/postgres-local-dev-first-migration`  
**Milestone:** `mvp-w1-foundation`  
**Primary labels:** `type:infra`, `P0`, `area:postgres`, `area:security`  
**Linked issues:** `#5`, `#6`, `#17`

~~~md
## Purpose

Add PostgreSQL as the local system-of-record baseline and prove that migrations can be applied from a clean developer setup.

This PR must not implement the full EPOS-05 schema. Week 1 only needs the first core migration that proves migration tooling, local database startup and traceable persistence direction.

## Scope

Adds:

- `docker-compose.yml` with PostgreSQL service
- `.env.example` with placeholder local dev values
- migration tool setup
- first migration: `0001_create_core_tables`
- migration command
- database README section or runbook snippet

Minimum tables:

- `missions`
- `mission_runs`
- `trace_events`

## Contract Changes

- API: none
- Domain: none
- DB: creates initial core tables
- MCP Bridge: none
- Events: prepares `trace_events` storage

## Linked Issues

Closes #5
Closes #6
Closes #17

## Tests / Checks

- [ ] `pnpm db:up`
- [ ] `pnpm db:migrate`
- [ ] clean database receives first tables
- [ ] reset path is documented or stubbed
- [ ] `.env.example` contains no real secrets
- [ ] local dev database password is clearly marked non-production

## Risks

- Migration tool choice stalls progress.
- `.env.example` accidentally includes real credentials.
- Migration overreaches into Week 2 full schema.
- Docker Compose is not reproducible on a clean machine.

## Rollback

Revert the PR. Local developers can remove the Docker volume if needed:

```bash
docker compose down -v
```

No production data exists in Week 1.

## Acceptance

- [ ] PostgreSQL starts through Docker Compose
- [ ] first migration applies on a clean database
- [ ] `missions`, `mission_runs` and `trace_events` exist
- [ ] local database instructions are in README or runbook
- [ ] `.env.example` has placeholders only
- [ ] no private ChatAVG URLs, tokens or credentials are present
~~~

---

## PR-004 — Domain Smoke Model and First Invariant Test

**Branch:** `feat/domain-smoke-invariant`  
**Milestone:** `mvp-w1-foundation`  
**Primary labels:** `type:feature`, `type:test`, `P0`, `area:domain`  
**Linked issues:** `#7`

~~~md
## Purpose

Prove that the domain package is executable, testable and independent from infrastructure.

This PR introduces only the minimal Mission smoke model needed to validate the first invariant. The full EPOS-02 domain model remains Week 2 scope.

## Scope

Adds:

- minimal `Mission` type
- minimal `MissionBrief` type
- minimal `MissionStatus` type
- `DomainError` or first typed domain error direction
- `assertMissionCanRun` or equivalent domain function
- first domain invariant test

Minimum invariant:

```text
Mission cannot run without a non-empty goal.
```

## Contract Changes

- API: none
- Domain: creates minimal smoke model and first invariant
- DB: none
- MCP Bridge: none
- Events: none

## Linked Issues

Closes #7

## Tests / Checks

- [ ] `pnpm test:domain`
- [ ] `pnpm typecheck`
- [ ] test fails if mission goal is empty
- [ ] domain package imports no infrastructure packages
- [ ] no database, web framework, provider SDK, filesystem or env access in domain

## Risks

- Week 1 domain grows into full EPOS-02 implementation.
- Domain error handling becomes ad hoc string throwing.
- Infrastructure dependencies leak into domain package.

## Rollback

Revert the domain smoke PR. No database migration is affected.

## Acceptance

- [ ] first domain invariant test passes
- [ ] invariant test is readable
- [ ] domain package has no infrastructure dependency
- [ ] domain code is intentionally minimal
- [ ] Week 2 full domain implementation remains separate
~~~

---

## PR-005 — API Health and Demo Shell Skeleton

**Branch:** `feat/api-health-demo-shell-skeleton`  
**Milestone:** `mvp-w1-foundation`  
**Primary labels:** `type:feature`, `P0`, `area:api`, `area:demo-shell`  
**Linked issues:** `#8`, `#9`

~~~md
## Purpose

Prove that the API and neutral demo shell can start locally.

This PR intentionally avoids product UI behavior. It only proves API startup, `/health`, web app startup and a minimal connectivity path or documented partial connection.

## Scope

Adds:

- API server package startup
- `GET /health` endpoint
- Vite React demo shell skeleton
- minimal page showing project name/status
- optional API connectivity check from web shell
- README local run instructions update

## Contract Changes

- API: adds `GET /health`
- Domain: none
- DB: none
- MCP Bridge: none
- Events: none

## Linked Issues

Closes #8
Closes #9

## Tests / Checks

- [ ] `pnpm dev` starts API and web, or documented partial start exists
- [ ] `GET /health` returns `200` with `{ ok: true }`
- [ ] demo shell loads in browser
- [ ] `pnpm typecheck`
- [ ] no UI business logic is introduced

## Risks

- Demo shell starts to become a product UI in Week 1.
- API framework choice creates unnecessary debate.
- Web package imports application or infrastructure directly in unsafe ways.

## Rollback

Revert the PR. No database migration is affected.

## Acceptance

- [ ] API process starts locally
- [ ] `/health` returns ok
- [ ] demo shell loads
- [ ] README has local run command
- [ ] shell is neutral and minimal
- [ ] no domain mutation exists in UI
~~~

---

## PR-006 — CI Baseline and Process Automation

**Branch:** `chore/ci-process-baseline`  
**Milestone:** `mvp-w1-foundation`  
**Primary labels:** `type:infra`, `type:security`, `type:docs`, `P0`, `area:security`, `area:docs`  
**Linked issues:** `#10`, `#18`, `#20`, `#21`, `#22`; optionally `#19`

~~~md
## Purpose

Protect `main` with minimal CI and repository process automation.

This PR establishes the first quality gate. It should be strict enough to prevent obvious drift and secrets, but not so strict that Week 1 stalls on premature automation.

## Scope

Adds:

- `.github/workflows/ci.yml`
- `.github/pull_request_template.md`
- initial issue labels configuration or documented manual label list
- `CODEOWNERS`
- basic secret scan or documented manual check
- optional issue templates if low-cost
- optional Week 5 MCP security placeholder issue reference

CI minimum:

```text
pnpm install
pnpm typecheck
pnpm test
```

Add lint/build only if packages are ready.

## Contract Changes

- API: none
- Domain: none
- DB: none
- MCP Bridge: none
- Events: none

## Linked Issues

Closes #10
Closes #18
Closes #20
Closes #21
Closes #22

Optionally closes #19 if the MCP Week 5 placeholder issue is created and linked.

## Tests / Checks

- [ ] CI runs on pull requests
- [ ] CI runs on pushes to `main`
- [ ] `pnpm install --frozen-lockfile` or equivalent works in CI
- [ ] `pnpm typecheck` passes in CI
- [ ] `pnpm test` passes in CI
- [ ] secret scan exists or manual secret check is documented
- [ ] PR template contains purpose, scope, contracts, tests, risks and rollback

## Risks

- CI is too strict too early and blocks skeleton work.
- CI is too weak and allows broken main.
- Secret scanning is treated as complete security rather than baseline hygiene.
- CODEOWNERS uses placeholder roles without follow-up assignment.

## Rollback

Revert the CI/process PR if it blocks all merges due to configuration error. Do not disable secret hygiene without replacement.

## Acceptance

- [ ] CI baseline runs on PR
- [ ] CI baseline runs on main
- [ ] CI is green for current skeleton
- [ ] PR template exists
- [ ] issue labels exist or creation steps are documented
- [ ] CODEOWNERS exists
- [ ] basic secret scanning or manual check exists
- [ ] Week 1 gate can be evaluated
~~~

---

# 9. GitHub Issue Bodies

All Week 1 issues should use milestone:

```text
mvp-w1-foundation
```

Unless explicitly stated otherwise.

---

## #1 — Create public repository skeleton

**Labels:** `type:infra`, `P0`, `area:docs`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `architect` / `maintainer`

~~~md
## Purpose

Create the root skeleton for the new `epistemic-os` repository.

This is the first implementation step for Epistemic OS v1.0 and must be public-safe from the start.

## Scope

Create root files:

- `README.md`
- `.gitignore`
- `.editorconfig`
- `.node-version`
- `package.json`
- `pnpm-workspace.yaml`
- `docs/` directory structure

## Non-Goals

- no product functionality
- no ChatAVG code import
- no full package implementation
- no real provider integration

## Acceptance Criteria

- [ ] repository root has required starter files
- [ ] repository can be cloned without private dependencies
- [ ] `.env` is ignored
- [ ] README states early MVP/internal-dev status
- [ ] no private ChatAVG data is present
- [ ] no secrets are committed

## Checks

- [ ] manual secret review
- [ ] `pnpm install` does not fail because of missing workspace packages
~~~

---

## #2 — Add license and open-source governance files

**Labels:** `type:docs`, `type:security`, `P0`, `area:docs`, `area:security`, `decision:adr-needed`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `architect` / `security-owner`

~~~md
## Purpose

Add the files required for an open-source repository from day one.

The license decision must be resolved before the repository is public.

## Scope

Add:

- `LICENSE`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`

Recommended default license:

```text
Apache-2.0
```

Also create or link:

- `docs/02_adrs/ADR-0026-license-choice.md`

## Non-Goals

- no legal deep dive beyond selecting the MVP repository license
- no CLA automation unless explicitly needed
- no production security SLA

## Acceptance Criteria

- [ ] `LICENSE` exists
- [ ] license matches accepted ADR decision
- [ ] `CONTRIBUTING.md` exists
- [ ] `CODE_OF_CONDUCT.md` exists
- [ ] `SECURITY.md` exists
- [ ] README links to governance files
- [ ] no unsupported production-readiness claims are made

## Checks

- [ ] manual review for public wording
- [ ] ADR-0026 status is updated if license is accepted
~~~

---

## #3 — Add pnpm workspace and TypeScript baseline

**Labels:** `type:infra`, `P0`, `area:application`, `status:ready`  
**Target PR:** `PR-002`  
**Owner role:** `backend-owner`

~~~md
## Purpose

Create the TypeScript monorepo baseline using pnpm workspaces.

## Scope

Add:

- `pnpm-workspace.yaml`
- root `package.json` scripts
- `tsconfig.base.json`
- workspace package naming convention
- baseline `typecheck`, `test`, `build`, `lint`, `format` scripts

## Non-Goals

- no full build optimization
- no Turborepo/Nx requirement unless chosen deliberately
- no complex release tooling

## Acceptance Criteria

- [ ] `pnpm install` works
- [ ] `pnpm typecheck` works or runs across existing packages
- [ ] `pnpm test` works or runs placeholder tests
- [ ] workspace packages can use `@epos/*` names
- [ ] root scripts match Week 1 needs

## Checks

- [ ] `pnpm install`
- [ ] `pnpm typecheck`
- [ ] `pnpm test`
~~~

---

## #4 — Add package skeletons

**Labels:** `type:architecture`, `type:infra`, `P0`, `area:domain`, `area:application`, `area:postgres`, `area:mcp`, `status:ready`  
**Target PR:** `PR-002`  
**Owner role:** `architect`

~~~md
## Purpose

Create the package skeleton that encodes the intended layered/hexagonal architecture.

## Scope

Create packages:

- `packages/domain`
- `packages/ports`
- `packages/application`
- `packages/api`
- `packages/infrastructure-postgres`
- `packages/infrastructure-models`
- `packages/infrastructure-mcp`
- `packages/infrastructure-runtime`
- `packages/observability`
- `packages/testing`
- `apps/demo-shell`

Each package should have:

- `package.json`
- `src/index.ts`
- package-local script stubs where needed

## Non-Goals

- no real domain implementation except later issue #7
- no real DB repositories
- no MCP bridge implementation
- no product UI

## Acceptance Criteria

- [ ] all MVP packages exist
- [ ] package responsibilities are documented
- [ ] dependency direction is documented
- [ ] domain package has no infrastructure imports
- [ ] application package does not import provider SDKs directly

## Checks

- [ ] `pnpm typecheck`
- [ ] manual dependency review
~~~

---

## #5 — Add Docker Compose PostgreSQL

**Labels:** `type:infra`, `P0`, `area:postgres`, `area:security`, `status:ready`  
**Target PR:** `PR-003`  
**Owner role:** `data-owner`

~~~md
## Purpose

Provide local PostgreSQL for internal dev and MVP persistence.

PostgreSQL is the alpha system of record. Week 1 must prove that a developer can start it locally.

## Scope

Add `docker-compose.yml` with:

- PostgreSQL service
- local dev database
- healthcheck
- named volume
- documented local-only credentials

Recommended local values:

```text
POSTGRES_USER=epos
POSTGRES_PASSWORD=epos_dev_password
POSTGRES_DB=epos_dev
```

## Non-Goals

- no production database setup
- no cloud deployment
- no multi-tenant database model
- no full schema beyond Week 1 core migration

## Acceptance Criteria

- [ ] `pnpm db:up` starts PostgreSQL
- [ ] PostgreSQL healthcheck passes
- [ ] local dev credentials are documented as non-production
- [ ] no real secrets are used
- [ ] reset instruction is documented or planned

## Checks

- [ ] `docker compose up -d postgres`
- [ ] `docker compose ps`
- [ ] connection through `DATABASE_URL` succeeds when migration runs
~~~

---

## #6 — Add initial database migration

**Labels:** `type:infra`, `type:test`, `P0`, `area:postgres`, `area:observability`, `status:ready`  
**Target PR:** `PR-003`  
**Owner role:** `data-owner`

~~~md
## Purpose

Add the first migration proving migration tooling and PostgreSQL persistence direction.

## Scope

Add migration tool setup and first migration:

```text
0001_create_core_tables
```

Minimum tables:

- `missions`
- `mission_runs`
- `trace_events`

The migration should include created timestamps and minimal columns needed for Week 1 and future Week 2 expansion.

## Non-Goals

- no full EPOS-05 schema in Week 1
- no artifact/evidence/approval tables yet unless explicitly trivial
- no production migration compatibility guarantee yet

## Acceptance Criteria

- [ ] `pnpm db:migrate` applies migration to clean database
- [ ] migration can be run after local reset
- [ ] `missions` table exists
- [ ] `mission_runs` table exists
- [ ] `trace_events` table exists
- [ ] rollback/down migration or mitigation note exists

## Checks

- [ ] `pnpm db:up`
- [ ] `pnpm db:migrate`
- [ ] inspect tables manually or via migration test
~~~

---

## #7 — Add domain package smoke test

**Labels:** `type:test`, `type:feature`, `P0`, `area:domain`, `status:ready`  
**Target PR:** `PR-004`  
**Owner role:** `domain-owner`

~~~md
## Purpose

Prove the domain package can enforce invariants without infrastructure.

## Scope

Add minimal domain smoke implementation:

- `Mission`
- `MissionBrief`
- `MissionStatus`
- first domain error direction
- invariant function or method for mission run eligibility

Add test:

```text
Mission cannot run without non-empty goal.
```

## Non-Goals

- no full EPOS-02 aggregate implementation
- no persistence mapping
- no API DTOs
- no model provider logic

## Acceptance Criteria

- [ ] `pnpm test:domain` passes
- [ ] empty mission goal is rejected
- [ ] test clearly names the invariant
- [ ] domain imports no infrastructure
- [ ] code is intentionally minimal

## Checks

- [ ] `pnpm test:domain`
- [ ] `pnpm typecheck`
- [ ] manual import review
~~~

---

## #8 — Add API health endpoint

**Labels:** `type:feature`, `P0`, `area:api`, `status:ready`  
**Target PR:** `PR-005`  
**Owner role:** `backend-owner`

~~~md
## Purpose

Create the minimal API startup proof for Week 1.

## Scope

Add API server with:

- local startup command
- `GET /health`
- response body `{ ok: true, service: "epistemic-os-api" }` or equivalent

## Non-Goals

- no mission API yet
- no auth yet beyond dev assumptions
- no database query required for health unless trivial
- no provider integration

## Acceptance Criteria

- [ ] API starts locally
- [ ] `GET /health` returns HTTP 200
- [ ] response includes `ok: true`
- [ ] README documents how to run API
- [ ] API code does not contain business logic

## Checks

- [ ] `pnpm dev` or package-specific dev command
- [ ] curl/browser check for `/health`
- [ ] `pnpm typecheck`
~~~

---

## #9 — Add demo shell skeleton

**Labels:** `type:feature`, `type:ux`, `P0`, `area:demo-shell`, `status:ready`  
**Target PR:** `PR-005`  
**Owner role:** `frontend-owner`

~~~md
## Purpose

Create the neutral demo shell startup proof.

The Week 1 shell is not the Mission Room yet. It only proves that the web app starts and is not ChatAVG-branded.

## Scope

Add Vite React skeleton:

- `apps/demo-shell/package.json`
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- minimal page with project name and MVP/internal-dev status
- optional `/health` connectivity indicator

## Non-Goals

- no Mission Room implementation
- no ClaimApp/EvidenceViewer/ApprovalApp
- no artifact workspace
- no product visual polish
- no business logic in UI

## Acceptance Criteria

- [ ] demo shell starts locally
- [ ] browser loads page
- [ ] page uses neutral Epistemic OS language
- [ ] README documents web startup
- [ ] no ChatAVG branding is present unless historical docs are linked as reference

## Checks

- [ ] `pnpm dev`
- [ ] manual browser check
- [ ] `pnpm typecheck`
~~~

---

## #10 — Add CI baseline

**Labels:** `type:infra`, `type:test`, `P0`, `area:security`, `status:ready`  
**Target PR:** `PR-006`  
**Owner role:** `maintainer`

~~~md
## Purpose

Protect `main` with the first CI gate.

## Scope

Add GitHub Actions workflow:

- run on pull requests
- run on push to `main`
- install pnpm
- install dependencies
- run typecheck
- run tests

Minimum commands:

```text
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test
```

Add lint/build only if ready.

## Non-Goals

- no full release pipeline
- no deployment automation
- no E2E smoke yet
- no MCP security CI yet

## Acceptance Criteria

- [ ] CI runs on PR
- [ ] CI runs on main
- [ ] CI passes for current skeleton
- [ ] failing tests fail CI
- [ ] workflow is documented in README or contributing guide

## Checks

- [ ] open test PR or inspect workflow run
- [ ] CI green on current branch
~~~

---

## #11 — Add EPOS-00 through EPOS-10 docs to repository

**Labels:** `type:docs`, `P0`, `area:docs`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `architect`

~~~md
## Purpose

Add the accepted EPOS documentation package to the repository so implementation has an authoritative source.

## Scope

Add or link:

- `EPOS-00`
- `EPOS-01`
- `EPOS-02`
- `EPOS-03`
- `EPOS-04`
- `EPOS-05`
- `EPOS-06`
- `EPOS-07`
- `EPOS-08`
- `EPOS-09`
- `EPOS-10`

Recommended path:

```text
docs/00_project/
docs/01_architecture/
docs/04_delivery/
```

## Non-Goals

- no rewriting of approved docs in this issue
- no new architecture decisions without ADR
- no private ChatAVG docs unless sanitized and explicitly classified

## Acceptance Criteria

- [ ] EPOS docs are present or linked
- [ ] docs have stable filenames
- [ ] docs do not contain secrets
- [ ] docs do not expose private ChatAVG data
- [ ] README links to docs index

## Checks

- [ ] manual doc review
- [ ] document register updated
~~~

---

## #12 — Add ADR-0001 through ADR-0010

**Labels:** `type:architecture`, `type:docs`, `P0`, `area:docs`, `decision:accepted`, `status:ready`  
**Target PR:** `PR-001` or docs-only follow-up before Week 1 closes  
**Owner role:** `architect`

~~~md
## Purpose

Create the initial ADR files from the accepted ADR index.

## Scope

Create:

- `docs/02_adrs/ADR-0001-create-epistemic-os-project.md`
- `docs/02_adrs/ADR-0002-close-chatavg-v23-release-v24.md`
- `docs/02_adrs/ADR-0003-open-source-from-day-one.md`
- `docs/02_adrs/ADR-0004-neutral-demo-shell-first.md`
- `docs/02_adrs/ADR-0005-universal-mission-room-mvp.md`
- `docs/02_adrs/ADR-0006-typescript-core-go-rust-deferred.md`
- `docs/02_adrs/ADR-0007-postgresql-alpha-system-of-record.md`
- `docs/02_adrs/ADR-0008-mcp-apps-in-mvp.md`
- `docs/02_adrs/ADR-0009-layered-hexagonal-architecture.md`
- `docs/02_adrs/ADR-0010-domain-free-of-infrastructure.md`

Also create if not already present:

- `docs/02_adrs/ADR-0026-license-choice.md`

## Non-Goals

- no ADR-0011 through ADR-0025 unless time allows
- no new unreviewed decisions
- no status changes without owner approval

## Acceptance Criteria

- [ ] ADR-0001 through ADR-0010 exist
- [ ] each ADR has status, context, decision, consequences and revisit trigger
- [ ] document register links ADRs
- [ ] ADR-0026 exists and license decision is resolved before public release

## Checks

- [ ] manual doc review
- [ ] README links to ADR directory
~~~

---

## #13 — Add document register

**Labels:** `type:docs`, `P0`, `area:docs`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `architect`

~~~md
## Purpose

Create the document register to prevent documentation drift.

## Scope

Create:

```text
docs/00_project/DOCUMENT_REGISTER.md
```

Fields:

- Document ID
- Title
- Owner
- Status
- Version
- Last updated
- Applies to
- Supersedes
- Superseded by

Initial entries:

- EPOS-00 through EPOS-11
- ADR-0001 through ADR-0010 if created
- ADR-0026 if created
- README
- SECURITY
- CONTRIBUTING

## Non-Goals

- no heavyweight documentation portal
- no generated docs system
- no archival migration of all ChatAVG docs

## Acceptance Criteria

- [ ] document register exists
- [ ] EPOS docs are listed
- [ ] ADR docs are listed if present
- [ ] statuses are explicit
- [ ] owners are explicit or placeholder roles are used

## Checks

- [ ] manual review for missing Week 1 docs
~~~

---

## #14 — Add initial README quick start

**Labels:** `type:docs`, `P0`, `area:docs`, `status:ready`  
**Target PR:** `PR-001`; may be updated in `PR-003` and `PR-005`  
**Owner role:** `maintainer`

~~~md
## Purpose

Create a conservative public README with a usable local quick start.

## Scope

README sections:

- project status
- core idea
- MVP scope
- quick start
- architecture docs link
- contributing link
- security link
- license

Quick start should converge toward:

```bash
pnpm install
cp .env.example .env
pnpm db:up
pnpm db:migrate
pnpm dev
```

If not all commands exist yet, mark partial status honestly.

## Non-Goals

- no production deployment instructions
- no marketing overclaim
- no SaaS promise
- no autonomous agent safety claim

## Acceptance Criteria

- [ ] README exists
- [ ] status says MVP in development/internal dev only/not production-ready
- [ ] quick start is present
- [ ] docs links exist
- [ ] security link exists
- [ ] license section exists

## Checks

- [ ] manual README review
- [ ] quick start commands updated as PRs add functionality
~~~

---

## #15 — Add known MVP non-goals to README

**Labels:** `type:docs`, `P0`, `area:docs`, `area:security`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `architect`

~~~md
## Purpose

Prevent public misunderstanding of MVP scope.

## Scope

Add README section for MVP non-goals and limitations:

- not production hardened
- no public SaaS deployment
- no enterprise auth/SSO
- no billing
- no full marketplace
- no autonomous long-running agents
- no production sandbox for arbitrary code
- no graph database in MVP
- no Kafka/Debezium in MVP
- no advanced semantic eval platform yet
- fake deterministic provider may be used

## Non-Goals

- no detailed `KNOWN_LIMITATIONS_MVP.md` unless created separately
- no full release notes

## Acceptance Criteria

- [ ] README contains MVP non-goals
- [ ] wording is honest and conservative
- [ ] limitations align with EPOS-00 and EPOS-03
- [ ] no production readiness is implied

## Checks

- [ ] manual public communication review
~~~

---

## #16 — Add SECURITY.md

**Labels:** `type:security`, `type:docs`, `P0`, `area:security`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `security-owner`

~~~md
## Purpose

Add a security reporting and scope document for the open-source repository.

## Scope

`SECURITY.md` should include:

- supported versions or early-stage support statement
- how to report vulnerabilities
- what not to disclose publicly
- security scope
- safe handling of secrets and private data
- internal-dev MVP warning

## Non-Goals

- no production incident SLA unless approved
- no enterprise compliance claims
- no bug bounty promise unless approved

## Acceptance Criteria

- [ ] `SECURITY.md` exists
- [ ] security reporting path is clear
- [ ] no unsupported response-time promise is made
- [ ] secret handling rules are stated
- [ ] README links to `SECURITY.md`

## Checks

- [ ] manual security review
~~~

---

## #17 — Add .env.example without secrets

**Labels:** `type:security`, `type:infra`, `P0`, `area:security`, `area:postgres`, `status:ready`  
**Target PR:** `PR-003`  
**Owner role:** `security-owner` / `data-owner`

~~~md
## Purpose

Provide a safe local environment template.

## Scope

Create `.env.example` with placeholders/local-only dev values:

```env
NODE_ENV=development
EPOS_API_PORT=4000
EPOS_WEB_PORT=5173
DATABASE_URL=postgresql://epos:epos_dev_password@localhost:5432/epos_dev
EPOS_DEV_AUTH_ENABLED=true
EPOS_TRACE_LOG_LEVEL=debug
EPOS_MODEL_PROVIDER=fake
```

Rules:

- no real provider keys
- no private ChatAVG URLs
- no private tokens
- no production credentials

## Non-Goals

- no real OpenAI/provider configuration in Week 1
- no production env template
- no secret manager integration

## Acceptance Criteria

- [ ] `.env.example` exists
- [ ] `.env` is ignored
- [ ] all values are placeholder or local-only
- [ ] fake model provider is default
- [ ] README explains copying `.env.example` to `.env`

## Checks

- [ ] manual secret review
- [ ] secret scan if available
~~~

---

## #18 — Add basic secret scanning or documented manual check

**Labels:** `type:security`, `type:infra`, `P0`, `area:security`, `status:ready`  
**Target PR:** `PR-006`  
**Owner role:** `security-owner`

~~~md
## Purpose

Prevent obvious secret leaks before the repository becomes public.

## Scope

Add one of:

- basic secret scanning in CI; or
- documented manual secret review checklist if automation is deferred.

Minimum check areas:

- `.env*`
- docs
- examples
- logs
- screenshots
- copied ChatAVG material
- provider keys
- database URLs
- internal URLs

## Non-Goals

- no complete DLP system
- no production secret manager
- no full supply-chain security program

## Acceptance Criteria

- [ ] secret scan runs in CI or manual checklist exists
- [ ] `.env` is ignored
- [ ] `.env.example` is reviewed
- [ ] docs are reviewed for private data
- [ ] any ChatAVG-derived material is sanitized

## Checks

- [ ] CI secret scan or manual checklist result linked in PR
~~~

---

## #19 — Add MCP security placeholder issue for Week 5

**Labels:** `type:security`, `type:architecture`, `P0`, `area:mcp`, `area:security`, `status:ready`  
**Milestone:** `mvp-w5-mcp`  
**Target PR:** no-code process task or linked from `PR-006`  
**Owner role:** `security-owner`

~~~md
## Purpose

Create the Week 5 placeholder for MCP bridge security implementation and tests.

This keeps the security gate visible from Week 1 even though implementation is not Week 1 scope.

## Scope

Create a Week 5 issue covering:

- MCPAppRegistry
- bridge message schema
- origin validation
- schema validation
- nonce replay protection
- timestamp window
- capability checks
- policy checks for writes
- audit/trace events
- ClaimApp, EvidenceViewer, ApprovalApp security tests

## Non-Goals

- no MCP implementation in Week 1
- no iframe host implementation in Week 1
- no app UI implementation in Week 1

## Acceptance Criteria

- [ ] Week 5 MCP security issue exists
- [ ] issue links EPOS-06
- [ ] issue contains P0 test matrix summary
- [ ] milestone is `mvp-w5-mcp`
- [ ] owner role is assigned

## Checks

- [ ] placeholder issue URL linked from Week 1 tracking board
~~~

---

## #20 — Add PR template

**Labels:** `type:docs`, `type:infra`, `P0`, `area:docs`, `status:ready`  
**Target PR:** `PR-006`  
**Owner role:** `maintainer`

~~~md
## Purpose

Make every PR capture purpose, scope, contracts, tests, risks and rollback.

## Scope

Create:

```text
.github/pull_request_template.md
```

Required sections:

- Purpose
- Scope
- Contract Changes
- Linked Issues
- Tests / Checks
- Risks
- Rollback
- Screenshots / Demo
- Acceptance

## Non-Goals

- no heavyweight PR automation
- no mandatory screenshots unless UI changed
- no release-note automation yet

## Acceptance Criteria

- [ ] PR template exists
- [ ] template includes contract changes section
- [ ] template includes tests/checks section
- [ ] template includes rollback section
- [ ] template includes risk section

## Checks

- [ ] open PR uses template automatically
~~~

---

## #21 — Add issue labels

**Labels:** `type:infra`, `type:docs`, `P0`, `area:docs`, `status:ready`  
**Target PR:** `PR-006` or GitHub UI process task  
**Owner role:** `maintainer`

~~~md
## Purpose

Create the initial issue taxonomy for execution tracking.

## Scope

Create labels:

- type labels
- priority labels
- area labels
- status labels
- decision labels

Use the label list from EPOS-11 section 5.

## Non-Goals

- no complex project automation
- no custom fields required in Week 1
- no label color perfection

## Acceptance Criteria

- [ ] type labels exist
- [ ] priority labels exist
- [ ] area labels exist
- [ ] status labels exist
- [ ] decision labels exist
- [ ] Week 1 issues are labeled

## Checks

- [ ] inspect GitHub labels
- [ ] sample issue has expected labels
~~~

---

## #22 — Add CODEOWNERS

**Labels:** `type:infra`, `type:security`, `P0`, `area:security`, `area:docs`, `status:ready`  
**Target PR:** `PR-006`  
**Owner role:** `maintainer`

~~~md
## Purpose

Define initial ownership for architecture-sensitive areas.

## Scope

Create:

```text
.github/CODEOWNERS
```

Initial ownership model may use role placeholders:

```text
/packages/domain/                 @architect @domain-owner
/packages/application/            @architect @backend-owner
/packages/infrastructure-postgres/ @backend-owner @data-owner
/packages/infrastructure-mcp/      @security-owner @frontend-owner
/packages/api/                    @backend-owner
/apps/demo-shell/                 @frontend-owner @product-owner
/docs/01_architecture/            @architect
/docs/02_adrs/                    @architect
/docs/03_specs/                   @architect @backend-owner
/SECURITY.md                      @security-owner
```

If GitHub requires real usernames, create a follow-up issue to replace placeholders.

## Non-Goals

- no final team structure
- no enterprise approval workflow
- no branch protection tuning unless easy

## Acceptance Criteria

- [ ] CODEOWNERS exists
- [ ] domain ownership is explicit
- [ ] security-sensitive paths have security owner
- [ ] docs/ADR ownership is explicit
- [ ] placeholder owner replacement is tracked if needed

## Checks

- [ ] CODEOWNERS parses in GitHub or limitation is documented
~~~

---

## #23 — Add contribution guide

**Labels:** `type:docs`, `P0`, `area:docs`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `maintainer`

~~~md
## Purpose

Provide a conservative contribution guide for early MVP development.

## Scope

`CONTRIBUTING.md` should include:

- local setup
- branch naming
- test commands
- PR process
- coding standards
- architecture rules
- how to propose RFC/ADR
- security reporting link
- non-goals for MVP

## Non-Goals

- no mature community governance model yet
- no promise to accept all external PRs
- no extensive style guide beyond Week 1 needs

## Acceptance Criteria

- [ ] `CONTRIBUTING.md` exists
- [ ] local setup section exists
- [ ] branch naming is documented
- [ ] test commands are documented
- [ ] architecture rules are linked
- [ ] security reporting link exists
- [ ] MVP contribution policy is conservative

## Checks

- [ ] manual docs review
~~~

---

## #24 — Add weekly milestone tags plan

**Labels:** `type:release`, `type:docs`, `P1`, `area:docs`, `status:ready`  
**Target PR:** `PR-001`  
**Owner role:** `maintainer`

~~~md
## Purpose

Document the weekly milestone tags for MVP tracking.

## Scope

Add release/milestone plan:

```text
mvp-w1-foundation
mvp-w2-domain
mvp-w3-api
mvp-w4-shell
mvp-w5-mcp
mvp-w6-rc
v1.0.0-mvp-rc1
```

Document when each tag is created and what the gate means.

## Non-Goals

- no release automation in Week 1
- no production deployment
- no changelog generator requirement

## Acceptance Criteria

- [ ] milestone tag plan is documented
- [ ] Week 1 milestone exists
- [ ] MVP RC tag name is documented
- [ ] release notes expectation is linked or stated

## Checks

- [ ] manual review
~~~

---

# 10. Week 1 Board View

Recommended GitHub project columns:

```text
Triage
Ready
In Progress
Review
Done
Blocked
Deferred
```

Initial status:

| Issue | Initial Status | Target PR |
|---:|---|---|
| #1 | Ready | PR-001 |
| #2 | Ready | PR-001 |
| #3 | Ready | PR-002 |
| #4 | Ready | PR-002 |
| #5 | Ready | PR-003 |
| #6 | Ready | PR-003 |
| #7 | Ready | PR-004 |
| #8 | Ready | PR-005 |
| #9 | Ready | PR-005 |
| #10 | Ready | PR-006 |
| #11 | Ready | PR-001 |
| #12 | Ready | PR-001 or docs follow-up |
| #13 | Ready | PR-001 |
| #14 | Ready | PR-001 |
| #15 | Ready | PR-001 |
| #16 | Ready | PR-001 |
| #17 | Ready | PR-003 |
| #18 | Ready | PR-006 |
| #19 | Ready | process task / PR-006 link |
| #20 | Ready | PR-006 |
| #21 | Ready | PR-006 or GitHub UI |
| #22 | Ready | PR-006 |
| #23 | Ready | PR-001 |
| #24 | Ready | PR-001 |

---

# 11. Week 1 Acceptance Gate

Week 1 is complete only when:

```text
[ ] public repository exists;
[ ] license accepted and present;
[ ] README quick start exists;
[ ] SECURITY.md exists;
[ ] CONTRIBUTING.md exists;
[ ] pnpm workspace installs;
[ ] package skeleton exists;
[ ] PostgreSQL starts through Docker Compose;
[ ] first migration applies;
[ ] first domain invariant test passes;
[ ] API /health works;
[ ] demo shell loads;
[ ] CI baseline runs on PR;
[ ] no secrets committed;
[ ] ADR-0001 through ADR-0010 exist;
[ ] Week 2 issues are created.
```

Gate owner:

```text
architect + maintainer + security-owner
```

Gate rule:

```text
Do not open Week 2 implementation PRs until Week 1 gate is either passed or explicitly waived by ADR/owner decision.
```

---

# 12. Week 2 Handoff Issues to Create Before Week 1 Closes

Before Week 2 starts, create issues for:

```text
Implement Mission aggregate
Implement MissionRun state machine
Implement EpistemicNode schema
Implement ReasoningEdge schema
Implement DomainBoundary schema
Implement Source/EvidenceRef schema
Implement LivingArtifact/ArtifactPatch schema
Implement ApprovalRequest/DecisionRecord schema
Add PostgreSQL migrations 0002-0006
Add repository integration tests
Add optimistic concurrency helpers
```

Recommended next artifact after EPOS-11:

```text
EPOS-12 — Week 2 Domain and Persistence Issues and PR Bodies
```

Do not create EPOS-12 until Week 1 bodies are accepted or materially stable.

---

# 13. Week 1 Risk Register

| Risk | Priority | Mitigation |
|---|---:|---|
| License not accepted before public repository | P0 | Resolve `ADR-0026` before publication |
| Private ChatAVG material copied into public repo | P0 | Start clean; sanitize docs; run secret/manual review |
| Week 1 expands into product implementation | P1 | Enforce PR sequence and non-goals |
| Package skeleton creates wrong dependency direction | P0 | Document direction and review imports |
| PostgreSQL migration overbuilds full schema | P1 | Limit PR-003 to core baseline tables |
| CI too strict blocks all work | P2 | Start with install/typecheck/test only |
| CI too weak allows broken main | P1 | Add minimum PR/main workflow |
| Domain model overbuilt in smoke PR | P1 | Keep only Mission goal invariant |
| Demo shell becomes ChatAVG-branded | P1 | Use neutral Epistemic OS language only |
| MCP security forgotten until Week 5 | P0 | Create placeholder issue #19 in Week 1 |

---

# 14. Definition of Done for Week 1 Issues

A Week 1 issue is done when:

```text
- linked PR is merged, or no-code process task is completed and linked;
- acceptance criteria are checked;
- tests/checks listed in the issue are run or explicitly marked not applicable;
- no secrets or private data were introduced;
- docs are updated if commands or contracts changed;
- follow-up risk is captured as an issue instead of hidden in comments.
```

A Week 1 PR is done when:

```text
- CI is green where CI exists;
- PR body includes purpose, scope, tests, risks and rollback;
- linked issues are referenced;
- architecture boundaries are not violated;
- reviewer can understand the change without reading private context.
```

---

# 15. Approval Checklist

This document is approved when the project owner confirms:

```text
[ ] PR sequence is correct;
[ ] issue list is complete for Week 1;
[ ] issue bodies are sufficiently copy-ready;
[ ] PR bodies are sufficiently copy-ready;
[ ] labels and milestones are acceptable;
[ ] Week 1 gate is acceptable;
[ ] Week 2 handoff list is acceptable;
[ ] no Week 1 scope expansion was introduced.
```

---

# 16. Next Execution Step

After approval:

```text
1. Create GitHub milestone `mvp-w1-foundation`.
2. Create labels from section 5.
3. Create issues #1 through #24 using section 9.
4. Open PR-001 using section 8.
5. Continue PR sequence without skipping gates.
```
