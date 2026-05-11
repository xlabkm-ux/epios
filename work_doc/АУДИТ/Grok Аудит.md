**Аудит и предложения по EPOS (на основе документации + репозитория github.com/xlabkm-ux/epos)**

### Общий вердикт (P0)
Проект имеет **сильную архитектурную основу** (hexagonal + DDD, PostgreSQL-first, MCP boundary, traceability). Документация EPOS-00…EPOS-11 — одна из лучших, что я видел для стартапа такого уровня.

**Главный риск сейчас не архитектура, а execution gap**:  
- Репозиторий существует, но Week 1 bootstrap выполнен только частично (структура есть, но ADRs, регистры, contracts — в work_doc, не в docs/).  
- Документы остаются Draft → нет единого источника истины.  
- License не finalized в ADR.  
- Нет DOCUMENT_REGISTER, OPEN_DECISIONS_REGISTER, полноценных ADR-файлов.

Без **Documentation Stabilization Pass** (1–2 дня) проект быстро получит drift, против которого сам EPOS-04 предупреждает.

### Критичные P0-проблемы (из вашего аудита + repo)
1. **ADR-нумерация и License** (P0)  
   Конфликт в EPOS-04/EPOS-09. License всё ещё Proposed.  
   **Действие**: Создать `docs/02_adrs/ADR-0026-license-choice.md` (Apache-2.0), обновить EPOS-04, перевести статус Accepted.

2. **Document control** (P0)  
   Нет `docs/00_project/DOCUMENT_REGISTER.md` и `OPEN_DECISIONS_REGISTER.md`. Все EPOS — Draft.  
   **Действие**: Создать регистры + перевести EPOS-00…EPOS-11 в "Accepted for MVP Bootstrap".

3. **Week 1 не завершён**  
   Структура пакетов и turbo есть, но ADRs, contracts, security tests — отсутствуют.  
   **Действие**: Закрыть PR-001…PR-006 по EPOS-11.

### Лучшие мировые практики (2025–2026)
- **Документация**: "Docs as Code" + ADR (arc42 + adr.github.io) + Diátaxis framework для структуры docs/. Автоматические проверки линков и outdated docs через GitHub Actions.
- **Monorepo (pnpm + Turbo)**: Отлично. Добавить `dependency-cruiser` или `nx dep-graph` для enforcement hexagonal rules.
- **Hexagonal/Ports & Adapters + DDD**: Стандарт (см. Domain-Driven Hexagon, TSH.io, RunLevel0). Главное — жёсткий dependency check в CI.
- **Open-source от дня 1**: GitHub best practices — README с quickstart, SECURITY.md, CODEOWNERS, issue templates, branch protection + required checks.
- **Release gates**: Использовать GitHub Projects + Milestones + Release Drafter.

### Конкретные предложения по оптимизации (приоритетно)

**P0 (1–3 дня) — Stabilization**
- Создать `DOCUMENT_REGISTER.md`, `OPEN_DECISIONS_REGISTER.md`, `ADR_TEMPLATE.md`.
- Финализировать License + ADR-0026.
- Перенести/создать ADR-0001…0010 + 0026 в `docs/02_adrs/`.
- Обновить EPOS-00, EPOS-04, EPOS-09, EPOS-10, EPOS-11.
- Добавить GitHub branch protection (main, require PR + CI).

**P1 (до конца Week 1 / перед Week 2)**
- Создать `API_CONTRACTS_MVP.md`, `APPLICATION_USE_CASE_CONTRACTS.md`, `ERROR_CATALOG.md`, `TRACE_EVENT_CATALOG.md`.
- `TEST_STRATEGY_AND_MATRIX.md` + MCP_SECURITY_TEST_PLAN.
- EPOS-12 (Week 2 issues).
- ChatAVG handover docs (CURRENT_STATE_V2_4, EXTRACTION_INVENTORY и т.д.).

**Технические улучшения (CI + tooling)**
- Добавить в CI: `dependency-cruiser` (hexagonal enforcement), secret scanning (gitleaks), typecheck, vitest coverage.
- `.github/dependabot.yml` + Renovate.
- Turbo cache в GitHub Actions.
- Release Drafter + conventional commits.

**Документация и коммуникация**
- README: добавить статус "Alpha — internal dev only", quickstart, architecture diagram (C4 или mermaid).
- Использовать Diátaxis: docs/ → reference / explanation / how-to / tutorial.
- Создать PROJECT_MAP.md с актуальной C4.

### Риски и приоритеты (таблица)
| Риск | Severity | Митigation |
|------|----------|----------|
| Document drift | P0 | Регистры + статусы |
| License leak | P0 | ADR-0026 + LICENSE |
| Scope creep Week 2+ | P1 | Жёсткие gates + EPOS-12 |
| Dependency violation | P1 | dependency-cruiser в CI |
| ChatAVG legacy pollution | P1 | Extraction inventory |

**Рекомендация**: Сначала **Documentation Stabilization Pass** (закрыть P0 из вашего аудита), потом Week 2 domain/persistence. После этого проект готов к публичному росту и contributions.
