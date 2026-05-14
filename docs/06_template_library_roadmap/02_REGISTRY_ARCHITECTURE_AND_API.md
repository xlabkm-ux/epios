# Архитектура Реестра и API

Для поддержки Template Library бэкенд (`packages/api` и `packages/application`) должен быть дополнен новым модулем реестра.

## 1. Хранение шаблонов (Persistence)

Шаблоны и профили имеют сложную вложенную структуру (схемы, промпты, политики).
Оптимальный способ хранения в PostgreSQL (`infrastructure-postgres`):
- Таблица `artifact_templates` (id, name, description, version, ontology_schema (JSONB), mapping_config (JSONB), is_active).
- Таблица `adequacy_profiles` (id, template_id, name, policies (JSONB), readiness_criteria (JSONB)).

*Версионирование обязательно: если профиль оценки меняется, старые Workspace должны продолжать использовать ту версию профиля, с которой они были созданы (Immutability).*

## 2. API Контракты (REST)

Новые эндпоинты в `packages/api/src/routes/registry.routes.ts`:

- `GET /api/v1/registry/templates` — Получить список доступных шаблонов (для UI селектора).
- `GET /api/v1/registry/templates/:id` — Детали шаблона и его онтология.
- `GET /api/v1/registry/templates/:id/profiles` — Доступные профили оценки для конкретного шаблона.

Модификация существующих API:
- `POST /api/v1/workspaces` — Теперь обязан принимать `{ name, templateId, profileId }`.

## 3. Интеграция с Async Mapping (MCP)

В MVP v1.1 `mapping-processor.ts` жестко знал, как извлекать Claim и Evidence.
С введением Template Library:
1. `StartMappingRunUseCase` получает `Template` из БД.
2. Он извлекает из шаблона `mapping_config` (какие типы узлов искать).
3. Передает этот конфиг в MCP Bridge, который динамически формирует запрос (LLM Prompt) на основе конфигурации шаблона.
