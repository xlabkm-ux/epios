# Demo Scenario A: Collaborative Research - "The Great Energy Transition"

## Overview
This scenario demonstrates how multiple researchers can collaborate on mapping the complexities of the global transition to renewable energy. It highlights node creation, evidence linking, and real-time graph updates.

## Actors
- **Alice**: Lead Researcher (Human)
- **Bob**: Data Analyst (AI Agent via MCP)
- **Charlie**: Policy Expert (Human)

## Steps

### 1. Initialize the Mission
Alice creates a new mission titled "The Great Energy Transition 2026".
- **Action**: Alice uses the Demo Shell to create a mission.
- **Outcome**: A new empty graph is initialized.

### 2. Identify Core Components
Alice adds a central node: "Decarbonization of Power Grid".
- **Node Type**: Problem/Goal
- **Tags**: #energy #climate

### 3. Data Integration
Bob (AI Agent) scans recent reports and adds evidence-backed nodes.
- **Action**: Bob uses the `add_node` MCP tool to add "Solar PV Efficiency Breakthrough".
- **Evidence**: Links to a simulated scientific paper DOI.
- **Connection**: Bob adds an edge from "Solar PV Efficiency Breakthrough" to "Decarbonization of Power Grid" with the relation "enables".

### 4. Expert Review
Charlie reviews the graph and adds a challenge.
- **Action**: Charlie adds a node "Grid Stability & Intermittency".
- **Node Type**: Challenge/Risk.
- **Connection**: Charlie links it to "Decarbonization of Power Grid" with the relation "hinders".

### 5. Synthesis
Alice uses the "Summarize" feature (MCP tool) to generate a high-level view of the current state.
- **Action**: Alice triggers `synthesize_graph`.
- **Outcome**: A summary report is generated, highlighting that while solar efficiency is high, grid stability remains a critical blocker.

## Key Features Demonstrated
- Multi-user/agent graph building.
- Evidence-based node creation.
- Logical relationship mapping (enables/hinders).
- Automated synthesis of complex graphs.
