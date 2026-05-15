Owner: @architect
Status: Accepted_contract

# TRACE EVENT CATALOG

This catalog defines the events captured in the Epistemic OS mission trace for observability and audit.

## Event Groups

### Mission Events
| Event Type | Producer | Payload Highlights |
|------------|----------|--------------------|
| `mission.created` | App | title, context, ownerId |
| `mission.brief.updated` | App | briefDiff, rationale |
| `mission.archived` | App | reason |

### Epistemic Events
| Event Type | Producer | Payload Highlights |
|------------|----------|--------------------|
| `nodes.extracted` | Model | nodeId[], sourceId[] |
| `evidence.linked` | Domain | nodeId, sourceRef, strength |
| `conflict.detected` | Domain | nodeIds[], conflictType |
| `strength.downgraded` | Domain | nodeId, oldStrength, reason |

### Artifact & Approval Events
| Event Type | Producer | Payload Highlights |
|------------|----------|--------------------|
| `artifact.patch.proposed`| App | patchId, rationale |
| `approval.requested` | App | approvalId, area, urgency |
| `approval.resolved` | App | approvalId, decision, actorId |
| `artifact.patch.applied` | App | patchId, versionId |

### Infrastructure & Security Events
| Event Type | Producer | Payload Highlights |
|------------|----------|--------------------|
| `mcp.bridge.rejected` | Infra | appId, reason (e.g., invalid nonce) |
| `policy.check.denied` | App | policyId, actorId, action |
| `run.failed` | Runtime | runId, error, retryCount |

## Event Structure
```json
{
  "eventId": "uuid",
  "eventType": "nodes.extracted",
  "missionId": "uuid",
  "runId": "uuid",
  "actorId": "uuid",
  "timestamp": "iso-8601",
  "payload": { ... },
  "metadata": {
    "version": "1.0",
    "origin": "kernel-api"
  }
}
```

## Redaction Policy
Trace events stored in the system of record must be redacted for:
- Provider API keys.
- Raw session tokens.
- Personal Identifiable Information (PII) where not explicitly required by mission scope.

