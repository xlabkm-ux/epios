import React, { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
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
            background: "rgba(255,255,255,0.03)",
            border: "none",
            color: "var(--text-dim)",
            cursor: "pointer",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
            e.currentTarget.style.color = "var(--text-dim)";
          }}
        >
          <X size={18} />
        </button>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: "2rem",
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>

        {children}
      </motion.div>
    </div>
  );
};
