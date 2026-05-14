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
  // pinnedIds stores IDs in pin order — last pinned first (unshift)
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { data: fetchedWorkspaces } = useApi<Workspace[]>("/workspaces");
  const {
    workspaces,
    setWorkspaces,
    selectedWorkspaceId,
    setSelectedWorkspaceId,
    activeView,
    setActiveView,
    setArchiveMeta,
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
    } else if (action === "archive") {
      // Record archive date and comment
      setArchiveMeta((prev) => ({
        ...prev,
        [ws.id]: {
          archivedAt: new Date(),
          comment:
            i18n.language === "ru"
              ? "Архивировано пользователем"
              : "Archived by user",
        },
      }));
      // Remove from pinned if pinned, then archive
      setPinnedIds((prev) => prev.filter((id) => id !== ws.id));
      setWorkspaces(
        workspaces.map((w) =>
          w.id === ws.id ? { ...w, status: "archived" as WorkspaceStatus } : w,
        ),
      );
    } else if (action === "restore") {
      setWorkspaces(
        workspaces.map((w) =>
          w.id === ws.id ? { ...w, status: "running" as WorkspaceStatus } : w,
        ),
      );
    } else if (action === "pin") {
      setPinnedIds((prev) => {
        if (prev.includes(ws.id)) {
          // Unpin
          return prev.filter((id) => id !== ws.id);
        } else {
          // Pin — new pins go to the front (most recent = top)
          return [ws.id, ...prev];
        }
      });
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
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              padding: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              opacity: 0.6,
              transition: "opacity 0.2s",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "var(--text-dim)",
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
            active={activeView === "ARCHIVE"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveView("ARCHIVE")}
          />
          <SidebarItem
            icon={<Activity size={18} />}
            label={t("sidebar.telemetry")}
            isCollapsed={isCollapsed}
            onClick={() =>
              alert("Real-time workspace metrics synchronization...")
            }
          />

          {/* ── Workspaces List (Pinned first, no headers) ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              marginTop: isCollapsed ? "0" : "1rem",
            }}
          >
            {[
              // 1. Pinned workspaces first (in order of pinnedIds)
              ...pinnedIds
                .map((id) => workspaces.find((w) => w.id === id))
                .filter(
                  (ws): ws is Workspace => !!ws && ws.status !== "archived",
                ),
              // 2. Then the rest of running workspaces
              ...workspaces.filter(
                (ws) => ws.status !== "archived" && !pinnedIds.includes(ws.id),
              ),
            ].map((ws) => (
              <SidebarItem
                key={ws.id}
                active={selectedWorkspaceId === ws.id}
                isCollapsed={isCollapsed}
                isPinned={pinnedIds.includes(ws.id)}
                onClick={() => {
                  setSelectedWorkspaceId(ws.id);
                  setActiveView("ROOM"); // Switch back to ROOM when selecting a WS
                }}
                onAction={(action) => handleAction(ws, action)}
                isWorkspace
                status={ws.status}
                icon={<WsDot active={selectedWorkspaceId === ws.id} />}
                label={ws.title}
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
          }}
        >
          <SidebarItem
            icon={<Settings size={18} />}
            label={t("sidebar.settings")}
            isCollapsed={isCollapsed}
            onClick={() => setShowSettings(true)}
          />
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
                  {t("sidebar.identity")}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    padding: "1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "var(--primary-alpha)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary)",
                      }}
                    >
                      {currentUser?.role === "admin" ? (
                        <Shield size={20} />
                      ) : (
                        <UserIcon size={20} />
                      )}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--text-main)",
                        }}
                      >
                        {currentUser?.username}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-dim)",
                        }}
                      >
                        {currentUser?.role}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {[
                      { id: "admin-1", label: "Admin" },
                      { id: "reviewer-1", label: "Reviewer" },
                      { id: "observer-1", label: "Observer" },
                    ].map((role) => {
                      const isActive = currentUser?.id === role.id;
                      return (
                        <button
                          key={role.id}
                          onClick={() => setCurrentUserId(role.id)}
                          style={{
                            flex: 1,
                            padding: "10px 8px",
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
                          {role.label}
                        </button>
                      );
                    })}
                  </div>
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

// ── Helper components ───────────────────────────────────────────────────────

const WsDot: React.FC<{ active: boolean }> = ({ active }) =>
  active ? (
    <Zap
      size={14}
      fill="var(--primary)"
      style={{
        filter: "drop-shadow(0 0 5px var(--primary))",
        color: "var(--primary)",
      }}
    />
  ) : (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "var(--text-dim)",
        opacity: 0.6,
      }}
    />
  );

export default Sidebar;
