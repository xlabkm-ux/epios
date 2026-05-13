# EpiOS v1.1 — рабочий концепт

**Document ID:** `EPIOS-11-CONCEPT-V1_1-WORKING-DRAFT`  
**Status:** Working Draft 0.1  
**Purpose:** согласовать обновленную продуктово-архитектурную концепцию EpiOS перед подготовкой поэтапного плана спринтов разработки.  
**Scope:** концепт, доменная модель высокого уровня, архитектурные изменения, Adequacy Layer, первый продуктовый shell, критерии готовности.  
**Out of scope:** детальный sprint backlog, конкретные миграции БД, финальные API-схемы, инвесторский deck, production-hardening.

---

## 1. Короткий вердикт

EpiOS v1.1 должен быть определен не как “AI-платформа”, “агентный фреймворк” или “умный чат”, а как:

```text
эпистемическая операционная система для управляемого корпоративного ИИ,
которая превращает недетерминированные AI-выводы в проверяемые,
измеримо адекватные, трассируемые и контролируемые артефакты.
```

Ключевое усиление v1.1 по сравнению с v1.0:

```text
EpiOS v1.0:
situation → distinction → evidence → artifact → decision → action

EpiOS v1.1:
situation → distinction → evidence → adequacy assessment → artifact patch
→ human decision → controlled action → trace with adequacy delta
```

Главная идея v1.1: EpiOS должен не только показывать, **почему** артефакт изменился, но и показывать, **насколько адекватен** каждый исходный, промежуточный и итоговый артефакт относительно миссии, источников, критериев успеха, рисков, границ применимости и человеческих решений.

---

## 2. Цель EpiOS v1.1

Цель EpiOS v1.1 — создать архитектурную и продуктовую основу для системы, в которой корпоративный ИИ не действует как непрозрачный генератор текста, а работает как контролируемый механизм подготовки, оценки и сопровождения решений.

EpiOS v1.1 должен обеспечивать:

1. Структурирование задачи как Mission.
2. Декомпозицию входного материала на EpistemicNodes.
3. Привязку утверждений к EvidenceRef и DomainBoundary.
4. Формирование LivingArtifact через ArtifactPatch.
5. Human-in-the-loop для рискованных решений и изменений.
6. Полный Trace/Audit Trail.
7. Многомерную оценку адекватности артефактов и событий.
8. Шаблонизацию отраслевых и функциональных решений поверх универсального ядра.

Новая формула продукта:

```text
EpiOS = Universal Epistemic Core
      + Adequacy Measurement Layer
      + Governance / Trust Layer
      + Industry / Function Template Library
      + Safe Interactive Product Shells
```

---

## 3. Архитектурный тезис v1.1

EpiOS v1.1 сохраняет принципы v1.0:

- Domain-first.
- Contract-first.
- PostgreSQL-first.
- Human-in-the-loop.
- Traceable artifacts.
- MCP Apps as untrusted UI.
- Idempotency for side effects.
- No hidden authority.
- Observable by design.

Но добавляет новый фундаментальный слой:

```text
Adequacy Layer
```

Этот слой отвечает за расчет, объяснение, хранение и отображение коэффициентов адекватности.

Архитектурный инвариант v1.1:

```text
No meaningful artifact mutation without epistemic reason,
evidence/boundary context, traceable decision state,
rollbackable patch history and adequacy impact assessment.
```

Иначе:

```text
Нельзя изменить значимый артефакт,
если система не может объяснить:
- на каких основаниях изменение предложено;
- какие источники его поддерживают;
- какие границы применимости есть у вывода;
- кто и что решил;
- как изменение повлияло на адекватность артефакта.
```

---

## 4. Что именно меняется относительно v1.0

### 4.1. Сохраняется

Из v1.0 сохраняются как базовые:

- Mission.
- MissionRun.
- EpistemicGraph.
- EpistemicNode.
- ReasoningEdge.
- DomainBoundary.
- Source / EvidenceSet.
- EvidenceRef.
- LivingArtifact.
- ArtifactPatch.
- ApprovalRequest.
- DecisionRecord.
- ConflictCard.
- TraceEvent.
- IdempotencyKey.
- PostgreSQL-first persistence.
- Secure MCP bridge.
- Lightweight MVP runner behind DurableRuntimePort.
- Neutral Demo Shell / Universal Mission Room as validation surface.

### 4.2. Добавляется

В v1.1 добавляются:

- AdequacyDimension.
- AdequacyCriterion.
- AdequacyProfile.
- AdequacyMatrix.
- AdequacyWeight.
- AdequacyScore.
- AdequacyAssessment.
- HumanAdequacyRating.
- DerivedAdequacyCalculation.
- AdequacyPenalty.
- AdequacyOverride.
- AdequacyMethodVersion.
- AdequacyTrace.
- AdequacyDelta.
- AdequacyReport.
- TemplateAdequacyProfile.

### 4.3. Уточняется

В v1.0 уже была идея strength/status у EpistemicNode. В v1.1 это не заменяется числовой “истиной”. Вводится другая сущность:

```text
Adequacy Score = пригодность артефакта для конкретной миссии.
```

Это не абсолютная истина и не универсальная оценка качества. Это расчетный показатель, зависящий от:

- цели миссии;
- типа артефакта;
- профиля адекватности;
- человеческой оценки исходных артефактов;
- evidence coverage;
- traceability;
- completeness;
- risk handling;
- temporal freshness;
- unresolved conflicts;
- approval state;
- template compliance.

---

## 5. Продуктовое позиционирование v1.1

