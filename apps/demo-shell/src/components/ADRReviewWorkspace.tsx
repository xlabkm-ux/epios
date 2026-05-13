import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Filter,
  ChevronRight,
  ExternalLink,
  History,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ADR {
  id: string;
  title: string;
  status: "Proposed" | "Accepted" | "Superseded" | "Rejected" | "Deprecated";
  priority: "P0" | "P1" | "P2";
  date: string;
  author: string;
}

const MOCK_ADRS: ADR[] = [
  {
    id: "ADR-0001",
    title: "Create Epistemic OS as a New Project",
    status: "Accepted",
    priority: "P0",
    date: "2026-05-10",
    author: "Kernel Team",
  },
  {
    id: "ADR-0003",
    title: "Open Source From Day One",
    status: "Accepted",
    priority: "P0",
    date: "2026-05-11",
    author: "Governance",
  },
  {
    id: "ADR-0007",
    title: "Use PostgreSQL as Alpha System of Record",
    status: "Accepted",
    priority: "P0",
    date: "2026-05-12",
    author: "Infrastructure",
  },
  {
    id: "ADR-0009",
    title: "Use Layered Hexagonal Architecture",
    status: "Accepted",
    priority: "P0",
    date: "2026-05-12",
    author: "Architecture",
  },
  {
    id: "ADR-0011",
    title: "Use EpistemicNode as Core Claim Primitive",
    status: "Accepted",
    priority: "P0",
    date: "2026-05-13",
    author: "Domain",
  },
  {
    id: "ADR-0026",
    title: "Use Apache-2.0 as Recommended Default License",
    status: "Proposed",
    priority: "P1",
    date: "2026-05-13",
    author: "Legal",
  },
];

const ADRReviewWorkspace: React.FC = () => {
  const [selectedAdrId, setSelectedAdrId] = useState<string | null>(
    MOCK_ADRS[0].id,
  );
  const [searchQuery, setSearchQuery] = useState("");

  const selectedAdr = MOCK_ADRS.find((a) => a.id === selectedAdrId);

  return (
    <div
      className="animate-fade-in"
      style={{
        flex: 1,
        display: "flex",
        height: "100vh",
        backgroundColor: "var(--bg-dark)",
        overflow: "hidden",
      }}
    >
      {/* List Panel */}
      <div
        style={{
          width: "400px",
          borderRight: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                backgroundColor: "var(--primary-alpha)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary)",
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <h1
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              ADR Index
            </h1>
          </div>

          <div style={{ position: "relative" }}>
            <Search
              size={14}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-dim)",
              }}
            />
            <input
              type="text"
              placeholder="Search decisions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 0.75rem 0.75rem 2.5rem",
                fontSize: "0.85rem",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                backgroundColor: "rgba(255,255,255,0.02)",
                color: "var(--text-main)",
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {MOCK_ADRS.filter((a) =>
              a.title.toLowerCase().includes(searchQuery.toLowerCase()),
            ).map((adr) => (
              <button
                key={adr.id}
                data-testid={`adr-item-${adr.id}`}
                onClick={() => setSelectedAdrId(adr.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor:
                    selectedAdrId === adr.id
                      ? "var(--primary-alpha)"
                      : "transparent",
                  backgroundColor:
                    selectedAdrId === adr.id
                      ? "var(--primary-alpha)"
                      : "transparent",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (selectedAdrId !== adr.id)
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  if (selectedAdrId !== adr.id)
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-dim)",
                    }}
                  >
                    {adr.id}
                  </span>
                  <StatusBadge status={adr.status} />
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color:
                      selectedAdrId === adr.id
                        ? "var(--primary)"
                        : "var(--text-main)",
                    lineHeight: 1.4,
                  }}
                >
                  {adr.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {selectedAdr ? (
          <>
            <div
              style={{
                padding: "2rem 3rem",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--primary)",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {selectedAdr.id}
                  </span>
                  <span style={{ color: "var(--border)" }}>•</span>
                  <span
                    style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}
                  >
                    Created: {selectedAdr.date}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "var(--text-main)",
                    margin: 0,
                  }}
                >
                  {selectedAdr.title}
                </h2>
              </div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  className="glass"
                  style={{
                    padding: "0.75rem 1.25rem",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  <History size={16} />
                  History
                </button>
                <button
                  className="glow-box"
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "10px",
                    backgroundColor: "var(--primary)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2 size={16} />
                  Approve Decision
                </button>
              </div>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "3rem" }}>
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <Section title="Status Context">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "2rem",
                    }}
                  >
                    <InfoItem
                      label="Current Status"
                      value={<StatusBadge status={selectedAdr.status} large />}
                    />
                    <InfoItem
                      label="Priority"
                      value={<PriorityBadge priority={selectedAdr.priority} />}
                    />
                    <InfoItem label="Owner" value={selectedAdr.author} />
                  </div>
                </Section>

                <Section title="Context">
                  <p
                    style={{
                      lineHeight: 1.7,
                      color: "var(--text-dim)",
                      fontSize: "1rem",
                    }}
                  >
                    This decision was triggered by the need to establish a clear
                    architectural boundary for the Epistemic OS project.
                    Previous implementations in ChatAVG showed that tight
                    coupling between domain logic and infrastructure led to
                    significant technical debt and testing challenges.
                  </p>
                </Section>

                <Section title="Decision">
                  <div
                    style={{
                      padding: "1.5rem",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border)",
                      lineHeight: 1.7,
                      color: "var(--text-main)",
                    }}
                  >
                    We will implement a layered hexagonal architecture where the
                    core domain is completely isolated from external
                    dependencies. All infrastructure concerns will be handled
                    through well-defined ports and adapters.
                  </div>
                </Section>

                <Section title="Consequences">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Consequence
                      type="positive"
                      text="Pure, testable domain logic with no side effects."
                    />
                    <Consequence
                      type="positive"
                      text="Easier replacement of infrastructure components (e.g., switching databases)."
                    />
                    <Consequence
                      type="negative"
                      text="Increased initial boilerplate for mapping between layers."
                    />
                  </div>
                </Section>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyCenter: "center",
              color: "var(--text-dim)",
            }}
          >
            Select an ADR to view details
          </div>
        )}
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div style={{ marginBottom: "3rem" }}>
    <h3
      style={{
        fontSize: "0.75rem",
        color: "var(--primary)",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        fontWeight: 700,
        marginBottom: "1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {title}
      <div
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "var(--border)",
          opacity: 0.3,
        }}
      />
    </h3>
    {children}
  </div>
);

