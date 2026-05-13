# **EPIOS: План стабилизации документации и перехода к исполнению**

На основании аудита EPIOS-00…EPIOS-11, текущим приоритетом является переход от **Conceptual Design** к **Operational Governance**.

## **1\. Phase 0: Stabilization Pass (Блокирует публичный Repo)**

**Цель:** Устранение конфликтов и фиксация «источника истины».

### **1.1. Реестр и Статусы (P0)**

Создать docs/00\_project/DOCUMENT\_REGISTER.md.

* **Действие:** Перевести EPIOS-00..11 из Draft в Accepted for MVP.  
* **Зачем:** Исключить двусмысленность при реализации.

### **1.2. Разрешение конфликтов ADR (P0)**

* **ADR-0026:** Зафиксировать лицензию (Apache-2.0).  
* **ADR Index:** Принять EPIOS-09 как единственный авторитетный источник нумерации. Исправить ссылки в EPIOS-04.

### **1.3. Физические ADR файлы (P0)**

Создать файлы docs/02\_adrs/ADR-0001...0010.md на базе семян из EPIOS-09. ADR не должны существовать только «внутри» реестра.

## **2\. Phase 1: Contractualization (Блокирует Milestone 2)**

**Цель:** Замена текстовых описаний на исполняемые спецификации.

### **2.1. API & Use Case Contracts (P1)**

Вместо описания «что делает система», создать:

* docs/03\_specs/API\_CONTRACTS\_MVP.md: Схемы запросов/ответов, коды ошибок, требования к идемпотентности.  
* docs/03\_specs/APPLICATION\_USE\_CASE\_CONTRACTS.md: Входные DTO, зависимости (порты), транзакционные границы.

### **2.2. Каталогизация (P1)**

* ERROR\_CATALOG.md: Единая таблица (Domain Code \-\> HTTP Status \-\> Trace Event).  
* TRACE\_EVENT\_CATALOG.md: Схемы событий для MissionRun.

## **3\. Phase 2: Security & Ops (Блокирует Release)**

### **3.1. MCP Security Test Plan**

Создать docs/04\_delivery/MCP\_SECURITY\_TEST\_PLAN.md.

* **Фокус:** Тесты на подмену nonce, проверку origin и эскалацию capabilities.

### **3.2. Data Retention & Redaction**

Создать DATA\_RETENTION\_AND\_REDACTION\_POLICY\_MVP.md.

* **Критично:** Правила очистки логов и трейсов от данных LLM-провайдеров и секретов до первого запуска в облаке.

## **4\. Operational Artifact: EPIOS-12 (Milestone 2)**

**EPIOS-12 должен сфокусироваться на Domain & Persistence:**

1. **Aggregate Roots:** Реализация Mission и MissionRun (State Machine).  
2. **Epistemic Logic:** Сущности EpistemicNode, EvidenceRef, ReasoningEdge.  
3. **Persistence:** Миграции PostgreSQL (0002-0006), реализация репозиториев, тесты на Optimistic Concurrency.  
4. **Invariants:** Набор Domain Invariant Tests (например, «нельзя применить патч без аппрува»).

## **Резюме архитектурных правок**

| Документ | Что исправить/добавить |
| :---- | :---- |
| **EPIOS-00** | Обновить список документов (00-12), добавить ссылки на Registry. |
| **EPIOS-04** | Исправить ADR-0008 \-\> ADR-0026. Ввести роль Owner для каждого дока. |
| **EPIOS-06** | Вынести Security Matrix в исполняемый Test Plan. |
| **EPIOS-08** | **Критично:** Создать EXTRACTION\_INVENTORY.md для ChatAVG. Без него импорт кода запрещен. |

**Вердикт:** Прекратить генерацию концепций. Перейти к созданию файлов-контрактов (.md спецификации с типами/схемами) и тикетов исполнения.