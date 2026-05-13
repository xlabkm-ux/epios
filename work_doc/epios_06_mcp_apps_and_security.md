# EPIOS-06 — MCP Apps and Security

**Project:** Epistemic OS v1.0  
**Document ID:** `EPIOS-06-MCP-APPS-SECURITY`  
**Version:** Draft 0.1  
**Status:** Accepted for MVP Bootstrap  
**Depends on:** `EPIOS-00`, `EPIOS-01`, `EPIOS-02`, `EPIOS-03`, `EPIOS-04`, `EPIOS-05`  
**MVP Requirement:** MCP Apps are included in MVP v1.0  
**Deployment target:** Internal dev only  

---

## 1. Purpose of This Document

This document defines the MCP Apps architecture and security model for **Epistemic OS v1.0 MVP**.

It specifies:

- MCP App role in the system;
- MCPAppRegistry;
- app manifests;
- `ui://` resources;
- host renderer;
- bridge protocol;
- schema/origin/nonce/timestamp validation;
- capability grants;
- backend command routing;
- MVP Apps: ClaimApp, EvidenceViewer, ApprovalApp;
- optional Apps: ConflictApp, ArtifactPatchPreviewApp, TraceViewer;
- audit events;
- MCP security tests.

This document treats MCP Apps as untrusted interactive UI surfaces. They improve UX but do not own business rules.

---

## 2. Core Security Position

MCP Apps are part of the MVP, but they are not trusted domain actors.

Primary rule:

```text
MCP Apps render state and request actions.
They never directly mutate domain state.
```

All write-capable app actions must pass through:

```text
MCP App UI
→ typed bridge message
→ host validation
→ API/BFF command
→ application use case
→ policy check
→ domain validation
→ transaction
→ audit/trace event
→ response/read model update
```

The iframe/app is never the authority for:

- approval status;
- artifact patch application;
- claim strength;
- evidence validity;
- policy decisions;
- tool/action execution;
- identity or permissions.

---

## 3. Trust Boundaries

### 3.1. Trusted Components

| Component | Trust Level | Responsibility |
|---|---|---|
| Domain Kernel | trusted | invariants and epistemic rules |
| Application Services | trusted | use cases, policy orchestration, transactions |
| API/BFF | trusted boundary | validation and command routing |
| PostgreSQL | trusted storage | system of record |
| MCP App Host | trusted boundary | iframe rendering and bridge validation |

### 3.2. Untrusted / Less Trusted Components

| Component | Trust Level | Reason |
|---|---|---|
| MCP App iframe | untrusted UI | can be compromised or buggy |
| App JavaScript bundle | untrusted until validated | may contain unsafe code |
| postMessage payload | untrusted input | can be spoofed/replayed |
| Tool output | untrusted input | prompt/tool injection risk |
| External source content | untrusted input | citation/prompt injection risk |

---

## 4. MVP MCP Apps

### 4.1. Required MVP Apps

```text
ClaimApp
EvidenceViewer
ApprovalApp
```

### 4.2. Optional MVP Stretch Apps

```text
ConflictApp
ArtifactPatchPreviewApp
TraceViewer
```

### 4.3. App Responsibility Matrix

| App | MVP Status | Allowed Actions | Must Not Do |
|---|---|---|---|
| ClaimApp | Required | inspect node, request source, request downgrade command | directly change node strength |
| EvidenceViewer | Required | inspect source/chunk/evidence status | mark citation valid without backend |
| ApprovalApp | Required | submit approve/reject/edit request command | execute action or apply patch directly |
| ConflictApp | Optional | submit decision command | silently decide for user |
| ArtifactPatchPreviewApp | Optional | preview patch, request approval | apply patch directly |
| TraceViewer | Optional | inspect trace events | expose secrets or raw hidden prompts |

---

## 5. MCPAppRegistry

### 5.1. Responsibility

`MCPAppRegistry` stores app definitions, capabilities and UI resource metadata.

It owns:

- app IDs;
- manifest registration;
- allowed origins;
- allowed message types;
- required capabilities;
- app version;
- CSP/sandbox settings;
- enabled/disabled status.

It does not own:

- domain state;
- policy decisions;
- approval resolution;
- artifact mutation.

### 5.2. Registry Interface

