import React, { useEffect, useState } from "react";
import {
  Layout,
  Database,
  Activity,
  Settings,
  Plus,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Zap,
  FileText,
} from "lucide-react";
import { useApi } from "../hooks/useApi";
import { useWorkspace } from "../context/WorkspaceContext";
import { useSecurity } from "../context/SecurityContext";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, User as UserIcon, Eye } from "lucide-react";

import { Workspace } from "@epios/domain";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: fetchedWorkspaces, loading } =
    useApi<Workspace[]>("/workspaces");
  const {
    workspaces,
    setWorkspaces,
    selectedWorkspaceId,
    setSelectedWorkspaceId,
    activeView,
    setActiveView,
  } = useWorkspace();
  const { currentUser, setCurrentUserId } = useSecurity();

  useEffect(() => {
    if (fetchedWorkspaces) {
      setWorkspaces(fetchedWorkspaces);
      if (fetchedWorkspaces.length > 0 && !selectedWorkspaceId) {
        setSelectedWorkspaceId(fetchedWorkspaces[0].id);
      }
    }
  }, [
    fetchedWorkspaces,
    setWorkspaces,
    setSelectedWorkspaceId,
    selectedWorkspaceId,
  ]);

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? "80px" : "260px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        height: "100vh",
        backgroundColor: "var(--bg-sidebar)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        padding: isCollapsed ? "2rem 0.75rem" : "2rem 1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
          padding: isCollapsed ? "0" : "0 0.5rem",
          justifyContent: isCollapsed ? "center" : "flex-start",
        }}
      >
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
          label="Workspace Room"
          active={activeView === "ROOM"}
          isCollapsed={isCollapsed}
          onClick={() => setActiveView("ROOM")}
        />
        <SidebarItem
          icon={<FileText size={18} />}
          label="ADR Review"
          active={activeView === "ADR"}
          isCollapsed={isCollapsed}
          onClick={() => setActiveView("ADR")}
        />
        <SidebarItem
          icon={<Database size={18} />}
          label="Archive"
          isCollapsed={isCollapsed}
          onClick={() => alert("Accessing historical neural data...")}
        />
        <SidebarItem
          icon={<Activity size={18} />}
          label="Telemetry"
          isCollapsed={isCollapsed}
          onClick={() =>
            alert("Real-time workspace metrics synchronization...")
          }
        />

        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                margin: "2rem 0 0.75rem 0.75rem",
                fontSize: "0.65rem",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Active Workspaces
            </motion.div>
          )}
        </AnimatePresence>

        {loading && !isCollapsed && (
          <div
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.8rem",
              color: "var(--text-dim)",
              fontStyle: "italic",
            }}
          >
            Synchronizing...
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
                      backgroundColor:
                        workspace.status === "running"
                          ? "var(--success)"
                          : "var(--text-dim)",
                      border: "1px solid rgba(255,255,255,0.05)",
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
          label="New Workspace"
          isAction
          isCollapsed={isCollapsed}
          onClick={() => alert("Initializing Neural Core for new workspace...")}
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
          label="Settings"
          isCollapsed={isCollapsed}
          onClick={() => alert("Opening System Configuration...")}
        />

        <div
          style={{
            marginTop: "1rem",
            padding: isCollapsed ? "0.5rem" : "0.75rem",
            backgroundColor: "rgba(255,255,255,0.03)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            position: "relative",
          }}
        >
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              position: "absolute",
              right: isCollapsed ? "50%" : "12px",
              top: "-12px",
              transform: isCollapsed ? "translateX(50%)" : "none",
              width: "24px",
              height: "24px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-bright)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
              zIndex: 100,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "var(--panel-shadow)",
            }}
          >
            {isCollapsed ? (
              <ChevronRight size={12} />
            ) : (
              <ChevronLeft size={12} />
            )}
          </button>
          {!isCollapsed && (
            <div
              style={{
                fontSize: "0.6rem",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Identity (Pilot)
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
                    color:
                      currentUser?.role === "admin"
                        ? "var(--primary)"
                        : "var(--text-dim)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {currentUser?.role === "admin" ? (
                    <Shield size={10} />
                  ) : currentUser?.role === "reviewer" ? (
                    <UserIcon size={10} />
                  ) : (
                    <Eye size={10} />
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
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isAction?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  isAction,
  isCollapsed,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{
        x: isCollapsed ? 0 : 4,
        backgroundColor: "var(--surface-hover)",
        scale: isCollapsed ? 1.05 : 1,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      title={isCollapsed ? label : ""}
      data-testid={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
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
        border: "1px solid transparent",
        fontSize: "0.9rem",
        fontWeight: active ? 600 : 500,
        transition: "var(--transition-fast)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: isCollapsed ? "100%" : "18px",
          minWidth: isCollapsed ? "100%" : "18px",
        }}
      >
        {icon}
      </div>
      <AnimatePresence>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            style={{
              flex: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Sidebar;
