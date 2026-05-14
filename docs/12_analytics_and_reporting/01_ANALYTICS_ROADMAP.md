# Analytics & Reporting Roadmap

## 🟡 Горизонт 1: Basic In-App Reporting
- [ ] Добавление вкладки "Analytics" в `demo-shell`.
- [ ] Вывод простых метрик: Общее число ADR, распределение по статусам Readiness (🟢, 🟡, 🔴).
- [ ] Экспорт списка Workspace в CSV/Excel.

## 🔵 Горизонт 2: Team Velocity & Governance Insights
- [ ] Метрика "Time to Decision" (Сколько в среднем проходит дней от загрузки черновика до аппрува патча).
- [ ] Тепловая карта "Блокеров": какие утверждения в шаблонах чаще всего блокируются из-за отсутствия доказательств.
- [ ] Отчетность по командам (Department/Team View).

## 🟣 Горизонт 3: Enterprise DWH Integration
- [ ] Разработка механизма ETL (Export, Transform, Load) для стриминга агрегированных метрик в корпоративные хранилища (Snowflake, ClickHouse).
- [ ] Поддержка BI-систем (Tableau, PowerBI) через специальные Read-Only SQL views в базе PostgreSQL.