const InfoItem: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <div>
    <label
      style={{
        display: "block",
        fontSize: "0.7rem",
        color: "var(--text-dim)",
        marginBottom: "0.5rem",
        fontWeight: 600,
      }}
    >
      {label}
    </label>
    <div
      style={{
        color: "var(--text-main)",
        fontSize: "0.95rem",
        fontWeight: 500,
      }}
    >
      {value}
    </div>
  </div>
);

const StatusBadge: React.FC<{ status: ADR["status"]; large?: boolean }> = ({
  status,
  large,
}) => {
  const colors = {
    Proposed: "var(--warning)",
    Accepted: "var(--success)",
    Superseded: "var(--primary)",
    Rejected: "var(--error)",
    Deprecated: "var(--text-dim)",
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: large ? "6px 12px" : "2px 8px",
        borderRadius: "6px",
        backgroundColor: `${colors[status]}15`,
        border: `1px solid ${colors[status]}33`,
        fontSize: large ? "0.85rem" : "0.65rem",
        fontWeight: 700,
        color: colors[status],
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "currentColor",
        }}
      />
      {status.toUpperCase()}
    </div>
  );
};

const PriorityBadge: React.FC<{ priority: ADR["priority"] }> = ({
  priority,
}) => (
  <div
    style={{
      display: "inline-flex",
      padding: "2px 8px",
      borderRadius: "6px",
      backgroundColor:
        priority === "P0"
          ? "rgba(239, 68, 68, 0.1)"
          : "rgba(255, 255, 255, 0.05)",
      border: `1px solid ${priority === "P0" ? "rgba(239, 68, 68, 0.2)" : "var(--border)"}`,
      fontSize: "0.75rem",
      fontWeight: 600,
      color: priority === "P0" ? "var(--error)" : "var(--text-dim)",
    }}
  >
    {priority}
  </div>
);

const Consequence: React.FC<{
  type: "positive" | "negative";
  text: string;
}> = ({ type, text }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
      padding: "1rem",
      borderRadius: "10px",
      backgroundColor:
        type === "positive"
          ? "rgba(16, 185, 129, 0.03)"
          : "rgba(239, 68, 68, 0.03)",
      border: `1px solid ${type === "positive" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)"}`,
    }}
  >
    <div style={{ marginTop: "2px" }}>
      {type === "positive" ? (
        <CheckCircle2 size={16} color="var(--success)" />
      ) : (
        <AlertCircle size={16} color="var(--error)" />
      )}
    </div>
    <span
      style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.5 }}
    >
      {text}
    </span>
  </div>
);

export default ADRReviewWorkspace;
