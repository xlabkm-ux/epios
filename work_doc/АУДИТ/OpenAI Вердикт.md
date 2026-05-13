## Вердикт

Проект **архитектурно сильный, но delivery-незрелый**. База DDD/Hexagonal/DDD-документации хорошая, пакеты разложены правильно, есть Apache-2.0, SECURITY, CONTRIBUTING, AGENT.md и monorepo-скелет. Но сейчас это скорее **bootstrap alpha**, а не управляемый engineering-проект: в GitHub видно **0 Issues, 0 PRs**, только **3 commits**, нет опубликованных релизов, а `.github/workflows` не найден. ([GitHub][1])

## P0 — исправить немедленно

1. **Добавить CI GitHub Actions.**
   Сейчас в `package.json` есть `ci` и `ci:release`, но workflow отсутствует. Минимум: `pnpm install --frozen-lockfile → lint → typecheck → test → build`. GitHub best practice — защищать main через required status checks и PR review. ([GitHub][2])

2. **Защитить `master/main`.**
   Включить branch protection: запрет direct push, required PR, required CI, linear history/squash. Иначе архитектурные правила останутся декларацией. ([GitHub Docs][3])

3. **Секреты и env-гигиена.**
   `docker-compose.yml` и `.env.example` содержат `epios_dev_password`; это не выглядит как реальный секрет, но для open-source лучше заменить на `${POSTGRES_PASSWORD:-epios_dev_password}` и явно пометить как local-only. OWASP-рекомендация — повторяемо сканировать репозиторий на sensitive values в pipeline. ([GitHub][4])

4. **Создать рабочий backlog в GitHub Issues.**
   Сейчас issues = 0, хотя EPIOS-10 уже описывает Sprint 1 issue set. Перенести P0/P1 задачи в GitHub, иначе нет управляемого delivery-контроля. ([GitHub][1])

5. **Закрыть ADR/document drift.**
   Документы сами фиксируют необходимость `DOCUMENT_REGISTER.md`, ADR-файлов и lifecycle контроля; аудит документации указывает конфликт ADR-нумерации и статус Draft/For Review для документов, уже используемых как executable plan. 

## P1 — оптимизация проекта

1. **Обновить Turbo.**
   В `package.json` стоит `turbo ^1.13.3`, а `turbo.json` использует старый ключ `pipeline`. Для Turbo v2 надо перейти на `tasks`. ([GitHub][2])

2. **Зафиксировать Node/pnpm версию.**
   README говорит Node v20+, `package.json` требует Node >=22.0.0. Привести к одному стандарту: **Node 22 LTS + `packageManager: "pnpm@x.y.z"`**. ([GitHub][1])

3. **Добавить dependency boundary check.**
   Правило уже задано: `domain ← ports ← application`, запрет `infrastructure → domain` нарушений. Нужно автоматизировать через `dependency-cruiser` или `eslint-plugin-boundaries`. AGENT.md тоже требует запрет infra imports в domain/application. ([GitHub][5])

4. **Сделать `.dockerignore`.**
   Минимум: `.git`, `node_modules`, `.env`, `coverage`, `dist`, `.turbo`. Это защита от утечек и ускорение сборок.

5. **Добавить release gate checklist.**
   EPIOS-07 уже задает Milestones M1–M6: repo/local DB/tests/no secrets для M1, domain+persistence для M2, API/use cases для M3, shell для M4, MCP security для M5, RC для M6. Их надо превратить в GitHub milestones. 

## Лучшие практики, применимые здесь

* **Trunk-based + protected main + small PRs.** Один PR = один архитектурный/вертикальный срез.
* **CI как контракт, не как украшение:** lint, typecheck, unit, integration-postgres, dependency-boundary, secret scan.
* **Executable architecture:** ADR, API contracts, error catalog, trace event catalog должны быть рядом с кодом и проверяться тестами.
* **Secure by default:** MCP iframe не доверенный, все write actions только через typed backend command, policy, idempotency, audit. Это уже правильно описано в EPIOS-06; теперь это надо покрыть тестами. 
* **PostgreSQL-first без SQL-бизнес-логики:** БД — system of record, но domain rules живут в domain/application. Это соответствует EPIOS-05. 

## Конкретный план на ближайшие 5 PR

**PR-1: CI + protected branch readiness**
`.github/workflows/ci.yml`, pnpm cache, `pnpm ci`, required checks.

**PR-2: repo hygiene**
`.dockerignore`, env cleanup, secret scan, Dependabot/Renovate config.

**PR-3: docs governance**
`DOCUMENT_REGISTER.md`, `OPEN_DECISIONS_REGISTER.md`, исправить ADR-0008/ADR-0026 конфликт, перевести ключевые документы в `Accepted for MVP Bootstrap`.

**PR-4: architecture enforcement**
dependency boundary checker + test that `domain` imports no infra/framework/provider SDK.

**PR-5: Sprint 2 executable package**
Mission, MissionRun, EpistemicNode, EvidenceRef, ArtifactPatch, ApprovalRequest contracts + persistence migrations + invariant tests.

## Короткий итог

Главная ошибка сейчас — **не архитектура, а отсутствие автоматизированных ворот качества**. Сначала CI, branch protection, issue backlog, doc register и dependency boundaries. Потом уже наращивать доменную модель. Иначе хороший EPIOS-пакет быстро превратится в drift-документацию без инженерного контроля.

[1]: https://github.com/xlabkm-ux/epios "GitHub - xlabkm-ux/epios: Epistemic OS v1.0 · GitHub"
[2]: https://github.com/xlabkm-ux/epios/blob/master/package.json "epios/package.json at master · xlabkm-ux/epios · GitHub"
[3]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule?utm_source=chatgpt.com "Managing a branch protection rule - GitHub Docs"
[4]: https://github.com/xlabkm-ux/epios/blob/master/docker-compose.yml "epios/docker-compose.yml at master · xlabkm-ux/epios · GitHub"
[5]: https://github.com/xlabkm-ux/epios/blob/master/AGENT.md "epios/AGENT.md at master · xlabkm-ux/epios · GitHub"
