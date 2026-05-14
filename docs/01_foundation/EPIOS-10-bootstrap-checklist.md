# EPIOS-10 — Implementation Bootstrap Checklist

**Project:** Epistemic OS v1.0  
**Document ID:** `EPIOS-10-IMPLEMENTATION-BOOTSTRAP-CHECKLIST`  
**Version:** Draft 0.1  
**Status:** Accepted for MVP Bootstrap  
**Depends on:** `EPIOS-00` through `EPIOS-09`  
**Target:** Week 1 implementation bootstrap  
**Repository:** `epistemic-os`  
**Repository model:** Open-source from day one  
**MVP horizon:** 6 weeks or faster  

---

## 1. Purpose of This Document

This document converts the accepted EPIOS concept package into the first executable implementation plan.

It defines:

- repository bootstrap checklist;
- exact initial file structure;
- first pull request sequence;
- Week 1 GitHub issues;
- local development commands;
- minimal CI gates;
- first database migration tasks;
- first domain package tasks;
- first demo shell tasks;
- Week 1 acceptance criteria.

This document is intentionally practical. It should be usable as the basis for creating the new open-source repository and starting implementation immediately.

---

## 2. Week 1 Goal

By the end of Week 1, the project must have a clean, public-ready repository that can run locally and prove the first architectural skeleton.

Week 1 target state:

```text
Repository exists
→ open-source files exist
→ pnpm workspace exists
→ packages are created
→ PostgreSQL runs locally
→ first migration applies
→ first domain invariant test passes
→ demo shell starts
→ API health endpoint works
→ CI baseline is green
```

Week 1 does not need full product functionality.

Week 1 must prove:

- architecture direction;
- local setup;
- TypeScript workspace;
- PostgreSQL baseline;
- test harness;
- no secrets;
- contribution/process foundation.

---

## 3. Pre-Bootstrap Decisions

Before creating the public repository, confirm these decisions.

| Decision | Status | Default |
|---|---|---|
| Repository name | Accepted | `epistemic-os` |
| License | Proposed | Apache-2.0 |
| Package manager | Recommended | pnpm |
| Node version | Proposed | Node 22 LTS or current active LTS |
| Workspace tool | Proposed | pnpm workspaces; Turborepo optional |
| Test runner | Proposed | Vitest |
| Lint/format | Proposed | ESLint + Prettier, or Biome |
| API framework | Proposed | Fastify or Hono |
| Demo shell | Proposed | Vite React |
| DB access | Proposed | Drizzle or Kysely |
| Runtime MVP | Accepted | lightweight runner behind port |

Blocking decision before public repo:

```text
License must be accepted.
```

Recommended action:

```text
Accept Apache-2.0 unless there is a strong reason not to.
```

---

## 4. Initial Repository Structure

Create:

```text
epistemic-os/
  README.md
  LICENSE
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
  SECURITY.md
  .env.example
  .gitignore
  .editorconfig
  .node-version
  package.json
  pnpm-workspace.yaml
  docker-compose.yml
  tsconfig.base.json

  apps/
    demo-shell/
      package.json
      index.html
      src/
        main.tsx
        App.tsx

  packages/
    domain/
      package.json
      src/
        index.ts
      test/
        domain-smoke.test.ts

    ports/
      package.json
      src/
        index.ts

    application/
      package.json
      src/
        index.ts

    api/
      package.json
      src/
        index.ts
        server.ts

    infrastructure-postgres/
      package.json
      migrations/
      src/
        index.ts

    infrastructure-models/
      package.json
      src/
        index.ts

    infrastructure-mcp/
      package.json
      src/
        index.ts

    infrastructure-runtime/
      package.json
      src/
        index.ts

    observability/
      package.json
      src/
        index.ts

    testing/
      package.json
      src/
        index.ts

  docs/
    00_project/
    01_architecture/
    02_adrs/
    03_specs/
    04_delivery/
    05_runbooks/

  tools/
    scripts/
```

---

## 5. Root Package Scripts

Initial `package.json` scripts:

