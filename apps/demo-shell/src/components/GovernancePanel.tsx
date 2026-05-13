import { API_BASE_URL } from "../api-config";
import React, { useState, useEffect } from "react";
import { Shield, Send, CheckCircle, XCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSecurity } from "../context/SecurityContext";

interface Claim {
  id: string;
  content: string;
  status: "pending" | "approved" | "rejected";
}

interface Patch {
  id: string;
  targetNodeId: string;
  content: string;
  status: "pending" | "applied" | "rejected";
}

const MOCK_CLAIMS: Claim[] = [
  {
    id: "1",
    content:
      "Satellite telemetry indicates anomalous heat signatures in Sector 7G.",
    status: "pending",
  },
  {
    id: "2",
    content:
      "Atmospheric sensors confirm nitrogen spike consistent with rapid vegetation growth.",
    status: "approved",
  },
];

export const GovernancePanel: React.FC<{
  workspaceId: string;
  minimal?: boolean;
}> = ({ workspaceId, minimal = false }) => {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [patches, setPatches] = useState<Patch[]>([]);
  const [newClaim, setNewClaim] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSecurity();

  const canVote = currentUser?.role === "admin" || currentUser?.role === "reviewer";
  const canPropose = currentUser?.role !== "observer";

  useEffect(() => {
    fetchClaims();
    fetchPatches();
  }, [workspaceId]);

  const fetchPatches = async () => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/governance/patches?workspaceId=${workspaceId}`,
        {
          headers: {
            "x-user-id": currentUser?.id || "observer-1",
          },
        },
      );
      if (res.ok) {
        const data = await res.json();
        setPatches(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchClaims = async () => {
    setIsLoading(true);
    try {
      // Note: In this version, we simulate fetching from backend
      // and fallback to MOCK_CLAIMS for the demo
      const res = await fetch(`${API_BASE_URL}/governance/claims`, {
        headers: {
          "x-user-id": currentUser?.id || "observer-1",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setClaims(data.length > 0 ? data : MOCK_CLAIMS);
      } else {
        setClaims(MOCK_CLAIMS);
      }
    } catch (e) {
      console.error(e);
      setClaims(MOCK_CLAIMS);
    } finally {
      setIsLoading(false);
    }
  };

  const submitClaim = async () => {
    if (!newClaim) return;
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/governance/claims`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": currentUser?.id || "observer-1",
        },
        body: JSON.stringify({ workspaceId, content: newClaim }),
      });
      if (res.ok) {
        const claim = await res.json();
        setClaims([
          { id: claim.id, content: newClaim, status: "pending" },
          ...claims,
        ]);
        setNewClaim("");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const vote = async (
    nodeId: string,
    decision: "approve" | "reject",
    isPatch = false,
  ) => {
    try {
      await fetch(`${API_BASE_URL}/governance/votes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": currentUser?.id || "observer-1",
        },
        body: JSON.stringify({ nodeId, actorId: currentUser?.id, decision }),
      });

      if (isPatch) {
        setPatches(
          patches.map((p) =>
            p.id === nodeId
              ? {
                  ...p,
                  status: decision === "approve" ? "applied" : "rejected",
                }
              : p,
          ),
        );
      } else {
        setClaims(
          claims.map((c) =>
            c.id === nodeId
              ? {
                  ...c,
                  status: decision === "approve" ? "approved" : "rejected",
                }
              : c,
          ),
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const content = (
    <div style={{ padding: minimal ? "0" : "1.25rem", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <Shield size={20} color="var(--primary)" />
        <h2
          data-testid="governance-title"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--text-main)",
            letterSpacing: "0.02em",
          }}
        >
          Governance & Claims
        </h2>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ position: "relative" }}>
          <textarea
            style={{
              width: "100%",
              minHeight: "80px",
              fontSize: "0.85rem",
              marginBottom: "0.75rem",
              backgroundColor: "rgba(0,0,0,0.2)",
              paddingRight: "40px",
            }}
            placeholder="Submit a new epistemic claim..."
            value={newClaim}
            onChange={(e) => setNewClaim(e.target.value)}
          />
          <button
            onClick={submitClaim}
            disabled={!newClaim || isLoading || !canPropose}
            style={{
              position: "absolute",
              bottom: "16px",
              right: "8px",
              padding: "6px",
              borderRadius: "var(--radius-sm)",
              backgroundColor:
                newClaim && canPropose ? "var(--primary)" : "var(--border)",
              color: "white",
              border: "none",
              cursor: canPropose ? "pointer" : "not-allowed",
              opacity: canPropose ? 1 : 0.5,
            }}
          >
            <Send size={14} />
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <h3
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            color: "var(--text-dim)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "0.25rem",
          }}
        >
          Active Proposals
        </h3>

        <AnimatePresence>
          {claims.length === 0 && (
            <p
              style={{
                color: "var(--text-dim)",
                fontStyle: "italic",
                fontSize: "0.8rem",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              No active claims.
            </p>
          )}
          {claims.map((claim) => (
            <motion.div
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={claim.id}
              style={{
                padding: "0.85rem",
                backgroundColor: "var(--bg-dark)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-main)",
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                >
                  {claim.content}
                </p>
                <div style={{ marginLeft: "10px", flexShrink: 0 }}>
                  {claim.status === "pending" && (
                    <Clock size={14} color="var(--warning)" />
                  )}
                  {claim.status === "approved" && (
                    <CheckCircle size={14} color="var(--success)" />
                  )}
                  {claim.status === "rejected" && (
                    <XCircle size={14} color="var(--error)" />
                  )}
                </div>
              </div>

              {claim.status === "pending" && canVote && (
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => vote(claim.id, "approve")}
                    style={{
                      flex: 1,
                      padding: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      color: "var(--success)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                      cursor: "pointer",
                    }}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => vote(claim.id, "reject")}
                    style={{
                      flex: 1,
                      padding: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      color: "var(--error)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </div>
              )}
              {claim.status === "pending" && !canVote && (
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-dim)",
                    textAlign: "center",
                  }}
                >
                  View-only mode for your role.
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        <h3
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            color: "var(--text-dim)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginTop: "1.5rem",
            marginBottom: "0.25rem",
          }}
        >
          Node Patches
        </h3>

        <AnimatePresence>
          {patches.length === 0 && (
            <p
              style={{
                color: "var(--text-dim)",
                fontStyle: "italic",
                fontSize: "0.8rem",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              No active patches.
            </p>
          )}
          {patches.map((patch) => (
            <motion.div
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={patch.id}
              style={{
                padding: "0.85rem",
                backgroundColor: "var(--bg-dark)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.6rem",
                      color: "var(--primary)",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    PATCH FOR NODE #{patch.targetNodeId.slice(0, 8)}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-main)",
                      lineHeight: 1.4,
                    }}
                  >
                    {patch.content}
                  </p>
                </div>
                <div style={{ marginLeft: "10px", flexShrink: 0 }}>
                  {patch.status === "pending" && (
                    <Clock size={14} color="var(--warning)" />
                  )}
                  {patch.status === "applied" && (
                    <CheckCircle size={14} color="var(--success)" />
                  )}
                  {patch.status === "rejected" && (
                    <XCircle size={14} color="var(--error)" />
                  )}
                </div>
              </div>

              {patch.status === "pending" && canVote && (
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => vote(patch.id, "approve", true)}
                    style={{
                      flex: 1,
                      padding: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      color: "var(--success)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                      cursor: "pointer",
                    }}
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => vote(patch.id, "reject", true)}
                    style={{
                      flex: 1,
                      padding: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      color: "var(--error)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </div>
              )}
              {patch.status === "pending" && !canVote && (
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-dim)",
                    textAlign: "center",
                  }}
                >
                  View-only mode for your role.
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );

  if (minimal) return content;

  return <div className="premium-card animate-slide-in">{content}</div>;
};

