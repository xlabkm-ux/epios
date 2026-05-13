# Manual QA Script: ADR Review Happy Path

## Scenario
Reviewing an ADR for Event Sourcing and applying a narrowing patch.

## Setup
1. Run `pnpm db:reset` to ensure clean state.
2. Start the application with `pnpm dev`.
3. Open the Demo Shell (usually `http://localhost:5173`).

## Steps
1. **Login:** Ensure you are logged in as a `contributor` (e.g., username `reviewer`).
2. **Select Workspace:** Select "Scenario F: ADR Review - Event Sourcing".
3. **Source Intake:**
    - Verify the "Event Sourcing Draft" source is present.
    - Click "Rate Source". Rate as "Reliable".
4. **Mapping:**
    - Click "Run Epistemic Mapping".
    - Wait for async process to finish (observe progress bar).
    - Verify claims extraction (3 claims expected).
5. **Readiness Check:**
    - Open "Readiness Panel".
    - Observe the status is `needs_review`.
    - Read the explanation regarding over-engineering.
6. **Patching:**
    - Go to "Governance Panel".
    - Click "Propose Patch".
    - Enter content: "Adopt Append-Only Audit Trace instead of full ES".
    - Submit.
7. **Approval:**
    - Switch role to `admin` (if using dev actor selector).
    - Review the patch in Governance Panel.
    - Click "Approve and Apply".
8. **Finalization:**
    - Verify the workspace status is now `ready`.
    - Verify the "Final Artifact" tab shows the versioned ADR.
    - Inspect "Trace Summary" for the complete audit trail.

## Expected Result
User should reach the versioned ADR with a clear trace of why the decision changed from full Event Sourcing to Append-Only Trace.
