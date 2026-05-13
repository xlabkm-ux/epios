# PROJECT BACKLOG: Epistemic OS (epios)

Этот файл является оперативным трекером задач и синхронизирован с основным роадмапом в `docs/04_delivery/v1_1_qa_plan/EPIOS_v1_1_Master_Sprint_QA_Plan.md`.

## 🎯 Текущая цель: EPIOS v1.1 — ADR Review Readiness MVP
**Horizon:** 16 sprints + pilot
**Focus:** Архитектурно-честный продукт для ревью и аппрува ADR.

---

## 🚀 План разработки v1.1

### S0: Governance + Shell Skeleton
- [x] Managed repo and visible product frame
- [x] ADR Review Workspace skeleton
- [x] CI, boundaries, shell smoke tests

### S1: Contracts + Clickable Flow
- [x] Frozen MVP contracts and mock ADR flow
- [x] Clickable mock end-to-end flow
- [x] Contract tests, mock e2e

### S2: Core Domain + Persistence
- [x] Real mission/source/rating storage
- [x] Real mission + source + rating panels
- [x] Domain tests, Testcontainers, reload logic

### S3: Async Mapping + Evidence
- [x] Async run, claims/evidence, outbox, events
- [x] Mapping progress + claims/evidence panels
- [x] Async tests, outbox, SSE/polling

### S4: Patch + Approval
- [x] Real patch and approval lifecycle
- [x] Patch review + approval panels
- [x] Policy, idempotency, approval QA

### S5: Readiness + Artifact Version
- [x] Readiness v0.1, apply patch, final ADR
- [x] Readiness panel + final artifact + trace
- [x] Readiness tests, trace, full e2e

### S7: RC + Pilot Pack — ЗАВЕРШЕНО
- [x] Alpha/RC package for design partners (Fixtures and initial setup done)
- [x] Demo-ready build and runbook (Runbook and Scenario F seeded)
- [x] Release QA, usability metrics (Stats endpoint and health check integrated)

---

## ✅ Архив: MVP v0.1 — ЗАВЕРШЕНО
- [x] S0: Репозиторий и Инфраструктура
- [x] S0: Стабилизация Документации
- [x] S1: Ядро Домена и Персистентность
- [x] S2: Use Cases и API
- [x] S3: Demo Shell и Workspace Room
- [x] S4: MCP Apps и Approval Flow
- [x] S5: Полировка и Релиз-кандидат (v0.1.0-rc.1)
- [x] S6: Security + Retention
- [x] S7: RC + Pilot Pack (v1.1-alpha)

---
*Агент обязан обновлять этот файл после каждого спринта.*
