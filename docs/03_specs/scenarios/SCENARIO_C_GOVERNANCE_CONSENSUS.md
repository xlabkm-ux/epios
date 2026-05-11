# Demo Scenario C: Governance & Consensus - "Community Knowledge Standard"

## Overview
This scenario demonstrates the formal governance process in Epistemic OS: how a claim is submitted, debated, voted upon, and finally integrated into the "Canonical" knowledge graph.

## Actors
- **Contributor**: Proposer (Human)
- **Reviewer Alpha**: Governance Bot (AI Agent)
- **Reviewer Beta**: Community Member (Human)

## Steps

### 1. Submitting a Claim
A Contributor proposes a new factual node regarding a historical event.
- **Action**: Contributor uses `ClaimApp` to submit "The Treaty of Utrecht - Hidden Clauses".
- **Evidence**: Links to a newly digitized archive.
- **Initial State**: `Pending Approval`.

### 2. Automated Review
Reviewer Alpha (AI) performs a cross-reference check.
- **Action**: Reviewer Alpha uses MCP tools to search other sources.
- **Outcome**: Reviewer Alpha finds corroborating evidence and adds a `Supportive` vote.
- **Note**: Reviewer Alpha adds a comment: "Archive source verified; cross-referenced with Vatican Library metadata."

### 3. Community Debate
Reviewer Beta (Human) examines the evidence.
- **Action**: Reviewer Beta adds a node "Translation Ambiguity" linked to the claim.
- **Action**: Reviewer Beta adds a `Neutral` vote, requesting clarification on a specific paragraph.

### 4. Consensus Reached
The Contributor provides the requested clarification.
- **Action**: Contributor updates the evidence reference with a high-res scan and translation notes.
- **Action**: Reviewer Beta changes vote to `Approve`.

### 5. Integration
The system reaches the required approval threshold (e.g., 2/3 majority or specific roles).
- **Action**: The claim state changes to `Accepted`.
- **Outcome**: The node is now visually distinct in the graph (e.g., solid border instead of dashed) and is included in all downstream exports.

## Key Features Demonstrated
- Claim submission workflow.
- Automated and human voting.
- Evidence-based debate and clarification.
- State-driven graph visualization (Pending -> Accepted).
