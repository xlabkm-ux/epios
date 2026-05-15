# GitHub Issues Backlog (P0/P1)

This document contains the source content for GitHub Issues to be created in the repository.

**Status:** accepted
**Owner:** @architect


## Milestone: v0.1.0-rc.1 Stabilization

### Issue: [P0] Implement test:security gate
**Label:** `area:security`, `type:automation`, `P0`
**Description:** Replace `echo` placeholder in `package.json` with a real security audit and secret scanning tool.
**Tasks:**
- [x] Create `tools/security/run-security-tests.ts`
- [x] Integrate `pnpm audit`
- [x] Implement regex-based secret scanning

### Issue: [P0] Cleanup Release Truth & Roadmap Drift ✅ 2026-05-15
**Label:** `area:docs`, `type:cleanup`, `P0`
**Description:** Ensure README, package.json, and documentation registers are synchronized regarding the current version and roadmap.
**Tasks:**
- [x] Align README scenarios with foundational scope.
- [x] Split EPIOS-03 into v1.0 scope and v1.1 roadmap.
- [x] Update DOCUMENT_REGISTER.md

## Milestone: v1.0 MVP Acceptance

### Issue: [P1] Harden API Contracts with Zod/Schemas
**Label:** `area:api`, `type:hardening`, `P1`
**Description:** Transition `API_CONTRACTS_MVP.md` from prose to structured schemas with clear error mapping.
**Tasks:**
- [x] Define Request/Response schemas in markdown.
- [x] Add Error Code to HTTP Status mapping.

### Issue: [P1] Implement Docs Governance CI
**Label:** `area:governance`, `type:automation`, `P1`
**Description:** Add a CI check to ensure all documents have owners and statuses consistent with the register.
**Tasks:**
- [x] Create `check-docs.ts`
- [x] Add to `pnpm verify`