### 5.1. Внутреннее позиционирование

Для команды и архитектуры:

```text
EpiOS v1.1 — это operating layer для создания, проверки,
измерения адекватности и сопровождения AI-assisted artifacts.
```

### 5.2. Внешнее позиционирование

Для рынка:

```text
EpiOS помогает командам использовать ИИ в критических рабочих процессах
без потери управляемости, доверия и аудита.
```

Более жесткая формулировка:

```text
EpiOS is a measurable trust layer for enterprise AI decisions.
```

### 5.3. Первый продуктовый shell

Первый коммерчески понятный shell:

```text
EpiOS for Engineering Decisions
```

Фокус:

- ADR.
- RFC.
- Architecture Notes.
- Project Plans.
- Technical Decision Memos.
- Architecture Review Reports.

Почему этот shell подходит первым:

1. Уже совпадает с текущим Universal Mission Room.
2. Требует evidence, trade-off и decision trace.
3. Имеет понятную боль: архитектурные решения часто принимаются на слабых основаниях, теряются в чатах, документах и устных договоренностях.
4. Позволяет показать Adequacy Layer без регуляторной перегрузки.
5. Может быть расширен в enterprise AI governance позже.

---

## 6. Структура продукта

### 6.1. EpiOS Core

EpiOS Core — универсальное ядро.

Отвечает за:

- Missions.
- Epistemic graph.
- Evidence and boundaries.
- Artifact lifecycle.
- Approvals and decisions.
- Trace and audit.
- Policies.
- Runtime.
- Idempotency.

Не отвечает за:

- отраслевую терминологию;
- конкретный UX под отрасль;
- частные workflow конкретного клиента;
- pricing;
- бизнес-правила отраслевого shell;
- прямое хранение секретов;
- принятие человеческих решений за пользователя.

### 6.2. Adequacy Layer

Adequacy Layer — новый слой v1.1.

Отвечает за:

- хранение профилей адекватности;
- прием человеческих оценок исходных артефактов;
- расчет адекватности производных артефактов;
- расчет влияния событий на адекватность;
- объяснение итогового показателя;
- версионирование методики расчета;
- контроль score laundering;
- поддержку Adequacy Reports.

Не отвечает за:

- абсолютную оценку истины;
- замену human decision;
- скрытое ранжирование людей или команд;
- автоматическое approval высокорисковых действий;
- подмену evidence и domain boundaries.

### 6.3. Governance / Trust Layer

Отвечает за:

- policy checks;
- risk gates;
- human-in-the-loop;
- audit trail;
- approval requirements;
- redaction;
- idempotency;
- external action control;
- security events.

### 6.4. Template Library

Template Library — библиотека готовых преднастроенных решений.

Шаблон должен задавать:

- тип миссии;
- структуру брифа;
- ожидаемые входные источники;
- типы артефактов;
- default workflow;
- AdequacyProfile;
- веса коэффициентов;
- risk policy;
- approval policy;
- artifact templates;
- MCP Apps composition;
- seed examples;
- acceptance criteria.

Принцип:

```text
Внутри EpiOS остается универсальным.
Снаружи пользователь видит готовое отраслевое решение.
```

### 6.5. Product Shells

Shell — пользовательская упаковка вокруг Core + Template.

Первый shell:

```text
EpiOS for Engineering Decisions
```

Будущие shell-кандидаты:

- EpiOS for Legal Review.
- EpiOS for Product Planning.
- EpiOS for Compliance Documentation.
- EpiOS for Investment Memos.
- EpiOS for Regulated AI Decision Support.

---

## 7. Многомерная шкала адекватности

### 7.1. Определение

Адекватность — это степень пригодности артефакта для заданной миссии с учетом:

- целей;
- контекста;
- источников;
- доказательств;
- полноты;
- рисков;
- ограничений;
- актуальности;
- решений человека;
- трассируемости;
- соответствия шаблону.

Формально:

```text
AdequacyScore = weighted assessment of artifact fitness for mission context.
```

Не является:

- абсолютной истинностью;
- гарантией правильности;
- юридическим заключением;
- заменой экспертного решения;
- универсальным качественным рейтингом.

### 7.2. Коэффициент адекватности, КА

КА — числовая оценка от 0 до 100.

```text
0   = непригодно / неадекватно для данной миссии
50  = частично пригодно, требует существенных оговорок
70  = рабочая пригодность с заметными ограничениями
85  = высокая пригодность
100 = эталонная пригодность в рамках данного профиля
```

Важно:

```text
КА всегда должен иметь scope.
```

Нельзя говорить:

```text
“Артефакт имеет КА 82”
```

Нужно говорить:

```text
“Артефакт имеет КА 82 по профилю Engineering Decision v0.1
для миссии M-123, при таких-то источниках, весах и штрафах.”
```

### 7.3. Кто выставляет КА

Есть два класса артефактов.

#### 7.3.1. Внешние исходные артефакты

Примеры:

- документы клиента;
- старые ADR;
- RFC;
- GitHub issue;
- PR description;
- Confluence page;
- Jira/Linear ticket;
- исследовательский отчет;
- письмо;
- протокол встречи;
- техническое задание.

Правило:

```text
КА исходному внешнему артефакту проставляет человек.
```

Система может предложить предварительную оценку, но она не становится authoritative без человеческого подтверждения.

#### 7.3.2. Внутренние производные артефакты

Примеры:

- EpistemicNode;
- EvidenceRef;
- ArtifactPatch;
- LivingArtifact version;
- DecisionRecord;
- ConflictCard;
- итоговый отчет;
- adequacy report;
- trace segment.

