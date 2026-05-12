import React, { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import {
  Lightbulb,
  Database,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const CustomNode = ({ data, selected }: NodeProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "HYPOTHESIS":
        return <Lightbulb size={14} color="var(--primary)" />;
      case "EVIDENCE":
        return <Database size={14} color="var(--success)" />;
      case "CLAIM":
        return <FileText size={14} color="var(--secondary)" />;
      default:
        return <AlertCircle size={14} color="var(--text-dim)" />;
    }
  };

  const getThemeColor = (type: string) => {
    switch (type) {
      case "HYPOTHESIS":
        return "var(--primary)";
      case "EVIDENCE":
        return "var(--success)";
      case "CLAIM":
        return "var(--secondary)";
      default:
        return "var(--border)";
    }
  };

  const themeColor = getThemeColor(data.type);

  return (
    <div
      className="glass"
      style={{
        padding: "1px",
        borderRadius: "14px",
        width: "220px",
        background: selected
          ? `linear-gradient(135deg, ${themeColor} 30%, transparent 100%)`
          : "rgba(255, 255, 255, 0.03)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: selected
          ? `0 0 30px ${themeColor}66, var(--panel-shadow)`
          : "var(--panel-shadow)",
        border: `1px solid ${selected ? themeColor : "rgba(255, 255, 255, 0.15)"}`,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          borderRadius: "13px",
          padding: "12px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Handle
          type="target"
          position={Position.Top}
          style={{
            background: themeColor,
            border: "none",
            width: "8px",
            height: "4px",
            borderRadius: "2px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.6rem",
              color: themeColor,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            {getTypeIcon(data.type)}
            {data.type}
          </div>
          {selected && (
            <Sparkles
              size={12}
              color="var(--primary)"
              className="animate-pulse"
            />
          )}
        </div>

        <div
          style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "var(--text-main)",
            lineHeight: 1.5,
            wordBreak: "break-word",
            minHeight: "40px",
          }}
        >
          {data.label}
        </div>

        <div
          style={{
            marginTop: "4px",
            paddingTop: "8px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "0.6rem",
              color: "var(--text-dim)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {data.hierarchicalId || "0.0"}
          </div>
        </div>

        <Handle
          type="source"
          position={Position.Bottom}
          style={{
            background: themeColor,
            border: "none",
            width: "8px",
            height: "4px",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  );
};

export default memo(CustomNode);
