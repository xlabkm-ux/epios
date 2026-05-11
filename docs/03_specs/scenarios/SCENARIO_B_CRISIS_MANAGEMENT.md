# Demo Scenario B: Crisis Management - "Cyber-Physical Event Response"

## Overview
This scenario showcases the use of Epistemic OS in a high-pressure crisis situation, where identifying critical dependencies and resolving conflicting information is vital.

## Actors
- **Emergency Controller**: Decision Maker (Human)
- **Sensor Network Agent**: Real-time Data Feed (AI Agent)
- **Logistics Specialist**: Resource Manager (Human)

## Steps

### 1. Alert Trigger
A simulated sensor network detects a drop in water pressure across multiple districts.
- **Action**: Sensor Agent adds a node "Sudden Water Pressure Drop - Sector 7".
- **Status**: Urgent / High Confidence.

### 2. Dependency Mapping
The Emergency Controller uses the graph to find connected infrastructure.
- **Action**: Controller explores nodes connected to Sector 7.
- **Discovery**: Finds "Main Pump Station" and "Emergency Backup Power".

### 3. Conflicting Evidence
Two reports come in: one suggesting a pipe burst, another suggesting a cyber-attack on the control system.
- **Action**: Specialist adds "Potential Pipe Burst (Visual Confirmation)".
- **Action**: Sensor Agent adds "Abnormal SCADA Command Sequence Detected".
- **Outcome**: The graph shows two competing explanations for the pressure drop.

### 4. Resolution
The Controller analyzes the SCADA logs linked as evidence.
- **Action**: Controller marks "Potential Pipe Burst" as "Disproven" and "Cyber-Attack" as "Confirmed".
- **Action**: Controller initiates "SCADA Isolation Protocol".

### 5. Impact Mitigation
The graph automatically highlights that isolating SCADA will affect "Sector 8 Hospital".
- **Action**: Logistics Specialist is alerted to dispatch backup water tankers to the hospital immediately.

## Key Features Demonstrated
- Real-time data injection.
- Identifying critical infrastructure dependencies.
- Handling and resolving conflicting evidence.
- Proactive impact analysis.