Правило:

```text
КА внутреннего производного артефакта рассчитывает система.
```

Но система обязана показать:

- профиль расчета;
- веса;
- исходные оценки;
- штрафы;
- ограничения;
- события, повлиявшие на расчет;
- версию методики.

---

## 8. Adequacy Matrix v0.1

### 8.1. Базовые измерения

Предварительный универсальный набор измерений:

| Dimension | Смысл | Кто влияет | Пример фактора |
|---|---|---|---|
| Source Adequacy | насколько исходные артефакты пригодны | человек + система | human rating, source quality |
| Evidence Coverage | насколько выводы покрыты evidence | система | доля сильных claims с evidence |
| Traceability | можно ли восстановить путь рассуждения | система | node → evidence → patch → decision |
| Boundary Clarity | указаны ли границы применимости | система + человек | scope, excluded scopes |
| Temporal Freshness | актуальны ли источники и выводы | система | stale / expired evidence |
| Consistency | нет ли нерешенных противоречий | система | open conflicts |
| Completeness | покрыты ли success criteria миссии | система + человек | criteria coverage |
| Risk Handling | выявлены ли риски и обработаны ли они | система + человек | risk nodes, mitigations |
| Decision Quality | есть ли нужные человеческие решения | человек + система | approved, rejected, rationale |
| Actionability | можно ли использовать артефакт для действия | система + человек | concrete next steps |
| Template Compliance | соответствует ли отраслевому шаблону | система | required sections, format |
| Security / Compliance | соблюдены ли ограничения безопасности | система + policy | redaction, approvals, no secrets |

### 8.2. Формула

Базовая формула:

```text
WeightedAdequacy = Σ(score_i × weight_i) / Σ(weight_i)

FinalAdequacy = clamp(
  WeightedAdequacy
  - Penalties
  + ApprovedBonuses,
  0,
  100
)
```

Но бонусы должны применяться осторожно. Человеческое approval не должно автоматически повышать фактическую доказательность. Оно может повысить Decision Quality, но не Evidence Coverage.

### 8.3. Вес измерения

Каждое измерение имеет вес:

```text
weight: 0..1 или 0..100
```

Для читаемости в продукте лучше использовать проценты, сумма весов профиля = 100.

Пример для Engineering Decision Profile:

| Dimension | Weight |
|---|---:|
| Evidence Coverage | 20 |
| Traceability | 15 |
| Boundary Clarity | 10 |
| Consistency | 15 |
| Risk Handling | 15 |
| Decision Quality | 10 |
| Completeness | 10 |
| Temporal Freshness | 5 |

### 8.4. Штрафы

Penalties применяются за критические дефекты.

Примеры:

| Condition | Penalty |
|---|---:|
| Есть high/critical unresolved conflict | -20 |
| High-risk patch без approval | hard block |
| Strong claim без evidence | hard downgrade / -15 |
| Источник stale без boundary | -10 |
| Нет rationale у DecisionRecord | -8 |
| Нет trace для artifact mutation | hard block |
| External write без idempotency key | hard block |
| Source Adequacy ключевых источников < 40 | cap итогового КА |

### 8.5. Ceiling / Cap rules

Нужны правила потолка, чтобы избежать score laundering.

Пример:

```text
Если ключевые source artifacts имеют средний HumanAdequacyRating < 50,
то итоговый LivingArtifactAdequacy не может быть выше 70
без explicit AdequacyOverride от человека.
```

Еще пример:

```text
Если более 30% ключевых claims имеют status=hypothesis_only,
то итоговый ArtifactAdequacy не может быть выше 75.
```

Еще пример:

```text
Если high-risk decision не имеет DecisionRecord.rationale,
то итоговый ArtifactAdequacy не может быть выше 80.
```

---

## 9. Adequacy Profiles

### 9.1. Назначение

AdequacyProfile задает методику оценки для конкретного типа миссии или шаблона.

Профиль определяет:

- список измерений;
- веса;
- шкалы;
- threshold;
- penalties;
- cap rules;
- hard block rules;
- required human ratings;
- типы артефактов, к которым применим профиль;
- версию методики.

### 9.2. Пример профиля: Engineering Decision v0.1

```yaml
profileId: engineering-decision-v0-1
name: Engineering Decision Adequacy Profile
appliesTo:
  artifactTypes:
    - architecture_decision_record
    - request_for_comments
    - technical_decision_memo
methodVersion: 0.1
scale: 0..100
dimensions:
  evidence_coverage:
    weight: 20
    minRequired: 60
  traceability:
    weight: 15
    minRequired: 70
  boundary_clarity:
    weight: 10
    minRequired: 50
  consistency:
    weight: 15
    minRequired: 70
  risk_handling:
    weight: 15
    minRequired: 65
  decision_quality:
    weight: 10
    minRequired: 60
  completeness:
    weight: 10
    minRequired: 70
  temporal_freshness:
    weight: 5
    minRequired: 50
hardBlocks:
  - artifact_mutation_without_trace
  - high_risk_patch_without_approval
  - external_write_without_idempotency_key
caps:
  - condition: key_source_average_below_50
    maxScore: 70
  - condition: unresolved_critical_conflict
    maxScore: 60
```

### 9.3. Профили должны быть версионируемыми

Нельзя менять методику молча.

Правило:

```text
Любой расчет AdequacyAssessment хранит methodVersion.
```

Если профиль меняется, новый расчет должен ссылаться на новую версию.

