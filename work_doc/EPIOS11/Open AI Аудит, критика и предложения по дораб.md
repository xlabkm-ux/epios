Я прочитал оба документа: рабочий концепт EpiOS v1.1 и sprint development plan. Ниже — исследовательская критика и конкретные предложения по усилению. Основано на `EPIOS v1.1 — рабочий концепт` и `EPIOS v1.1 — развернутый поэтапный план спринтов разработки`.  

## 1. Общий вердикт

Концепт сильный. У него есть редкое для AI-продуктов качество: он не пытается продавать “умного агента”, а строит **контур доверия, трассируемости и управляемости вокруг AI-assisted artifacts**.

Главная ценность EpiOS v1.1 сейчас не в “Adequacy Score” как числе, а в следующей архитектурной формуле:

```text
artifact mutation
→ reason
→ evidence
→ boundary
→ human decision
→ controlled action
→ trace
→ adequacy delta
```

Это хорошая основа для продукта в зоне enterprise AI governance, engineering decision support, technical review automation и regulated knowledge workflows.

Но текущие документы перегружены, местами повторяются и рискуют создать впечатление, что v1.1 — это уже почти enterprise platform. Для MVP это опасно. Я бы усилил фокус: **один вертикальный продуктовый сценарий, один шаблон, один расчетный профиль, один demo loop, строгие инварианты.**

---

## 2. Что уже хорошо

### 2.1. Правильное позиционирование

Фраза:

```text
EpiOS is a measurable trust layer for enterprise AI decisions.
```

сильнее, чем “epistemic operating system”, потому что понятнее рынку. “Epistemic OS” хорошо для архитектурной философии, но для покупателей лучше звучит:

```text
Measurable trust layer for AI-assisted enterprise decisions.
```

или:

```text
Traceable decision infrastructure for AI-assisted work.
```

### 2.2. Хороший первый shell

`EpiOS for Engineering Decisions` — удачный первый рынок, потому что ADR, RFC, Architecture Notes и Decision Memos уже имеют естественные свойства:

```text
claims
evidence
trade-offs
risks
alternatives
approvals
decision rationale
```

Это лучше, чем сразу идти в legal/compliance/healthcare, где высока регуляторная нагрузка.

### 2.3. Сильная доменная идея Adequacy Layer

Отлично, что КА определяется не как truth score, а как mission-scoped fitness score. Это критически важно. Иначе продукт быстро становится генератором псевдообъективных чисел.

Правильный инвариант:

```text
AdequacyScore = пригодность артефакта для конкретной миссии,
по конкретному профилю,
при конкретных источниках,
с конкретной методикой.
```

### 2.4. Хорошо выделены риски

Документы правильно ловят ключевые угрозы:

```text
score laundering
false authority
hidden methodology drift
human rubber-stamping
MCP/UI manipulation
```

Это зрелая постановка проблемы.

---

## 3. Главная критика

### 3.1. Слишком много сущностей для v1.1 MVP

В концепте перечислено много новых сущностей:

```text
AdequacyDimension
AdequacyCriterion
AdequacyProfile
AdequacyMatrix
AdequacyWeight
AdequacyScore
AdequacyAssessment
HumanAdequacyRating
DerivedAdequacyCalculation
AdequacyPenalty
AdequacyOverride
AdequacyMethodVersion
AdequacyTrace
AdequacyDelta
AdequacyReport
TemplateAdequacyProfile
```

Для концепта это нормально. Для MVP — многовато.

Я бы разделил на три уровня:

**Must-have для v1.1 MVP:**

```text
AdequacyProfile
HumanAdequacyRating
AdequacyAssessment
AdequacyDelta
AdequacyReport
```

**Internal implementation detail:**

```text
DimensionScore
AppliedPenalty
AppliedCap
HardBlock
MethodVersion
```

**Defer после MVP:**

```text
AdequacyOverride
AdequacyMatrixApp as separate MCP app
TemplateAdequacyProfile generalization
multi-reviewer human rating
dynamic template registry
```

Главная рекомендация: **не выводить все концептуальные сущности в публичный продуктовый язык сразу.** Пользователь должен видеть не онтологию, а понятный workflow.

---

### 3.2. Adequacy Score пока слишком центральный

