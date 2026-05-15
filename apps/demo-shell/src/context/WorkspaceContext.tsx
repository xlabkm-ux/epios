import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Node, Edge } from "reactflow";

import { Workspace, WorkspaceStatus } from "@epios/domain";

interface WorkspaceContextType {
  selectedWorkspaceId: string | null;
  setSelectedWorkspaceId: (id: string | null) => void;
  selectedNodeId: string | null;
  setSelectedNodeId: React.Dispatch<React.SetStateAction<string | null>>;
  workspaces: Workspace[];
  setWorkspaces: (workspaces: Workspace[]) => void;
  graphStates: Record<string, { nodes: Node[]; edges: Edge[] }>;
  setGraphState: (workspaceId: string, nodes: Node[], edges: Edge[]) => void;
  viewports: Record<string, { x: number; y: number; zoom: number }>;
  setViewport: (
    workspaceId: string,
    x: number,
    y: number,
    zoom: number,
  ) => void;
  activeView: "ROOM" | "ADR" | "ARCHIVE";
  setActiveView: (view: "ROOM" | "ADR" | "ARCHIVE") => void;
  restoreWorkspace: (id: string) => void;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(
  undefined,
);

export const WorkspaceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState<string | null>(
    () => {
      return localStorage.getItem("selectedWorkspaceId");
    },
  );
  const [activeView, setActiveView] = useState<"ROOM" | "ADR" | "ARCHIVE">(
    "ROOM",
  );
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  const [graphStates, setGraphStates] = useState<
    Record<string, { nodes: Node[]; edges: Edge[] }>
  >(() => {
    const saved = localStorage.getItem("graphStates");
    return saved ? JSON.parse(saved) : {};
  });
  const [viewports, setViewports] = useState<
    Record<string, { x: number; y: number; zoom: number }>
  >(() => {
    const saved = localStorage.getItem("viewports");
    return saved ? JSON.parse(saved) : {};
  });

  // Persist selected workspace
  useEffect(() => {
    if (selectedWorkspaceId) {
      localStorage.setItem("selectedWorkspaceId", selectedWorkspaceId);
    }
  }, [selectedWorkspaceId]);

  // Reset selected node when workspace changes
  useEffect(() => {
    setSelectedNodeId(null);
  }, [selectedWorkspaceId]);

  // Persist graph states
  useEffect(() => {
    localStorage.setItem("graphStates", JSON.stringify(graphStates));
  }, [graphStates]);

  // Persist viewports
  useEffect(() => {
    localStorage.setItem("viewports", JSON.stringify(viewports));
  }, [viewports]);

  const setGraphState = (workspaceId: string, nodes: Node[], edges: Edge[]) => {
    setGraphStates((prev) => ({
      ...prev,
      [workspaceId]: { nodes, edges },
    }));
  };

  const setViewport = (
    workspaceId: string,
    x: number,
    y: number,
    zoom: number,
  ) => {
    setViewports((prev) => ({
      ...prev,
      [workspaceId]: { x, y, zoom },
    }));
  };

  const restoreWorkspace = (id: string) => {
    setWorkspaces(
      workspaces.map((w) =>
        w.id === id
          ? ({ ...w, status: "running" as WorkspaceStatus } as Workspace)
          : w,
      ),
    );
    setSelectedWorkspaceId(id);
    setActiveView("ROOM");
  };

  return (
    <WorkspaceContext.Provider
      value={{
        selectedWorkspaceId,
        setSelectedWorkspaceId,
        selectedNodeId,
        setSelectedNodeId,
        workspaces,
        setWorkspaces,
        graphStates,
        setGraphState,
        viewports,
        setViewport,
        activeView,
        setActiveView,
        restoreWorkspace,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
};