---

## 10. Новые доменные сущности v1.1

### 10.1. AdequacyDimension

Ответственность:

- описывает одну ось оценки;
- определяет диапазон;
- указывает способ расчета;
- определяет применимость к типам артефактов.

Контракт:

```ts
type AdequacyDimension = {
  dimensionId: string;
  code: string;
  name: string;
  description: string;
  scoreRange: { min: 0; max: 100 };
  appliesTo: ArtifactSubjectType[];
  calculationKind: 'human_rating' | 'system_calculated' | 'hybrid';
};
```

### 10.2. AdequacyProfile

Ответственность:

- группирует измерения;
- задает веса;
- задает пороги;
- задает penalties/caps;
- является версионируемой методикой.

Контракт:

```ts
type AdequacyProfile = {
  profileId: string;
  code: string;
  version: string;
  name: string;
  appliesToMissionTypes: string[];
  appliesToArtifactTypes: string[];
  dimensions: AdequacyProfileDimension[];
  penalties: AdequacyPenaltyRule[];
  caps: AdequacyCapRule[];
  hardBlocks: AdequacyHardBlockRule[];
  status: 'draft' | 'active' | 'deprecated' | 'archived';
  createdAt: string;
};

type AdequacyProfileDimension = {
  dimensionId: string;
  weight: number;
  minRequired?: number;
  target?: number;
};
```

### 10.3. HumanAdequacyRating

Ответственность:

- хранит человеческую оценку исходного внешнего артефакта;
- фиксирует rationale;
- сохраняет actor, timestamp и profile version.

Контракт:

```ts
type HumanAdequacyRating = {
  ratingId: string;
  missionId: MissionId;
  subjectType: 'source' | 'external_artifact';
  subjectRef: string;
  profileId: string;
  methodVersion: string;
  dimensionScores: DimensionScore[];
  overallScore?: number;
  rationale: string;
  actor: ActorRef;
  createdAt: string;
};
```

Инварианты:

```text
- Human rating cannot be created by actorType=system.
- Human rating must include rationale when score < 60 or score > 90.
- Human rating is immutable; correction creates a new rating version.
```

### 10.4. AdequacyAssessment

Ответственность:

- хранит расчетную оценку артефакта;
- содержит измерения, веса, penalties, caps;
- объясняет итоговый score;
- связывает оценку с TraceEvent.

Контракт:

```ts
type AdequacyAssessment = {
  assessmentId: string;
  missionId: MissionId;
  subjectType:
    | 'source'
    | 'epistemic_node'
    | 'evidence_ref'
    | 'artifact_patch'
    | 'living_artifact_version'
    | 'decision_record'
    | 'trace_event'
    | 'mission_run';
  subjectRef: string;
  profileId: string;
  methodVersion: string;
  dimensionScores: DimensionScore[];
  weightedScore: number;
  penalties: AppliedAdequacyPenalty[];
  caps: AppliedAdequacyCap[];
  finalScore: number;
  explanation: string;
  calculatedBy: ActorRef;
  sourceRatingRefs: string[];
  evidenceRefs: EvidenceId[];
  traceEventRefs: string[];
  createdAt: string;
};

type DimensionScore = {
  dimensionId: string;
  score: number;
  weight: number;
  basis: string;
  confidence: 'low' | 'medium' | 'high';
};
```

Инварианты:

```text
- Assessment must reference active or explicitly pinned profile version.
- finalScore must be within 0..100.
- System-calculated assessment must include calculation basis.
- Assessment for derived artifact must include at least one source rating or explain absence.
- Critical hard block prevents artifact promotion regardless of score.
```

### 10.5. AdequacyDelta

Ответственность:

- фиксирует изменение адекватности после события;
- показывает before/after;
- используется в отчетах и TraceDrawer.

Контракт:

```ts
type AdequacyDelta = {
  deltaId: string;
  missionId: MissionId;
  traceEventId: string;
  subjectType: string;
  subjectRef: string;
  beforeAssessmentId?: string;
  afterAssessmentId: string;
  beforeScore?: number;
  afterScore: number;
  delta: number;
  affectedDimensions: DimensionDelta[];
  explanation: string;
  createdAt: string;
};

type DimensionDelta = {
  dimensionId: string;
  before?: number;
  after: number;
  delta: number;
  reason: string;
};
```

---

## 11. Adequacy на уровне событий

### 11.1. Требование

В любом отчете EpiOS должен быть виден уровень адекватности каждого значимого события.

Практически это означает:

```text
TraceEvent должен быть связан с AdequacyAssessment или AdequacyDelta,
если событие влияет на состояние миссии, артефакта, решения или evidence.
```

### 11.2. Какие события требуют AdequacyDelta

Минимум:

- source.ingested.
- source.human_rated.
- epistemic.node_created.
- epistemic.node_downgraded.
- evidence.ref_created.
- evidence.citation_invalid.
- artifact.patch_proposed.
- artifact.patch_applied.
- approval.created.
- approval.resolved.
- decision.recorded.
- conflict.created.
- conflict.resolved.
- policy.denied.
- policy.approval_required.
- external_action.proposed.
- external_action.executed.

### 11.3. Пример отчета события

```text
Event: artifact.patch_proposed
Subject: patch:PATCH-123
Adequacy before: 61
Adequacy after: 74
Delta: +13
Affected dimensions:
  evidence_coverage: +20
  traceability: +14
  completeness: +8
  temporal_freshness: -3
Applied penalties:
  stale_source_present: -5
Explanation:
  Patch adds evidence references to 4 previously weak claims,
  but still depends on one stale source without revalidation.
```

