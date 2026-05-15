# 📊 PROJECT STATUS: Epistemic OS (epios)
> **Последнее обновление:** 2026-05-15  
> **Версия:** v0.1.0-alpha.1 (Skeleton)  
> **Уровни планирования:**
> 1. **Проектный план:** `docs/04_delivery/PROJECT_FIX_PLAN.md` (глобальные фазы и аудит).
> 2. **Оперативный план:** Этот файл (согласованные этапы, разбитые на спринты). Все старые планы (Week X) архивированы.

## 🎯 Текущий вердикт
Проект находится в состоянии **"Архитектурного Скелета"**. Базовая структура (Hexagonal, Monorepo, CI/CD) готова на 100%, но доменный поток (End-to-End Flow) реализован через **Mocks/Timeouts** на 60%.

---

## 🚦 Состояние компонентов

| Компонент | Статус | Реализация | Ближайшая задача (P0) |
| :--- | :--- | :--- | :--- |
| **Persistence** | ⚠️ Partial | Postgres схемы готовы, но Mapping/Mission используют In-Memory. | Реализовать `PostgresMappingRepository`. |
| **Domain Logic** | ✅ Ready | Сущности (Node, Mission, Patch) реализованы с инвариантами. | - |
| **Use Cases** | ⚠️ Skeleton | Use Cases есть, но завязаны на Mock-репозитории. | Переключить Use Cases на Postgres-провайдер. |
| **UI (Demo Shell)**| 🎭 Simulated | Интерфейс показывает ADR Review через `setTimeout`. | Заменить `setTimeout` на реальные API вызовы. |
| **MCP Bridge** | 🔒 Secure | Протокол защищен (Nonce/Zod), но требует E2E тестов. | Добавить `test:security` в CI. |
| **QA Gates** | ❌ Missing | Скрипты в `package.json` созданы, но тесты async/security пусты. | Наполнить `async-runtime.test.ts`. |

---

## 📅 Оперативный план (Спринты)

Ниже представлены согласованные к выполнению этапы проектного плана, разделенные на **НЕЗАВИСИМЫЕ** спринты, которые можно выполнять параллельно. 
*⚠️ Если спринт затрагивает критически важные части системы и создает риски при слиянии изменений, он помечается как `[🔒 УНИКАЛЬНЫЙ]` и **запрещает параллельную разработку**.*

### Спринт A: Интеграция Persistence слоя `[🔒 УНИКАЛЬНЫЙ]`
**Статус:** 🏃 В работе (Высокий риск конфликтов архитектуры БД и репозиториев)
- [ ] **Backend Wiring:** Исправить `server.ts`, чтобы все репозитории в Postgres-режиме были реальными (убрать `undefined` и `InMemory`).
- [ ] **Persistent Mapping:** Реализовать сохранение результатов анализа графа в БД.
- [ ] **Integration Tests:** Добавить тесты интеграции репозиториев (Optimistic Concurrency & Idempotency).

### Спринт B: Валидация и безопасность MCP `[НЕЗАВИСИМЫЙ]`
**Статус:** ⏳ Ожидает
- [ ] **Bridge Validation:** Реализовать пайплайн валидации nonce/capability для MCP сообщений.
- [ ] **Security QA:** Написать `run-security-tests.ts` для проверки изоляции MCP.

### Спринт C: UI De-mocking и Demo Shell `[НЕЗАВИСИМЫЙ]`
**Статус:** ⏳ Ожидает
- [ ] **UI De-mocking:** Интегрировать `ADRReviewWorkspace.tsx` с бэкендом (заменить `setTimeout` на вызовы API).
- [ ] **Demo Shell Init:** Инициализировать `apps/demo-shell` с выбранным фреймворком.

### Спринт D: Релизная документация и Handover `[НЕЗАВИСИМЫЙ]`
**Статус:** ⏳ Ожидает
- [ ] **Deployment Docs:** Подготовить `DEPLOY.md` (инструкции по развертыванию).
- [ ] **Handover Docs:** Создать `CURRENT_STATE_V2_4.md` и заметки по стабилизации безопасности.
- [ ] **Sanitization:** Проверить репозиторий на утечки данных и очистить легаси-код.

---

## 📂 Навигация
- **Проектный план (Project Plan):** [docs/04_delivery/PROJECT_FIX_PLAN.md](docs/04_delivery/PROJECT_FIX_PLAN.md)
- **Реестр документов:** [docs/00_project/DOCUMENT_REGISTER.md](docs/00_project/DOCUMENT_REGISTER.md)
- **Архив старых планов:** [docs/90_archive/delivery_legacy/](docs/90_archive/delivery_legacy/)
