# 📊 PROJECT STATUS: Epistemic OS (epios)
> **Последнее обновление:** 2026-05-15  
> **Версия:** v0.1.0-alpha.1 (Skeleton)  
> **Уровни планирования:**
> 1. **Проектный план:** `docs/04_delivery/V1_1_PROJECT_PLAN_ADR_REVIEW.md` (ADR Review Milestone Roadmap).
> 2. **Оперативный план:** Этот файл (согласованные этапы, разбитые на спринты). Все старые планы (Week X) архивированы.

## 🎯 Текущий вердикт
Проект находится в состоянии **"Архитектурного Скелета"**. Базовая структура (Hexagonal, Monorepo, CI/CD) готова на 100%, но доменный поток (End-to-End Flow) реализован через **Mocks/Timeouts** на 60%.

---

## 🚦 Состояние компонентов

| Компонент | Статус | Реализация | Ближайшая задача (P0) |
| :--- | :--- | :--- | :--- |
| **Persistence** | ✅ Ready | Postgres схемы готовы, репозитории (вкл. Mapping/Mission) реализованы и подключены. | - |
| **Domain Logic** | ✅ Ready | Сущности (Node, Mission, Patch) реализованы с инвариантами. | - |
| **Use Cases** | ✅ Ready | Use Cases переключены на Postgres-провайдер через `server.ts`. | - |
| **UI (Demo Shell)**| ✅ Ready | Интерфейс интегрирован с API вызовами. | - |
| **MCP Bridge** | ✅ Ready | Протокол защищен (Nonce/Zod) и проверен автоматическими `test:security`. | - |
| **QA Gates** | ✅ Ready | Скрипты в `package.json` созданы, тесты async/security наполнены и проходят `pnpm verify`. | - |

---

## 📅 Оперативный план (Спринты)

Ниже представлены согласованные к выполнению этапы проектного плана, разделенные на **НЕЗАВИСИМЫЕ** спринты, которые можно выполнять параллельно. 
*⚠️ Если спринт затрагивает критически важные части системы и создает риски при слиянии изменений, он помечается как `[🔒 УНИКАЛЬНЫЙ]` и **запрещает параллельную разработку**.*

### Спринт A: Интеграция Persistence слоя `[🔒 УНИКАЛЬНЫЙ]`
**Статус:** ✅ Завершен
- [x] **Backend Wiring:** Исправить `server.ts`, чтобы все репозитории в Postgres-режиме были реальными (убрать `undefined` и `InMemory`).
- [x] **Persistent Mapping:** Реализовать сохранение результатов анализа графа в БД.
- [x] **Integration Tests:** Добавить тесты интеграции репозиториев (Optimistic Concurrency & Idempotency).

### Спринт B: Валидация и безопасность MCP `[НЕЗАВИСИМЫЙ]`
**Статус:** ✅ Завершен
- [x] **Bridge Validation:** Реализовать пайплайн валидации nonce/capability для MCP сообщений.
- [x] **Security QA:** Написать `run-security-tests.ts` для проверки изоляции MCP.

### Спринт C: UI De-mocking и Demo Shell `[НЕЗАВИСИМЫЙ]`
**Статус:** ✅ Завершен
- [x] **UI De-mocking:** Интегрировать `ADRReviewWorkspace.tsx` с бэкендом (заменить `setTimeout` на вызовы API).
- [x] **Demo Shell Init:** Инициализировать `apps/demo-shell` с выбранным фреймворком.

### Спринт D: Релизная документация и Handover `[НЕЗАВИСИМЫЙ]`
**Статус:** ⏳ Ожидает
- [ ] **Deployment Docs:** Подготовить `DEPLOY.md` (инструкции по развертыванию).
- [ ] **Handover Docs:** Создать `CURRENT_STATE_V2_4.md` и заметки по стабилизации безопасности.
- [ ] **Sanitization:** Проверить репозиторий на утечки данных и очистить легаси-код.

### Спринт E: Интеграция слоя Governance Persistence `[НЕЗАВИСИМЫЙ]`
**Статус:** ⏳ Ожидает
- [ ] **Artifact Persistence:** Реализовать `PostgresArtifactRepository` для сущности `LivingArtifact`, версий и патчей.
- [ ] **Decision & Approval Persistence:** Реализовать репозитории для `DecisionRecord` и `ApprovalRequest`.
- [ ] **Backend Wiring:** Убрать моки (`null as unknown`) для этих репозиториев в `server.ts` и `unit-of-work.ts`.

### Спринт F: Infrastructure QA Hardening `[НЕЗАВИСИМЫЙ]`
**Статус:** ⏳ Ожидает
- [ ] **Testcontainers Integration:** Настроить автоматическое поднятие PostgreSQL в Docker при запуске `vitest` для честных интеграционных тестов.
- [ ] **Graph Concurrency Tests:** Написать сценарии конкурентного доступа и оптимистичных блокировок для `GraphRepository`.
- [ ] **Governance & Mission Tests:** Покрыть интеграционными тестами транзакционные изменения процессов голосования и статусов миссий.


---

## 📂 Навигация
- **Проектный план (Project Plan):** [docs/04_delivery/PROJECT_FIX_PLAN.md](docs/04_delivery/PROJECT_FIX_PLAN.md)
- **Реестр документов:** [docs/00_project/DOCUMENT_REGISTER.md](docs/00_project/DOCUMENT_REGISTER.md)
- **Архив старых планов:** [docs/90_archive/delivery_legacy/](docs/90_archive/delivery_legacy/)