---

## 12. Производный расчет КА

### 12.1. Общий подход

Производный артефакт наследует ограничения от своих оснований.

```text
Derived Artifact Adequacy depends on:
- source human ratings;
- node adequacy;
- evidence validity;
- boundary clarity;
- decision state;
- trace completeness;
- risk policy;
- template requirements.
```

### 12.2. Расчет для EpistemicNode

Для EpistemicNode:

```text
NodeAdequacy = f(
  evidence validity,
  source adequacy,
  temporal validity,
  boundary clarity,
  contradiction status,
  node type,
  human assertion state
)
```

Пример правил:

```text
- source_supported node получает базовый boost.
- contradicted node получает penalty или требует decision.
- unsupported system-generated claim не может быть strong.
- expired node не может поддерживать high adequacy patch без revalidation.
```

### 12.3. Расчет для ArtifactPatch

Для ArtifactPatch:

```text
PatchAdequacy = f(
  referenced node adequacy,
  evidence coverage,
  reason quality,
  risk class,
  approval requirement,
  baseVersion validity,
  expected adequacy delta
)
```

Пример правил:

```text
- Patch without reason = hard block.
- High-risk patch without approval = hard block.
- Patch referencing weak/hypothesis nodes gets capped.
- Patch that increases evidence coverage but adds unresolved risk may improve some dimensions and reduce others.
```

### 12.4. Расчет для LivingArtifact

Для LivingArtifact version:

```text
ArtifactAdequacy = f(
  section coverage,
  patch history,
  node/evidence graph,
  unresolved conflicts,
  decision records,
  template compliance,
  source adequacy caps,
  risk handling,
  trace completeness
)
```

Пример threshold:

```text
0..49   Not ready
50..69  Needs review
70..84  Usable with limitations
85..94  Strong
95..100 Exceptional / requires manual review if suspiciously high
```

Оценки выше 95 должны требовать explainability review, чтобы не создавать иллюзию абсолютной правильности.

---

## 13. UI / UX изменения

### 13.1. Adequacy Panel

В Mission Room добавить панель:

```text
Adequacy Panel
```

Показывает:

- итоговый КА текущего артефакта;
- breakdown по измерениям;
- источники снижения;
- hard blocks;
- unresolved conflicts;
- required human actions;
- adequacy trend over mission;
- method version.

### 13.2. Adequacy Badge

Каждый значимый объект получает badge:

```text
Source: Human KA 62
Node: System KA 74
Patch: Expected +11
Artifact: KA 81 / Engineering Decision v0.1
Event: Δ +8
```

### 13.3. Adequacy Matrix View

Табличный вид:

| Subject | Type | KA | Key Weakness | Required Action |
|---|---|---:|---|---|
| Source A | External source | 55 | stale / incomplete | human re-rate or replace |
| Node N1 | Claim | 72 | weak boundary | add boundary |
| Patch P1 | ArtifactPatch | 80 | risk rationale thin | improve rationale |
| Artifact v3 | ADR | 76 | unresolved trade-off | create decision |

### 13.4. Adequacy Explanation

Каждый score должен иметь объяснение:

```text
Why this score?
```

Ответ должен быть не LLM-магией, а ссылкой на расчет:

- used dimensions;
- weights;
- source ratings;
- penalties;
- caps;
- trace events;
- unresolved blockers.

---

## 14. MCP Apps v1.1

### 14.1. Существующие обязательные Apps

Сохраняются:

- ClaimApp.
- EvidenceViewer.
- ApprovalApp.

### 14.2. Новые Apps

Добавить:

```text
AdequacyMatrixApp
```

Цель: интерактивно показывать матрицу адекватности по артефакту, миссии или событию.

Allowed actions:

- read adequacy assessment;
- request explanation;
- submit human rating for source;
- request recalculation;
- request adequacy override;
- open evidence/source details.

Must not do:

- silently change source rating;
- approve own override;
- change profile weights directly;
- bypass policy;
- mutate artifact;
- hide penalties.

### 14.3. HumanSourceRatingApp

Цель: человек выставляет КА исходным внешним артефактам.

Allowed actions:

- submit human rating;
- submit rationale;
- mark source as not usable;
- request additional source.

Must not do:

- create rating as system actor;
- overwrite previous rating;
- hide rating history;
- change source content.

---

## 15. Application Layer v1.1

### 15.1. Новые use cases

```text
CreateAdequacyProfile
ActivateAdequacyProfile
RateExternalArtifact
CalculateDerivedAdequacy
RecalculateArtifactAdequacy
RecalculateMissionAdequacy
ExplainAdequacyScore
GetAdequacyMatrix
GetAdequacyTrace
CreateAdequacyOverrideRequest
ResolveAdequacyOverride
GetEventAdequacyDelta
```

### 15.2. Use case: RateExternalArtifact

Ответственность:

- принять human rating;
- проверить actor;
- проверить профиль;
- сохранить immutable rating;
- инициировать recalculation downstream;
- записать trace event.

Вход:

```ts
type RateExternalArtifactCommand = {
  missionId: string;
  subjectType: 'source' | 'external_artifact';
  subjectRef: string;
  profileId: string;
  dimensionScores: Array<{
    dimensionId: string;
    score: number;
    rationale?: string;
  }>;
  overallRationale: string;
  idempotencyKey: string;
};
```

Выход:

```ts
type RateExternalArtifactResult = {
  ratingId: string;
  traceEventId: string;
  recalculationScheduled: boolean;
};
```

