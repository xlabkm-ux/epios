# Актуальное состояние интерфейса и Changelog

**Версия продукта:** MVP v1.1 (Pilot RC)  
**Последнее обновление:** По итогам спринта S7

## 1. Текущая архитектура UI (demo-shell)

Интерфейс построен как SPA-приложение на базе современных технологий:
- **Ядро:** React 18, Vite, TypeScript.
- **Стилизация:** Vanilla CSS (на базе `index.css`) с CSS-переменными для темизации. Акцент на Premium Dark Mode.
- **Анимации:** Framer Motion (микроанимации переходов, hover-эффекты, аккордеоны).
- **Визуализация:** React Flow (интерактивный граф узлов и связей).
- **Иконки:** Lucide React.
- **Управление состоянием:** Context API (`WorkspaceContext`, `SecurityContext`) + хуки для работы с API (`useApi`).

## 2. Матрица состояния компонентов

На момент завершения MVP v1.1 все ключевые панели переведены из мокового состояния в рабочее (подключено к реальному API).

| Компонент / Панель | Статус | Подключенные API / Сущности | Примечание |
| :--- | :--- | :--- | :--- |
| **WorkspaceRoom** | 🟢 Real | `Workspace` | Главный контейнер, управляет лейаутом |
| **Sidebar / Command Palette** | 🟢 Real | `Navigation` | Навигация и переключение контекста |
| **GraphCanvas** | 🟢 Real | `GraphRepository` | Отрисовка узлов (React Flow) с polling-обновлением |
| **MissionPanel** | 🟢 Real | `Mission` | Общий контекст задачи |
| **SourcePanel** | 🟢 Real | `Source` | Исходный текст ADR |
| **RatingPanel** | 🟢 Real | `Rating` | Голосование за доверие к источнику |
| **MappingPanel** | 🟢 Real | `MappingRun` | Отображение прогресса асинхронного парсинга (SSE/Polling) |
| **GovernancePanel** | 🟢 Real | `Patch`, `Approval` | Предложение патчей, ревью и аппрувы |
| **ReadinessPanel** | 🟢 Real | `ReadinessAssessment`| Блокираторы и метрики готовности |
| **Security/Role UI** | 🟢 Real | `Identity` | Блокировка кнопок (Vote/Propose) для ReadOnly ролей |

## 3. UI Changelog (История развития)

### S6-S7: Pilot RC, Security & Polish
- **Что сделано:** Внедрен `SecurityContext`. Элементы управления (кнопки голосования, создания патчей) теперь динамически отключаются в зависимости от роли пользователя. Добавлена обработка состояний 'redacted' (скрытие контента). Отполированы микроанимации и исправлен баг с пропадающим футером.

### S4-S5: Governance, Patch & Readiness
- **Что сделано:** Добавлены `GovernancePanel` и `ReadinessPanel`. Реализован флоу предложения патча, его отображения в виде Diff-подобного интерфейса и процесс финального голосования (Cast Vote).

### S3: Async Mapping & Event Visualization
- **Что сделано:** Реализована `MappingPanel` для визуализации асинхронного процесса. Добавлен progress bar, анимация загрузки (pulsing dots) и polling для обновления графа (`GraphCanvas`) в реальном времени.

### S1-S2: MVP Skeleton & Domain Binding
- **Что сделано:** Создан базовый каркас приложения (Sidebar, Main Workspace). Внедрена дизайн-система Dark Mode. Созданы `MissionPanel`, `SourcePanel`, `RatingPanel`. Подключены первые реальные API эндпоинты домена.
