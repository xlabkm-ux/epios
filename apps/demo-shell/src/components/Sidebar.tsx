import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import {
  Layout,
  Database,
  Activity,
  Settings,
  Plus,
  Terminal,
  Zap,
  FileText,
  MoreVertical,
  Share2,
  Pin,
  Edit2,
  Archive,
  RefreshCcw,
  Copy,
  X,
  Shield,
  User as UserIcon,
} from "lucide-react";
import { useApi } from "../hooks/useApi";
import { useWorkspace } from "../context/WorkspaceContext";
import { useSecurity } from "../context/SecurityContext";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Workspace, WorkspaceStatus } from "@epios/domain";

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
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "15px",
                padding: "0.5rem 0.5rem 0.5rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
                border: "1px solid rgba(255,255,255,0.05)",
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
                  backgroundColor: "#b4bcff",
                  color: "#1e1e1e",
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
              <section style={{ opacity: 0.5 }}>
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
                  {["Light", "Dark", "System"].map((theme) => (
                    <div
                      key={theme}
                      style={{
                        flex: 1,
                        padding: "12px 8px",
                        borderRadius: "10px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        textAlign: "center",
                        fontSize: "0.75rem",
                        color: "var(--text-dim)",
                      }}
                    >
                      {theme}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

const Modal: React.FC<{
  children: ReactNode;
  onClose: () => void;
  title: string;
}> = ({ children, onClose, title }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.85)",
      zIndex: 2000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(12px)",
    }}
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "480px",
        backgroundColor: "#161616",
        borderRadius: "24px",
        padding: "2.5rem",
        boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "1.5rem",
          background: "none",
          border: "none",
          color: "var(--text-dim)",
          cursor: "pointer",
        }}
      >
        <X size={20} />
      </button>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "2rem",
          color: "white",
        }}
      >
        {title}
      </h2>
      {children}
    </motion.div>
  </div>
);

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isAction?: boolean;
  isCollapsed?: boolean;
  isWorkspace?: boolean;
  status?: string;
  onClick?: () => void;
  onAction?: (action: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  isAction,
  isCollapsed,
  isWorkspace,
  status,
  onClick,
  onAction,
}) => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <motion.button
        whileHover={{
          x: isCollapsed ? 0 : 4,
          backgroundColor: "var(--surface-hover)",
        }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "flex-start",
          gap: isCollapsed ? "0" : "0.85rem",
          padding: isCollapsed ? "0.75rem 0" : "0.75rem 1rem",
          borderRadius: "10px",
          width: "100%",
          textAlign: "left",
          color: active
            ? "var(--primary)"
            : isAction
              ? "var(--text-dim)"
              : "var(--text-main)",
          backgroundColor: active ? "var(--primary-alpha)" : "transparent",
          fontSize: "0.9rem",
          fontWeight: active ? 600 : 500,
          transition: "0.2s",
        }}
        className="sidebar-item"
      >
        <div
          style={{
            width: isCollapsed ? "100%" : "18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
        {!isCollapsed && (
          <span
            style={{
              flex: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {label}
          </span>
        )}
        {isWorkspace && !isCollapsed && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
            style={{ opacity: 0, color: "var(--text-dim)", padding: "4px" }}
            className="workspace-menu-trigger"
          >
            <MoreVertical size={16} />
          </div>
        )}
        <style>{`.sidebar-item:hover .workspace-menu-trigger { opacity: 1; }`}</style>
      </motion.button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            style={{
              position: "absolute",
              top: "100%",
              right: "1rem",
              zIndex: 100,
              backgroundColor: "#2a2a2a",
              borderRadius: "12px",
              padding: "0.5rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.1)",
              minWidth: "180px",
            }}
          >
            <MenuItem
              icon={<Share2 size={14} />}
              label={t("workspace_menu.share")}
              onClick={() => {
                setShowMenu(false);
                onAction?.("share");
              }}
            />
            <MenuItem
              icon={<Pin size={14} />}
              label={t("workspace_menu.pin")}
              onClick={() => {
                setShowMenu(false);
                onAction?.("pin");
              }}
            />
            <MenuItem
              icon={<Edit2 size={14} />}
              label={t("workspace_menu.rename")}
              onClick={() => {
                setShowMenu(false);
                onAction?.("rename");
              }}
            />
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.1)",
                margin: "4px 0",
              }}
            />
            <MenuItem
              icon={
                status === "archived" ? (
                  <RefreshCcw size={14} />
                ) : (
                  <Archive size={14} />
                )
              }
              label={
                status === "archived"
                  ? t("workspace_menu.restore")
                  : t("workspace_menu.archive")
              }
              onClick={() => {
                setShowMenu(false);
                onAction?.(status === "archived" ? "restore" : "archive");
              }}
              danger={status !== "archived"}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}> = ({ icon, label, onClick, danger }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      width: "100%",
      padding: "8px 12px",
      borderRadius: "8px",
      border: "none",
      background: "none",
      color: danger ? "#ff6b6b" : "var(--text-main)",
      fontSize: "0.85rem",
      cursor: "pointer",
      transition: "0.2s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
  >
    {icon} {label}
  </button>
);

export default Sidebar;
