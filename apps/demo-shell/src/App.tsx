import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import WorkspaceRoom from "./components/WorkspaceRoom";
import CommandPalette from "./components/CommandPalette";

function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-main)",
        overflow: "hidden",
      }}
    >
      <div className="desktop-only" style={{ height: "100%" }}>
        <Sidebar />
      </div>
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          position: "relative",
        }}
      >
        <WorkspaceRoom />
      </main>

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