```json
{
  "scripts": {
    "dev": "pnpm -r --parallel dev",
    "build": "pnpm -r build",
    "typecheck": "pnpm -r typecheck",
    "test": "pnpm -r test",
    "test:domain": "pnpm --filter @epios/domain test",
    "test:postgres": "pnpm --filter @epios/infrastructure-postgres test",
    "lint": "pnpm -r lint",
    "format": "pnpm -r format",
    "db:up": "docker compose up -d postgres",
    "db:down": "docker compose down",
    "db:migrate": "pnpm --filter @epios/infrastructure-postgres migrate",
    "db:seed": "pnpm --filter @epios/infrastructure-postgres seed",
    "db:reset": "pnpm db:down && docker compose up -d postgres && pnpm db:migrate && pnpm db:seed",
    "ci": "pnpm lint && pnpm typecheck && pnpm test",
    "ci:release": "pnpm lint && pnpm typecheck && pnpm test && pnpm build"
  }
}
```

If tooling is not ready on Day 1, scripts may initially be placeholders, but Week 1 gate requires:

```text
pnpm install
pnpm typecheck
pnpm test
pnpm db:up
pnpm db:migrate
```

---

## 6. Docker Compose Baseline

Minimum `docker-compose.yml`:

```yaml
services:
  postgres:
    image: postgres:16
    container_name: epios-postgres
    environment:
      POSTGRES_USER: epios
      POSTGRES_PASSWORD: epios_dev_password
      POSTGRES_DB: epios_dev
    ports:
      - "5432:5432"
    volumes:
      - epios_postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U epios -d epios_dev"]
      interval: 5s
      timeout: 5s
      retries: 10

volumes:
  epios_postgres_data:
```

Security note:

```text
The dev password is for local Docker only and must be documented as non-production.
```

---

## 7. Environment Baseline

`.env.example`:

```env
NODE_ENV=development
EPIOS_API_PORT=4000
EPIOS_WEB_PORT=5173
DATABASE_URL=postgresql://epios:epios_dev_password@localhost:5432/epios_dev
EPIOS_DEV_AUTH_ENABLED=true
EPIOS_TRACE_LOG_LEVEL=debug
EPIOS_MODEL_PROVIDER=fake
```

Rules:

```text
- no real provider keys;
- no private ChatAVG URLs;
- no private tokens;
- fake model provider by default.
```

---

## 8. First PR Sequence

## PR-001 — Repository Skeleton

### Purpose

Create the open-source repository foundation.

### Includes

```text
README.md
LICENSE
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
.gitignore
.editorconfig
.node-version
package.json
pnpm-workspace.yaml
docs folder structure
initial EPIOS docs copied or linked
```

### Acceptance

```text
- repository public-safe;
- license present;
- no secrets;
- README conservative and accurate;
- pnpm install does not fail if packages are not yet added.
```

---

## PR-002 — Workspace and Package Skeleton

### Purpose

Add TypeScript workspace and package boundaries.

### Includes

```text
apps/demo-shell
packages/domain
packages/ports
packages/application
packages/api
packages/infrastructure-postgres
packages/infrastructure-models
packages/infrastructure-mcp
packages/infrastructure-runtime
packages/observability
packages/testing
tsconfig.base.json
basic package scripts
```

### Acceptance

```text
- pnpm install works;
- pnpm typecheck works;
- package dependency direction documented;
- domain package has no infra dependency.
```

---

## PR-003 — PostgreSQL Local Dev and First Migration

### Purpose

Add PostgreSQL system-of-record baseline.

### Includes

```text
docker-compose.yml
.env.example
migration tool setup
0001_create_core_tables
DATABASE_URL handling
migration command
```

Minimum migration:

```text
missions
mission_runs
trace_events
```

### Acceptance

```text
- pnpm db:up works;
- pnpm db:migrate works;
- clean DB receives first tables;
- migration can be rerun safely on clean reset;
- database instructions in README.
```

---

## PR-004 — Domain Smoke Model and First Invariant Test

### Purpose

Prove domain package and test harness.

### Includes

```text
Mission value/entity skeleton
MissionRun status type
DomainError type
first invariant test
```

Minimum test:

```text
Mission cannot run without non-empty goal.
```

### Acceptance

```text
- pnpm test:domain passes;
- domain imports no infrastructure;
- invariant test is readable.
```

---

## PR-005 — API Health and Demo Shell Skeleton

### Purpose

Prove minimal API + UI startup.

### Includes

```text
API server with /health
Demo shell Vite app
basic API connectivity check
```

### Acceptance

```text
- pnpm dev starts API and web;
- /health returns ok;
- demo shell loads;
- README has local run command.
```

