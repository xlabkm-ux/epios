Owner: @architect
Status: accepted

# CURRENT STATE: ChatAVG v2.4

This document records the functional and technical state of ChatAVG at the point of stabilization (v2.4).

## 1. Functional State
- **Core Chat**: Stable prompt-response with model selection.
- **Model Gateway**: Support for OpenAI, Anthropic, and Gemini (via adapters).
- **Claim Ledger**: Initial implementation of structured claims in memory.
- **MCP Tools**: Basic support for external tool calls.
- **UI**: React-based dashboard with chat, knowledge, and history views.

## 2. Technical State
- **Architecture**: Orchestration-heavy monolith (ChatService).
- **Persistence**: Hybrid (Memory + Local Files + PostgreSQL fragments).
- **Deployment**: Local Docker Compose and manual PM2 on Windows.
- **Testing**: Manual smoke tests + limited unit coverage.

## 3. Stabilization Goals for v2.4
- Fix critical security leaks (secrets in logs).
- Ensure reproducibility of local setup.
- Document extraction paths for Epistemic OS.
- Close all non-essential RC development branches.

