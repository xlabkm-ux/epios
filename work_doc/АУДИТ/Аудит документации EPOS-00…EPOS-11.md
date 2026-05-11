Аудит сделал по документационному пакету **EPOS-00…EPOS-11**. Код проекта я не проверял; это аудит **архитектурной и delivery-документации**.

## Итоговый вердикт

Документация сильная по архитектурной базе: есть стратегия, доменная модель, PostgreSQL-first подход, MCP security boundary, runtime/observability, release gates, ChatAVG reuse policy, ADR index и Week 1 execution package.

Но пакет пока **не готов как управляемая документационная система**. Главный риск уже не в нехватке архитектурных идей, а в том, что документы остаются в состоянии `Draft / For Review`, содержат несколько противоречий, не имеют единого register/status/owner контроля и еще не разложены в исполняемые specs/templates/checklists.

Критичный вывод: **перед стартом публичного репозитория нужно сделать documentation stabilization pass**, иначе проект быстро получит тот же drift, против которого EPOS-04 сам предупреждает.

---

# 1. Что в проекте уже хорошо

## 1.1. Архитектурная линия выдержана

EPOS-00 ясно фиксирует, что Epistemic OS — не ChatAVG v3, не чат-продукт и не generic agent framework, а новая open-source платформа с отдельным репозиторием и Universal Mission Room как MVP-доменом. Там же перечислены success criteria для MVP: миссия, Mission Brief, EpistemicNodes, EvidenceRefs, LivingArtifact, ArtifactPatch, ApprovalApp, ClaimApp, EvidenceViewer, PostgreSQL persistence, trace и domain invariant tests.  

## 1.2. Delivery-план достаточно исполнимый

EPOS-10 хорошо переводит концептуальный пакет в Week 1 bootstrap: repo skeleton, workspace, PostgreSQL, first migration, first domain invariant test, API `/health`, demo shell и CI baseline. Он также уже содержит issue groups: foundation, docs, security, process. 

Созданный **EPOS-11** правильно продолжает EPOS-10: он превращает Week 1 в copy-ready GitHub issues и PR bodies. Это нужный формат — меньше интерпретации, больше исполнения.

## 1.3. Security boundary для MCP задан правильно

EPOS-06 корректно рассматривает MCP Apps как untrusted UI surfaces. Все write-capable действия должны проходить через bridge validation, API/BFF command, application use case, policy check, domain validation, transaction и audit/trace event. 

## 1.4. Runtime и observability не отложены “на потом”

EPOS-07 правильно фиксирует, что `MissionRun` state принадлежит Epistemic OS, а не HTTP request, UI state или LLM provider state. Это важный архитектурный инвариант для всей системы. 

## 1.5. ChatAVG reuse policy здоровая

EPOS-08 запрещает uncontrolled legacy import, требует extraction inventory, document handover register и разделяет ChatAVG v2.4 stabilization от EPOS Week 1 bootstrap. Это критично для защиты новой архитектуры. 

---

# 2. Критичные проблемы документации

## P0-1. Конфликт нумерации ADR

В EPOS-04 license decision должен быть записан как:

```text
ADR-0008-license-choice.md
```

Но в EPOS-09 и EPOS-10 `ADR-0008` уже занят решением **Include MCP Apps in MVP v1.0**, а license вынесен в `ADR-0026-license-choice.md`.   

Это не косметика. ADR-нумерация — это адресная система решений. Если ее оставить конфликтной, ссылки из README, PR, issues и docs начнут расходиться.

**Доработка:**

В EPOS-04 заменить:

```text
ADR-0008-license-choice.md
```

на:

```text
ADR-0026-license-choice.md
```

И добавить примечание:

```text
ADR numbering is authoritative in EPOS-09.
Older ADR numbering references in EPOS-04 are superseded by EPOS-09.
```

---

## P0-2. License decision все еще не закрыт

EPOS-00 держит license в open decisions, EPOS-09 помечает Apache-2.0 как `Proposed`, а EPOS-10 прямо говорит, что license должен быть accepted before public repository.   

