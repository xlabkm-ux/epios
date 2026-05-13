# EpiOS — инвестиционное предложение

**Версия:** v0.2 investor memo  
**Статус:** рабочий вариант для обсуждения с инвесторами / design partners  
**Стадия проекта:** alpha / MVP in development  
**Категория:** trust layer for AI-assisted decisions and living documents  

---

## 1. One-liner

**EpiOS — это рабочая среда для корпоративного ИИ, которая превращает сложные документы, исследования и решения в проверяемый процесс: с источниками, утверждениями, версиями артефактов, approval flow и полным следом изменений.**

На английском для investor deck:

> **EpiOS is an AI workspace that turns messy corporate knowledge into source-backed decisions, reviewable document changes and auditable human-approved actions.**

---

## 2. Инвестиционный тезис

Первая волна генеративного ИИ дала компаниям скорость. Но в ответственных процессах одной скорости недостаточно.

Руководители, инженеры, аналитики и compliance-команды не могут полагаться на “просто хороший ответ”, если непонятно:

- откуда взялся вывод;
- какие источники его поддерживают;
- где гипотеза, а где факт;
- кто утвердил изменение;
- можно ли восстановить историю решения;
- безопасно ли выполнить предложенное действие.

**EpiOS строит инфраструктурный слой доверия поверх корпоративной работы с ИИ.**

Это не очередной чат и не автономный агент. Это operating layer для traceable AI work: миссии, evidence graph, living artifacts, approvals, decisions и audit trail.

Инвестиционная ставка:

> **Следующая фаза enterprise AI будет оцениваться не только по качеству генерации, но и по управляемости, доказательности, безопасности и воспроизводимости работы. EpiOS строит продукт именно для этой фазы.**

---

## 3. Проблема

Компании уже используют ИИ для документов, анализа, планирования и принятия решений. Но текущие инструменты ломаются в момент, когда работа становится ответственной.

Обычный AI chat:

- генерирует текст, но не поддерживает доказательную структуру;
- смешивает факты, гипотезы, интерпретации и рекомендации;
- не хранит полноценный след “почему документ изменился”;
- не даёт устойчивый approval workflow для значимых действий;
- плохо подходит для audit, compliance, engineering governance и management accountability.

В результате компании получают парадокс:

> **ИИ ускоряет работу, но снижает доверие к процессу принятия решений.**

Для простых задач это приемлемо. Для архитектурных решений, инвестиционных меморандумов, юридических обзоров, исследовательской аналитики, risk review и управленческих решений — нет.

---

## 4. Решение

EpiOS вводит новую рабочую единицу — **Mission**.

Mission — это ограниченный контекст работы с целью, источниками, утверждениями, рисками, доказательствами, артефактом и решениями.

Типичный flow:

1. Пользователь создаёт Mission.
2. Добавляет контекст: документ, исследование, архитектурную заметку, план, issue, memo.
3. EpiOS выделяет **EpistemicNodes**: факты, гипотезы, риски, вопросы, решения.
4. Система связывает утверждения с **EvidenceRefs**.
5. На основе этого предлагает изменение в **LivingArtifact**.
6. Значимое изменение проходит через **ApprovalRequest**.
7. После решения создаётся новая версия артефакта.
8. **Trace** показывает, что произошло, на чём основано и кто утвердил.

Короткая формула продукта:

> **situation → distinction → evidence → artifact → decision → action**

EpiOS не пытается заменить человека. Он делает работу человека с ИИ более проверяемой, структурированной и безопасной.

---

## 5. Первый beachhead market

Первый рынок должен быть узким. Не “все knowledge workers”, не “все компании с ИИ”, не “все регулируемые отрасли”.

### Рекомендуемый первый рынок

**Engineering и product teams, которым нужно готовить, проверять и согласовывать архитектурные документы, RFC, ADR, project plans и decision memos.**

Почему это лучший старт:

- боль понятная и частая;
- документы уже являются частью рабочего процесса;
- цена ошибки высокая;
- evidence и trace реально важны;
- можно быстро показать before/after;
- покупатель понимает governance, review и approval;
- технические команды проще воспринимают open-source и architecture-first подход.

