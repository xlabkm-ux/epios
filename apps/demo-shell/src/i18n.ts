import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          sidebar: {
            workspace_room: "Workspace Room",
            adr_review: "ADR Review",
            archive: "Archive",
            telemetry: "Telemetry",
            active_workspaces: "Active",
            pinned_workspaces: "Pinned",
            archived_workspaces: "Archive",
            new_workspace: "New Workspace",
            settings: "Settings",
            identity: "Identity (Pilot)",
          },
          workspace_menu: {
            share: "Share",
            pin: "Pin",
            unpin: "Unpin",
            rename: "Rename",
            archive: "Archive",
            restore: "Restore from archive",
          },
          share_modal: {
            title: "Public link",
            copy: "Copy link",
            warning:
              "Public links can be accessed by all users. Share information carefully.",
          },
        },
      },
      ru: {
        translation: {
          sidebar: {
            workspace_room: "Рабочая область",
            adr_review: "Обзор ADR",
            archive: "Архив",
            telemetry: "Телеметрия",
            active_workspaces: "Активные",
            pinned_workspaces: "Закреплённые",
            archived_workspaces: "Архив",
            new_workspace: "Новый воркспейс",
            settings: "Настройки",
            identity: "Личность (Pilot)",
          },
          workspace_menu: {
            share: "Поделиться чатом",
            pin: "Закрепить",
            unpin: "Открепить",
            rename: "Переименовать",
            archive: "Архивировать",
            restore: "Вернуть из архива",
          },
          share_modal: {
            title: "Общедоступная ссылка",
            copy: "Скопировать ссылку",
            warning:
              "По общедоступным ссылкам могут переходить все пользователи. Делитесь информацией с осторожностью.",
          },
        },
      },
    },
  });

export default i18n;
