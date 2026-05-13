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
} from "lucide-react";
import { useApi } from "../hooks/useApi";
import { useWorkspace } from "../context/WorkspaceContext";
import { motion, AnimatePresence } from "framer-motion";

interface Workspace {
  id: string;
  title: string;
  status: string;
}

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: fetchedWorkspaces, loading } =
    useApi<Workspace[]>("/workspaces");
  const {
    workspaces,
    setWorkspaces,
    selectedWorkspaceId,
    setSelectedWorkspaceId,
  } = useWorkspace();

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
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          position: "absolute",
          right: "4px",
          top: "1.25rem",
          width: "20px",
          height: "20px",
          backgroundColor: "var(--bg-sidebar)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-dim)",
          zIndex: 10,
          cursor: "pointer",
          transition: "all 0.2s ease",
          opacity: 0.5,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
      >
        {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>

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
              EPIOS
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
        }}
      >
        <SidebarItem
          icon={<Layout size={18} />}
          label="Workspace Room"
          active
          isCollapsed={isCollapsed}
          onClick={() => alert("Already in Workspace Room")}
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
                        workspace.status === "ACTIVE"
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