**Риск:** нельзя безопасно открывать open-source repo без финального license decision.

**Доработка:**

Создать/обновить:

```text
docs/02_adrs/ADR-0026-license-choice.md
```

И перевести статус:

```text
Proposed → Accepted
```

Рекомендуемое решение: **Apache-2.0**, если нет юридической причины выбрать MIT/MPL/AGPL/dual license.

---

## P0-3. Все документы остаются Draft / For Review, но уже используются как executable plan

Большинство EPOS-документов имеют статус:

```text
Draft 0.1
For Review / Approval
```

При этом EPOS-10 и EPOS-11 уже построены как исполняемый план. Это создает правовую и процессную двусмысленность: что является authoritative source, если документ еще не accepted?

EPOS-04 сам требует document lifecycle, где каждый документ имеет ID, version, status и owner, а accepted docs являются authoritative until superseded. 

**Доработка:**

Создать:

```text
docs/00_project/DOCUMENT_REGISTER.md
```

И для каждого EPOS-документа явно указать:

```text
Document ID
Title
Owner
Status
Version
Last updated
Applies to
Supersedes
Superseded by
Decision authority
```

Минимально нужно перевести в `Accepted` или `Accepted for MVP`:

```text
EPOS-00
EPOS-01
EPOS-02
EPOS-03
EPOS-04
EPOS-05
EPOS-06
EPOS-07
EPOS-08
EPOS-09
EPOS-10
EPOS-11
```

Если не хотите принимать все полностью, используйте статус:

```text
Accepted for MVP Bootstrap
```

---

## P0-4. EPOS-00 устарел как индекс документации

EPOS-00 перечисляет initial documentation set только до EPOS-08, но проект уже имеет EPOS-09, EPOS-10 и EPOS-11. 

**Доработка EPOS-00:**

Обновить раздел `Initial Documentation Set`:

```text
EPOS-09 — ADR Pack and Decision Index
EPOS-10 — Implementation Bootstrap Checklist
EPOS-11 — Week 1 GitHub Issues and PR Bodies
EPOS-12 — Week 2 Domain and Persistence Issues and PR Bodies
```

И добавить правило:

```text
EPOS-00 is the strategic foundation, not the current full document index.
The current authoritative document index lives in docs/00_project/DOCUMENT_REGISTER.md.
```

---

## P0-5. ADR Pack не заменяет ADR files, но сами ADR files еще не созданы

EPOS-09 прямо говорит, что он не является заменой individual ADR files, а является seed package / decision ledger. 

EPOS-10 требует создать ADR-0001…ADR-0010 в Week 1 и отдельно `ADR-0026-license-choice.md`. 

**Доработка:**

Создать actual files:

```text
docs/02_adrs/ADR-0001-create-epistemic-os-project.md
docs/02_adrs/ADR-0002-close-chatavg-v23-release-v24.md
docs/02_adrs/ADR-0003-open-source-from-day-one.md
docs/02_adrs/ADR-0004-neutral-demo-shell-first.md
docs/02_adrs/ADR-0005-universal-mission-room-mvp.md
docs/02_adrs/ADR-0006-typescript-core-go-rust-deferred.md
docs/02_adrs/ADR-0007-postgresql-alpha-system-of-record.md
docs/02_adrs/ADR-0008-mcp-apps-in-mvp.md
docs/02_adrs/ADR-0009-layered-hexagonal-architecture.md
docs/02_adrs/ADR-0010-domain-free-of-infrastructure.md
docs/02_adrs/ADR-0026-license-choice.md
```

---

# 3. Высокоприоритетные пробелы

## P1-1. Нет единого Open Decisions Register

EPOS-00 перечисляет открытые решения: license, package manager, web framework, API framework, ORM/query, workflow runtime, auth, LLM provider. 

Часть из них уже фактически выбрана в EPOS-10 как defaults, но не зафиксирована через ADR/RFC.

