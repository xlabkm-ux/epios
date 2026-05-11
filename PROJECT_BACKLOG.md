# PROJECT BACKLOG: Epistemic OS (epos)

Этот файл является оперативным трекером задач и синхронизирован с основным роадмапом в `work_doc/epos_03_mvp_scope_and_6_week_roadmap.md`.

## 🚀 MVP Роадмап (6 недель)

### Неделя 1: Репозиторий и Инфраструктура (ЗАВЕРШЕНО)
- [x] ✅ Репозиторий инициализирован — 2026-05-11
- [x] ✅ Базовая структура папок (apps, packages) — 2026-05-11
- [x] ✅ AGENT.md адаптирован под проект — 2026-05-11
- [x] ✅ Настройка pnpm workspace — 2026-05-11
- [x] ✅ Docker Compose с PostgreSQL — 2026-05-11
- [x] ✅ Начальные миграции — 2026-05-11
- [x] ✅ Скелет пакетов (domain, application, api) — 2026-05-11
- [x] ✅ Скелет demo-shell — 2026-05-11
- [x] ✅ CI/CD (GitHub Actions) — 2026-05-11
- [x] ✅ Security scanning (Gitleaks) — 2026-05-11
- [x] ✅ Conventional Commits & Husky — 2026-05-11

### Неделя 1: Стабилизация Документации (ЗАВЕРШЕНО)
- [x] ✅ Document Register и Open Decisions — 2026-05-12
- [x] ✅ Резолюция ADR-0001 — ADR-0026 — 2026-05-12
- [x] ✅ Лицензия Apache-2.0 — 2026-05-12
- [x] ✅ Статус документов Accepted — 2026-05-12
- [x] ✅ Diátaxis структура в /docs — 2026-05-12
- [x] ✅ Mermaid диаграммы в README и PROJECT_MAP — 2026-05-12

### Неделя 2: Ядро Домена и Персистентность (ТЕКУЩИЙ ЭТАП)
- [x] ✅ Sprint 3.1: Enforcement & Quality — 2026-05-12
  - [x] Dependency Cruiser boundaries
  - [x] Vitest coverage thresholds (80%)
  - [x] GitHub backlog preparation (EPOS-12)
- [ ] Реализация агрегата Mission
- [ ] EpistemicNode и EvidenceRef
- [ ] Репозитории PostgreSQL
- [ ] Тесты инвариантов домена

### Неделя 3: Use Cases и API
- [ ] Реализация основных Use Cases (CreateMission, Mapping, Patch)
- [ ] API роуты и DTO
- [ ] Эмиссия событий трассировки

### Неделя 4: Demo Shell и Mission Room
- [ ] Layout демо-оболочки
- [ ] Universal Mission Room UI
- [ ] Визуализация узлов и патчей

### Неделя 5: MCP Apps и Approval Flow
- [ ] MCPAppRegistry и валидация моста
- [ ] ClaimApp и ApprovalApp
- [ ] Аудит MCP команд

### Неделя 6: Полировка и Релиз-кандидат
- [ ] Четыре демо-сценария
- [ ] E2E smoke тесты
- [ ] MVP RC Tag

---
*Агент обязан обновлять этот файл после каждого спринта.*
