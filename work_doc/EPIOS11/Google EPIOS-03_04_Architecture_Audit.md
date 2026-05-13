# **Архитектурный аудит и директивы для EPIOS v1.0 MVP**

**Цель:** Валидация скоупа 6-недельного MVP (EPIOS-03) и инженерного процесса (EPIOS-04), выявление рисков, фиксация архитектурных границ.

**Контекст:** Разработка Epistemic OS v1.0 (internal dev, open-source, Postgres, DDD, MCP Apps).

**Ограничения:** 6 недель, запрет на усложнение инфраструктуры (без Kafka/Temporal), строгая типизация.

**Статус аудита:** ТРЕБУЕТ КОРРЕКТИРОВОК.

## **1\. Архитектурная критика и Риски (Risk Assessment)**

### **Риск 1: Синхронность Application Layer (Иллюзия Fake Provider)**

В EPIOS-03 на Неделе 3 планируется RunEpistemicMapping с использованием Fake deterministic model provider.

* **Проблема:** Использование фейкового провайдера часто приводит к проектированию синхронных use cases. Когда вы подключите реальную LLM (OpenAI), запрос будет занимать 10-30 секунд. Синхронный HTTP-ответ приведет к таймаутам и блокировке UI.  
* **Директива:** Слой Application должен быть асинхронным *by design* с первого дня. RunEpistemicMappingUseCase должен возвращать jobId или runId, а не готовый результат. Фейковый провайдер обязан симулировать задержку (sleep 2-3s) для проверки UX.

### **Риск 2: Размытие границ Aggregate Roots (Domain Layer)**

В скоупе указаны Mission, EpistemicNode, EvidenceRef, LivingArtifact.

* **Проблема:** Если Mission будет владеть массивом из 1000 EpistemicNode, вы получите God Object и OutOfMemory при загрузке Aggregate.  
* **Директива:** Строго разделить Aggregate Roots.  
  1. Mission (хранит метаданные, статус).  
  2. EpistemicKernel или NodeMap (отдельный Aggregate).  
  3. LivingArtifact (версионируемый документ).  
     Связи между ними должны быть **только по ID** (missionId, artifactId). Репозитории не должны делать deep fetch.

### **Риск 3: Паттерн Outbox без Worker'а (Infrastructure Layer)**

В EPIOS-03 указано: "Minimal outbox table first; worker P1/P2".

* **Проблема:** Запись в Outbox без его чтения ломает Eventual Consistency. Если Trace events или триггеры Approval зависят от Outbox, они не сработают.  
* **Директива:** Базовый поллинг-воркер (setInterval на Node.js) должен быть частью MVP (Неделя 2). Без него паттерн бессмысленен.

### **Риск 4: Состояние UI и MCP Apps Bridge (Interfaces Layer)**

* **Проблема:** Если ApprovalApp (iframe) отправляет команду ApplyArtifactPatch через Bridge на бэкенд, как Mission Room UI (хост) узнает, что нужно обновить экран?  
* **Директива:** Использовать Server-Sent Events (SSE) или базовый HTTP Long Polling на уровне BFF. Iframe отправляет *Fire-and-Forget* команду, бэкенд мутирует домен, бэкенд пишет событие (через Outbox), хост-UI получает событие и делает refetch данных (React Query / SWR invalidation). Iframe **не должен** возвращать новые доменные данные.

## **2\. Проектирование по слоям (Refined Layers)**

### **2.1. Domain Layer (Strict DDD)**

* **Invariants:** Все бизнес-правила проверяются в методах сущностей (например, artifact.proposePatch(patch, policy)). Запрещены сеттеры (setNodes, setStatus).  
* **State Machines:** MissionRun должен быть реализован как явный класс-состояние с методами start(), complete(), fail().  
* **Ошибки:** Использовать типизированные ошибки домена (например, PatchConflictError, InvalidTransitionError). Никаких общих Error("bad state").

### **2.2. Application Layer (Use Cases & Orchestration)**

* **Contracts:** Вход — DTO (парсятся на уровне API), выход — примитивы или Read Models. Use case не должен возвращать Aggregate Root наружу.  
* **Transactions:** Один Use Case \= Одна транзакция БД. Если нужно обновить Mission и записать событие в Outbox, это делается в рамках одного UnitOfWork.

### **2.3. Interfaces Layer (API, UI, MCP)**

* **MCP Bridge Policy:** MCP App (iframe) имеет права *Least Privilege*. Протокол обмена (JSON-RPC 2.0) должен строго валидировать origin, schema (Zod), nonce (для защиты от replay attacks).  
* **Audit:** Любое действие из MCP App должно логироваться с контекстом: \[AppId, MissionId, UserId (fake for MVP), Action, Timestamp\].

### **2.4. Infrastructure Layer (Adapters)**

* **PostgreSQL:** Использовать Kysely или Drizzle для type-safe SQL. Запрещено использовать тяжеловесные ORM (TypeORM/Prisma), так как они провоцируют N+1 проблемы и ленивую загрузку, нарушающую границы Aggregate.  
* **Observability:** Обязательный correlation-id для всех запросов (от UI до БД).

## **3\. Корректировка Инженерного процесса (EPIOS-04)**

1. **Dependency Enforcement:** Добавить в CI (Неделя 1\) инструмент eslint-plugin-boundaries или dependency-cruiser. Ручные проверки ревьюерами архитектурных зависимостей неизбежно приведут к сбоям. CI должен падать, если domain импортирует infrastructure-postgres.  
2. **Database Migrations:** Ввести правило: миграции только *Add-only* (forward-compatible) для MVP. Никаких DROP COLUMN, чтобы не блокировать параллельную разработку.  
3. **Testcontainers:** Заменить локальный запуск БД в Integration тестах на Testcontainers-node. Интеграционные тесты репозиториев должны запускаться в эфемерных контейнерах БД на каждый прогон, чтобы избежать side-effects от грязного стейта.

## **4\. Требования к EPIOS-05 (Следующий шаг)**

Когда будете писать **EPIOS-05 (PostgreSQL Data Model)**, обеспечьте следующее:

1. Очевидный маппинг: 1 Aggregate \= 1 таблица (или набор жестко связанных таблиц).  
2. Наличие колонки version (integer) во всех основных таблицах для **Optimistic Concurrency Control** (защита от потерянных обновлений при конкурентном approval'е).  
3. Индексы для Read Models (например, поиск всех нод для конкретной миссии CREATE INDEX idx\_nodes\_mission\_id ON epistemic\_nodes (mission\_id)).  
4. Структура outbox\_events должна содержать: id (UUID), aggregate\_type, aggregate\_id, event\_type, payload (JSONB), created\_at, processed\_at (NULL).

## **Резюме для Approval**

План принимается в работу, но **требует внедрения асинхронности в Application Layer, выделения SSE/Polling для синхронизации UI, и базового Outbox-воркера** в первые 3 недели. Иначе демо на Неделе 6 развалится при попытке интеграции компонентов.