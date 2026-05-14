Owner: @architect
Status: accepted

# ChatAVG Extraction Inventory

Реестр ассетов (код, схемы, тесты), которые подлежат извлечению и рефакторингу для Epistemic OS.

| Ассет | Тип | Локация в ChatAVG | Категория | Целевой модуль EPIOS | Риск | Действие |
|-------|-----|-------------------|-----------|---------------------|------|----------|
| ModelGateway | код | `cons/chatavg/src/modules/providers/` | REUSE_AFTER_REFACTOR | infrastructure-models | Medium | Извлечь логику нормализации и выбора провайдера. |
| MCP Gateway | код | `cons/mcp_gateway/` | REUSE_AFTER_REFACTOR | infrastructure-mcp | High | Извлечь опыт работы с MCP SDK, переписать мост. |
| Prompt Templates | config | `cons/chatavg/src/modules/providers/prompts/` | REUSE_AS_IS | infrastructure-models | Low | Скопировать после чистки от ChatAVG-specific логики. |
| Auth Middleware | код | `cons/chatavg/src/middleware/auth.js` | REFERENCE_ONLY | api | Low | Использовать как пример для реализации в Hono/Fastify. |
| Database Schemas | schema | `cons/chatavg/src/database/` | REFERENCE_ONLY | infrastructure-postgres | Medium | Использовать для проектирования Drizzle-схем. |

---
*Категории:*
- **REUSE_AS_IS**: Копирование без изменений (после чистки секретов).
- **REUSE_AFTER_REFACTOR**: Извлечение логики и адаптация под новую архитектуру.
- **REFERENCE_ONLY**: Использование как справочного примера при переписывании.
- **REWRITE**: Полная перепись концепции.

