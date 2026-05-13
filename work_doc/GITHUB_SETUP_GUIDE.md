# GitHub Setup Guide: Epistemic OS (epios)

This guide summarizes the labels, milestones, and issues defined in the project documentation for quick setup in GitHub.

## 1. Labels

**Types:**
- `type:feature` (Green)
- `type:bug` (Red)
- `type:docs` (Blue)
- `type:security` (Black)
- `type:architecture` (Purple)
- `type:spike` (Yellow)
- `type:test` (Grey)
- `type:infra` (Orange)
- `type:ux` (Pink)
- `type:release` (Dark Blue)

**Priorities:**
- `P0` (Critical)
- `P1` (High)
- `P2` (Medium)
- `P3` (Low)

**Areas:**
- `area:domain`
- `area:application`
- `area:postgres`
- `area:api`
- `area:demo-shell`
- `area:mcp`
- `area:runtime`
- `area:observability`

**Status:**
- `status:triage`
- `status:ready`
- `status:in-progress`
- `status:blocked`
- `status:review`
- `status:done`

## 2. Milestones (6 Week MVP)

- **W1: Foundation & Skeleton** (End of Week 1)
- **W2: Domain & Persistence** (End of Week 2)
- **W3: Use Cases & API** (End of Week 3)
- **W4: UI & Universal Mission Room** (End of Week 4)
- **W5: MCP Security & Bridge** (End of Week 5)
- **W6: MVP Release Candidate** (End of Week 6)

## 3. Initial Issues Backlog (from EPIOS-10)

1. Create public repository skeleton
2. Add license and open-source governance files
3. Add pnpm workspace and TypeScript baseline
4. Add package skeletons
5. Add Docker Compose PostgreSQL
6. Add initial database migration
7. Add domain package smoke test
8. Add API health endpoint
9. Add demo shell skeleton
10. Add CI baseline
11. Add EPIOS-00 through EPIOS-10 docs to repository
12. Add ADR-0001 through ADR-0010
13. Add document register
14. Add initial README quick start
15. Add known MVP non-goals to README
16. Add SECURITY.md
17. Add .env.example without secrets
18. Add basic secret scanning or documented manual check
19. Add MCP security placeholder issue for Week 5
20. Add PR template
21. Add issue labels
22. Add CODEOWNERS
23. Add contribution guide
24. Add weekly milestone tags plan

## 4. Week 2 Issues (from EPIOS-12)

25. Implement Mission Aggregate & Domain Invariants
26. Implement EpistemicNode & EvidenceRef
27. PostgreSQL Repository Implementation (Missions)
28. Database Migrations (Schema Update)
29. Integration Tests for Persistence
