Owner: @architect
Status: Accepted_contract

# OPEN DECISIONS REGISTER: Epistemic OS (epios)

This register tracks key technical and project decisions that are either currently being discussed or have reached a temporary consensus but may need further formalization via ADR/RFC.

| Decision | Options | Recommended Default | Current Status | Required Before | Owner | ADR/RFC Link |
|----------|---------|---------------------|----------------|-----------------|-------|--------------|
| License | Apache-2.0 / MIT / AGPL | Apache-2.0 | **Accepted** | Repo Init | @architect | [ADR-0026](../02_adrs/ADR-0026-license-choice.md) |
| Node version | v20 LTS / v22 | v22 | **Accepted** | Week 1 | @architect | - |
| Package manager | pnpm / npm / yarn | pnpm | **Accepted** | Week 1 | @architect | - |
| Workspace tool | Turbo / Nx / none | Turbo | **Accepted** | Week 1 | @architect | - |
| Test runner | Vitest / Node test / Jest | Vitest | **Accepted** | Week 1 | @architect | - |
| Lint/format tool | ESLint + Prettier / Biome | ESLint + Prettier | **Accepted** | Week 1 | @architect | - |
| API framework | Fastify / Hono / Express | Fastify | **Accepted** | Week 2 | @backend-owner | - |
| Demo shell framework | Vite React / Next.js | Vite React | **Accepted** | Week 2 | @frontend-owner | - |
| DB access tool | Drizzle / Kysely / Prisma | Drizzle | **Accepted** | Week 2 | @backend-owner | - |
| Auth mode for MVP | dev auth / none | dev auth | **Accepted** | Week 3 | @security-owner | - |
| Model provider policy | fake + OpenAI / both | fake + OpenAI | **Accepted** | Week 1 | @architect | - |
| Secret scanning | Gitleaks / TruffleHog | Gitleaks | **Accepted** | Week 1 | @security-owner | - |
| Dependency boundary | Dependency Cruiser | Dependency Cruiser | **Accepted** | Week 2 | @architect | - |

## Decision Mechanism
- **Accepted**: Decision made and applied.
- **Proposed**: Recommendation made, awaiting review or implementation proof.
- **Open**: Discussion ongoing, no clear favorite.
- **Research**: Actively investigating options.
