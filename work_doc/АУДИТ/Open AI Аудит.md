## Вердикт

EPIOS — **архитектурно сильный проект, но с явным разрывом между заявленной инженерной моделью и фактическим delivery/governance-состоянием**. Идея, доменная модель, PostgreSQL-first, MCP security boundary, traceability и human-in-the-loop сформулированы правильно. Но сейчас главный риск не в DDD/Hexagonal Architecture, а в том, что часть документов и README уже говорят языком “MVP RC”, тогда как репозиторий и план работ показывают незакрытые контракты, security tests, release evidence и delivery-артефакты.

Я не запускал проект локально; аудит основан на проектной документации, синхронизированных данных репозитория и текущем публичном состоянии GitHub на 14 мая 2026.

---

## Что сделано хорошо

Архитектурное ядро сформулировано сильно: EPIOS определяется не как чат, agent framework или model gateway, а как слой для structured reasoning, evidence-backed artifacts, explicit human decisions и safe AI-assisted actions; базовая формула `situation → distinction → evidence → artifact → decision → action` зафиксирована в foundation-документе. 

Правильные hard constraints уже есть: PostgreSQL-first, contract-first, provider-neutral core, UI as renderer, MCP Apps как нетрастовая интерактивная поверхность, side effects только через policy/idempotency/audit. Это соответствует заявленной цели строить platform kernel, а не UI-first AI demo. 

EPIOS-04 хорошо задаёт engineering process: protected main, short-lived branches, PR required, contract changes, tests, risk/rollback, ADR/RFC process, CI gates, CODEOWNERS, docs lifecycle. Это правильный уровень дисциплины для open-source platform project. 

По сравнению с ранним аудитом репозиторий заметно продвинулся: появились `.github/workflows`, `.dockerignore`, Husky/lint-staged, Gitleaks, Release Drafter, Turbo v2, dependency-cruiser и root `ci/ci:release` scripts. Текущий `package.json` содержит Node `>=22.0.0`, `turbo ^2.0.0`, `dependency-cruiser`, Playwright, Vitest, Husky и CI scripts. ([GitHub][1])

Документный governance тоже частично стабилизирован: есть `DOCUMENT_REGISTER.md`, `OPEN_DECISIONS_REGISTER.md`, ADR-0026 принят как Apache-2.0, а ряд ADR-файлов уже зарегистрирован как Accepted.  

---

## Критические несоответствия и ошибки

### P0 — CI может не защищать фактическую default branch

На GitHub текущая ветка показана как `master`, при этом workflow CI из репозитория настроен на `main` и `develop`. Это опасный разрыв: если default branch действительно `master`, required checks могут не срабатывать на основной ветке. ([GitHub][2]) 

**Исправление:** либо переименовать default branch в `main`, либо немедленно добавить `master` во все workflows и branch protection/rulesets. Затем включить required status checks, PR review, no direct push, linear history/squash. GitHub прямо указывает, что protected branch rules позволяют требовать PR reviews, required status checks, linear history и запрет bypass/delete/force-push. ([GitHub Docs][3])

---

### P0 — README и package заявляют RC, но release evidence отсутствует

`package.json` уже содержит `version: 0.1.0-rc.1`, а README говорит “MVP Release Candidate: v0.1.0-rc.1”. При этом GitHub показывает “No releases published”, Issues = 0 и Pull Requests = 0. ([GitHub][1])

Это не просто косметика. Для проекта, который заявляет traceability и explicit evidence, “RC” без release notes, GitHub release, linked milestone, test evidence и known limitations — нарушение собственной философии.

**Исправление:** откатить публичный статус до `0.1.0-alpha` / “internal demo build”, либо оформить настоящий RC: GitHub release, tag, release notes, gate evidence matrix, known limitations, demo script, CI run links, security test report.

---

### P0 — заявлен contract-first, но contracts ещё не стали executable source of truth

Стабилизационный план прямо говорит: надо прекратить генерацию концепций и перейти к contract files: `API_CONTRACTS_MVP.md`, `APPLICATION_USE_CASE_CONTRACTS.md`, `ERROR_CATALOG.md`, `TRACE_EVENT_CATALOG.md`; это блокирует Week 2/3. 