---

## PR-006 — CI Baseline

### Purpose

Protect main branch.

### Includes

```text
GitHub Actions workflow
install
lint or placeholder
typecheck
test
secret scan if easy
```

### Acceptance

```text
- CI runs on PR;
- CI runs on main;
- CI passes for current skeleton.
```

---

## 9. Week 1 GitHub Issues

### Foundation Issues

```text
#1 Create public repository skeleton
#2 Add license and open-source governance files
#3 Add pnpm workspace and TypeScript baseline
#4 Add package skeletons
#5 Add Docker Compose PostgreSQL
#6 Add initial database migration
#7 Add domain package smoke test
#8 Add API health endpoint
#9 Add demo shell skeleton
#10 Add CI baseline
```

### Documentation Issues

```text
#11 Add EPIOS-00 through EPIOS-10 docs to repository
#12 Add ADR-0001 through ADR-0010
#13 Add document register
#14 Add initial README quick start
#15 Add known MVP non-goals to README
```

### Security Issues

```text
#16 Add SECURITY.md
#17 Add .env.example without secrets
#18 Add basic secret scanning or documented manual check
#19 Add MCP security placeholder issue for Week 5
```

### Process Issues

```text
#20 Add PR template
#21 Add issue labels
#22 Add CODEOWNERS
#23 Add contribution guide
#24 Add weekly milestone tags plan
```

---

## 10. Initial GitHub Labels

Create labels:

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

P0
P1
P2
P3

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

status:triage
status:ready
status:in-progress
status:blocked
status:review
status:done
status:deferred

decision:accepted
decision:rejected
decision:research
decision:adr-needed
```

---

## 11. ADR Files to Create in Week 1

Create these first:

```text
docs/02_adrs/ADR-0001-create-epistemic-os-project.md
docs/02_adrs/ADR-0002-close-chatavg-v23-release-v24.md
docs/02_adrs/ADR-0003-open-source-from-day-one.md
docs/02_adrs/ADR-0004-neutral-demo-shell-first.md
docs/02_adrs/ADR-0005-universal-mission-room-mvp.md
docs/02_adrs/ADR-0006-typescript-core-go-rust-deferred.md
docs/02_adrs/ADR-0007-postgresql-alpha-system-of-record.md
docs/02_adrs/ADR-0008-mcp-apps-in-mvp.md
docs/02_adrs/ADR-0009-layered-hexagonal-architecture.md
docs/02_adrs/ADR-0010-domain-free-of-infrastructure.md
```

License ADR:

```text
docs/02_adrs/ADR-0026-license-choice.md
```

must be resolved before the repository is public.

---

## 12. Initial README Outline

```md
# Epistemic OS

Early-stage open-source platform for traceable reasoning, evidence-backed artifacts,
human decisions and safe AI-assisted actions.

## Status
MVP in development. Internal dev only. Not production-ready.

## Core Idea
situation → distinction → evidence → artifact → decision → action

## MVP Scope
Universal Mission Room for:
- architectural documents
- project planning
- research review
- decision support

## Quick Start
pnpm install
cp .env.example .env
pnpm db:up
pnpm db:migrate
pnpm dev

## Architecture
Link to EPIOS docs.

## Contributing
Link to CONTRIBUTING.md.

## Security
Link to SECURITY.md.

## License
Apache-2.0 or selected license.
```

---

## 13. Minimum Domain Smoke Code

Initial domain package should include only enough to prove direction.

```ts
export type MissionStatus =
  | 'draft'
  | 'briefed'
  | 'running'
  | 'waiting_for_decision'
  | 'review'
  | 'completed'
  | 'archived';

export type MissionBrief = {
  goal: string;
  context?: string;
  successCriteria: string[];
  constraints: string[];
  unknowns: string[];
};

export type Mission = {
  missionId: string;
  title: string;
  brief: MissionBrief;
  status: MissionStatus;
  version: number;
};

export function assertMissionCanRun(mission: Mission): void {
  if (!mission.brief.goal.trim()) {
    throw new Error('MISSION_GOAL_REQUIRED');
  }
}
```

First test:

```ts
import { describe, expect, it } from 'vitest';
import { assertMissionCanRun, Mission } from '../src';