### 15.3. Use case: CalculateDerivedAdequacy

Ответственность:

- собрать входные зависимости;
- применить профиль;
- применить penalties/caps;
- сохранить assessment;
- создать AdequacyDelta при наличии previous assessment;
- записать trace event.

### 15.4. Use case: ExplainAdequacyScore

Ответственность:

- вернуть объяснимую структуру расчета;
- не генерировать произвольное объяснение без опоры на расчет;
- показывать score basis и weak points.

---

## 16. Policy Layer v1.1

Adequacy влияет на policy, но не заменяет ее.

### 16.1. Policy examples

```text
If ArtifactAdequacy < 70:
  artifact cannot be marked approved.

If EvidenceCoverage < 60:
  high-risk recommendation requires explicit human override.

If SourceAdequacy key average < 50:
  final report must show source weakness warning.

If Traceability < 80:
  external action must be blocked.

If unresolved critical conflict exists:
  mission cannot complete.
```

### 16.2. Approval escalation

Adequacy threshold может автоматически создавать ApprovalRequest:

```text
low adequacy + high impact = approval required
```

Пример:

```text
Patch riskClass=high
AND expected artifact adequacy < 75
→ approval required with warning.
```

### 16.3. Adequacy Override

Человек может переопределить ограничение, но только явно.

```text
AdequacyOverride requires:
- subject;
- reason;
- actor;
- risk acknowledgement;
- expiration or scope;
- trace event;
- DecisionRecord.
```

Override не переписывает score. Он разрешает действие несмотря на score.

---

## 17. Persistence v1.1

### 17.1. Новые таблицы

Предварительно:

```text
adequacy_profiles
adequacy_profile_dimensions
adequacy_dimension_definitions
human_adequacy_ratings
adequacy_assessments
adequacy_dimension_scores
adequacy_penalties_applied
adequacy_caps_applied
adequacy_deltas
adequacy_overrides
```

### 17.2. Общие правила

- Все оценки immutable.
- Коррекция создает новую запись.
- Все расчеты хранят methodVersion.
- Assessment должен ссылаться на profile version.
- AdequacyDelta должен ссылаться на TraceEvent.
- HumanAdequacyRating должен ссылаться на ActorRef.
- Профили можно deprecate, но нельзя менять задним числом.

### 17.3. Append-only для assessment history

Не обновлять старые оценки на месте.

Правильно:

```text
assessment_v1 → assessment_v2 → assessment_v3
```

Неправильно:

```text
UPDATE assessment SET final_score = 84 WHERE id = ...
```

Исключение: технические поля обработки, не влияющие на смысл.

---

## 18. Observability v1.1

### 18.1. Новые TraceEvent types

```text
adequacy.profile_created
adequacy.profile_activated
adequacy.source_rated
adequacy.assessment_calculated
adequacy.assessment_failed
adequacy.delta_recorded
adequacy.cap_applied
adequacy.penalty_applied
adequacy.hard_block_triggered
adequacy.override_requested
adequacy.override_resolved
adequacy.recalculation_requested
```

### 18.2. Обязательные поля

```ts
type AdequacyTracePayload = {
  profileId: string;
  methodVersion: string;
  subjectType: string;
  subjectRef: string;
  assessmentId?: string;
  finalScore?: number;
  previousScore?: number;
  delta?: number;
  appliedPenaltyCodes?: string[];
  appliedCapCodes?: string[];
  hardBlockCodes?: string[];
};
```

### 18.3. Отчеты

Любой отчет должен иметь секцию:

```text
Adequacy Summary
```

Минимум:

- итоговый score;
- профиль;
- версия методики;
- top strengths;
- top weaknesses;
- unresolved blockers;
- source rating summary;
- event adequacy timeline.

---

## 19. Template Library v1.1

### 19.1. Template как продуктовый слой

Template — это не просто prompt.

Template включает:

```text
MissionTemplate
ArtifactTemplate
AdequacyProfile
PolicyProfile
ApprovalProfile
SourceRequirementProfile
MCPAppComposition
SeedData
DemoScript
AcceptanceCriteria
```

### 19.2. Engineering Decision Template

Первый шаблон:

```text
engineering-decision-template-v0-1
```

Mission types:

- create_adr.
- review_adr.
- create_rfc.
- review_architecture_tradeoff.
- produce_decision_memo.

Required sources:

- problem statement;
- constraints;
- alternatives;
- current architecture notes;
- stakeholder requirements;
- existing ADR/RFC if any.

Required artifact sections:

- Context.
- Problem.
- Decision.
- Alternatives.
- Evidence.
- Consequences.
- Risks.
- Open Questions.
- Approval / Decision Record.
- Adequacy Summary.

Required adequacy dimensions:

- Evidence Coverage.
- Traceability.
- Risk Handling.
- Consistency.
- Boundary Clarity.
- Completeness.
- Decision Quality.

### 19.3. Template lifecycle

```text
Draft → Internal Validated → Design Partner Validated → Active → Deprecated
```

Нельзя активировать шаблон без:

- profile version;
- acceptance criteria;
- at least one demo scenario;
- seed data;
- test matrix;
- known limitations.

---

## 20. Первый MVP v1.1

### 20.1. MVP Objective

Доказать, что EpiOS может:

```text
создать или улучшить инженерный decision artifact
с evidence, human approval, trace и расчетной матрицей адекватности.
```

### 20.2. Минимальный end-to-end flow

