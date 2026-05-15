Owner: @architect
Status: Accepted_contract

# ERROR CATALOG: Epistemic OS (epios)

This catalog defines the standardized errors used across the Epistemic OS kernel, application, and API layers.

| Error Code | Layer | HTTP Status | Retryable | Description |
|------------|-------|-------------|-----------|-------------|
| `VALIDATION_ERROR` | API/App | 400 | No | Input data failed schema or domain validation. |
| `NOT_FOUND` | App | 404 | No | Requested resource (Mission, Node, etc.) does not exist. |
| `CONFLICT` | Domain | 409 | No | Operation violates a domain invariant or state transition. |
| `POLICY_DENIED` | App | 403 | No | Action blocked by security or project policy. |
| `APPROVAL_REQUIRED`| App | 403 | No | Action requires an explicit human approval. |
| `IDEMPOTENCY_CONFLICT`| Infra | 409 | No | Request with same idempotency key but different payload. |
| `MCP_MESSAGE_INVALID` | Infra | 400 | No | MCP bridge message failed schema or signature check. |
| `MCP_ORIGIN_DENIED` | Infra | 403 | No | MCP App origin is not in the allowed list. |
| `CITATION_INVALID` | Domain | 400 | No | Provided evidence citation format is incorrect. |
| `EVIDENCE_WEAK` | Domain | 200* | No | Claim strength reduced due to weak or stale evidence. |
| `RUNTIME_FAILED` | Infra | 500 | Yes | Durable runtime failed to execute or resume activity. |
| `MODEL_FAILED` | Infra | 502 | Yes | LLM provider returned error or timed out. |
| `INTERNAL_ERROR` | System | 500 | Yes | Unexpected system failure. |

## Error Shape (RFC-7807 compliant)
```json
{
  "type": "https://epistemic-os.org/errors/VALIDATION_ERROR",
  "title": "Invalid Mission Brief",
  "status": 400,
  "detail": "The mission brief must contain at least one primary objective.",
  "instance": "/missions/123/brief",
  "code": "VALIDATION_ERROR",
  "traceId": "trace-98765"
}
```

## Retry Policy
- **Yes**: Client should retry with exponential backoff.
- **No**: Client must fix the request or state before retrying.

