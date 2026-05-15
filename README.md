# Epistemic OS (epios)

[![CI Status](https://img.shields.io/badge/CI-passing-success)](https://github.com/xlabkm-ux/epios/actions)
[![Version](https://img.shields.io/badge/version-0.1.0--rc.1-blue)](https://github.com/xlabkm-ux/epios/releases)
[![License](https://img.shields.io/badge/license-Apache--2.0-green)](LICENSE)

Epistemic Operating System (EPIOS) is an open-source operating layer designed for structured reasoning, evidence-backed knowledge artifacts, and safe AI-assisted actions.

## 🚀 MVP Release Candidate: v0.1.0-rc.1

We are proud to announce the first release candidate of the EPIOS MVP. This release establishes the foundational "Universal Mission Room" where humans and AI agents collaborate on complex knowledge graphs.

### Key Features
- **Neural Graph Workspace**: Interactive 2D canvas for mapping hypotheses, evidence, and claims.
- **Epistemic Governance**: Built-in approval workflows for integrating new knowledge into the mission state.
- **MCP Integration**: Secure bridge for Model Context Protocol (MCP) applications.
- **Hexagonal Architecture**: Clean separation between domain logic and infrastructure.

## 🗺️ Roadmap: Towards v0.2.0 (ADR Review Hardening)
The current focus is on **ADR-0099 Architectural Hardening**. Details can be found in the [Master QA Plan](docs/04_delivery/v1_1_qa_plan/EPIOS_v1_1_Master_Sprint_QA_Plan.md).
Current status and task tracking is available via [GitHub Issues](https://github.com/xlabkm-ux/epios/issues).

## 🛠 Quick Start

### Prerequisites
- **Node.js**: v22 LTS
- **pnpm**: `npm install -g pnpm` (v9.12.3 recommended)
- **Docker**: For running the PostgreSQL database

### 1. Clone & Install
```bash
git clone https://github.com/xlabkm-ux/epios.git
cd epios
pnpm install
```

### 2. Infrastructure
EPIOS supports both containerized and bare-metal environments. 
- **Docker Compose**: Used for infrastructure dependencies (PostgreSQL).
- **PM2 / Bare Metal**: Used for application process management (see `ecosystem.config.cjs`).

Start the PostgreSQL database:
```bash
docker-compose up -d
```

### 3. Run Development Environment
Launch the API and the Demo Shell simultaneously:
```bash
pnpm dev
```
The **Demo Shell** will be available at `http://localhost:5173`.
The **API** will be available at `http://localhost:3000`.

## 📖 Demo Scenarios

Explore the power of EPIOS through our documented use-case scenarios:
- [Scenario A: Architecture Document](docs/03_specs/scenarios/SCENARIO_A_ARCH_DOC.md)
- [Scenario B: Project Planning](docs/03_specs/scenarios/SCENARIO_B_PROJECT_PLANNING.md)
- [Scenario C: Research Review](docs/03_specs/scenarios/SCENARIO_C_RESEARCH_REVIEW.md)
- [Scenario D: Decision Support](docs/03_specs/scenarios/SCENARIO_D_DECISION_SUPPORT.md)

## 🏗 Architecture

EPIOS follows a layered hexagonal architecture. The monorepo structure strictly enforces these boundaries.

```mermaid
graph TD
    subgraph Apps [Interfaces Layer]
        Shell[demo-shell: React/Vite]
    end

    subgraph Packages [Core Layers]
        API[api: Fastify Adapter]
        App[application: Use Cases]
        Domain[domain: Epistemic Kernel]
        InfraP[infrastructure-postgres: Drizzle/PG]
        InfraM[infrastructure-mcp: Bridge]
    end

    Shell --> API
    API --> App
    App --> Domain
    InfraP -.-> |Implements Ports| App
    InfraM -.-> |Implements Ports| App
```

### Physical Directory Mapping
- **`apps/demo-shell`**: The primary "Mission Room" UI.
- **`packages/domain`**: Pure business logic, entities (`EpistemicNode`), and invariants.
- **`packages/application`**: Orchestration and use cases (e.g., `SubmitClaim`, `ApplyPatch`).
- **`packages/api`**: HTTP interface and DTO validation.
- **`packages/infrastructure-*`**: Concrete implementations of repository ports (Postgres, MCP).

For a deeper dive, see our [Architecture Foundation](docs/01_foundation/EPIOS-01-architecture-foundation.md).

## 🧠 Knowledge Ontology

EPIOS structures reasoning through a formal graph ontology. 

### Node Types
| Type | Description |
|---|---|
| **Claim** | A specific assertion that requires evidence and approval. |
| **Observation** | A neutral fact or data point from a source. |
| **Hypothesis** | A tentative explanation being tested. |
| **Risk** | A potential threat or limitation. |
| **Decision** | A finalized architectural or process choice. |

### Edge Types
- `supports` / `contradicts`: Links evidence or observations to claims.
- `refines`: Connects a more specific claim to a general one.
- `addresses`: Links a decision to a risk or question.

## 🛡 Security & Governance

EPIOS implements a strict **"Human-in-the-loop"** policy. AI agents can propose knowledge, but only humans can authorize its inclusion in the permanent record.

### Governance State Machine
Every `Claim` and `Patch` undergoes a formal lifecycle:

```mermaid
stateDiagram-v2
    [*] --> Pending: Propose (AI or Human)
    Pending --> Approved: Consensus (Human Vote)
    Pending --> Rejected: Veto (Human Vote)
    Approved --> Applied: Auto-apply (System)
    Rejected --> [*]
    Applied --> [*]
```

Every action is captured in a **Trace Summary**, ensuring full auditability of how a "Ready" state was reached.

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) and [Governance Plan](docs/00_project/GOVERNANCE_PLAN.md) for details.

## 📜 License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full text.