Сейчас есть риск, что продукт будет восприниматься как “система, которая ставит оценку документам”. Это сужает и искажает идею.

Я бы поменял центр тяжести:

Не:

```text
EpiOS calculates adequacy scores.
```

А:

```text
EpiOS controls artifact change by requiring evidence, boundaries,
decision trace and adequacy impact before action.
```

То есть КА — не главный продукт. Главный продукт — **governed artifact evolution**.

Предложение:

```text
Primary object: ArtifactPatch
Primary control: Approval / Policy / Trace
Primary measurement: AdequacyDelta
Secondary summary: AdequacyScore
```

Иначе число начнет доминировать над процессом.

---

### 3.3. Нужна более жесткая cut line для MVP

В sprint plan есть 10-недельная roadmap, но она все еще выглядит как “почти вся платформа”. Я бы ввел два плана:

```text
v1.1 Alpha Demo — 3 недели
v1.1 MVP — 6 недель
v1.1 RC — 10 недель
```

Потому что 10 недель без промежуточного demo-risk burn-down слишком долго.

**3-недельный Alpha Demo:**

```text
Create ADR Review Mission
→ paste source markdown
→ human rates source
→ system creates 3 claims
→ attach evidence refs
→ propose one artifact patch
→ calculate patch adequacy
→ approve patch
→ apply patch
→ show trace + delta
```

Без MCP, без template library, без полноценного report export.

**6-недельный MVP:**

```text
Add persistence
Add API contracts
Add shell UI
Add one Engineering Decision template
Add markdown adequacy report
Add minimal security checks
```

**10-недельный RC:**

```text
MCP hardening
Template library v0.1
Full e2e suite
Release notes
Known limitations
Redaction policy
```

---

## 4. Архитектурные замечания

### 4.1. Adequacy Layer должен быть не отдельным сервисом

Согласен с документом: начинать как domain/application module. Отдельный сервис сейчас преждевременен.

Правильная структура:

```text
packages/domain/src/adequacy
packages/application/src/usecases/adequacy
packages/infra-postgres/src/adequacy
apps/demo-shell/src/features/adequacy
```

Не надо делать:

```text
packages/adequacy
services/adequacy-service
```

пока нет реальной причины отделять lifecycle, scaling и ownership.

---

### 4.2. Score calculation должен быть deterministic-first

Для v0.1 расчет должен быть полностью детерминированным. LLM может помогать сформировать draft explanation, но не должен быть authoritative calculator.

Правило:

```text
LLM may suggest.
Domain service decides.
Database records.
Trace explains.
```

Иначе невозможно тестировать caps, penalties, hard blocks и regression behavior.

---

### 4.3. Нужна explicit `AssessmentBasis`

Сейчас `basis: string` в `DimensionScore` слишком слабый контракт. Для аудита лучше сделать структурированное основание.

Предложение:

```ts
type AssessmentBasis = {
  basisType:
    | 'source_rating'
    | 'evidence_coverage'
    | 'trace_completeness'
    | 'conflict_state'
    | 'approval_state'
    | 'risk_policy'
    | 'template_requirement'
    | 'freshness_check';

  inputRefs: string[];
  ruleCode: string;
  explanation: string;
};
```

Тогда explanation не будет “магическим текстом”, а станет читаемой проекцией расчета.

---

### 4.4. Нужен `AdequacySubject`

Сейчас `subjectType` и `subjectRef` повторяются во многих типах. Лучше ввести value object:

```ts
type AdequacySubject = {
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
};
```

Это уменьшит рассинхрон DTO/domain/persistence.

---

### 4.5. Не смешивать `Source Adequacy` с производным score

В концепте есть универсальная матрица, где `Source Adequacy` указана как dimension. Но в Engineering Decision Profile sprint plan ее уже нет как отдельного веса; там есть Evidence Coverage, Traceability, Boundary Clarity и т.д.

Я бы сделал так:

```text
Human Source Adequacy = upstream constraint / cap input
Derived Artifact Adequacy = calculated profile score
```

То есть source rating не обязательно должен быть одной из weighted dimensions итогового артефакта. Он может быть:

```text
cap
penalty input
explanation input
confidence limiter
```

Это защитит от score laundering.

