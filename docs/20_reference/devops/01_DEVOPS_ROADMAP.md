# Infrastructure & DevOps Roadmap

## 🟡 Горизонт 1: Стабилизация On-Premise
- [ ] Стандартизация скриптов развертывания под Windows Server (IIS + PM2).
- [ ] Автоматизация Drizzle миграций при деплое.
- [ ] Настройка ротации логов API сервера.

## 🔵 Горизонт 2: Cloud Native & CI/CD
- [ ] Контейнеризация: создание `Dockerfile` для `api` и `demo-shell`.
- [ ] Внедрение CI-пайплайна: автоматический запуск Playwright e2e тестов, линтеров и Vitest при каждом Pull Request.
- [ ] Автоматическая сборка и публикация Docker-образов в Registry.

## 🟣 Горизонт 3: SRE & Observability
- [ ] Интеграция с Datadog / Prometheus для сбора APM метрик.
- [ ] Настройка алертов (Slack/Email) на 500-е ошибки или падение базы данных.
- [ ] Регулярное тестирование плана Disaster Recovery (DRP).
