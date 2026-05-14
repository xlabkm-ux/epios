import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Layout,
  Database,
  Activity,
  Settings,
  Plus,
  Terminal,
  Zap,
  FileText,
  Shield,
  User as UserIcon,
  Copy,
} from "lucide-react";
import { useApi } from "../hooks/useApi";
import { useWorkspace } from "../context/WorkspaceContext";
import { useSecurity } from "../context/SecurityContext";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Workspace, WorkspaceStatus } from "@epios/domain";

// Refactored Components
import { Modal } from "./Modal";
import { SidebarItem } from "./SidebarItem";

const Sidebar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [shareModalWs, setShareModalWs] = useState<Workspace | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { data: fetchedWorkspaces } = useApi<Workspace[]>("/workspaces");
  const {
    workspaces,
    setWorkspaces,
    selectedWorkspaceId,
    setSelectedWorkspaceId,
    activeView,
    setActiveView,
  } = useWorkspace();
  const { currentUser, setCurrentUserId } = useSecurity();

  // Theme Logic
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Resize Logic
  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        const newWidth = mouseMoveEvent.clientX;
        if (newWidth > 180 && newWidth < 600) {
          setSidebarWidth(newWidth);
          if (isCollapsed) setIsCollapsed(false);
        }
      }
    },
    [isResizing, isCollapsed],
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  useEffect(() => {
    if (fetchedWorkspaces) {
      setWorkspaces(fetchedWorkspaces);

      const isValidSelection = fetchedWorkspaces.some(
        (ws) => ws.id === selectedWorkspaceId,
      );
      if (
        fetchedWorkspaces.length > 0 &&
        (!selectedWorkspaceId || !isValidSelection)
      ) {
        setSelectedWorkspaceId(fetchedWorkspaces[0].id);
      }
    }
  }, [
    fetchedWorkspaces,
    setWorkspaces,
    setSelectedWorkspaceId,
    selectedWorkspaceId,
  ]);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleAction = (ws: Workspace, action: string) => {
    if (action === "share") {
      setShareModalWs(ws);
    } else if (action === "archive" || action === "restore") {
      const newStatus: WorkspaceStatus =
        action === "archive" ? "archived" : "running";
      setWorkspaces(
        workspaces.map((w) =>
          w.id === ws.id ? { ...w, status: newStatus } : w,
        ),
      );
    } else {
      alert(`Action: ${action} for ${ws.title}`);
    }
  };

  return (
    <>
      <motion.div
        ref={sidebarRef}
        initial={false}
        animate={{ width: isCollapsed ? 80 : sidebarWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          height: "100vh",
          backgroundColor: "var(--bg-sidebar)",
          borderRight: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          padding: isCollapsed ? "2rem 0.75rem" : "2rem 1.25rem",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Resize Handle */}
        {!isCollapsed && (
          <div
            onMouseDown={startResizing}
            style={{
              position: "absolute",
              right: -3,
              top: 0,
              bottom: 0,
              width: "6px",
              cursor: "col-resize",
              zIndex: 1000,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(100, 108, 255, 0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          />
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
            padding: isCollapsed ? "0" : "0 0.5rem",
            justifyContent: isCollapsed ? "center" : "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "36px",
                minWidth: "36px",
                height: "36px",
                backgroundColor: "var(--primary)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                boxShadow: "var(--panel-shadow)",
              }}
            >
              <Terminal size={22} strokeWidth={2.5} />
            </div>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "var(--text-main)",
                    whiteSpace: "nowrap",
                  }}
                >
                  EpiOS
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              position: "absolute",
              right: isCollapsed ? "50%" : "1.25rem",
              top: "2.1rem",
              transform: "translateX(50%)",
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              padding: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              opacity: 0.6,
              transition: "all 0.2s",
              alignItems: "center",
              width: "12px",
              zIndex: 100,
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
            ))}
          </button>
        </div>

        <nav
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            overflowY: "auto",
            paddingRight: isCollapsed ? "0" : "4px",
          }}
          className="sidebar-nav"
        >
          <SidebarItem
            icon={<Layout size={18} />}
            label={t("sidebar.workspace_room")}
            active={activeView === "ROOM"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveView("ROOM")}
          />
          <SidebarItem
            icon={<FileText size={18} />}
            label={t("sidebar.adr_review")}
            active={activeView === "ADR"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveView("ADR")}
          />
          <SidebarItem
            icon={<Database size={18} />}
            label={t("sidebar.archive")}
            isCollapsed={isCollapsed}
            onClick={() => alert("Accessing historical neural data...")}
          />
          <SidebarItem
            icon={<Activity size={18} />}
            label={t("sidebar.telemetry")}
            isCollapsed={isCollapsed}
            onClick={() =>
              alert("Real-time workspace metrics synchronization...")
            }
          />

          {!isCollapsed && (
            <div
              style={{
                margin: "2rem 0 0.75rem 0.75rem",
                fontSize: "0.65rem",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 700,
              }}
            >
              {t("sidebar.active_workspaces")}
            </div>
          )}

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            {workspaces.map((workspace) => (
              <SidebarItem
                key={workspace.id}
                active={selectedWorkspaceId === workspace.id}
                isCollapsed={isCollapsed}
                onClick={() => setSelectedWorkspaceId(workspace.id)}
                onAction={(action) => handleAction(workspace, action)}
                isWorkspace
                status={workspace.status}
                icon={
                  selectedWorkspaceId === workspace.id ? (
                    <Zap
                      size={14}
                      fill="var(--primary)"
                      style={{
                        filter: "drop-shadow(0 0 5px var(--primary-glow))",
                        color: "var(--primary)",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "white",
                        opacity: 0.6,
                      }}
                    />
                  )
                }
                label={workspace.title}
              />
            ))}
          </div>

          <SidebarItem
            icon={<Plus size={18} />}
            label={t("sidebar.new_workspace")}
            isAction
            isCollapsed={isCollapsed}
            onClick={() =>
              alert("Initializing Neural Core for new workspace...")
            }
          />
        </nav>

        <div
          style={{
            marginTop: "auto",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <SidebarItem
            icon={<Settings size={18} />}
            label={t("sidebar.settings")}
            isCollapsed={isCollapsed}
            onClick={() => setShowSettings(true)}
          />

          <div
            style={{
              marginTop: "0.5rem",
              padding: isCollapsed ? "0.5rem" : "0.75rem",
              backgroundColor: "rgba(255,255,255,0.03)",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {!isCollapsed && (
              <div
                style={{
                  fontSize: "0.6rem",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {t("sidebar.identity")}
              </div>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isCollapsed ? "center" : "space-between",
                gap: "0.5rem",
              }}
            >
              {!isCollapsed && (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                    {currentUser?.username}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-dim)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {currentUser?.role === "admin" ? (
                      <Shield size={10} />
                    ) : (
                      <UserIcon size={10} />
                    )}
                    {currentUser?.role}
                  </span>
                </div>
              )}
              <select
                value={currentUser?.id}
                onChange={(e) => setCurrentUserId(e.target.value)}
                style={{
                  backgroundColor: "var(--bg-sidebar)",
                  color: "var(--text-main)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  fontSize: "0.7rem",
                  padding: "2px",
                  width: isCollapsed ? "100%" : "auto",
                }}
              >
                <option value="admin-1">Admin</option>
                <option value="reviewer-1">Reviewer</option>
                <option value="observer-1">Observer</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Share Modal */}
      <AnimatePresence>
        {shareModalWs && (
          <Modal
            onClose={() => setShareModalWs(null)}
            title={t("share_modal.title")}
          >
            <div
              style={{
                backgroundColor: "var(--surface-active)",
                borderRadius: "15px",
                padding: "0.5rem 0.5rem 0.5rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
                border: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  flex: 1,
                  fontSize: "0.9rem",
                  color: "var(--text-dim)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                gemini.google.com/share/{shareModalWs.id.substring(0, 8)}...
              </span>
              <button
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--text-inverse)",
                  border: "none",
                  borderRadius: "30px",
                  padding: "0.6rem 1.25rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Copy size={16} />
                {t("share_modal.copy")}
              </button>
            </div>
            <div
              style={{ display: "flex", gap: "12px", color: "var(--text-dim)" }}
            >
              <Activity
                size={16}
                style={{ marginTop: "3px", minWidth: "16px" }}
              />
              <p style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                {t("share_modal.warning")}
              </p>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <Modal
            onClose={() => setShowSettings(false)}
            title={t("sidebar.settings")}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <section>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-dim)",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {i18n.language === "ru"
                    ? "Язык интерфейса"
                    : "Interface Language"}
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    padding: "4px",
                    borderRadius: "10px",
                  }}
                >
                  {["ru", "en"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => toggleLanguage(lang)}
                      style={{
                        flex: 1,
                        padding: "8px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor:
                          i18n.language === lang
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                        color:
                          i18n.language === lang ? "white" : "var(--text-dim)",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        fontSize: "0.8rem",
                      }}
                    >
                      {lang === "ru" ? "Русский" : "English"}
                    </button>
                  ))}
                </div>
              </section>
              <section>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-dim)",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  {i18n.language === "ru"
                    ? "Тема оформления"
                    : "Theme Settings"}
                </h3>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {["Light", "Dark", "System"].map((tOption) => {
                    const themeVal = tOption.toLowerCase();
                    const isActive = theme === themeVal;
                    return (
                      <button
                        key={tOption}
                        onClick={() => setTheme(themeVal)}
                        style={{
                          flex: 1,
                          padding: "12px 8px",
                          borderRadius: "10px",
                          border: isActive
                            ? "1px solid var(--primary)"
                            : "1px solid var(--border)",
                          textAlign: "center",
                          fontSize: "0.75rem",
                          color: isActive
                            ? "var(--text-main)"
                            : "var(--text-dim)",
                          backgroundColor: isActive
                            ? "var(--surface-active)"
                            : "transparent",
                          cursor: "pointer",
                          fontWeight: isActive ? 600 : 400,
                          transition: "all 0.2s",
                        }}
                      >
                        {tOption}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