---

## 5. Продуктовая критика

### 5.1. Название “Adequacy” может быть спорным

Плюсы:

```text
точное
философски сильное
не обещает truth
```

Минусы:

```text
не всем понятно
может звучать академично
не сразу продает value
```

Для внутреннего домена `Adequacy` оставить можно. Для UI я бы тестировал варианты:

```text
Decision Readiness
Evidence Fitness
Artifact Readiness
Trust Matrix
Review Confidence — осторожно, слово confidence рискованное
```

Мой выбор:

```text
Internal/domain: Adequacy
User-facing primary: Readiness
User-facing detail: Adequacy breakdown
```

Например:

```text
Artifact Readiness: 74 / Engineering Decision v0.1
Why: evidence coverage improved, but one critical trade-off remains unresolved.
```

---

### 5.2. Первый use case лучше сузить до ADR Review

Не стоит начинать сразу с ADR, RFC, Architecture Note и Decision Memo. Для первой демонстрации лучше:

```text
ADR Review
```

Почему:

```text
ADR имеет понятную структуру.
Есть clear before/after artifact.
Есть естественные alternatives/consequences.
Есть decision rationale.
Легко показать patch и approval.
```

Затем добавить:

```text
Decision Memo
```

RFC оставить на позже: RFC часто больше, шире и более политически нагружен.

---

### 5.3. Пользовательский workflow должен начинаться не с Mission, а с боли

Для инженера слово Mission может быть абстрактным. Лучше в shell начать с действия:

```text
Review an ADR
Improve a decision memo
Check architecture decision readiness
```

А уже внутри создавать Mission.

UI copy:

```text
What are you reviewing?
[ Paste ADR ] [ Upload source ] [ Select template ]

What decision must this artifact support?
[ text ]

What sources should be trusted?
[ source list + human rating ]
```

---

## 6. Delivery critique

### 6.1. Sprint 0 обязателен, но должен быть очень коротким

Sprint 0 не должен занять неделю, если репозиторий уже bootstrap. Его задача — не “идеально организовать GitHub”, а снять delivery blockers.

Я бы ограничил Sprint 0 до 2–3 дней:

```text
branch decision
CI baseline
issue labels
milestones
first 10 issues
generated artifacts cleanup
document register
```

Все остальное — по ходу.

---

### 6.2. Docs-first хорошо, но есть риск doc trap

Sprint 1 предлагает много specs и ADR. Это полезно, но опасно: можно потратить неделю на документы без executable proof.

Я бы сделал Sprint 1 иначе:

```text
Contracts + executable skeleton
```

То есть каждый spec должен сопровождаться хотя бы одним failing/pending test.

Например:

```text
ADEQUACY_DOMAIN_CONTRACTS.md
+ adequacy-profile.spec.ts
+ human-rating.spec.ts
+ assessment-calculation.spec.ts
```

Правило:

```text
No contract without a test skeleton.
No ADR without one enforcement point.
```

---

### 6.3. Первая демонстрация должна появиться раньше

В плане UI появляется в Sprint 6. Это поздно. Даже если ugly shell, end-to-end demo нужен уже после domain/application skeleton.

Предложение:

```text
Sprint 2/3: CLI or minimal local script demo
Sprint 4: API smoke demo
Sprint 5: shell demo
Sprint 6+: hardening
```

Минимальный demo script:

```bash
pnpm demo:adr-review
```

Он должен создать миссию, источник, rating, nodes, patch, assessment, approval, artifact version, report.

Это быстрее выявит архитектурные разрывы.

---

## 7. Что бы я изменил в roadmap

### Предлагаемая новая фаза 1: Proof Loop

**Цель:** доказать один полный цикл, не строя всю платформу.

```text
Week 1:
- repo governance
- core contracts
- domain skeleton
- deterministic ADR demo fixture

Week 2:
- HumanAdequacyRating
- AdequacyAssessment
- ArtifactPatch
- Approval
- TraceEvent
- demo script

Week 3:
- PostgreSQL persistence
- read model
- markdown adequacy report
- first API smoke
```

Exit criteria:

```text
One ADR review can run without UI and produce:
- source rating
- patch
- assessment
- delta
- trace
- markdown report
```

