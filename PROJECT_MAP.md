# PROJECT MAP: Epistemic OS (epos)

Карта структуры проекта и зависимостей.

## 📂 Структура папок

- `apps/`
  - `demo-shell/` — Основной UI (React/Vite).
- `packages/`
  - `domain/` — **Ядро системы**. Сущности, инварианты, порты. (Зависимостей нет).
  - `ports/` — Интерфейсы репозиториев и гейтвеев.
  - `application/` — Use Cases, транзакции. (Зависит от `domain`, `ports`).
  - `api/` — HTTP/BFF адаптеры. (Зависит от `application`).
  - `infrastructure-postgres/` — Реализация БД и миграции. (Зависит от `ports`).
  - `infrastructure-models/` — Адаптеры нейросетей.
  - `infrastructure-mcp/` — Безопасный мост для MCP-приложений.
  - `observability/` — Трассировка и логирование.
- `work_doc/` — Стратегическая и проектная документация (High-level EPOS-XX).
- `docs/` — **Инженерная и техническая документация (Development)**.
  - `00_project/` — Реестр документов и стандарты.
  - `01_architecture/` — Архитектурные описания.
  - `02_adrs/` — Архитектурные решения (ADR).
  - `03_specs/` — Технические спецификации.
  - `04_delivery/` — Отчеты о поставке и метрики.
  - `05_runbooks/` — Инструкции по эксплуатации.

## 🔗 Граф зависимостей (принципиальный)

`domain` ← `ports` ← `application` ← `api` ← `demo-shell`
`ports` ← `infrastructure-*`

## 🛠️ Технологический стек

- **Runtime**: Node.js v20+
- **Manager**: pnpm
- **Language**: TypeScript
- **Database**: PostgreSQL (Drizzle/Kysely)
- **Monorepo**: Turborepo

---
*Агент обязан актуализировать этот файл при добавлении новых модулей.*