**Доработка:**

Создать:

```text
docs/00_project/OPEN_DECISIONS_REGISTER.md
```

Поля:

```text
Decision
Options
Recommended default
Current status
Required before
Owner
Decision mechanism
ADR/RFC link
```

Минимальный список решений:

```text
License
Node version
Package manager
Workspace tool
Test runner
Lint/format tool
API framework
Demo shell framework
DB access/migration tool
Auth mode for MVP
Model provider policy
Secret scanning tool
Dependency boundary checker
```

---

## P1-2. Нет API contract spec

EPOS-03 перечисляет use cases, EPOS-01 задает error contract, EPOS-06 задает MCP backend command mapping, но нет единого API/BFF контракта.  

Это станет проблемой уже на Week 3, когда API должен уметь create mission, update brief, run mapping, propose patch, resolve approval и return mission read model.

**Создать:**

```text
docs/03_specs/API_CONTRACTS_MVP.md
```

Минимум:

```text
POST /missions
PATCH /missions/:missionId/brief
POST /missions/:missionId/sources
POST /missions/:missionId/runs
POST /missions/:missionId/artifact-patches
POST /approvals/:approvalId/resolve
POST /artifact-patches/:patchId/apply
GET /missions/:missionId/read-model
GET /missions/:missionId/trace
GET /health
```

Для каждого endpoint:

```text
purpose
request DTO
response DTO
error codes
idempotency requirement
auth/dev actor handling
trace events
transaction boundary
tests
```

---

## P1-3. Нет application use case contract spec

Сейчас use cases перечислены, но не разложены как explicit contracts: input, output, dependencies, transaction, errors, idempotency, emitted events.

**Создать:**

```text
docs/03_specs/APPLICATION_USE_CASE_CONTRACTS.md
```

Для каждого use case:

```text
CreateMission
UpdateMissionBrief
IngestSource
RunEpistemicMapping
CreateEvidenceRefs
ProposeArtifactPatch
CreateApprovalRequest
ResolveApproval
ApplyArtifactPatch
GetMissionReadModel
GetTraceForMission
```

Шаблон:

```text
Responsibility
Input contract
Output contract
Domain dependencies
Ports used
Transaction boundary
Idempotency
Policy checks
Trace events
Errors
Tests
```

---

## P1-4. Нет Error Catalog

EPOS-01 и EPOS-02 уже дают error shape и набор error codes, но нет единого каталога, где domain/application/API errors согласованы.

**Создать:**

```text
docs/03_specs/ERROR_CATALOG.md
```

Поля:

```text
Error code
Layer
HTTP status
Retryable
User-facing message
Developer message
Typical cause
Trace event
Test coverage
```

Особенно нужны:

```text
VALIDATION_ERROR
NOT_FOUND
CONFLICT
POLICY_DENIED
APPROVAL_REQUIRED
IDEMPOTENCY_CONFLICT
MCP_MESSAGE_INVALID
MCP_ORIGIN_DENIED
CITATION_INVALID
EVIDENCE_WEAK
RUNTIME_FAILED
MODEL_FAILED
INTERNAL_ERROR
```

---

## P1-5. Нет Trace Event Catalog

EPOS-07 задает trace taxonomy, metrics и release gates, но для реализации нужен отдельный catalog: event name, schema, payload policy, redaction, producer, consumer. 

**Создать:**

```text
docs/03_specs/TRACE_EVENT_CATALOG.md
```

Для каждого event:

```text
eventType
producer
required IDs
payload schema
redaction rule
when emitted
example
test assertion
```

Минимальные группы:

```text
mission.*
run.*
activity.*
epistemic.*
evidence.*
artifact.*
approval.*
decision.*
mcp.*
policy.*
```

---

## P1-6. Нет Data Retention / Redaction Policy

EPOS-07 требует trace payload redaction review и запрещает секреты в logs/traces, но одновременно пишет, что MVP не требует long-term retention policy. 