### Первый платный use case

> **EpiOS Architecture Decision Room**  
> AI-assisted workspace for RFCs, ADRs, design docs and technical planning with evidence, reviewable patches and decision trace.

Пользователь загружает design notes / RFC draft / ADR / issue context / архитектурное обсуждение и получает:

- карту ключевых утверждений;
- риски и допущения;
- evidence links;
- proposed patch к документу;
- approval flow;
- trace того, почему документ изменился.

---

## 6. Почему сейчас

Рынок проходит переход:

> **от “AI that writes” к “AI work that can be trusted”.**

Три сдвига делают EpiOS своевременным:

1. **Enterprise AI adoption растёт**, но компании упираются в trust, governance, security и accountability.
2. **AI agents создают новые риски**, потому что могут не только отвечать, но и предлагать действия.
3. **Корпоративная работа остаётся document- and decision-heavy**, а большинство AI-инструментов оптимизированы под chat interaction, а не под traceable artifact workflow.

Сегодня компании уже готовы платить за ИИ. Следующий вопрос — не “может ли ИИ написать текст?”, а:

- можно ли доверять этому выводу;
- можно ли доказать, откуда он взялся;
- можно ли безопасно встроить его в рабочий процесс;
- можно ли пройти аудит решения;
- можно ли понять, почему документ изменился.

EpiOS строится вокруг этих вопросов с первого дня.

---

## 7. Продукт

### MVP: Universal Mission Room

Первый продукт — **Universal Mission Room**.

MVP поддерживает четыре сценария:

1. architecture documents;
2. project planning;
3. research review;
4. decision support.

Однако для коммерческого входа продукт лучше упаковать уже:

> **EpiOS for Engineering Decisions**  
> Traceable AI workspace for RFCs, ADRs, design docs and technical planning.

### Ключевые компоненты

| Компонент | Назначение |
|---|---|
| Mission Brief | цель, контекст, ограничения, критерии успеха |
| Epistemic Graph | утверждения, гипотезы, риски, вопросы, решения |
| Evidence Layer | источники, цитаты, качество, свежесть, границы применимости |
| Living Artifact | версия документа или memo |
| Artifact Patch | предлагаемое изменение с reason/evidence/decision links |
| Approval Flow | человек утверждает значимые изменения |
| Trace | история событий, решений, источников и действий |

---

## 8. Почему это не обычный AI chat

AI chat отвечает. EpiOS управляет рабочим процессом.

| Обычный AI chat | EpiOS |
|---|---|
| Генерирует ответ | Производит проверяемый артефакт |
| Источники часто вторичны | Источники являются частью модели работы |
| Нет строгой границы между фактом и гипотезой | Утверждения типизируются и получают strength/status |
| История решения теряется | Decision и trace сохраняются |
| Действия могут быть неявными | Write/action flow проходит через approval |
| Хорош для быстрых вопросов | Подходит для ответственных документов и решений |

Главная дифференциация:

> **EpiOS выигрывает там, где качества ответа недостаточно. Нужны evidence, artifact lineage, approval и auditability.**

---

## 9. Конкурентное поле

EpiOS находится между несколькими категориями.

### 9.1. Horizontal AI copilots

Примеры: ChatGPT Enterprise, Microsoft Copilot, Gemini for Workspace.

Они сильны в генерации, офисной интеграции и доступе к LLM. Но они не построены вокруг mission-level evidence graph, artifact lineage и approval trace как основных primitives.

### 9.2. Knowledge / RAG platforms

Примеры: Glean, enterprise search, Notion AI, Confluence AI.

Они сильны в поиске и knowledge retrieval. Но retrieval сам по себе не решает задачу reviewable artifact mutation, human approval и decision trace.

### 9.3. Agent frameworks

Примеры: LangGraph/LangSmith, CrewAI-like systems, Dust-like systems.

Они полезны для построения workflow/agent logic, но часто developer-first и не являются готовой рабочей комнатой для audited decisions.

### 9.4. Document / work management tools

Примеры: Notion, Coda, Confluence, Linear, Jira.

