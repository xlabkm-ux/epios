# Demo Scenario D: Knowledge Synthesis - "Automated Research Brief"

## Overview
This scenario demonstrates the power of the "Synthesize" tool, which uses AI to distill a large, complex graph into a coherent narrative or actionable brief.

## Actors
- **Policy Analyst**: Information Consumer (Human)
- **Synthesis Engine**: MCP-based AI Agent

## Steps

### 1. Complex Graph Input
A mission graph exists with 50+ nodes covering the "Impact of AI on Tertiary Education".
- **State**: The graph contains conflicting studies, numerous technical nodes, and various stakeholder opinions.

### 2. Requesting a Synthesis
The Policy Analyst needs a 3-point summary for a briefing.
- **Action**: Analyst triggers the `synthesize_graph` tool with the parameter `format: briefing_note`.

### 3. Graph Traversal
The Synthesis Engine traverses the graph, prioritizing:
- Nodes with high confidence/approval.
- Nodes that act as central hubs (many connections).
- Critical "Hinder" or "Enable" relationships.

### 4. Brief Generation
The Engine produces a markdown report.
- **Outcome**: The report highlights:
    1. **Primary Driver**: Personalized learning paths (high consensus).
    2. **Major Risk**: Academic integrity and detection bypass (many "Hinder" links).
    3. **Critical Uncertainty**: Long-term cognitive impact (marked as "Low Confidence").

### 5. Deep Dive
The Analyst clicks a link in the report.
- **Action**: The Demo Shell focuses the graph view on the specific subgraph related to "Academic Integrity".
- **Outcome**: Seamless transition from abstract summary to raw evidence.

## Key Features Demonstrated
- High-level abstraction of complex data.
- Hub-and-spoke graph analysis.
- Narrative generation from structured data.
- Bi-directional linking between reports and the graph.
