Owner: @architect
Status: Accepted_contract

# DATA RETENTION AND REDACTION POLICY: MVP v1.0

This document defines the security hygiene for data storage during the Epistemic OS MVP phase.

## 1. Redaction Rules (P0)

The following data must NEVER be stored in the system of record (PostgreSQL, Logs, Traces):

| Data Type | Action | Mechanism |
|-----------|--------|-----------|
| **Secrets** | Redact | API keys, tokens, and passwords must be replaced with `[REDACTED]`. |
| **Session IDs**| Hash | Browser session IDs should only be stored as salted hashes. |
| **Raw Prompts**| Controlled| Only stored in `infrastructure-models` traces for debugging, never in domain trace. |
| **Raw Responses**| Controlled| Only stored in `infrastructure-models` traces for debugging. |

## 2. Retention Policy (MVP)

| Data Category | Retention Period | Rationale |
|---------------|------------------|-----------|
| **Mission State**| Indefinite | Required for living artifact history. |
| **Trace Events** | 30 Days | Required for debugging and audit. |
| **Logs** | 7 Days | Local development debugging only. |
| **Audit Events** | Indefinite | Security requirement for action tracking. |

## 3. Secret Leakage Prevention
- **Local Dev**: Use `.env.example` as a template; never commit `.env`.
- **CI**: Use Gitleaks or similar tool to scan for secrets in every PR.
- **MCP**: Ensure iframes do not have access to host environment variables.

## 4. Privacy Boundary
MVP data is assumed to be technical and non-PII. If PII is ingested as source material, it is the user's responsibility during the MVP phase to ensure compliance. Future versions will include automated PII detection and redaction.

