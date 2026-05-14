Owner: @architect
Status: accepted

# API & DX Roadmap

## 🟡 Горизонт 1: API Core & Documentation
- [ ] Внедрение Swagger/OpenAPI автогенерации (например, через `@fastify/swagger`).
- [ ] Интерактивная документация API, доступная прямо из `demo-shell` для разработчиков.
- [ ] Версионирование API (переход от `/api/v1` к `/api/v2` без поломки клиентов).

## 🔵 Горизонт 2: Machine-to-Machine Integration
- [ ] Выделение роли `ServiceAccount` (Бот) в RBAC системе.
- [ ] Разработка системы генерации долгоживущих API-ключей (Personal Access Tokens).
- [ ] CLI-инструмент (epios-cli) для локальной валидации ADR файлов перед коммитом в Git.

## 🟣 Горизонт 3: Event-Driven Webhooks
- [ ] Создание системы Webhooks: возможность подписываться на события (например, `patch.approved`, `workspace.created`).
- [ ] Механизм повторной доставки (Retry) вебхуков при недоступности системы-получателя.