Это нормально для production SLO, но не для security hygiene. Нужна **минимальная MVP-политика**, иначе неизвестно, что можно хранить в `trace_events`, activity snapshots и LLM snapshots.

**Создать:**

```text
docs/03_specs/DATA_RETENTION_AND_REDACTION_POLICY_MVP.md
```

Минимум:

```text
Never store
Allowed to store
Hash-only storage
Raw prompt/response policy
Trace payload policy
Source material policy
Secret-like value detection
Retention for local dev
Future production decision points
```

---

## P1-7. Нет MCP Security Test Plan как исполняемого документа

EPOS-06 содержит security matrix, но это еще не test plan для CI. Bridge validation pipeline и nonce/capability checks описаны хорошо. 

**Создать:**

```text
docs/04_delivery/MCP_SECURITY_TEST_PLAN.md
```

P0 tests:

```text
invalid JSON rejected
unsupported schemaVersion rejected
unknown appId rejected
disabled appId rejected
invalid origin rejected
missing nonce rejected
reused nonce rejected
timestamp outside window rejected
missing capability rejected
message type not allowed by capability rejected
mission scope mismatch rejected
approval resolve without idempotencyKey rejected
approval repeated with different result rejected
direct patch apply from iframe rejected
rejected message emits audit event
```

---

## P1-8. Нет Eval Smoke Set как конкретных fixtures

EPOS-07 определяет semantic/evidence eval smoke cases: unsupported strong claim, stale source, contradiction, high-risk patch approval и т.д. 

Но нет конкретных test fixtures, expected outputs и pass/fail критериев.

**Создать:**

```text
docs/04_delivery/EVAL_SMOKE_SET.md
```

Для каждого case:

```text
input material
expected nodes
expected strength
expected evidence refs
expected downgrade/conflict/approval
expected trace events
failure examples
```

---

## P1-9. Нет consolidated Test Strategy

Сейчас тесты разбросаны по EPOS-03, EPOS-04, EPOS-06, EPOS-07, EPOS-10.

**Создать:**

```text
docs/04_delivery/TEST_STRATEGY_AND_MATRIX.md
```

Разделы:

```text
unit/domain tests
application use case tests
repository integration tests
API contract tests
MCP security tests
runtime/idempotency tests
evidence eval smoke
demo E2E smoke
secret scan
dependency boundary check
```

И матрица:

```text
Requirement → Test type → Test file/package → Gate W1/W2/W3/W4/W5/W6
```

---

## P1-10. Нет Week 2 execution package

EPOS-11 уже указывает следующий документ:

```text
EPOS-12 — Week 2 Domain and Persistence Issues and PR Bodies
```

Это правильный следующий operational artifact.

**Создать:**

```text
EPOS-12-week-2-domain-and-persistence-issues-and-pr-bodies.md
```

Содержание:

```text
Mission aggregate issue
MissionRun state machine issue
EpistemicNode issue
ReasoningEdge issue
DomainBoundary issue
Source/EvidenceRef issue
LivingArtifact issue
ArtifactPatch issue
ApprovalRequest issue
DecisionRecord issue
PostgreSQL migrations 0002–0006
repository ports
repository implementations
domain invariant tests
repository integration tests
optimistic concurrency tests
idempotency tests
```

---

# 4. ChatAVG handover documentation — обязательно, иначе legacy риск останется открытым

EPOS-08 требует explicit handover deliverables: `CURRENT_STATE_V2_4.md`, `KNOWN_LIMITATIONS_V2_4.md`, `CHATAVG_DOCUMENT_HANDOVER_REGISTER.md`, `CHATAVG_EXTRACTION_INVENTORY.md`, `SECURITY_STABILIZATION_NOTES.md`, release notes. 

Также EPOS-08 прямо требует классифицировать ChatAVG-документы через statuses: `AUTHORITATIVE_FOR_V2_4`, `REFERENCE_FOR_EPOS`, `SUPERSEDED_BY_EPOS`, `ARCHIVED`, `DISCARD`. 

## Создать P0 для Track A

