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
- [ ] Frozen MVP contracts and mock ADR flow
- [ ] Clickable mock end-to-end flow
- [ ] Contract tests, mock e2e

### S2: Core Domain + Persistence
- [ ] Real mission/source/rating storage
- [ ] Real mission + source + rating panels
- [ ] Domain tests, Testcontainers, reload logic

### S3: Async Mapping + Evidence
- [ ] Async run, claims/evidence, outbox, events
- [ ] Mapping progress + claims/evidence panels
- [ ] Async tests, outbox, SSE/polling

### S4: Patch + Approval
- [ ] Real patch and approval lifecycle
- [ ] Patch review + approval panels
- [ ] Policy, idempotency, approval QA

### S5: Readiness + Artifact Version
- [ ] Readiness v0.1, apply patch, final ADR
- [ ] Readiness panel + final artifact + trace
- [ ] Readiness tests, trace, full e2e

### S6: Security + Retention
- [ ] Pilot-safe roles, retention, redaction
- [ ] Role-aware UI and deletion states
- [ ] Security tests, retention, audit

### S7: RC + Pilot Pack
- [ ] Alpha/RC package for design partners
- [ ] Demo-ready build and runbook
- [ ] Release QA, usability metrics

---

## ✅ Архив: MVP v0.1 — ЗАВЕРШЕНО
- [x] S0: Репозиторий и Инфраструктура
- [x] S0: Стабилизация Документации
- [x] S1: Ядро Домена и Персистентность
- [x] S2: Use Cases и API
- [x] S3: Demo Shell и Workspace Room
- [x] S4: MCP Apps и Approval Flow
- [x] S5: Полировка и Релиз-кандидат (v0.1.0-rc.1)

---
*Агент обязан обновлять этот файл после каждого спринта.*