### Предлагаемая новая фаза 2: Product Shell

```text
Week 4:
- Engineering Decision shell
- source intake
- rating panel
- patch review

Week 5:
- adequacy/readiness panel
- approval flow
- trace drawer
- e2e happy path

Week 6:
- local dev runbook
- known limitations
- security baseline
- alpha release
```

### Предлагаемая новая фаза 3: RC Hardening

```text
Week 7-10:
- MCP hardening
- template library v0.1
- report export
- security tests
- redaction
- release notes
```

---

## 8. Предлагаемые изменения в доменной модели

### 8.1. Минимальный v1.1 domain kernel

```ts
type AdequacyProfile = {
  profileId: string;
  code: string;
  version: string;
  status: 'draft' | 'active' | 'deprecated';
  dimensions: AdequacyProfileDimension[];
  penalties: AdequacyPenaltyRule[];
  caps: AdequacyCapRule[];
  hardBlocks: AdequacyHardBlockRule[];
};

type HumanAdequacyRating = {
  ratingId: string;
  missionId: string;
  subject: AdequacySubject;
  profileRef: ProfileRef;
  dimensionScores: DimensionScore[];
  overallScore?: number;
  rationale: string;
  actor: HumanActorRef;
  createdAt: string;
};

type AdequacyAssessment = {
  assessmentId: string;
  missionId: string;
  subject: AdequacySubject;
  profileRef: ProfileRef;
  dimensionScores: DimensionScore[];
  weightedScore: number;
  appliedPenalties: AppliedPenalty[];
  appliedCaps: AppliedCap[];
  hardBlocks: AppliedHardBlock[];
  finalScore: number;
  readinessBand: ReadinessBand;
  explanation: AssessmentExplanation;
  inputRefs: AssessmentInputRefs;
  createdAt: string;
};

type AdequacyDelta = {
  deltaId: string;
  missionId: string;
  traceEventId: string;
  subject: AdequacySubject;
  beforeAssessmentId?: string;
  afterAssessmentId: string;
  scoreDelta?: number;
  affectedDimensions: DimensionDelta[];
  explanation: string;
};
```

### 8.2. Добавить readiness band

Число без категории опасно. Добавить интерпретацию:

```ts
type ReadinessBand =
  | 'blocked'
  | 'not_ready'
  | 'needs_review'
  | 'usable_with_limitations'
  | 'strong'
  | 'exceptional_requires_review';
```

Пример:

```text
74 — usable_with_limitations
```

Это лучше, чем просто “КА 74”.

---

## 9. Предлагаемые hard rules для v1.1

Я бы зафиксировал эти правила как P0 invariant tests:

```text
1. System actor cannot create HumanAdequacyRating.

2. HumanAdequacyRating is append-only.

3. Derived assessment must reference profileId + methodVersion.

4. finalScore must be 0..100.

5. Hard block sets readinessBand=blocked regardless of numeric score.

6. Source rating cap cannot be bypassed by approval.

7. Approval can improve Decision Quality, not Evidence Coverage.

8. ArtifactPatch without reason is rejected.

9. ArtifactPatch without evidence/node/decision refs is rejected.

10. High-risk patch cannot be applied without ApprovalRequest resolved.

11. AdequacyOverride, if introduced, never rewrites score.

12. Any meaningful artifact mutation must create TraceEvent.

13. AdequacyDelta must link to TraceEvent.

14. MCP/UI submitted finalScore is ignored or rejected.

15. Assessment explanation must be derived from stored calculation inputs.
```

---

## 10. Предлагаемый первый demo scenario

Лучший demo для v1.1:

```text
Scenario: Review an ADR for adopting event sourcing.
```

Input source:

```text
A draft ADR proposes event sourcing for all mission history.
It claims better auditability and replay, but ignores complexity,
migration cost, query model overhead and team familiarity.
```

EpiOS flow:

```text
1. Human rates source adequacy: 58.
2. System extracts claims:
   - Event sourcing improves auditability.
   - Event sourcing enables replay.
   - Event sourcing should be used for all mission history.
3. System marks third claim as overbroad.
4. Evidence coverage is partial.
5. Patch proposes narrower decision:
   - Use append-only trace for MVP.
   - Defer full event sourcing.
   - Add ADR for future hash-chain audit trail.
6. Adequacy delta:
   - Boundary Clarity +20
   - Risk Handling +15
   - Completeness +10
   - Temporal Freshness unchanged
7. Human approves patch.
8. Final ADR readiness: usable_with_limitations, 76.
```