```text
CURRENT_STATE_V2_4.md
KNOWN_LIMITATIONS_V2_4.md
CHATAVG_DOCUMENT_HANDOVER_REGISTER.md
CHATAVG_EXTRACTION_INVENTORY.md
SECURITY_STABILIZATION_NOTES.md
CHATAVG_V2_4_RELEASE_NOTES.md
```

Если их не создать, будет высокий риск, что EPOS начнет тащить legacy-решения без контроля.

---

# 5. Конкретные доработки существующих документов

## EPOS-00

**Проблема:** устарел список документации, open decisions не связаны с ADR backlog.

**Доработать:**

```text
- обновить Initial Documentation Set до EPOS-11/EPOS-12;
- добавить ссылку на DOCUMENT_REGISTER.md;
- добавить ссылку на OPEN_DECISIONS_REGISTER.md;
- отметить, что ADR numbering authoritative в EPOS-09;
- убрать или уточнить решения, которые уже приняты позже.
```

---

## EPOS-04

**Проблема:** конфликт ADR numbering, license ADR указан неверно.

**Доработать:**

```text
- заменить ADR-0008-license-choice.md на ADR-0026-license-choice.md;
- добавить “EPOS-09 is authoritative ADR index”;
- добавить doc drift review cadence;
- добавить rule: every EPOS doc has Owner;
- добавить правило: generated execution docs must link to source docs.
```

---

## EPOS-05

**Проблема:** PostgreSQL model сильный, но tool choice остается открытым.

**Доработать:**

```text
- выбрать migration/data-access tool или вынести в ADR;
- добавить migration ownership;
- добавить rollback/down policy examples;
- добавить mapping: domain aggregate → table group → repository contract → test;
- добавить mcp_bridge_nonces в future migration plan, если не Week 2.
```

EPOS-05 уже требует migrations from day one, optimistic concurrency, outbox, idempotency and traceability, но implementation choices надо закрыть до Week 2. 

---

## EPOS-06

**Проблема:** безопасность описана хорошо, но threat model и test plan нужно вынести в исполняемые документы.

**Доработать:**

```text
- добавить link на MCP_SECURITY_TEST_PLAN.md;
- добавить threat scenarios: spoofing, replay, confused deputy, capability escalation, prompt/tool injection;
- добавить CSP exception process;
- добавить allowed dev origins registry;
- добавить nonce persistence decision: DB vs memory for MVP.
```

---

## EPOS-07

**Проблема:** runbooks и evals описаны внутри большого документа, но для исполнения нужны отдельные файлы.

**Доработать:**

```text
- вынести runbooks в docs/05_runbooks;
- создать EVAL_SMOKE_SET.md;
- создать TRACE_EVENT_CATALOG.md;
- создать DATA_RETENTION_AND_REDACTION_POLICY_MVP.md;
- обновить documentation checklist: EPOS-00…EPOS-11, not only EPOS-00…EPOS-07.
```

EPOS-07 уже требует README quick start, `.env.example`, known limitations, runbook, demo script и accepted/owned docs, поэтому это не optional. 

---

## EPOS-08

**Проблема:** правила reuse сильные, но не создан handover artifact set.

**Доработать:**

```text
- создать все ChatAVG handover docs;
- добавить owner и deadline для Track A;
- добавить explicit “no EPOS import until extraction inventory row exists”;
- добавить public/private sanitization checklist.
```

---

## EPOS-09

**Проблема:** ADR index хороший, но пока не разложен в ADR files.

**Доработать:**

```text
- создать ADR-0001…ADR-0010;
- создать ADR-0026;
- после Week 1 создать ADR-0011…ADR-0025;
- добавить “supersedes EPOS-04 initial ADR numbering where conflicting”.
```

---

## EPOS-10

**Проблема:** Week 1 план хорош, но часть docs/process задач лучше иметь как generated files/scripts.

**Доработать:**

