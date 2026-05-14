Owner: @architect
Status: accepted

# API CONTRACTS: MVP v1.0

This document defines the primary HTTP/BFF API surface for the Epistemic OS Demo Shell.

## Base URL
`/api/v1`

## Mission Management

### POST /missions
**Purpose**: Create a new Epistemic Mission.
- **Request**: `{ "title": string, "context": string }`
- **Response**: `201 Created` with `MissionReadModel`
- **Trace Event**: `mission.created`

### GET /missions/:missionId
**Purpose**: Retrieve full mission state for the room.
- **Response**: `200 OK` with `MissionReadModel` (includes nodes, edges, artifacts)

### PATCH /missions/:missionId/brief
**Purpose**: Update the Mission Brief (strategic intent).
- **Request**: `{ "briefPatch": string }`
- **Response**: `200 OK`
- **Trace Event**: `mission.brief.updated`

## Epistemic Actions

### POST /missions/:missionId/sources
**Purpose**: Ingest new source material for evidence extraction.
- **Request**: `{ "sourceType": "text|url|file", "content": string }`
- **Response**: `202 Accepted`
- **Trace Event**: `source.ingested`

### POST /missions/:missionId/runs
**Purpose**: Trigger an epistemic mapping run (extraction/refinement).
- **Request**: `{ "runType": "mapping|refinement|conflict-check" }`
- **Response**: `202 Accepted` with `runId`
- **Trace Event**: `run.started`

### POST /missions/:missionId/artifact-patches
**Purpose**: Propose a change to the Living Artifact.
- **Request**: `{ "patchType": "content|structure", "diff": string, "rationale": string }`
- **Response**: `201 Created` with `patchId` (may require approval)
- **Trace Event**: `artifact.patch.proposed`

## Approvals and Decisions

### POST /approvals/:approvalId/resolve
**Purpose**: Resolve a pending approval request.
- **Request**: `{ "decision": "approved|rejected", "comment": string, "idempotencyKey": string }`
- **Response**: `200 OK`
- **Trace Event**: `approval.resolved`

### POST /artifact-patches/:patchId/apply
**Purpose**: Apply an approved patch to the artifact.
- **Request**: `{ "idempotencyKey": string }`
- **Response**: `200 OK`
- **Trace Event**: `artifact.patch.applied`

## Observability

### GET /missions/:missionId/trace
**Purpose**: Retrieve the event trace for the mission.
- **Response**: `200 OK` with `TraceEvent[]`

### GET /health
**Purpose**: System health check.
- **Response**: `200 OK { "status": "ok", "version": "1.0.0" }`

## Common Headers
- `X-Idempotency-Key`: Required for all POST/PATCH/DELETE actions.
- `X-Actor-ID`: Identity of the user/agent performing the action.

