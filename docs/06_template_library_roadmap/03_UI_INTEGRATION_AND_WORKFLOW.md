# UI Интеграция и Workflow Пользователя

Внедрение Template Library фундаментально изменит пользовательский интерфейс (`apps/demo-shell`). UI перестанет быть жестко привязанным к ADR.

## 1. Template Selector (Начало Workflow)

Новый экран создания Workspace:
1. Пользователь нажимает "Create Workspace".
2. Открывается интерфейс витрины (Template Library).
3. Пользователь видит карточки шаблонов:
   - **ADR** (Architecture Decision Record)
   - **RFC** (Request for Comments)
   - **Post-Mortem** (Incident Analysis)
   - **Threat Model** (Security)
4. Выбрав шаблон, пользователь выбирает строгость оценки (`Adequacy Profile`). Например, для ADR: "Soft Review" или "Strict Enterprise Compliance".
5. На основе выбора создается `WorkspaceRoom`.

## 2. Dynamic Panel Registry (Архитектура Фронтенда)

Сейчас `ADRReviewWorkspace.tsx` жестко импортирует `MissionPanel`, `SourcePanel`, `GovernancePanel`.

В новой парадигме:
- Фронтенд скачивает конфигурацию шаблона по `templateId`.
- В шаблоне указан список необходимых UI-модулей (Layout Config).
- Фабрика компонентов (`DynamicLayout.tsx`) рендерит только те панели, которые требуются. 
*Например, для шаблона "Threat Model" может потребоваться панель `CVSSCalculatorPanel`, а `MappingPanel` будет отображать прогресс извлечения векторов атак, а не Claim/Evidence.*

## 3. Гибкость Графа (GraphCanvas)

`React Flow` холст должен научиться рендерить кастомные узлы динамически.
- Каждому типу узла (заданному в онтологии шаблона) должен соответствовать свой цвет и иконка.
- Цвета и иконки будут приходить с бэкенда в составе `Template` (или маппиться на фронте через дизайн-токены).
- Интерфейс `ProposePatch` (Governance) должен позволять предлагать патчи к специфичным для шаблона узлам.