```text
- добавить ссылку на EPOS-11;
- добавить GitHub CLI snippet для labels/milestones/issues;
- добавить Definition of Ready для issues;
- добавить dependency order между issues;
- добавить gate evidence checklist: command output, screenshots, links.
```

---

## EPOS-11

**Проблема:** хороший operational doc, но можно усилить execution control.

**Доработать:**

```text
- добавить GitHub CLI commands for labels/milestones/issues;
- добавить issue dependency graph;
- добавить owner placeholders;
- добавить “evidence required to close issue”;
- добавить “PR review checklist” прямо в каждый PR body;
- добавить release note stub for mvp-w1-foundation;
- добавить explicit link to DOCUMENT_REGISTER.md once created.
```

---

# 6. Приоритетный backlog документации

## P0 — сделать до публичного repo / до merge PR-001

```text
docs/00_project/DOCUMENT_REGISTER.md
docs/00_project/OPEN_DECISIONS_REGISTER.md
docs/02_adrs/ADR-0026-license-choice.md
docs/02_adrs/ADR-0001…ADR-0010
docs/02_adrs/ADR_TEMPLATE.md
docs/03_specs/RFC_TEMPLATE.md
README.md
CONTRIBUTING.md
SECURITY.md
CODEOWNERS
.github/pull_request_template.md
.github/ISSUE_TEMPLATE/*
KNOWN_LIMITATIONS_MVP.md
```

## P1 — сделать до конца Week 1 / перед Week 2

```text
EPOS-12-week-2-domain-and-persistence-issues-and-pr-bodies.md
docs/03_specs/API_CONTRACTS_MVP.md
docs/03_specs/APPLICATION_USE_CASE_CONTRACTS.md
docs/03_specs/ERROR_CATALOG.md
docs/03_specs/TRACE_EVENT_CATALOG.md
docs/04_delivery/TEST_STRATEGY_AND_MATRIX.md
docs/04_delivery/EVAL_SMOKE_SET.md
docs/05_runbooks/RUNBOOK_LOCAL_DEV.md
docs/05_runbooks/RUNBOOK_DB_MIGRATIONS.md
docs/05_runbooks/DEMO_SCRIPT_MVP.md
RELEASE_NOTES_TEMPLATE.md
```

## P1 для Security / MCP

```text
docs/03_specs/DATA_RETENTION_AND_REDACTION_POLICY_MVP.md
docs/04_delivery/MCP_SECURITY_TEST_PLAN.md
docs/04_delivery/SECURITY_REVIEW_CHECKLIST.md
docs/03_specs/MCP_APP_MANIFEST_CONTRACT.md
docs/03_specs/MCP_BRIDGE_PROTOCOL_CONTRACT.md
```

## P1 для ChatAVG handover

```text
CURRENT_STATE_V2_4.md
KNOWN_LIMITATIONS_V2_4.md
CHATAVG_DOCUMENT_HANDOVER_REGISTER.md
CHATAVG_EXTRACTION_INVENTORY.md
SECURITY_STABILIZATION_NOTES.md
CHATAVG_V2_4_RELEASE_NOTES.md
```

## P2 — полезно после skeleton, но до W4/W5

```text
docs/03_specs/UI_STATE_AND_SCREEN_FLOW_MVP.md
docs/03_specs/MISSION_READ_MODEL_CONTRACT.md
docs/03_specs/SCENARIO_TEMPLATE_CONTRACT.md
docs/04_delivery/PROJECT_RISK_REGISTER.md
docs/04_delivery/RELEASE_GATE_EVIDENCE_MATRIX.md
docs/04_delivery/ARCHITECTURE_HEALTH_DASHBOARD.md
docs/04_delivery/DORA_METRICS_NOTE.md
docs/00_project/GLOSSARY.md
```

---

# 7. Главные архитектурные риски документации