```text
1. Create Mission from Engineering Decision Template.
2. Add/paste source material.
3. Human rates source adequacy.
4. System extracts EpistemicNodes.
5. System attaches EvidenceRefs.
6. System calculates Node Adequacy.
7. System proposes ArtifactPatch.
8. System calculates expected Artifact Adequacy Delta.
9. Human reviews patch in ApprovalApp.
10. Human approves/rejects/edits.
11. System applies patch.
12. System creates ArtifactVersion.
13. System calculates final Artifact Adequacy.
14. TraceDrawer shows event timeline with adequacy deltas.
15. AdequacyMatrixApp shows score breakdown.
```

### 20.3. MVP in-scope

- One product shell: Engineering Decisions.
- One or two artifact types: ADR and Decision Memo.
- HumanAdequacyRating for sources.
- AdequacyProfile v0.1.
- AdequacyAssessment for source, node, patch, artifact version, trace event.
- AdequacyDelta for key events.
- AdequacyMatrixApp MVP.
- Adequacy Summary in generated artifact.
- PostgreSQL persistence.
- Trace event extensions.
- Domain invariant tests for adequacy.

### 20.4. MVP out-of-scope

- Full enterprise compliance package.
- Cryptographic hash-chain audit trail.
- Full event sourcing.
- Billing.
- Multi-tenant SaaS.
- Generic template marketplace.
- Automatic truth scoring.
- User-facing “objective truth” score.
- Production-grade graph database.
- Autonomous external writes.
- Dynamic no-code workflow builder.

---

## 21. Security and abuse risks

### 21.1. Score laundering

Риск:

```text
Система превращает слабые источники в высокий итоговый score.
```

Mitigation:

- source adequacy caps;
- visible source rating summary;
- hard penalties for weak evidence;
- explanation required;
- human override only as override, not score rewrite.

### 21.2. False authority

Риск:

```text
Пользователь воспринимает КА как истину.
```

Mitigation:

- wording: “adequacy for mission”, not “truth”.
- show profile and method version.
- show limitations.
- avoid single number without matrix.

### 21.3. Hidden methodology drift

Риск:

```text
Оценки меняются из-за изменения методики, но пользователь этого не видит.
```

Mitigation:

- methodVersion required;
- immutable assessments;
- explicit recalculation events;
- report includes profile version.

### 21.4. Human rubber-stamping

Риск:

```text
Человек механически ставит высокие оценки источникам.
```

Mitigation:

- rationale required for extreme scores;
- review queue for ratings > 90 or < 30;
- rating history;
- optional second reviewer for high-risk missions.

### 21.5. UI manipulation

Риск:

```text
MCP iframe пытается скрыть penalties или изменить score.
```

Mitigation:

- UI is read/request only;
- backend owns calculation;
- all messages validated;
- audit all rating/override commands;
- no secrets or business logic in iframe.

---

## 22. Testing strategy v1.1

### 22.1. Unit tests

Проверить:

- score range 0..100;
- weight normalization;
- penalty application;
- cap application;
- hard block handling;
- human rating actorType restriction;
- immutable rating correction;
- assessment versioning;
- source adequacy cap.

### 22.2. Domain invariant tests

Проверить:

```text
- System cannot create HumanAdequacyRating.
- Artifact cannot be approved if hard block active.
- Strong claim without evidence lowers adequacy and/or triggers downgrade.
- Assessment cannot be calculated without profile version.
- Override does not mutate score.
- Critical conflict caps final artifact adequacy.
```

### 22.3. Integration tests

Проверить:

- storing profile;
- storing ratings;
- recalculation cascade;
- trace event + adequacy delta consistency;
- artifact patch apply recalculates artifact assessment;
- immutable history.

### 22.4. Contract tests

Проверить:

- DTO schemas for rating;
- AdequacyMatrixApp commands;
- API error contract;
- profile schema;
- trace event schema.

### 22.5. Security tests

Проверить:

- iframe cannot submit rating without capability;
- replayed nonce rejected;
- rating command without idempotency rejected;
- override without approval rejected;
- score payload cannot be spoofed from UI;
- source rating cannot be created by system actor.

### 22.6. E2E smoke

Сценарий:

```text
Create ADR mission
→ rate sources
→ extract nodes
→ propose patch
→ see expected adequacy delta
→ approve patch
→ final artifact shows Adequacy Summary
→ trace shows adequacy timeline
```

---

## 23. Acceptance criteria for concept approval

Концепт v1.1 считается согласованным, если принято следующее:

1. EpiOS v1.1 позиционируется как measurable trust layer / epistemic OS for enterprise AI.
2. Adequacy Layer добавляется как базовый слой, а не как UI-декорация.
3. КА внешних исходных артефактов выставляет человек.
4. КА внутренних производных артефактов рассчитывает система.
5. КА не является оценкой абсолютной истины.
6. Любой score должен иметь profile, methodVersion и explanation.
7. TraceEvent должен уметь показывать adequacy delta для значимых событий.
8. Первый shell — Engineering Decisions.
9. Первый шаблон — ADR/RFC/Decision Memo.
10. MVP v1.1 остается узким и не превращается в enterprise platform сразу.
11. Full event sourcing не принимается автоматически; append-only trace/outbox достаточно для MVP.
12. Confidence Score как user-facing truth score запрещен.
13. Adequacy override разрешает действие, но не переписывает расчет.
14. Adequacy methodology должна быть версионируемой.

---

## 24. ADR changes required

Нужно добавить новые ADR:

