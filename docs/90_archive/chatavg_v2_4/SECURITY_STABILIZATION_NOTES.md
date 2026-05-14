Owner: @architect
Status: accepted

# SECURITY STABILIZATION NOTES: ChatAVG v2.4

This document covers immediate security fixes and hygiene required before freezing ChatAVG v2.4.

## 1. Secret Scrubbing
- **Action**: Audit all loggers to ensure `Authorization` and `X-API-Key` headers are never printed.
- **Action**: Check `.env` handling to ensure no secrets are accidentally committed to legacy repos.

## 2. MCP Bridge Hardening
- **Action**: Implement origin check for postMessage in the legacy UI.
- **Action**: Disable direct `eval()` or `child_process` execution paths from tool results.

## 3. Data Sanitization
- **Action**: Provide a script to purge private mission data from local storage before public repository mirrors are created.

## 4. Security Scope for v2.4
ChatAVG v2.4 is provided "as is" with only critical security patches. New security features (secure bridge, nonce protection) are implemented in the Epistemic OS project.

