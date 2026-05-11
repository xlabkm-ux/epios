import React, { useEffect } from "react";
import {
  Layout,
  Database,
  Activity,
  Settings,
  Plus,
  Terminal,
} from "lucide-react";
import { useApi } from "../hooks/useApi";
import { useMission } from "../context/MissionContext";

interface Mission {
  id: string;
  title: string;
  status: string;
}

const Sidebar: React.FC = () => {
  const {
    data: fetchedMissions,
    loading,
    error,
  } = useApi<Mission[]>("/missions");
  const { missions, setMissions, selectedMissionId, setSelectedMissionId } =
    useMission();

  useEffect(() => {
    if (fetchedMissions) {
      setMissions(fetchedMissions);
      if (fetchedMissions.length > 0 && !selectedMissionId) {
        setSelectedMissionId(fetchedMissions[0].id);
      }
    }
  }, [fetchedMissions, setMissions, setSelectedMissionId, selectedMissionId]);

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        backgroundColor: "var(--bg-sidebar)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "2.5rem",
          padding: "0 0.5rem",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "var(--primary)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--bg-dark)",
            boxShadow: "0 0 15px var(--primary-glow)",
          }}
        >
          <Terminal size={20} />
        </div>
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            letterSpacing: "-0.025em",
          }}
        >
          EPOS
        </span>
      </div>

      <nav
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <SidebarItem icon={<Layout size={18} />} label="Mission Room" active />
        <SidebarItem icon={<Database size={18} />} label="Archive" />
        <SidebarItem icon={<Activity size={18} />} label="Telemetry" />

        <div
          style={{
            margin: "1.5rem 0 0.5rem 0.5rem",
            fontSize: "0.7rem",
            color: "var(--text-dim)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Active Missions
        </div>

        {loading && (
          <div
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.8rem",
              color: "var(--text-dim)",
            }}
          >
            Loading...
          </div>
        )}
        {error && (
          <div
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.8rem",
              color: "var(--error)",
            }}
          >
            Error loading missions
          </div>
        )}

        {missions.map((mission) => (
          <SidebarItem
            key={mission.id}
            active={selectedMissionId === mission.id}
            onClick={() => setSelectedMissionId(mission.id)}
            icon={
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor:
                    mission.status === "ACTIVE"
                      ? "var(--success)"
                      : "var(--text-dim)",
                }}
              />
            }
            label={mission.title}
          />
        ))}

        <SidebarItem icon={<Plus size={18} />} label="New Mission" isAction />
      </nav>

      <div
        style={{
          marginTop: "auto",
          padding: "1rem 0.5rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isAction?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  isAction,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.75rem 1rem",
        borderRadius: "8px",
        width: "100%",
        textAlign: "left",
        color: active
          ? "var(--primary)"
          : isAction
            ? "var(--text-dim)"
            : "var(--text-main)",
        backgroundColor: active ? "rgba(0, 242, 255, 0.05)" : "transparent",
        border: active
          ? "1px solid rgba(0, 242, 255, 0.1)"
          : "1px solid transparent",
        fontSize: "0.9rem",
        fontWeight: active ? 600 : 400,
      }}
      onMouseEnter={(e) => {
        if (!active)
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Sidebar;
