Owner: @architect
Status: Accepted_concept

# APPLICATION USE CASE CONTRACTS

This document defines the application-layer use cases (interactors) that coordinate domain logic and infrastructure ports.

## 1. CreateMission
- **Responsibility**: Initialize a new mission with an empty brief and graph.
- **Input**: `CreateMissionCommand { title, context, actorId }`
- **Domain Dependencies**: `MissionAggregate`
- **Ports Used**: `MissionRepositoryPort`, `TracePort`
- **Transaction**: Yes
- **Events**: `mission.created`

## 2. UpdateMissionBrief
- **Responsibility**: Refine the mission's strategic intent.
- **Input**: `UpdateBriefCommand { missionId, briefPatch, actorId }`
- **Domain Dependencies**: `MissionBrief` (Value Object)
- **Ports Used**: `MissionRepositoryPort`, `TracePort`
- **Transaction**: Yes

## 3. RunEpistemicMapping
- **Responsibility**: Orchestrate model calls to extract nodes and evidence from sources.
- **Input**: `RunMappingCommand { missionId, sourceIds[], actorId }`
- **Ports Used**: `MissionRepositoryPort`, `ModelGatewayPort`, `TracePort`, `DurableRuntimePort`
- **Idempotency**: Handled by `DurableRuntime`
- **Events**: `run.started`, `run.completed`, `nodes.extracted`

## 4. ProposeArtifactPatch
- **Responsibility**: Create a pending patch for the living artifact based on current epistemic state.
- **Input**: `ProposePatchCommand { missionId, content, rationale, actorId }`
- **Domain Dependencies**: `LivingArtifact`, `ArtifactPatch`
- **Policy**: Check if approval is required for this area.
- **Ports Used**: `ArtifactRepositoryPort`, `ApprovalPort`, `TracePort`

## 5. ResolveApproval
- **Responsibility**: Finalize a human decision and trigger downstream actions (like applying a patch).
- **Input**: `ResolveApprovalCommand { approvalId, decision, comment, actorId, idempotencyKey }`
- **Domain Dependencies**: `ApprovalRequest`, `DecisionRecord`
- **Transaction**: Yes
- **Events**: `approval.resolved`, `decision.recorded`

## 6. ApplyArtifactPatch
- **Responsibility**: Execute an approved patch, creating a new version of the Living Artifact.
- **Input**: `ApplyPatchCommand { patchId, actorId, idempotencyKey }`
- **Domain Dependencies**: `LivingArtifact`, `ArtifactPatch`
- **Transaction**: Yes
- **Events**: `artifact.patch.applied`, `artifact.version.created`

## Use Case Template
Every use case implementation must follow this structure:
1. **Validate Command**: Check schema and basic constraints.
2. **Authorization/Policy**: Verify the actor has permission.
3. **Load Aggregate**: Retrieve the current state from the repository.
4. **Execute Domain Logic**: Invoke methods on the aggregate/entities.
5. **Persist Changes**: Save through the repository in a transaction.
6. **Emit Events**: Send events to the trace/outbox.