| Риск                               | Severity | Почему опасно                                      | Исправление                                      |
| ---------------------------------- | -------: | -------------------------------------------------- | ------------------------------------------------ |
| ADR numbering conflict             |       P0 | ссылки на решения станут недостоверными            | EPOS-04 поправить, EPOS-09 сделать authoritative |
| License not accepted               |       P0 | нельзя безопасно открыть public repo               | принять ADR-0026                                 |
| Все docs Draft                     |       P0 | непонятно, что является источником истины          | DOCUMENT_REGISTER + owner/status                 |
| API/use case contracts отсутствуют |       P1 | Week 3 начнется с импровизации                     | API_CONTRACTS + USE_CASE_CONTRACTS               |
| Redaction/retention не вынесены    |       P1 | trace/logging может утечь чувствительными payloads | DATA_RETENTION_AND_REDACTION_POLICY_MVP          |
| Eval cases не исполнимы            |       P1 | semantic quality останется декларацией             | EVAL_SMOKE_SET                                   |
| ChatAVG handover docs не созданы   |       P1 | legacy complexity попадет в EPOS                   | handover register + extraction inventory         |
| EPOS-00 index устарел              |       P1 | новые документы не отражены в foundation           | обновить EPOS-00 и создать register              |
| Runbooks внутри большого EPOS-07   |       P2 | оператору неудобно пользоваться                    | вынести в docs/05_runbooks                       |
| Нет traceability matrix            |       P2 | success criteria не связаны с tests/issues         | RELEASE_GATE_EVIDENCE_MATRIX                     |

---

# 8. Рекомендуемый порядок действий

## Шаг 1 — Documentation stabilization pass

Сначала исправить контрольные дефекты:

```text
1. DOCUMENT_REGISTER.md
2. OPEN_DECISIONS_REGISTER.md
3. ADR numbering fix in EPOS-04
4. ADR-0026 license accepted
5. ADR-0001…ADR-0010 created
6. EPOS-00 updated as foundation, not current index
```

## Шаг 2 — Execution contracts

Затем закрыть то, что напрямую нужно Week 2–3:

```text
1. EPOS-12 Week 2 Domain and Persistence Issues and PR Bodies
2. API_CONTRACTS_MVP.md
3. APPLICATION_USE_CASE_CONTRACTS.md
4. ERROR_CATALOG.md
5. TRACE_EVENT_CATALOG.md
6. TEST_STRATEGY_AND_MATRIX.md
```

## Шаг 3 — Security / release readiness

После этого вынести release-gate документы:

```text
1. DATA_RETENTION_AND_REDACTION_POLICY_MVP.md
2. MCP_SECURITY_TEST_PLAN.md
3. EVAL_SMOKE_SET.md
4. RUNBOOK_LOCAL_DEV.md
5. DEMO_SCRIPT_MVP.md
6. RELEASE_NOTES_TEMPLATE.md
```

## Шаг 4 — ChatAVG handover

Параллельно, но не блокируя EPOS Week 1:

```text
1. CHATAVG_DOCUMENT_HANDOVER_REGISTER.md
2. CHATAVG_EXTRACTION_INVENTORY.md
3. CURRENT_STATE_V2_4.md
4. KNOWN_LIMITATIONS_V2_4.md
5. SECURITY_STABILIZATION_NOTES.md
6. CHATAVG_V2_4_RELEASE_NOTES.md
```

---

# 9. Жесткая рекомендация

Не создавайте сейчас еще один большой концептуальный документ вроде:

```text
EPOS-12 — Architecture v2
```

Это будет вредно. Архитектуры уже достаточно.

Нужны документы другого типа:

```text
control documents
contract specs
execution packages
test matrices
runbooks
handover registers
```

Самый правильный следующий документ:

```text
EPOS-12 — Week 2 Domain and Persistence Issues and PR Bodies
```

Но **перед ним** нужно закрыть P0-stabilization:

```text
DOCUMENT_REGISTER.md
OPEN_DECISIONS_REGISTER.md
ADR numbering fix
ADR-0026 license accepted
ADR-0001…ADR-0010 created
```

Иначе Week 2 начнется на сильной архитектурной базе, но с неуправляемым decision/document state.