Но `PROJECT_FIX_PLAN.md` показывает, что contract specs, error/trace catalogs и часть application use cases всё ещё открыты. 

**Исправление:** перед расширением domain/persistence создать contract pack:

```text
docs/03_specs/API_CONTRACTS_MVP.md
docs/03_specs/APPLICATION_USE_CASE_CONTRACTS.md
docs/03_specs/ERROR_CATALOG.md
docs/03_specs/TRACE_EVENT_CATALOG.md
docs/03_specs/TRACEABILITY_MATRIX_MVP.md
```

Контракты должны быть не “описанием намерений”, а схемами: DTO, Zod/OpenAPI, error codes, idempotency rules, trace event schemas, acceptance tests.

---

### P0 — security tests сейчас выглядят как false green

В `package.json` есть `test:security`, но он пока заглушка: `echo 'Security tests not yet implemented' && exit 0`. Аналогично `test:async`. Это создаёт ложное ощущение готовности CI. ([GitHub][1])

При этом EPIOS-06 требует MCP security tests: invalid origin/schema, replayed nonce, missing capability, approval resolve without idempotency, direct patch apply rejection, audit event on rejection. 

**Исправление:** либо реализовать реальные тесты, либо сделать placeholder failing-by-default до явного opt-in:

```bash
echo "Security tests are required before RC" && exit 1
```

Для RC нельзя иметь “зелёный” security script, который ничего не проверяет.

---

### P0 — MVP scenario drift

Foundation и roadmap задают четыре MVP-сценария: architectural documents, project planning, research review, decision support. 

README уже говорит о других сценариях: Collaborative Research, Crisis Management, Governance & Consensus, Knowledge Synthesis. Это не просто переименование: оно меняет позиционирование продукта и acceptance criteria. 

**Исправление:** создать `SCENARIO_REGISTRY_MVP.md` и выбрать один authoritative set. Для каждого сценария нужны:

```text
scenario id
business goal
input fixture
expected nodes
expected evidence refs
expected artifact patch
approval path
trace events
demo acceptance test
```

---

### P0 — GitHub delivery не соответствует заявленному процессу

Документы требуют issues, milestones, PR slicing, weekly gates и backlog transfer. Но публичный GitHub сейчас показывает Issues = 0 и Pull Requests = 0. ([GitHub][2])

Если работа ведётся только в markdown backlog, проект остаётся “docs-driven”, но не “delivery-governed”.

**Исправление:** перенести EPIOS-10/EPIOS-12 в GitHub Issues и Milestones:

```text
mvp-w1-foundation
mvp-w2-domain
mvp-w3-api
mvp-w4-shell
mvp-w5-mcp-security
mvp-w6-rc
```

Каждая issue должна иметь owner, acceptance criteria, linked PR, test evidence, rollback note.

---

### P1 — Node version mismatch

`package.json` требует Node `>=22.0.0`, а README в текущем репозитории всё ещё говорит Node.js v20 or higher. ([GitHub][1])

**Исправление:** выбрать Node 22 LTS как единственный baseline и синхронизировать:

```text
README.md
.node-version
package.json engines
packageManager: "pnpm@9.x.x" или актуальный pinned version
CI setup-node
OPEN_DECISIONS_REGISTER.md
```

---

### P1 — dependency boundary статус не синхронизирован

В `package.json` и плане уже есть `dependency-cruiser` и `depcruise`, а `PROJECT_FIX_PLAN.md` отмечает dependency boundaries как done. Но `OPEN_DECISIONS_REGISTER.md` всё ещё показывает Dependency Cruiser как Proposed. ([GitHub][1])  

**Исправление:** либо перевести decision в Accepted и приложить CI evidence, либо оставить Proposed, но тогда убрать “done” из plan. Сейчас это governance drift.

---

### P1 — public README переобещает зрелость продукта

README говорит “proud to announce first release candidate”, “Neural Graph Workspace”, “MCP Integration”, “Epistemic Governance”. Но документация сама определяет MVP как internal dev only, not production-ready, thin vertical slice. 

