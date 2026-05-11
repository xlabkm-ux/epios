import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Zap, MessageSquare, Shield } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose(); // Toggle
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "var(--bg-card)",
            borderRadius: "12px",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "1.25rem",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Search size={20} color="var(--text-dim)" />
            <input
              autoFocus
              placeholder="Type a command or search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                background: "none",
                border: "none",
                fontSize: "1.1rem",
                color: "var(--text-main)",
                outline: "none",
                padding: 0,
                boxShadow: "none",
              }}
            />
            <div
              style={{
                padding: "2px 6px",
                borderRadius: "4px",
                backgroundColor: "var(--border)",
                fontSize: "0.7rem",
                color: "var(--text-dim)",
              }}
            >
              ESC
            </div>
          </div>

          <div
            style={{ padding: "0.5rem", maxHeight: "400px", overflowY: "auto" }}
          >
            <CommandGroup label="Missions">
              <CommandItem
                icon={<Plus size={16} />}
                label="Create New Mission"
                shortcut="N"
              />
              <CommandItem
                icon={<Zap size={16} />}
                label="Jump to Active Mission"
                shortcut="J"
              />
            </CommandGroup>

            <CommandGroup label="Graph Operations">
              <CommandItem
                icon={<MessageSquare size={16} />}
                label="Add Epistemic Node"
                shortcut="A"
              />
              <CommandItem
                icon={<Shield size={16} />}
                label="Add Evidence Node"
                shortcut="E"
              />
            </CommandGroup>
          </div>

          <div
            style={{
              padding: "0.75rem 1.25rem",
              backgroundColor: "rgba(0,0,0,0.2)",
              borderTop: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
              Tip: Use <code style={{ color: "var(--primary)" }}>Ctrl+K</code>{" "}
              to open anywhere
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const CommandGroup: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div style={{ marginBottom: "1rem" }}>
    <div
      style={{
        padding: "0.5rem 0.75rem",
        fontSize: "0.7rem",
        color: "var(--text-dim)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </div>
    {children}
  </div>
);

const CommandItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
}> = ({ icon, label, shortcut }) => (
  <button
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.75rem",
      borderRadius: "8px",
      textAlign: "left",
      color: "var(--text-main)",
      fontSize: "0.9rem",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
  >
    <div style={{ color: "var(--text-dim)" }}>{icon}</div>
    <span style={{ flex: 1 }}>{label}</span>
    {shortcut && (
      <div
        style={{ fontSize: "0.75rem", color: "var(--text-dim)", opacity: 0.5 }}
      >
        {shortcut}
      </div>
    )}
  </button>
);

export default CommandPalette;