```text
ADR-0027 — Introduce Adequacy Layer in EpiOS v1.1
ADR-0028 — Treat Adequacy Score as Mission-Scoped Fitness, Not Truth Score
ADR-0029 — Human-Rated External Source Adequacy
ADR-0030 — System-Calculated Derived Artifact Adequacy
ADR-0031 — Versioned Adequacy Profiles and Method Versions
ADR-0032 — Adequacy Delta in Trace Events
ADR-0033 — Use Engineering Decisions as First Product Shell
ADR-0034 — Use Template Library for Vertical Productization
```

Возможные ADR later:

```text
ADR-0035 — Hash-Chained Audit Trail for Enterprise Tier
ADR-0036 — Event Sourcing vs Append-Only Trace for Adequacy History
ADR-0037 — Adequacy Override Governance
```

---

## 25. Required specs after concept approval

После согласования концепта нужны документы:

```text
EPIOS-12 — Adequacy Layer Domain Model
EPIOS-13 — Adequacy Scoring Methodology v0.1
EPIOS-14 — Engineering Decision Template Specification
EPIOS-15 — Adequacy API and Use Case Contracts
EPIOS-16 — Adequacy Persistence and Migration Plan
EPIOS-17 — Adequacy UI / MCP Apps Specification
EPIOS-18 — EpiOS v1.1 Sprint Roadmap
```

---

## 26. Open questions

### 26.1. Методология

1. Сколько базовых измерений должно быть в universal profile?
2. Нужны ли разные шкалы для разных типов артефактов?
3. Должна ли сумма весов всегда быть 100?
4. Какие penalties должны быть hard block, а какие только снижением score?
5. Как часто можно пересчитывать assessment?
6. Нужно ли показывать confidence расчета самой системы?

### 26.2. Human rating

1. Должен ли один человек выставлять КА источнику или нужен reviewer?
2. Какие scores требуют обязательного rationale?
3. Можно ли импортировать rating из доверенного внешнего источника?
4. Как хранить disagreement между двумя людьми?

### 26.3. Product shell

1. Первый shell точно Engineering Decisions или шире — “Decision Governance”?
2. Первый artifact — ADR, RFC или Decision Memo?
3. Нужно ли поддерживать GitHub/Markdown export в MVP v1.1?
4. Нужно ли сразу делать template registry или достаточно статического template seed?

### 26.4. Architecture

1. Нужен ли отдельный `packages/adequacy` или это часть `packages/domain`?
2. Нужен ли отдельный AdequacyRepositoryPort?
3. Должен ли recalculation быть синхронным или через outbox?
4. Где хранить calculation explanation: JSONB или normalized tables?
5. Нужна ли hash-chain audit в v1.1 или позже?

---

## 27. Предварительные архитектурные решения

### 27.1. Adequacy Layer как domain module

Рекомендация:

```text
Adequacy Layer начинается как domain/application module,
а не отдельный сервис.
```

Причина:

- тесно связан с Mission, Evidence, Artifact, Decision;
- быстрее для MVP;
- проще обеспечить транзакционные инварианты;
- меньше риска premature distributed architecture.

### 27.2. Recalculation through application use case

Рекомендация:

```text
Recalculation выполняется application use case,
может быть triggered синхронно для MVP и через outbox позже.
```

### 27.3. No full Event Sourcing in MVP

Рекомендация:

```text
Не вводить full event sourcing в v1.1 MVP.
Использовать append-only trace, immutable assessments,
outbox events and versioned artifacts.
```

Причина:

- снижает сложность;
- соответствует текущей PostgreSQL-first модели;
- достаточно для аудита и объяснения;
- не закрывает путь к event sourcing later.

### 27.4. Adequacy score is explainable, not predictive

Рекомендация:

```text
КА v0.1 считать explainable heuristic score,
а не ML prediction.
```

Причина:

- проще тестировать;
- проще объяснять;
- меньше риск false authority;
- лучше подходит к ранней стадии.

---

## 28. Concept-level success criteria

EpiOS v1.1 успешен на уровне концепта, если по нему можно подготовить sprint roadmap, где каждая фича имеет:

- доменную ответственность;
- application use case;
- API/DTO contract;
- persistence impact;
- trace events;
- adequacy impact;
- test plan;
- acceptance criteria.

Минимальный демонстрационный результат v1.1:

```text
Пользователь создает инженерную миссию,
оценивает исходные источники,
получает ADR/Decision Memo,
видит матрицу адекватности,
понимает, какие события повысили/снизили адекватность,
и может принять решение с traceable rationale.
```

---

## 29. Итоговая формула

```text
EpiOS v1.1 = Epistemic OS
  where every meaningful AI-assisted artifact is:
    source-grounded,
    boundary-aware,
    human-governed,
    policy-controlled,
    traceable,
    and measured by a versioned adequacy matrix.
```

Короткая русская формула:

```text
EpiOS v1.1 — система, которая не просто генерирует артефакты,
а делает их проверяемыми, управляемыми и измеримо адекватными.
```

---

## 30. Следующий шаг

После согласования этого концепта следующий документ:

```text
EPIOS-18 — EpiOS v1.1 Sprint Roadmap
```

Он должен разложить работу по этапам:

1. Stabilization / documentation alignment.
2. Adequacy domain model.
3. Adequacy persistence.
4. Adequacy calculation engine.
5. Source human rating workflow.
6. Artifact adequacy calculation.
7. Adequacy trace/delta.
8. Adequacy UI/MCP apps.
9. Engineering Decision Template.
10. End-to-end demo hardening.
11. Security and release gates.
12. Design partner validation.

