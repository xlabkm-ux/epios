# План разработки (Template Library Roadmap)

Внедрение Template Library — это комплексная задача, затрагивающая архитектуру всего приложения. Реализация разбита на логические горизонты.

## 🟢 Горизонт 0: Подготовка (Current State)
В MVP v1.1 мы заложили архитектурно-честный фундамент:
- [x] Использование `profileRef: "engineering-adr-review-v0.1"` в API.
- [x] Разделение домена на узлы (Nodes) и управление (Governance).

---

## 🟡 Горизонт 1: Data-Driven Refactoring (Extraction)
*Цель: Избавиться от хардкода в бэкенде, не меняя UI.*
- [ ] **Domain Schema:** Описать JSON-схему для `ArtifactTemplate` и `AdequacyProfile`.
- [ ] **Config Files:** Вынести текущую логику извлечения (Claim/Evidence) и правила Readiness в статические JSON-файлы (seed data).
- [ ] **Readiness Engine:** Переписать `assess-readiness.ts`, чтобы он не содержал жестких `if (node.type === 'claim')`, а парсил правила из переданного профиля.
- [ ] **Interactive Debug:** Отладка работы нового движка на старом UI (регрессионное тестирование).

---

## 🔵 Горизонт 2: Registry Service & API (Backend)
*Цель: Дать возможность хранить и запрашивать шаблоны.*
- [ ] **PostgreSQL Schema:** Создать миграции Drizzle для таблиц `artifact_templates` и `adequacy_profiles`.
- [ ] **API Routes:** Реализовать CRUD контроллеры в `registry.routes.ts`.
- [ ] **Workspace Injection:** Изменить создание Workspace, заставив бэкенд фиксировать `templateId` в базе.
- [ ] **Collaborative Debug:** Совместная отладка бэкенд-эндпоинтов и проверка консистентности сохранения.

---

## 🟣 Горизонт 3: Dynamic UI & Template Selector (Frontend)
*Цель: Пользователь может выбрать шаблон, а UI подстраивается.*
- [ ] **UI: Template Library View:** Экран витрины шаблонов при старте.
- [ ] **UI: Dynamic Panel Layout:** Рефакторинг `demo-shell` на фабричный паттерн рендеринга панелей.
- [ ] **UI: Dynamic Graph:** Отрисовка разных типов узлов в React Flow в зависимости от онтологии шаблона.
- [ ] **Interactive UI Debug:** Итеративная отладка интерфейса "витрины" и динамической верстки панелей в диалоге с разработчиком.

---

## 🌌 Горизонт 4: Ecosystem & Extensibility (Стратегия)
*Цель: Открытая платформа.*
- [ ] **Template Builder UI:** Интерфейс для создания кастомных шаблонов самими пользователями (без написания JSON).
- [ ] **MCP Plugin Binding:** Связывание конкретного шаблона со сторонним MCP-сервером (например, шаблон Security маппится через MCP-сервер сканера уязвимостей).
- [ ] **Ecosystem Debug:** Финальная отладка и стабилизация полного цикла интеграции шаблонов и MCP-плагинов в диалоге с разработчиком.