**Исправление:** README должен быть честным:

```text
Status: Internal Alpha / architecture validation.
Not production-ready.
APIs and domain model are unstable.
MCP bridge security is under active implementation.
```

Это не слабость. Для open-source infrastructure проекта честность статуса — часть доверия.

---

### P1 — generated artifacts, reports and project noise in repo

GitHub listing показывает `playwright-report` и `test-results` как директории репозитория. ([GitHub][2])

**Исправление:** если это generated output, убрать из Git, добавить в `.gitignore`, публиковать как CI artifacts. Репозиторий platform/kernel не должен смешивать source of truth и transient test outputs.

---

## Лучшие современные практики для EPIOS-подобного проекта

### 1. Delivery through executable vertical slices

DORA/Google Cloud рекомендуют trunk-based development: маленькие изменения, ежедневное слияние в trunk, быстрые automated tests, отсутствие долгих integration phases. Высокопроизводительные команды имеют мало активных веток, часто интегрируют изменения и держат build green. ([dora.dev][4])

Для EPIOS это означает: не “Sprint = большой слой”, а “Sprint = один проверяемый mission flow”.

Пример правильного slice:

```text
CreateMission
→ API contract
→ Use case
→ Domain invariant
→ PostgreSQL migration/repository
→ Trace event
→ UI read model
→ E2E smoke
→ release gate evidence
```

---

### 2. Docs as Code, но с проверками

Документы уже сильные, но их надо превратить в управляемый артефакт:

```text
docs lint
ADR status checker
broken link checker
OpenAPI/Zod schema validation
trace event schema validation
release gate evidence matrix
```

Любое изменение domain/API/security должно обновлять docs через required PR checklist.

---

### 3. Architecture as Code

Dependency rules должны быть автоматизированы:

```text
domain cannot import infra/react/db/fs/env/provider SDK
application cannot import concrete provider SDK
demo-shell cannot import postgres repositories
MCP iframe cannot mutate domain directly
```

Уже выбран dependency-cruiser — хорошо. Следующий шаг: сделать отчёт частью required CI, а не optional script.

---

### 4. Secure SDLC for MCP and AI-assisted actions

GitHub рекомендует least privilege для `GITHUB_TOKEN`, минимальные permissions per job, masking/rotation of secrets и защиту от script injection in workflows. ([GitHub Docs][5])

Для EPIOS security baseline должен включать:

```text
permissions: contents: read by default
pinned or controlled GitHub Actions
Gitleaks + push protection
Dependabot/Renovate
SBOM
artifact attestations
MCP threat model
nonce replay tests
capability escalation tests
idempotency conflict tests
redaction tests
```

GitHub также выделяет dependency graph, Dependabot, security advisories, repository rulesets, artifact attestations and secret scanning as core security features. ([GitHub Docs][6])

---

### 5. Release evidence, not release optimism

EPIOS должен выпускать не “релиз по версии”, а “релиз по доказательствам”.

Для каждого gate:

```text
Gate
Required evidence
CI run
Test suite
Manual demo proof
Known limitations
Owner approval
Rollback path
```

Без evidence matrix нельзя называть сборку RC.

---

### 6. Human-in-the-loop as a domain invariant, not UI behavior

ApprovalApp не должен “разрешать действие”. Он только отправляет typed command. Домен/application слой должен проверять:

```text
approval status
risk class
idempotency key
actor capability
patch baseVersion
decision record linkage
audit trace
```

Это уже правильно описано в EPIOS-06, но должно быть покрыто contract/security/integration tests. 

---

## Рекомендуемый план исправлений

### PR-0 — Align branch, CI and protection

```text
- rename master → main or add master to workflows
- enable branch protection / repository ruleset
- require CI, gitleaks, depcruise
- forbid direct push
- require PR review
```

### PR-1 — Truthful public status

```text
- README: Alpha/internal dev only unless real RC release exists
- remove/qualify “MVP RC” claim
- sync scenarios with EPIOS-00/EPIOS-03
- sync Node 22 requirement
- remove stale EPOS naming
```

### PR-2 — Kill false-green tests

