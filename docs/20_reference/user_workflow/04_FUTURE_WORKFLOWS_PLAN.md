Owner: @architect
Status: accepted

# План развития пользовательских процессов (Workflow Roadmap)

В данном документе фиксируются планы по улучшению и расширению пользовательского опыта (User Journey) за рамками базового ADR Review.

## 🟡 Горизонт 1: Post-Pilot Workflow Polish
*Доработка текущего процесса на основе обратной связи.*
- [ ] **Interactive Onboarding:** Пошаговый тур для новых пользователей (Author/Reviewer) при первом входе в Workspace.
- [ ] **Patch Drafts:** Возможность сохранять черновики патчей перед отправкой на голосование (чтобы не спамить ревьюеров недописанными мыслями).
- [ ] **Interactive Debug:** Итеративная отладка микро-прерываний в текущем флоу (устранение лишних кликов) в диалоге с разработчиком.

## 🔵 Горизонт 2: Multi-Reviewer Collaboration
*Расширение процесса на командную работу.*
- [ ] **Asynchronous Debates:** Возможность открывать "Треды" (Threads) под конкретным патчем в GovernancePanel, чтобы обсудить Rationale перед голосованием.
- [ ] **Consensus Rules:** Настройка профиля оценки так, чтобы для перехода патча в `Approved` требовалось N голосов, либо отсутствие вето (Veto).
- [ ] **Collaborative Debug:** Совместная отладка сценариев конфликтных правок (когда два автора предлагают патчи к одному узлу) в диалоге с разработчиком.

## 🟣 Горизонт 3: Template-Driven Workflows
*Процессы на основе библиотеки шаблонов (Template Library).*
- [ ] **Incident Response Workflow:** Сценарий Post-Mortem. AI-маппинг извлекает не "Claim/Evidence", а "Timeline Event/Root Cause". Процесс аппрува направлен на утверждение "Action Items" (Preventative measures).
- [ ] **RFC Lifecycle:** Процесс долгоживущего RFC (Request for Comments). Патчи выступают в роли инкрементальных предложений от разных команд.
- [ ] **Ecosystem Debug:** Интеграционное тестирование перекрестных Workflow (когда инцидент из одного Workspace порождает ADR в другом) в диалоге с разработчиком.

## 🌌 Горизонт 4: External Integrations Journey
*Бесшовная встройка в привычные инструменты инженера.*
- [ ] **Git-Flow Integration:** Возможность затриггерить создание Workspace прямо из Pull Request (через GitHub Actions). Патчи в EpiOS могут генерировать коммиты обратно в Markdown файл в репозитории.
- [ ] **Slack/Teams Approvals:** Бот присылает Summary патча в мессенджер, Reviewer может нажать "Approve" прямо в чате, не открывая EpiOS Studio.

