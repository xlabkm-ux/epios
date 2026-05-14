Owner: @architect
Status: accepted

# Template Library Registry: Индекс раздела

**Документ:** Организационный устав раздела Template Library  
**Статус:** Draft (Планирование v1.2+)  
**Цель:** Описание структуры и назначения директории `06_template_library_roadmap`, которая служит центром знаний по переходу Epistemic OS от жестко закодированного приложения для ADR к гибкой платформе управления любыми архитектурными артефактами.

## 📁 Структура раздела

Раздел разбит на 4 ключевых документа, описывающих концепцию, архитектуру и план реализации Библиотеки Шаблонов:

### 1. [01_LIBRARY_CONCEPT_AND_DOMAIN.md](./01_LIBRARY_CONCEPT_AND_DOMAIN.md)
**Что внутри:** Концептуальное видение и доменная модель.
- Что такое `Template` (Шаблон) и `Adequacy Profile` (Профиль оценки).
- Переход от статического домена (только ADR) к динамическому (RFC, Incident Reports, Security Audits).

### 2. [02_REGISTRY_ARCHITECTURE_AND_API.md](./02_REGISTRY_ARCHITECTURE_AND_API.md)
**Что внутри:** Архитектура бэкенда и хранилища.
- Хранение шаблонов и версионирование.
- Взаимодействие `TemplateRegistryService` с основным графом и Workspace.
- Проектирование API эндпоинтов для библиотеки.

### 3. [03_UI_INTEGRATION_AND_WORKFLOW.md](./03_UI_INTEGRATION_AND_WORKFLOW.md)
**Что внутри:** Адаптация фронтенда под динамические сущности.
- Процесс выбора шаблона пользователем (Template Selector).
- Рефакторинг UI в `Dynamic Panel Registry` (рендеринг интерфейса на основе схемы шаблона).

### 4. [04_LIBRARY_DEVELOPMENT_PLAN.md](./04_LIBRARY_DEVELOPMENT_PLAN.md)
**Что внутри:** Пошаговый Roadmap (план разработки) для внедрения Template Library, разбитый на горизонты (от выделения текущего хардкода до полноценного маркетплейса шаблонов).

