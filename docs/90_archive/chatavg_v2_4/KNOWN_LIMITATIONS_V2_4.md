# KNOWN LIMITATIONS: ChatAVG v2.4

This document lists known architectural and functional limitations that will NOT be fixed in the legacy project but are addressed in the design of Epistemic OS.

## 1. Architectural Limitations
- **State Drift**: In-memory semantic state is not durably persisted, leading to data loss on restart.
- **Hidden Orchestration**: Business logic is tightly coupled with HTTP handlers and provider SDKs.
- **Untrusted Tool Execution**: MCP tools have direct access to system resources without a secure bridge.
- **Lack of Traceability**: Difficult to reconstruct why a specific claim was made or modified.

## 2. Functional Limitations
- **Mission Length**: Long-running missions often fail due to lack of durable execution.
- **Evidence Weakness**: Automated citations are often stale or disconnected from the source.
- **Approval Fatigue**: No granular policy for when human approval is required vs system-automated.

## 3. Operations
- **Secret Hygiene**: Risks of secrets leaking into logs if not manually scrubbed.
- **Migration Path**: No automated SQL migrations; schema changes are manual and risky.
