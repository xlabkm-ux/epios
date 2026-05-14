Owner: @architect
Status: accepted

# Модель Идентификации и Управления Доступом (Enterprise RBAC)

Epistemic OS применяет ролевую модель (Role-Based Access Control) на уровне домена (см. `packages/domain/src/security.ts`).

## 1. Базовые сущности (Identity)

- **User:** Физическое лицо или сервисный аккаунт (`id`, `username`, `email`, `role`, `isActive`).
- **UserRole:** В MVP v1.1 зафиксированы три системные роли: `"observer"`, `"reviewer"`, `"admin"`. В Enterprise версии этот список станет динамическим.
- **Permission:** Атомарное право на действие с ресурсом (`action`, `resource`). Например, `action: "patch.approve"`, `resource: "workspace"`.

## 2. Матрица Доступа (Access Control Matrix)

Текущее распределение прав в системе:

| Действие (Action) | Resource | Observer | Reviewer | Admin |
| :--- | :--- | :---: | :---: | :---: |
| Просмотр графа и панелей | `workspace.read` | ✅ | ✅ | ✅ |
| Выгрузка артефактов | `artifact.export` | ✅ | ✅ | ✅ |
| Инициация маппинга | `mapping.start` | ❌ | ✅ | ✅ |
| Оценка источника | `rating.create` | ❌ | ✅ | ✅ |
| Предложение патча | `patch.propose` | ❌ | ✅ | ✅ |
| Утверждение патча (Vote) | `patch.approve` | ❌ | ✅ | ✅ |
| Удаление рабочего пространства | `workspace.delete` | ❌ | ❌ | ✅ |
| Управление пользователями | `user.manage` | ❌ | ❌ | ✅ |
| Настройка политик Retention | `policy.manage` | ❌ | ❌ | ✅ |

## 3. Архитектура контроля доступа

- **API Middleware:** Эндпоинты в `packages/api/src/routes/` защищены декораторами/мидлварами, проверяющими токен и роль.
- **Domain Enforcement:** Агрегаты и UseCases проверяют права. Например, `ApplyPatchUseCase` выбросит `UnauthorizedError`, если ActorRole не имеет права `patch.approve`.
- **UI Adaptation:** Фронтенд использует `SecurityContext`, чтобы скрывать или переводить в `disabled` состояние кнопки, недоступные текущей роли (чтобы не провоцировать 403 ошибки).

