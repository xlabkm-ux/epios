Owner: @architect
Status: accepted

# Known Limitations: Epistemic OS v1.1 Alpha

## Product Scope
- **Workflows:** Only the `ADR Review` workflow is fully supported.
- **Templates:** Currently supports only the standard ADR template.
- **MCP Integration:** MCP apps are not in the critical path for this version.

## Technical Limitations
1. **Concurrency:** Concurrent editing of the same node by multiple users may lead to race conditions (idempotency is implemented but UI merging is basic).
2. **Persistence:** Soft-deleted records remain in the database; full hard-delete/GDPR compliance is manually handled.
3. **Identity:** Identity is simulation-based for the demo; there is no real SSO/OIDC integration yet.
4. **Async Performance:** Mapping simulation delay is fixed at 2 seconds for demo purposes.
5. **Search:** Global search across workspaces is currently limited to titles.

## UI/UX
- **Mobile:** The Demo Shell is optimized for desktop (1920x1080).
- **Undo:** There is no global "Undo" action; corrections must be made via new patches or rating corrections.
- **Accessibility:** Basic keyboard navigation is supported, but full screen-reader compliance is pending.

## Security
- **Redaction:** Automatic redaction is pattern-based (e.g., keys, tokens); manual review is still required for sensitive content.
- **Audit:** The trace is immutable in the database but the UI view is a summary, not a cryptographic proof.