Они сильны как systems of record. Но AI reasoning/evidence/approval layer обычно не является их core primitive.

### 9.5. Позиционирование EpiOS

> **EpiOS is the trust layer for AI-assisted decisions and living documents.**

EpiOS не конкурирует “лучшим LLM-ответом”. Он конкурирует рабочим процессом, в котором выводы, источники, изменения и решения становятся проверяемыми объектами.

---

## 10. Защищаемость

Потенциальный moat EpiOS строится не на одной модели и не на UI.

### 10.1. Domain model moat

Mission, EpistemicNode, EvidenceRef, LivingArtifact, ArtifactPatch, ApprovalRequest и DecisionRecord становятся повторяемыми primitives для ответственной AI-работы.

### 10.2. Workflow data moat

Со временем система накапливает:

- графы решений;
- evidence lineage;
- approval traces;
- artifact histories;
- patterns of accepted/rejected recommendations.

Это может стать уникальным набором данных о том, как организации принимают решения с ИИ.

### 10.3. Integration moat

Подключение GitHub, Jira/Linear, Confluence, Notion, Google Drive, Slack, internal docs усиливает продукт и делает его частью рабочего процесса.

### 10.4. Trust / compliance moat

Policy, approval, idempotency, audit, trace и redaction становятся критически важными для enterprise adoption.

### 10.5. Open-source ecosystem moat

Open-source стратегия может привлечь:

- разработчиков;
- security review;
- workflow templates;
- enterprise trust;
- внешние MCP Apps / adapters.

Но open-source сам по себе не moat. Moat появится только при дисциплинированном исполнении: документация, CI, security posture, contribution model, production-grade contracts.

---

## 11. Бизнес-модель

### 11.1. Начальная модель

**B2B SaaS / self-hosted team subscription.**

Возможная структура:

| План | Клиент | Примерная логика цены |
|---|---|---|
| Open-source core | developers, small teams | free |
| Team | engineering/product teams | per-seat / per-active-user |
| Business | larger teams | seats + mission volume + integrations |
| Enterprise | regulated / security-sensitive orgs | annual contract, self-hosted / private deployment |

### 11.2. Pricing axes

Ценообразование лучше привязать не только к seats.

Возможные pricing axes:

- active users;
- number of missions;
- connected sources;
- storage / retention;
- private deployment;
- compliance / audit package;
- advanced approval policies;
- enterprise connectors.

### 11.3. Возможный ACV

На ранней стадии это гипотеза, не обещание.

- small team: $2k–$10k/year;
- business team: $10k–$50k/year;
- enterprise/self-hosted: $50k–$150k+/year.

Ключевой вопрос для проверки в пилотах:

> Готова ли команда платить не за “ещё один AI assistant”, а за снижение риска, ускорение review и улучшение качества decision documentation?

---

## 12. Go-to-market

### Phase 1 — Design partners

Цель: 5–10 design partners среди:

- engineering orgs;
- devtools companies;
- consultancies;
- AI-heavy product teams;
- architecture/platform teams.

Критерий ICP:

> Команда уже использует AI для технических документов, но не доверяет результатам без ручной проверки, источников и истории решений.

### Phase 2 — Paid pilots

Платный пилот на 6–8 недель:

- 1–2 команды;
- 1–3 real workflows;
- integration with existing docs/repos;
- measurable before/after.

### Phase 3 — Repeatable package

Упаковка:

> **EpiOS Architecture Decision Room**  
> For teams that need auditable RFCs, ADRs and technical planning with AI.

### 12.4. Метрики пилота

Основные метрики:

- time to first useful artifact;
- time saved in review cycle;
- number of claims linked to evidence;
- number of approved artifact patches;
- number of captured decisions;
- user-reported trust score;
- willingness to pay;
- repeat usage per team per week.

---

## 13. Текущий статус

**EpiOS is pre-commercial / alpha.**

Проект имеет:

- сильную архитектурную концепцию;
- MVP scope;
- документацию по domain model, architecture, persistence, MCP security, runtime и release gates;
- open-source стратегию;
- 6-week MVP roadmap;
- технически состоятельную модель traceable AI work.