Почему это хороший demo: он прямо отражает архитектурное решение из ваших документов — **no full event sourcing in MVP**.

---

## 11. Что убрать или отложить

Я бы отложил из v1.1 MVP:

```text
AdequacyOverride full workflow
multi-reviewer ratings
dynamic template registry
generic template marketplace
AdequacyMatrixApp as separate MCP app
four engineering templates
real provider adapter as dependency for demo
full outbox worker
hash-chain audit
advanced export formats
industry shells beyond Engineering Decisions
```

Оставить:

```text
one shell
one template
one profile
one deterministic calculator
one markdown report
one e2e happy path
one cap path
one hard-block path
```

---

## 12. Самые важные следующие документы

Из списка required specs я бы сделал не 7 документов сразу, а 4:

```text
EPIOS-12 — Adequacy Domain & Invariants
EPIOS-13 — Engineering Decision Profile v0.1
EPIOS-14 — v1.1 API / Use Case Contracts
EPIOS-15 — ADR Review Demo Scenario & Acceptance Tests
```

Потом уже:

```text
Persistence Plan
UI/MCP Specification
Release Runbook
```

Иначе есть риск распыления.

---

## 13. Предлагаемый immediate backlog: первые 12 задач

```text
1. chore(repo): align branch, CI baseline and generated artifact hygiene

2. docs(adr): define Adequacy Score as mission-scoped fitness, not truth

3. docs(spec): define Engineering Decision Adequacy Profile v0.1

4. feat(domain): add AdequacySubject, ProfileRef and DimensionScore value objects

5. feat(domain): implement HumanAdequacyRating invariants

6. feat(domain): implement AdequacyAssessment calculation with caps and hard blocks

7. feat(domain): implement AdequacyDelta linked to TraceEvent

8. feat(domain): enforce ArtifactPatch reason/evidence/approval invariants

9. feat(app): add RateSourceAdequacy and CalculatePatchAdequacy use cases

10. feat(demo): add deterministic ADR review fixture and demo script

11. feat(postgres): persist ratings, assessments and deltas append-only

12. feat(report): generate markdown Adequacy Report for ADR review
```

---

## 14. Рынок и упаковка

Я бы тестировал три внешних формулировки:

### Вариант A — enterprise governance

```text
EpiOS is a trust and governance layer for AI-assisted enterprise decisions.
```

### Вариант B — engineering-specific

```text
EpiOS helps engineering teams turn messy AI-assisted architecture work
into evidence-backed, reviewable, traceable decision records.
```

### Вариант C — artifact lifecycle

```text
EpiOS manages the lifecycle of AI-assisted artifacts:
from source evidence to patch, approval, trace and readiness assessment.
```

Для первого shell лучше B. Для общей платформы лучше A или C.

---

## 15. Итоговая рекомендация

Я бы не менял стратегическую концепцию. Она сильная. Но я бы резко сузил execution.

**Главное предложение:**

```text
Сделать v1.1 не “Adequacy Platform”,
а “governed ADR Review loop with adequacy delta”.
```

То есть первая победа должна быть такой:

```text
Пользователь вставляет слабый ADR.
EpiOS показывает, какие claims слабы.
EpiOS предлагает patch.
EpiOS объясняет, почему patch улучшает artifact readiness.
Человек approves.
EpiOS применяет patch.
Пользователь видит trace and adequacy delta.
```

Если это работает убедительно, вся большая концепция получает доказательство. Если это не работает, Template Library, MCP Apps и расширенная методология не спасут продукт.

Мой финальный срез для v1.1 MVP:

```text
One product shell:
EpiOS for Engineering Decisions

One first workflow:
ADR Review

One profile:
Engineering Decision Adequacy Profile v0.1

One core metric:
Artifact Readiness / Adequacy for mission

One critical proof:
meaningful artifact mutation is evidence-grounded,
human-governed, traceable and shows adequacy delta.
```
