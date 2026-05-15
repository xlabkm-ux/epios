Owner: @architect
Status: Accepted_concept

# APPLICATION USE CASE CONTRACTS

This document defines the application-layer use cases (interactors) that coordinate domain logic and infrastructure ports.

## 1. CreateMission

- **Responsibility**: Initialize a new mission with an empty brief and graph.
- **Command**: `CreateMissionCommand { title, context, actorId }`
- **Preconditions**: Actor must be authenticated. Title must be unique within workspace.
- **State transition**: `null -> Mission(id, status: draft, version: 1)`
- **Transaction**: Yes (Atomic mission + workspace creation)
- **Ports**: `MissionRepositoryPort`, `TracePort`
- **Idempotency**: Handled via `X-Idempotency-Key` at API level.
- **Errors**: `VALIDATION_ERROR`, `DUPLICATE_MISSION`
- **Trace events**: `mission.created`
- **Security**: Actor must have `create:mission` permission.
- **Acceptance tests**: `CreateMission.test.ts`

## 2. UpdateMissionBrief

- **Responsibility**: Refine the mission's strategic intent.
- **Command**: `UpdateBriefCommand { missionId, briefPatch, actorId }`
- **Preconditions**: Mission must exist. Status must be `draft` or `running`.
- **State transition**: `Mission.brief` updated, `Mission.version` incremented.
- **Transaction**: Yes
- **Ports**: `MissionRepositoryPort`, `TracePort`
- **Idempotency**: Yes
- **Errors**: `NOT_FOUND`, `CONCURRENCY_ERROR`, `INVALID_STATE`
- **Trace events**: `mission.brief.updated`
- **Security**: Actor must have `edit:brief` permission.
- **Acceptance tests**: `UpdateMissionBrief.test.ts`

## 3. RunEpistemicMapping

- **Responsibility**: Orchestrate model calls to extract nodes and evidence from sources.
- **Command**: `RunMappingCommand { missionId, sourceIds[], actorId }`
- **Preconditions**: Mission exists. Sources exist and are accessible.
- **State transition**: `null -> Run(id, status: started)`.
- **Transaction**: Yes (Save Run state)
- **Ports**: `MissionRepositoryPort`, `ModelGatewayPort`, `TracePort`, `DurableRuntimePort`
- **Idempotency**: Handled by `DurableRuntime` and idempotency key.
- **Errors**: `NOT_FOUND`, `MODEL_FAILURE`
- **Trace events**: `run.started`, `run.completed`, `nodes.extracted`
- **Security**: Actor must have `execute:run` permission.
- **Acceptance tests**: `RunEpistemicMapping.test.ts`

## 4. ApplyArtifactPatch

- **Responsibility**: Execute an approved patch, creating a new version of the Living Artifact.
- **Command**: `ApplyPatchCommand { patchId, actorId, idempotencyKey }`
- **Preconditions**: Patch must exist. Patch status must be `approved`. Artifact must exist.
- **State transition**: `Artifact.content` updated, `Patch.status -> applied`, `Artifact.version` incremented.
- **Transaction**: Yes (Atomic Patch update + Artifact update)
- **Ports**: `ArtifactRepositoryPort`, `ApprovalPort`, `TracePort`
- **Idempotency**: Handled via `X-Idempotency-Key`.
- **Errors**: `NOT_FOUND`, `INVALID_PATCH_STATE`, `CONCURRENCY_ERROR`
- **Trace events**: `artifact.patch.applied`, `artifact.version.created`
- **Security**: Actor must have `apply:patch` permission.
- **Acceptance tests**: `ApplyArtifactPatch.test.ts`

## Use Case Implementation Rules
Every use case implementation must follow this structure:
1. **Validate Command**: Check schema and basic constraints (Zod).
2. **Authorization/Policy**: Verify the actor has permission.
3. **Load Aggregate**: Retrieve the current state from the repository with locking if needed.
4. **Execute Domain Logic**: Invoke methods on the aggregate/entities (Invariants checked here).
5. **Persist Changes**: Save through the repository in a transaction (Unit of Work).
6. **Emit Events**: Send events to the trace/outbox.