Но проект ещё должен доказать:

- пользовательскую ценность;
- простоту восприятия;
- повторяемость первого use case;
- готовность платить;
- скорость внедрения;
- конкурентоспособность против horizontal AI tools и existing work platforms.

### Что нужно добавить перед активным fundraising

- [ ] ссылка на репозиторий;
- [ ] demo video 2–3 минуты;
- [ ] 3 реальных sample artifacts до/после;
- [ ] 5–10 customer discovery interviews;
- [ ] 2–3 design partner commitments;
- [ ] clear MVP release date;
- [ ] founder/team slide;
- [ ] fundraising ask;
- [ ] market sizing;
- [ ] pricing hypothesis validation.

---

## 14. Roadmap

### 0–3 месяца

Цель: доказать executable MVP и первый повторяемый scenario.

- завершить MVP Universal Mission Room;
- one-command local demo;
- Architecture Decision Room scenario;
- source ingestion from Markdown / GitHub / Google Drive-like docs;
- ClaimApp, EvidenceViewer, ApprovalApp;
- trace drawer;
- 3–5 design partners;
- первые real artifacts.

### 3–6 месяцев

Цель: перейти от demo к paid pilots.

- paid pilots;
- repo/docs/tickets integrations;
- better evidence retrieval;
- artifact diff UX;
- enterprise deployment baseline;
- policy and audit package;
- first repeatable onboarding playbook;
- pricing validation.

### 6–12 месяцев

Цель: сформировать repeatable commercial wedge.

- self-hosted enterprise version;
- workflow templates;
- additional vertical packs: research review, investment memo, compliance review;
- richer integrations;
- stronger evals and evidence quality metrics;
- usage analytics;
- expansion inside design partner accounts.

---

## 15. Fundraising ask

Вариант для pre-seed:

> **Raising: $750k–$1.5M pre-seed**  
> **Runway:** 12–18 months  
> **Use of funds:** MVP completion, design partner pilots, core engineering, security/audit layer, first GTM experiments.

### Use of funds

| Направление | Доля | Цель |
|---|---:|---|
| Product / engineering | 55–65% | MVP, integrations, reliability, developer experience |
| Security / audit / infrastructure | 10–15% | MCP bridge, policy, trace, self-hosted readiness |
| GTM / design partners | 15–20% | customer discovery, pilots, onboarding, content |
| Operations / legal / admin | 5–10% | open-source governance, contracts, compliance basics |

### Milestones на раунд

- MVP used by 5–10 design partners;
- at least 2 paid pilots;
- measurable improvement in artifact creation/review workflow;
- repeatable wedge in engineering decision documentation;
- open-source community signal: stars/contributors/issues;
- enterprise self-hosting path validated;
- clear seed narrative with traction.

---

## 16. Основные риски

### 16.1. Product complexity risk

EpiOS может быть слишком сложным для первого пользователя. Термины Mission, EpistemicNode, EvidenceRef, ArtifactPatch и ApprovalRequest сильны архитектурно, но могут перегрузить UX.

**Mitigation:** начинать с простого commercial package: Architecture Decision Room. В UI скрывать сложность за понятными объектами: “claims”, “evidence”, “document changes”, “approval”, “history”.

### 16.2. Market positioning risk

Категория новая и может быть непонятной.

**Mitigation:** не продавать “epistemic operating system” в первом касании. Продавать конкретный painkiller: auditable AI-assisted RFCs / ADRs / technical planning.

### 16.3. Competition risk

Большие AI и productivity платформы могут встроить похожие функции.

**Mitigation:** выигрывать узким workflow depth, open-source trust, self-hosted path, evidence/approval primitives и integrations.

### 16.4. Delivery risk

Архитектура сильная, но есть риск документального overengineering без executable product.

**Mitigation:** каждая неделя должна давать работающий vertical slice. CI, release gates, branch protection, issues, PR discipline и demo scripts обязательны.

### 16.5. Trust risk

Если система ошибочно маркирует слабые утверждения как сильные, доверие будет потеряно.

**Mitigation:** conservative defaults: unsupported generated claims are weak/hypothesis-only; high-risk changes require approval; every strong claim needs evidence or explicit human assertion boundary.