```ts
interface MCPAppRegistry {
  register(manifest: MCPAppManifest): Promise<void>;
  getApp(appId: string): Promise<MCPAppManifest | null>;
  listEnabledApps(context: AppListContext): Promise<MCPAppManifest[]>;
  isCapabilityAllowed(input: CapabilityCheckInput): Promise<boolean>;
}
```

### 5.3. App Manifest

```ts
type MCPAppManifest = {
  appId: string;
  name: string;
  version: string;
  description?: string;

  uiResource: UiResource;
  allowedOrigins: string[];
  capabilities: AppCapability[];
  allowedMessageTypes: MCPBridgeMessageType[];

  csp: CSPConfig;
  sandbox: IframeSandboxConfig;

  status: 'enabled' | 'disabled' | 'experimental';
  createdAt: string;
  updatedAt: string;
};
```

### 5.4. UI Resource

```ts
type UiResource = {
  uri: `ui://${string}`;
  framework: 'react' | 'vanilla' | 'vue' | 'svelte' | 'other';
  entrypoint: string;
  integrityHash?: string;
};
```

---

## 6. App Capabilities

### 6.1. Capability Model

Capabilities are explicit permissions granted to an app.

```ts
type AppCapability = {
  capabilityId: string;
  appId: string;
  type:
    | 'read.node'
    | 'read.evidence'
    | 'read.artifact_patch'
    | 'read.trace'
    | 'request.node_downgrade'
    | 'request.source'
    | 'request.approval_resolution'
    | 'request.decision_record'
    | 'request.patch_apply';
  scope: {
    missionScoped: boolean;
    subjectTypes: string[];
  };
  riskClass: 'low' | 'medium' | 'high' | 'critical';
};
```

### 6.2. MVP Capability Grants

ClaimApp:

```text
read.node
read.evidence
request.node_downgrade
request.source
```

EvidenceViewer:

```text
read.evidence
read.node
```

ApprovalApp:

```text
read.artifact_patch
request.approval_resolution
```

ConflictApp optional:

```text
read.node
read.evidence
request.decision_record
```

ArtifactPatchPreviewApp optional:

```text
read.artifact_patch
read.node
read.evidence
request.patch_apply
```

---

## 7. Iframe Sandbox and CSP

### 7.1. Principle

The iframe must have the minimum privileges required to render the app.

Default sandbox:

```text
sandbox="allow-scripts"
```

Avoid by default:

```text
allow-same-origin
allow-forms
allow-popups
allow-top-navigation
allow-downloads
```

Exceptions require ADR or security review.

### 7.2. CSP Baseline

```ts
type CSPConfig = {
  defaultSrc: string[];
  scriptSrc: string[];
  styleSrc: string[];
  imgSrc: string[];
  connectSrc: string[];
  frameAncestors: string[];
};
```

Recommended MVP CSP:

```text
default-src 'none';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
connect-src 'none';
frame-ancestors 'self';
```

If app needs API access, it still must not call backend directly unless explicitly approved. Preferred communication is through the host bridge.

### 7.3. No Secrets in Iframe

The iframe must never receive:

- provider API keys;
- session tokens;
- database credentials;
- internal service tokens;
- raw unredacted sensitive documents unless explicitly needed and approved;
- hidden prompts or system instructions.

---

## 8. Bridge Protocol

### 8.1. Message Shape

```ts
type MCPBridgeMessage = {
  schemaVersion: 'v1';
  messageId: string;
  correlationId: string;
  nonce: string;
  timestamp: string;
  appId: string;
  capabilityId?: string;
  missionId?: string;
  subjectRef?: string;
  type: MCPBridgeMessageType;
  payload: unknown;
};

type MCPBridgeMessageType =
  | 'app.ready'
  | 'host.state'
  | 'host.error'
  | 'node.downgrade.requested'
  | 'source.requested'
  | 'approval.resolve.requested'
  | 'decision.record.requested'
  | 'patch.apply.requested';
