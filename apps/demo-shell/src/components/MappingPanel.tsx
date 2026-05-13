import React, { useState, useEffect } from "react";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  FileText,
  Activity,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import { MappingRun } from "@epios/domain";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const MappingPanel: React.FC<{ workspaceId: string }> = ({
  workspaceId,
}) => {
  const [runs, setRuns] = useState<MappingRun[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRuns = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/workspaces/${workspaceId}/mapping/runs`,
      );
      if (response.ok) {
        const data = await response.json();
        setRuns(
          data.sort(
            (a: MappingRun, b: MappingRun) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          ),
        );
      }
    } catch (err) {
      console.error("Failed to fetch mapping runs", err);
    }
  };

  const startMapping = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE_URL}/workspaces/${workspaceId}/mapping/runs`, {
        method: "POST",
      });
      await fetchRuns();
    } catch (err) {
      console.error("Failed to start mapping", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRuns();
    const interval = setInterval(fetchRuns, 2000);
    return () => clearInterval(interval);
  }, [workspaceId]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3
            style={{ margin: 0, fontSize: "1rem", color: "var(--text-main)" }}
          >
            Epistemic Mapping Runs
          </h3>
          <p
            style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-dim)" }}
          >
            Background analysis of sources to extract claims and evidence.
          </p>
        </div>
        <button
          onClick={startMapping}
          disabled={
            loading ||
            runs.some((r) => r.status === "running" || r.status === "pending")
          }
          className="glow-box"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            background: "var(--primary)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "0.8rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            opacity:
              loading ||
              runs.some((r) => r.status === "running" || r.status === "pending")
                ? 0.5
                : 1,
          }}
        >
          {loading ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Plus size={14} />
          )}
          New Run
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {runs.length === 0 && (
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              border: "1px dashed var(--border)",
              borderRadius: "12px",
              color: "var(--text-dim)",
              fontSize: "0.85rem",
            }}
          >
            No mapping runs detected for this workspace.
          </div>
        )}

        {runs.map((run) => (
          <motion.div
            key={run.id}
            layout
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              padding: "1rem",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                {run.status === "completed" && (
                  <CheckCircle size={18} color="var(--success)" />
                )}
                {run.status === "failed" && (
                  <AlertCircle size={18} color="var(--error)" />
                )}
                {(run.status === "running" || run.status === "pending") && (
                  <Loader2
                    size={18}
                    className="animate-spin"
                    color="var(--primary)"
                  />
                )}
                <div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-main)",
                    }}
                  >
                    Run {run.id.slice(0, 8)}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>
                    {new Date(run.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color:
                      run.status === "completed"
                        ? "var(--success)"
                        : run.status === "running"
                          ? "var(--primary)"
                          : "var(--text-dim)",
                  }}
                >
                  {run.status}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  {run.progress}%
                </div>
              </div>
            </div>

            {run.status === "running" && (
              <div
                style={{
                  height: "4px",
                  width: "100%",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${run.progress}%` }}
                  style={{
                    height: "100%",
                    background: "var(--primary)",
                    boxShadow: "0 0 10px var(--primary)",
                  }}
                />
              </div>
            )}

            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <Activity size={14} color="var(--primary)" />
                <span
                  style={{ fontSize: "0.75rem", color: "var(--text-main)" }}
                >
                  {run.claimsFound} Claims
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <FileText size={14} color="var(--success)" />
                <span
                  style={{ fontSize: "0.75rem", color: "var(--text-main)" }}
                >
                  {run.evidenceFound} Evidence
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
