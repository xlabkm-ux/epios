import React from "react";
import GraphCanvas from "./GraphCanvas";
import { Share2, Info, ShieldCheck } from "lucide-react";
import { useMission } from "../context/MissionContext";
import { GovernancePanel } from "./GovernancePanel";

const MissionRoom: React.FC = () => {
  const { missions, selectedMissionId } = useMission();
  const selectedMission = missions.find((m) => m.id === selectedMissionId);

  if (!selectedMission) {
    return (
      <div
        data-testid="mission-room-empty"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-dim)",
        }}
      >
        Select a mission to begin
      </div>
    );
  }

  return (
    <div
      data-testid="mission-room-active"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "64px",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          backgroundColor: "rgba(10, 10, 15, 0.8)",
          backdropFilter: "blur(10px)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div>
            <h2
              data-testid="mission-title"
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              {selectedMission.title}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                color: "var(--text-dim)",
              }}
            >
              <ShieldCheck size={12} color="var(--success)" />
              <span>Traceability Active</span>
              <span style={{ color: "var(--border)" }}>|</span>
              <span>ID: {selectedMission.id}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            className="glass"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Share2 size={16} />
            Share
          </button>
          <button
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
              fontSize: "0.85rem",
              backgroundColor: "var(--primary)",
              color: "var(--bg-dark)",
              fontWeight: 600,
              boxShadow: "0 0 15px var(--primary-glow)",
            }}
          >
            Analyze with AI
          </button>
        </div>
      </header>

      {/* Main Area */}
      <div style={{ flex: 1, position: "relative", display: "flex" }}>
        <GraphCanvas />

        {/* Governance Panel (Absolute Left) */}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            width: "300px",
            zIndex: 5,
          }}
        >
          <GovernancePanel missionId={selectedMission.id} />
        </div>

        {/* Right Panel (Node Details) */}
        <div
          className="glass"
          style={{
            width: "320px",
            height: "calc(100vh - 100px)",
            margin: "20px",
            borderRadius: "12px",
            position: "absolute",
            right: 0,
            zIndex: 5,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: "0.9rem",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Node Properties
            </h3>
            <Info size={16} color="var(--text-dim)" />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "var(--text-dim)",
                  marginBottom: "0.5rem",
                }}
              >
                Label
              </label>
              <input
                type="text"
                value="Initial Hypotheses"
                readOnly
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "var(--text-dim)",
                  marginBottom: "0.5rem",
                }}
              >
                Description
              </label>
              <textarea
                style={{ width: "100%", height: "100px", resize: "none" }}
                value="The core hypothesis for the current mission. Subject to updates from evidence nodes."
                readOnly
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "var(--text-dim)",
                  marginBottom: "0.5rem",
                }}
              >
                Evidence Trace
              </label>
              <div
                style={{
                  fontSize: "0.85rem",
                  padding: "0.75rem",
                  border: "1px dashed var(--border)",
                  borderRadius: "6px",
                  color: "var(--text-dim)",
                }}
              >
                No active evidence linked to this node.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              style={{
                flex: 1,
                padding: "0.6rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                fontSize: "0.85rem",
              }}
            >
              Patch
            </button>
            <button
              style={{
                flex: 1,
                padding: "0.6rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                fontSize: "0.85rem",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <footer
        style={{
          height: "32px",
          backgroundColor: "var(--bg-sidebar)",
          borderTop: "1px solid var(--border)",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.7rem",
          color: "var(--text-dim)",
        }}
      >
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <span>PostgreSQL: Connected</span>
          <span>Drizzle ORM: Sync</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <span>Nodes: 2</span>
          <span>Edges: 1</span>
          <span style={{ color: "var(--primary)" }}>Vite HMR Active</span>
        </div>
      </footer>
    </div>
  );
};

export default MissionRoom;