---

## 17. Что делает проект инвестиционно интересным

1. **Большой secular trend:** enterprise AI adoption переходит от experimentation к governance и accountable workflows.
2. **Clear wedge:** engineering decision documentation is painful, frequent and measurable.
3. **Differentiated architecture:** evidence-backed artifacts + approval + trace, а не просто chat.
4. **Open-source strategy:** может ускорить trust, adoption и ecosystem.
5. **Expansion path:** от RFC/ADR к research review, project planning, compliance memos, investment analysis и regulated workflows.
6. **Strong technical narrative:** domain-first, PostgreSQL-first, secure MCP Apps, idempotency, traceability, human-in-the-loop.

---

## 18. Короткая версия для отправки инвестору

**EpiOS is building the trust layer for enterprise AI work.**

Companies are adopting AI to write documents, analyze research and support decisions, but current tools are optimized for fast answers, not accountable work. In serious business processes, teams need to know what evidence supports a claim, where the model is guessing, who approved a change and why a document or decision evolved.

EpiOS turns AI-assisted work into a traceable workflow. Each task becomes a Mission: the system extracts claims, links them to evidence, identifies risks and assumptions, proposes changes to a living artifact, routes significant changes through human approval and preserves a full audit trail.

The first wedge is engineering and product teams producing architecture decisions, RFCs, project plans and decision memos. These teams already use AI, but still rely on manual review because current tools do not provide evidence-backed artifact changes and decision traceability.

EpiOS is currently alpha / MVP-stage. The project has a clear architecture, open-source strategy and a focused Universal Mission Room MVP. The next milestone is to validate the Architecture Decision Room with design partners and prove that teams can create better, more trustworthy documents faster, with visible evidence and approval history.

We believe the next phase of enterprise AI will move from “AI that generates” to “AI work that can be trusted.” EpiOS is positioned to become the operating layer for that shift.

---

## 19. Appendix A — Recommended investor deck structure

1. Title / one-liner
2. Problem
3. Why now
4. Solution
5. Product demo flow
6. Beachhead market
7. Market size
8. Competition
9. Business model
10. Go-to-market
11. Traction / current status
12. Roadmap
13. Team
14. Fundraising ask
15. Vision

---

## 20. Appendix B — Что не стоит выносить в основной pitch

В основной investor story не стоит перегружать инвестора:

- полным PostgreSQL schema;
- подробностями MCP bridge;
- всеми domain entities;
- историей ChatAVG;
- всеми возможными verticals;
- философским объяснением “эпистемической ОС”;
- длинными архитектурными принципами.

Это важно, но должно быть в technical appendix / diligence pack.

Главная история должна быть проще:

> **AI is fast, but serious work needs trust. EpiOS makes AI-assisted decisions and documents traceable, source-backed and human-approved.**

---

## 21. Appendix C — Open items before fundraising

| Open item | Priority | Comment |
|---|---|---|
| Market sizing | P0 | Нужен TAM/SAM/SOM для first wedge |
| Founder/team story | P0 | Без этого инвестор не оценит execution risk |
| Demo video | P0 | 2–3 минуты, один workflow |
| Design partners | P0 | Минимум 3 убедительных разговора/commitments |
| Pricing validation | P1 | Проверить willingness to pay |
| Competitive matrix | P1 | Конкретные конкуренты, не только категории |
| GitHub/project hygiene | P1 | CI, issues, releases, README, security posture |
| Security appendix | P1 | MCP, approval, idempotency, audit |
| Financial model | P1 | 18-month runway model |
| Metrics dashboard | P2 | usage, artifact flow, evidence coverage |

---

## 22. Финальный тезис

EpiOS не должен продаваться как “ещё одна AI-платформа”. Это слабая позиция.

Сильная позиция:

> **EpiOS is the trust and workflow layer for AI-assisted decisions.**

Первый коммерческий wedge:

> **Auditable architecture decisions and technical planning for engineering teams.**

Долгосрочная категория:

> **Traceable AI work infrastructure for organizations where decisions must be explainable, source-backed and human-approved.**