```

### 8.2. Host-to-App State Message

```ts
type HostStateMessage = MCPBridgeMessage & {
  type: 'host.state';
  payload: {
    appStateVersion: number;
    subject: unknown;
    capabilities: AppCapability[];
    readOnly: boolean;
  };
};
```

### 8.3. App-to-Host Command Message

```ts
type AppCommandMessage = MCPBridgeMessage & {
  type:
    | 'node.downgrade.requested'
    | 'source.requested'
    | 'approval.resolve.requested'
    | 'decision.record.requested'
    | 'patch.apply.requested';
  capabilityId: string;
  payload: unknown;
};
```

---

## 9. Bridge Validation Pipeline

Every app-originated message goes through this pipeline:

```text
1. Parse message.
2. Validate JSON schema.
3. Validate schemaVersion.
4. Validate origin.
5. Validate appId is registered and enabled.
6. Validate timestamp window.
7. Validate nonce not used before.
8. Validate capabilityId.
9. Validate message type is allowed for capability.
10. Validate mission/subject scope.
11. Apply policy check for write-capable command.
12. Convert to typed backend command.
13. Emit audit/trace event.
14. Return accepted/rejected response.
```

### 9.1. Origin Validation

The host must reject messages from unregistered origins.

For internal dev, allowed origins may include local dev origins, but they must still be explicit.

Example:

```text
http://localhost:5173
http://localhost:3000
```

No wildcard origins.

### 9.2. Timestamp Validation

Recommended MVP window:

```text
± 2 minutes
```

Messages outside the window are rejected.

### 9.3. Nonce Replay Protection

Store consumed nonces at least for the timestamp window.

MVP implementation may use PostgreSQL table or in-memory store for internal dev, but security tests must prove replay rejection.

Recommended table:

```sql
CREATE TABLE mcp_bridge_nonces (
  nonce TEXT PRIMARY KEY,
  app_id TEXT NOT NULL,
  message_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL
);
```

If not added in EPIOS-05, include it in the MCP migration.

---

## 10. Backend Command Mapping

### 10.1. ClaimApp Commands

#### Request Node Downgrade

Message:

```ts
type NodeDowngradeRequested = AppCommandMessage & {
  type: 'node.downgrade.requested';
  payload: {
    nodeId: string;
    requestedStrength: 'moderate' | 'weak' | 'hypothesis_only' | 'question_only';
    reason: string;
  };
};
```

Backend command:

```ts
type RequestNodeDowngradeCommand = {
  missionId: string;
  nodeId: string;
  requestedStrength: string;
  reason: string;
  actor: ActorRef;
  correlationId: string;
};
```

Policy:

```text
Allowed for MVP as request, not direct mutation.
Application service validates and records DecisionRecord or node update.
```

### 10.2. EvidenceViewer Commands

EvidenceViewer is read-only in MVP.

Allowed message:

```text
source.requested
```

Backend may return more source detail if actor has access.

No evidence validity mutation from app in MVP.

### 10.3. ApprovalApp Commands

#### Resolve Approval

```ts
type ApprovalResolveRequested = AppCommandMessage & {
  type: 'approval.resolve.requested';
  payload: {
    approvalId: string;
    resolution: 'approve' | 'reject' | 'edit_then_approve';
    reason?: string;
    editedPayload?: unknown;
    idempotencyKey: string;
  };
};
```

Backend command:

```ts
type ResolveApprovalCommand = {
  approvalId: string;
  resolution: 'approve' | 'reject' | 'edit_then_approve';
  reason?: string;
  editedPayload?: unknown;
  actor: ActorRef;
  idempotencyKey: string;
  correlationId: string;
};
```

Policy:

```text
ApprovalApp can resolve ApprovalRequest only through backend command.
Patch/action execution remains separate application use case.
```

### 10.4. Patch Apply Command

`patch.apply.requested` is optional/stretch.

If enabled:

- requires `request.patch_apply` capability;
- requires policy evaluation;
- requires idempotency key;
- requires approval already approved or low-risk policy allow;
- emits audit event.

---

## 11. App-Specific Specs

## 11.1. ClaimApp

### Purpose

Inspect an EpistemicNode and expose its strength, status, evidence and boundary.

### MVP View

```text
Claim / Node text
Node type
Reality level
Strength
Status
Temporal scope
Evidence count
Boundary notes
Actions:
  Request source
  Request downgrade
