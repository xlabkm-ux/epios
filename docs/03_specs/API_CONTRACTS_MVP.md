Owner: @architect
Status: accepted

# API CONTRACTS: MVP v1.0

This document defines the authoritative HTTP/BFF API surface for Epistemic OS v1.0.

## 1. Protocol Standards
- **Versioned API**: `/api/v1`
- **Format**: JSON only.
- **Idempotency**: `X-Idempotency-Key` (UUID v4) required for all state-changing requests.
- **Traceability**: `X-Trace-ID` and `X-Actor-ID` headers recommended.

## 2. Resource Schemas (Zod-ready)

### MissionReadModel
```typescript
{
  id: string (uuid),
  title: string,
  brief: {
    goal: string,
    successCriteria: string[],
    constraints: string[],
    unknowns: string[]
  },
  status: "draft" | "running" | "completed" | "archived",
  version: number,
  createdAt: string (iso8601),
  updatedAt: string (iso8601)
}
```

## 3. Endpoints

### 3.1. Mission Lifecycle

| Method | Path | Request Schema | Response | Trace Event |
|--------|------|----------------|----------|-------------|
| `POST` | `/missions` | `{ title: string, context?: string }` | `201: MissionReadModel` | `mission.created` |
| `GET` | `/missions/:id` | `n/a` | `200: MissionReadModel` | `n/a` |
| `PATCH` | `/missions/:id/brief` | `{ briefPatch: string }` | `200: OK` | `mission.brief.updated` |

### 3.2. Epistemic Actions

| Method | Path | Request Schema | Response | Trace Event |
|--------|------|----------------|----------|-------------|
| `POST` | `/missions/:id/sources` | `{ sourceType: "text" | "url", content: string }` | `202: Accepted` | `source.ingested` |
| `POST` | `/missions/:id/runs` | `{ runType: "mapping" | "refinement" }` | `202: Accepted { runId: string }` | `run.started` |

### 3.3. Governance

| Method | Path | Request Schema | Response | Trace Event |
|--------|------|----------------|----------|-------------|
| `POST` | `/approvals/:id/resolve` | `{ decision: "approved" | "rejected", comment?: string }` | `200: OK` | `approval.resolved` |
| `POST` | `/artifact-patches/:id/apply` | `n/a` | `200: OK` | `artifact.patch.applied` |

## 4. Error Mapping

| Domain Code | HTTP Status | Description |
|-------------|-------------|-------------|
| `VALIDATION_ERROR` | `400 Bad Request` | Malformed JSON or schema violation. |
| `FORBIDDEN` | `403 Forbidden` | Insufficient permissions for the actor. |
| `NOT_FOUND` | `404 Not Found` | Resource does not exist. |
| `CONCURRENCY_ERROR` | `409 Conflict` | Version mismatch detected (Optimistic Concurrency). |
| `INTERNAL_ERROR` | `500 Server Error` | Unexpected failure. |
