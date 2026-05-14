Owner: @architect
Status: accepted

# ADR-0026 — License Choice

## Status
Accepted

## Context
Epistemic OS is an open-source project. Before the public repository can be initialized, a clear license choice must be made to protect the project and clarify usage rights for contributors and users.

## Decision
We choose **Apache-2.0** as the primary license for Epistemic OS.

## Rationale
- **Permissive**: Allows wide usage, modification, and distribution.
- **Enterprise-friendly**: Well-understood by legal departments in large organizations.
- **Explicit Patent Grant**: Provides better protection for contributors and users regarding patent rights compared to MIT.
- **Industry Standard**: Widely used for infrastructure and platform projects (e.g., Kubernetes, TensorFlow).

## Consequences
- All source files should eventually include the Apache-2.0 header.
- A `LICENSE` file containing the full Apache-2.0 text must be present in the root directory.
- Third-party dependencies must be compatible with Apache-2.0.

## Alternatives Considered
- **MIT**: Simpler, but lacks explicit patent grant.
- **AGPL-3.0**: Too restrictive for an infrastructure platform that we want to be widely adopted by other tools.
- **MPL-2.0**: A good middle ground, but Apache-2.0 is more common in the TypeScript/Node ecosystem for this type of project.

## Impact
- Repository initialization: P0.
- Legal clarity: High.