```text
- replace placeholder test:security/test:async
- add MCP bridge security test skeleton
- make missing security tests block RC
```

### PR-3 — Contract pack

```text
- API_CONTRACTS_MVP.md
- APPLICATION_USE_CASE_CONTRACTS.md
- ERROR_CATALOG.md
- TRACE_EVENT_CATALOG.md
- shared schema source: Zod/OpenAPI
```

### PR-4 — Release gate evidence matrix

```text
- RELEASE_GATE_EVIDENCE_MATRIX.md
- W1-W6 gates mapped to tests/issues/owners
- GitHub milestones and labels
- no gate can be “done” without evidence
```

### PR-5 — Domain & persistence executable slice

```text
- Mission / MissionRun state machine
- EpistemicNode / EvidenceRef / ReasoningEdge
- ArtifactPatch / ApprovalRequest minimum
- migrations 0002–0006
- repository integration tests
- optimistic concurrency tests
- idempotency tests
```

### PR-6 — MCP security hardening

```text
- origin/schema/nonce/timestamp/capability validation
- replay rejection
- approval resolve idempotency conflict
- audit event on every rejection
- no direct patch apply from iframe
```

### PR-7 — Redaction and retention

```text
- DATA_RETENTION_AND_REDACTION_POLICY_MVP.md
- trace payload sanitizer
- no raw secrets/provider tokens/prompts in logs
- tests for secret-like values
```

### PR-8 — Supply-chain baseline

```text
- Dependabot or Renovate
- explicit GitHub Actions permissions
- SBOM generation
- artifact attestations for release builds
- dependency review / audit policy
```

### PR-9 — Repository hygiene

```text
- remove generated playwright-report/test-results from source
- strengthen .gitignore
- ensure .env.example is local-only and non-production
```

### PR-10 — Scenario acceptance packs

```text
- one folder per MVP scenario
- input fixtures
- expected nodes/evidence/patch/trace
- demo script
- e2e smoke
```

---

## Более современная модель управления проектом

Я бы перевёл EPIOS на модель **Architecture-Governed Vertical Delivery**:

```text
Mission Slice
→ Contract
→ Domain invariant
→ Persistence migration
→ Application use case
→ Interface/API
→ Trace event
→ Security policy
→ Test evidence
→ Release gate
```

Каждая задача должна иметь явный DoD:

```text
[ ] public contract exists
[ ] domain invariant exists
[ ] error code defined
[ ] trace event defined
[ ] idempotency behavior defined
[ ] security policy checked
[ ] migration/repository tested
[ ] UI does not own business rule
[ ] docs/register updated
[ ] release evidence linked
```

Это лучше обычного “roadmap + backlog”, потому что EPIOS сам по себе продукт про traceability. Процесс разработки должен демонстрировать ту же traceability, которую продукт обещает пользователю.

---

## Итоговая оценка

**Архитектура:** сильная.
**Документация:** сильная, но местами переходит в концептуальное изобилие.
**Delivery governance:** улучшен, но ещё не стабилен.
**Security posture:** правильная модель, недостаточно executable tests.
**Release readiness:** пока не соответствует уровню “RC”.
**Главный риск:** не технический стек, а расхождение между заявленными gates и фактическими доказательствами выполнения.

Строгая рекомендация: **остановить новые концептуальные документы и UI-полировку**, закрыть branch/CI alignment, contract pack, false-green tests, release evidence matrix и один настоящий domain+persistence vertical slice. После этого проект можно честно вести как современный open-source platform kernel.

[1]: https://github.com/xlabkm-ux/epios/blob/master/package.json "epios/package.json at master · xlabkm-ux/epios · GitHub"
[2]: https://github.com/xlabkm-ux/epios "GitHub - xlabkm-ux/epios: Epistemic OS v1.0 · GitHub"
[3]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches "About protected branches - GitHub Docs"
[4]: https://dora.dev/capabilities/trunk-based-development/ "DORA | Capabilities: Trunk-based development"
[5]: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions "Secure use reference - GitHub Docs"
[6]: https://docs.github.com/en/code-security/getting-started/github-security-features "GitHub security features - GitHub Docs"