```

### Inputs

```ts
type ClaimAppState = {
  node: EpistemicNodeDTO;
  evidence: EvidenceSummaryDTO[];
  boundaries: DomainBoundaryDTO[];
  capabilities: AppCapability[];
};
```

### Actions

```text
source.requested
node.downgrade.requested
```

### Not Allowed

```text
direct node mutation
strength upgrade
status validation
edge creation
```

---

## 11.2. EvidenceViewer

### Purpose

Inspect evidence and source material linked to a node or patch.

### MVP View

```text
Source title
Source type
Source quality
Freshness
Citation status
Quote/chunk preview
Boundary note
Linked nodes
```

### Inputs

```ts
type EvidenceViewerState = {
  evidence: EvidenceRefDTO;
  source: SourceDTO;
  chunk?: SourceChunkDTO;
  linkedNodes: EpistemicNodeSummaryDTO[];
};
```

### Actions

MVP read-only.

Optional:

```text
source.requested
```

### Not Allowed

```text
mark evidence valid
change source quality
edit quote span
create node
```

---

## 11.3. ApprovalApp

### Purpose

Allow the user to approve, reject or edit-before-approve a pending ApprovalRequest.

### MVP View

```text
Approval title
What will happen
Risk class
Data leaving system
Rollback note
Approve
Reject
Edit then approve
```

### Inputs

```ts
type ApprovalAppState = {
  approval: ApprovalRequestDTO;
  subjectPreview: unknown;
  capabilities: AppCapability[];
};
```

### Actions

```text
approval.resolve.requested
```

### Not Allowed

```text
execute tool
apply patch directly
change approval risk class
change approval subject silently
```

---

## 11.4. ConflictApp Optional

### Purpose

Show high-value decision fork and submit selected option.

### Actions

```text
decision.record.requested
```

### Not Allowed

```text
select default without user action
hide consequences
resolve high/critical conflict silently
```

---

## 11.5. ArtifactPatchPreviewApp Optional

### Purpose

Preview artifact patch and supporting nodes/evidence.

### MVP Stretch Actions

```text
patch.apply.requested
```

Only allowed after policy and approval gates.

---

## 12. Audit and Trace Events

### 12.1. Required Events

```text
mcp.app.rendered
mcp.message.received
mcp.message.rejected
mcp.message.accepted
mcp.capability.denied
mcp.command.submitted
mcp.command.completed
mcp.command.failed
approval.resolve.requested
approval.resolved
```

### 12.2. Event Fields

```ts
type MCPAuditEvent = {
  eventType: string;
  appId: string;
  messageId?: string;
  correlationId: string;
  missionId?: string;
  subjectRef?: string;
  actor?: ActorRef;
  reason?: string;
  createdAt: string;
};
```

Do not log full sensitive payloads unless redacted.

---

## 13. Data Model Additions

EPIOS-05 already defines core tables. MCP security requires one additional table unless implemented through existing idempotency/nonce storage.

### 13.1. `mcp_bridge_nonces`

```sql
CREATE TABLE mcp_bridge_nonces (
  nonce TEXT PRIMARY KEY,
  app_id TEXT NOT NULL,
  message_id TEXT NOT NULL,
  correlation_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL
);
```

Indexes:

```sql
CREATE INDEX idx_mcp_bridge_nonces_expires_at ON mcp_bridge_nonces(expires_at);
```

Cleanup:

```text
Delete expired nonces periodically.
For MVP, cleanup can run at process startup or as dev-worker task.
```

### 13.2. Optional `mcp_app_manifests`

For MVP, manifests may be static config. If database-backed manifests are desired:

```sql
CREATE TABLE mcp_app_manifests (
  app_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  version TEXT NOT NULL,
  manifest JSONB NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Recommendation:

```text
Use static typed manifests in MVP.
Persist only bridge nonces and audit/trace events.
```

---

## 14. Security Test Matrix

### 14.1. P0 Tests

| Test | Expected Result |
|---|---|
| Invalid JSON message | rejected |
| Unsupported schemaVersion | rejected |
| Unknown appId | rejected |
| Disabled appId | rejected |
| Invalid origin | rejected |
| Missing nonce | rejected |
| Reused nonce | rejected |
| Timestamp outside window | rejected |
| Missing capability for command | rejected |
| Message type not allowed by capability | rejected |
| Mission scope mismatch | rejected |
| Approval resolve without idempotencyKey | rejected |
| Approval resolve repeated with different result | idempotency conflict |
| Patch apply direct from iframe without backend policy | impossible/rejected |
| Rejected message emits audit event | audit exists |

### 14.2. P1 Tests

| Test | Expected Result |
|---|---|
| ClaimApp source request accepted with capability | backend command submitted |
| ClaimApp downgrade request accepted as request only | no direct mutation |
| EvidenceViewer cannot mutate evidence status | rejected |
| ApprovalApp approve creates DecisionRecord | decision linked |
| ApprovalApp reject creates DecisionRecord | decision linked |
| CSP config present for every manifest | pass |
| Sandbox config present for every manifest | pass |
| Trace does not include raw secret-like value | redacted/rejected |

---

## 15. Runtime Failure Handling

### 15.1. Message Rejection

Rejected message response:

```ts
type MCPBridgeError = {
  type: 'host.error';
  correlationId: string;
  payload: {
    code:
      | 'INVALID_SCHEMA'
      | 'INVALID_ORIGIN'
      | 'NONCE_REPLAYED'
      | 'TIMESTAMP_INVALID'
      | 'CAPABILITY_DENIED'
      | 'POLICY_DENIED'
      | 'INTERNAL_ERROR';
    message: string;
    retryable: boolean;
  };
};
```

### 15.2. App Load Failure

If app fails to load:

```text
- render fallback card;
- show non-technical error;
- emit mcp.app.load_failed;
- do not block mission read-only view;
- do block write actions that require the app.
```

### 15.3. Command Failure

If backend command fails:

```text
- return host.error;
- keep app state unchanged;
- show retry only if error.retryable;
- emit trace event;
- do not partially mutate domain state.
```

---

## 16. MVP Implementation Order

### Step 1 — Static Manifest Registry

```text
Define MCPAppManifest type.
Register ClaimApp, EvidenceViewer, ApprovalApp statically.
```

### Step 2 — Bridge Validator

```text
Implement schema validation.
Implement origin validation.
Implement nonce store.
Implement capability check.
```

### Step 3 — Host Renderer

```text
Render iframe/app container.
Send host.state.
Receive command messages.
Handle errors.
```

### Step 4 — ClaimApp

```text
Read node state.
Render evidence summary.
Request source/downgrade command.
```

### Step 5 — EvidenceViewer

```text
Render evidence/source/chunk.
Read-only MVP.
```

### Step 6 — ApprovalApp

```text
Render approval preview.
Submit approve/reject/edit command.
```

### Step 7 — Security Tests

```text
Implement P0 security test matrix.
Add to CI gate.
```

---

## 17. MVP Non-Goals

MCP MVP does not include:

- external third-party app marketplace;
- arbitrary remote app installation;
- user-installed app permissions UI;
- production browser isolation hardening;
- full signed app bundle verification;
- plugin billing;
- app store review workflow;
- complex cross-app communication;
- app-to-app messaging;
- unrestricted backend API access from iframe.

---

## 18. Architecture Anti-Patterns

### 18.1. App Applies Patch Directly

Bad:

```text
ArtifactPatchPreviewApp sends applyPatch; API updates artifact immediately.
```

Correct:

```text
App sends patch.apply.requested;
host validates;
backend checks capability, policy, approval and idempotency;
application service applies patch transactionally.
```

### 18.2. App Determines Claim Validity

Bad:

```text
ClaimApp marks claim as source_supported.
```

Correct:

```text
ClaimApp requests validation or source inspection.
Evidence/domain use case updates status.
```

### 18.3. Wildcard Origins

Bad:

```text
allowedOrigins = ['*']
```

Correct:

```text
allowedOrigins = explicit dev/app origins only.
```

### 18.4. Secrets in App State

Bad:

```text
host.state includes provider API key or internal token.
```

Correct:

```text
host.state includes only redacted, subject-scoped data.
```

---

## 19. Approval Checklist

This document is approved when the project owner confirms:

- MCP Apps as untrusted UI surfaces is accepted;
- required MVP apps are correct;
- optional apps are correctly scoped;
- MCPAppRegistry model is acceptable;
- capability model is acceptable;
- iframe sandbox/CSP baseline is acceptable;
- bridge protocol is acceptable;
- validation pipeline is acceptable;
- app-specific specs are acceptable;
- nonce table addition is acceptable;
- security tests are acceptable;
- MVP non-goals are acceptable.

---

## 20. Next Document After Approval

After this document is approved, create:

```text
EPIOS-07 — Runtime, Observability and Release Gates
```

That document should define:

- DurableRuntimePort;
- lightweight MVP runner;
- Temporal-ready adapter boundary;
- MissionRun execution model;
- idempotency;
- activity snapshots;
- trace taxonomy;
- observability events;
- semantic/evidence evals;
- MVP release gates;
- operational runbooks.