describe('Mission invariants', () => {
  it('rejects running a mission without a goal', () => {
    const mission: Mission = {
      missionId: 'm1',
      title: 'Untitled',
      status: 'draft',
      version: 1,
      brief: {
        goal: '',
        successCriteria: [],
        constraints: [],
        unknowns: []
      }
    };

    expect(() => assertMissionCanRun(mission)).toThrow('MISSION_GOAL_REQUIRED');
  });
});
```

This code is intentionally minimal. EPIOS-02 remains the authoritative domain model.

---

## 14. Minimum API Health Endpoint

Initial API can be minimal.

```ts
import Fastify from 'fastify';

export function buildServer() {
  const app = Fastify({ logger: true });

  app.get('/health', async () => {
    return {
      ok: true,
      service: 'epistemic-os-api'
    };
  });

  return app;
}
```

Acceptance:

```text
GET /health → 200 { ok: true }
```

---

## 15. Minimum PostgreSQL Migration

Initial migration can include only core tables:

```sql
CREATE TABLE missions (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT NOT NULL,
  mode TEXT NOT NULL,
  sensitivity TEXT NOT NULL,
  goal TEXT NOT NULL,
  context TEXT,
  success_criteria JSONB NOT NULL DEFAULT '[]'::jsonb,
  constraints JSONB NOT NULL DEFAULT '[]'::jsonb,
  unknowns JSONB NOT NULL DEFAULT '[]'::jsonb,
  desired_artifact_type TEXT,
  created_by_type TEXT NOT NULL,
  created_by_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  version INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE mission_runs (
  id UUID PRIMARY KEY,
  mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  current_stage TEXT,
  wait_reason TEXT,
  failure_code TEXT,
  failure_message TEXT,
  failure_retryable BOOLEAN,
  idempotency_key TEXT,
  runtime_ref TEXT,
  started_by_type TEXT NOT NULL,
  started_by_id TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  version INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE trace_events (
  id UUID PRIMARY KEY,
  event_type TEXT NOT NULL,
  mission_id UUID REFERENCES missions(id) ON DELETE CASCADE,
  run_id UUID REFERENCES mission_runs(id) ON DELETE SET NULL,
  correlation_id UUID,
  idempotency_key TEXT,
  actor_type TEXT,
  actor_id TEXT,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Full schema follows EPIOS-05 and should be added in Week 2.

---

## 16. CI Baseline Workflow

Initial `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version-file: .node-version
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm typecheck
      - run: pnpm test
```

Add lint/build when packages are ready.

---

## 17. Week 1 Acceptance Gate

Week 1 is complete when:

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

---

## 18. Week 2 Preparation Checklist

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
Add PostgreSQL migrations 0002–0006
Add repository integration tests
Add optimistic concurrency helpers
```

---

## 19. Bootstrap Risks

| Risk | Priority | Mitigation |
|---|---:|---|
| License not decided | P0 | approve Apache-2.0 before public launch |
| Tooling debate slows Week 1 | P1 | accept defaults; revisit later via ADR |
| Repo public with private data | P0 | start clean; do not copy ChatAVG data |
| Overbuilding from day one | P1 | stick to PR sequence |
| PostgreSQL setup friction | P1 | Docker Compose and clear README |
| CI too strict too early | P2 | start minimal, add gates weekly |
| Domain model too large in Week 1 | P1 | only smoke model in PR-004 |
| Demo shell polish consumes time | P1 | skeleton only in Week 1 |

---

## 20. Approval Checklist

This document is approved when the project owner confirms:

- Week 1 goal is correct;
- repository structure is correct;
- first PR sequence is correct;
- Week 1 issues are correct;
- initial labels are correct;
- ADR creation plan is correct;
- README outline is acceptable;
- minimum domain/API/PostgreSQL/CI baselines are acceptable;
- Week 1 acceptance gate is acceptable.

---

## 21. Next Step After Approval

After approval, execute one of the following:

1. Create the new `epistemic-os` repository manually and implement PR-001.
2. Generate a repository bootstrap script.
3. Generate GitHub issue bodies for Week 1.
4. Generate individual ADR files ADR-0001 through ADR-0010.

Recommended next artifact:

```text
EPIOS-11 — Week 1 GitHub Issues and PR Bodies
```

Purpose:

- provide copy-ready issue descriptions;
- provide PR descriptions;
- provide exact acceptance criteria for each issue.

