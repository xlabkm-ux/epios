**Аудит проекта EPIOS (бывший EPOS) — v1.0 → v1.1**

Я провёл полный аудит всех предоставленных документов (EPOS-00…EPOS-11, EPIOS v1.1 Concept Working Draft, EPIOS v1.1 Sprint Development Plan и аудит документации EPOS). Ниже — структурированный разбор: **сильные стороны**, **критические проблемы и риски**, **конкретная критика** и **практические предложения по доработке и развитию**.

### 1. Общий вердикт
Проект находится в очень хорошем состоянии для стадии bootstrap alpha → managed delivery.  
**Плюс**: у вас уже есть мощная, последовательная архитектурная база (domain-first, hexagonal, PostgreSQL-first, MCP security boundary, trace/adequacy focus). Новый v1.1 план логично расширяет v1.0 и не ломает его.  
**Минус**: документация и delivery-governance всё ещё в состоянии «draft-heavy». Репозиторий публичный, но Issues/PRs пустые, branch protection отсутствует, ADR-нумерация имеет конфликты. Это главный риск превращения сильной архитектуры в «документационный долг».

Проект готов к реальному execution, но **сначала нужен жёсткий stabilization pass** (Sprint 0 из нового плана).

### 2. Сильные стороны (что уже отлично)
- **Архитектурная чистота** — EPOS-01 + EPOS-02 + EPOS-05 задают правильный hexagonal/domain-first вектор. Новый Adequacy Layer в v1.1 идеально ложится сверху (scoped fitness score, human rating, caps/penalties, delta).
- **Продуктовая фокусировка** — переход на «EpiOS for Engineering Decisions» как первый shell — очень правильный и реалистичный выбор. ADR/RFC/Architecture Note — идеальный vertical slice.
- **Delivery-мышление** — новый 10-недельный спринт-план с milestones, acceptance criteria, PR-шаблонами, Definition of Done/Ready и risk register — один из лучших, что я видел в подобных проектах.
- **Безопасность и observability** — MCP bridge, idempotency, trace events, redaction policy, Score Laundering Guard — всё продумано на уровне P0.
- **Открытость** — решение делать open-source from day one и отдельный репозиторий — стратегически верное.

### 3. Критические проблемы и риски
1. **Documentation drift и отсутствие source of truth** (P0)  
   - Нет актуального `DOCUMENT_REGISTER.md` и `OPEN_DECISIONS_REGISTER.md` (хотя они неоднократно упоминались).  
   - EPOS-00 устарел.  
   - Конфликт ADR-нумерации (ADR-0008 в EPOS-04 vs EPOS-09).  
   - Многие документы всё ещё Draft/For Review, хотя уже используются как executable plan.  
   → Это создаёт правовую и процессную неопределённость.

2. **Состояние репозитория** (из нового v1.1 плана)  
   - 12 коммитов, 0 Issues, 0 PRs, ветка `master` (документы требуют `main`).  
   - Нет branch protection, milestones, labels.  
   - Generated artifacts (`playwright-report` и т.д.) могут быть в истории.

3. **Слишком большая амбициозность v1.1**  
   - 10 спринтов с Adequacy Layer (сложная многомерная модель + caps/penalties/hard blocks) + MCP + Templates + Shell.  
   - Риск «score laundering» и восприятия AdequacyScore как «truth score» остаётся высоким, несмотря на ADR-0028.

4. **Наследие EPOS → EPIOS**  
   - Нет явного «handover» между старыми EPOS-документами и новым v1.1. Часть старых EPOS-документов можно использовать, часть — пометить как `SUPERSEDED_BY_EPIOS-v1.1`.

### 4. Конкретные предложения по доработке (приоритетные)

#### Sprint 0 (обязательно, 3–5 дней максимум)
Выполните **точно** то, что написано в разделе Sprint 0 нового плана:
1. Переименовать ветку `master` → `main` + настроить redirect (или оставить `master` и обновить все документы).
2. Включить branch protection (PR required, CI, squash merge).
3. Создать milestones `v1.1-s0-governance` … `v1.1-s9-rc`.
4. Перенести backlog из `PROJECT_BACKLOG.md` в GitHub Issues + создать labels (type/area/P/status).
5. Создать/обновить:
   - `docs/00_project/DOCUMENT_REGISTER.md`
   - `docs/00_project/OPEN_DECISIONS_REGISTER.md`
6. Очистить `.gitignore` от generated artifacts.

#### Документация (1–2 дня)
- Привести все EPOS-документы в соответствие с EPIOS v1.1 (или явно пометить статус).
- Создать ADR-0027…0031 из v1.1 Concept (они уже перечислены).
- Обновить EPOS-04 (конфликт ADR-0008).
- Закрыть license в ADR-0026 (Apache-2.0).

#### Domain & Adequacy Layer (приоритет после Sprint 0)
- Начать **строго** с domain invariants для Adequacy (ScoreLaunderingGuard, hard blocks, caps, immutable human ratings).
- В первую очередь реализовать `Engineering Decision Profile v0.1` как seed.
- Не усложнять формулу на старте — v0.1 deterministic + weighted + penalties/caps.

#### Репозиторий и delivery hygiene
- Создать первые 10 рекомендованных Issues из раздела 11 нового плана.
- Использовать PR-шаблон из EPOS-11 (он отличный).
- Добавить в CI: dependency boundary check (`.dependency-cruiser.cjs` уже есть).

#### Cut-lines на случай сжатия (6 недель вместо 10)
Если нужно уложиться быстрее — следуйте рекомендации из раздела 10 нового плана:
- Оставить только один шаблон (ADR Review).
- Отложить полноценный Template Library и AdequacyViewer MCP App.
- Сделать один end-to-end Engineering Decision happy path.

### 5. Предложения по дальнейшему развитию
1. **После Sprint 0** — сразу запустить Sprint 1 (Contracts) и Sprint 2 (Core Domain) параллельно, если команда позволяет.
2. **Adequacy Layer** — сделать его «объяснимым по умолчанию». Каждый score должен показывать:
   - profileId + methodVersion
   - dimension breakdown
   - applied penalties/caps/hard blocks
   - human source ratings
   - delta по событиям
3. **Тестирование** — сразу завести `test(domain)` и `test:adequacy` как отдельные команды.
4. **Demo** — после Sprint 6 сделать отдельный `DEMO_RUNBOOK_ENGINEERING_DECISIONS.md` (уже запланировано).
5. **Долгосрочное**:
   - После v1.1 MVP рассмотреть event sourcing / append-only trace как следующий слой.
   - Подумать о hash-chain audit trail (ADR-0035) уже на этапе v1.2.
   - Подготовить extraction inventory из старого ChatAVG, чтобы не тащить legacy.

### Итоговая рекомендация
**Сейчас главное — не писать новые концепты, а сделать Sprint 0 и запустить управляемый delivery.**

Проект имеет отличный фундамент. Если закрыть gaps в governance и документации в ближайшие дни — дальше всё пойдёт быстро и предсказуемо.

Готов помочь с:
- генерацией конкретных GitHub Issues/PR bodies
- формулировкой ADR-0027…0031
- приоритезацией первого vertical slice

Нужны ли более детальные рекомендации по какому-то конкретному спринту или документу?