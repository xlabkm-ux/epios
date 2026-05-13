import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Node, Edge } from "reactflow";

interface Mission {
  id: string;
  title: string;
  status: string;
}

interface MissionContextType {
  selectedMissionId: string | null;
  setSelectedMissionId: (id: string | null) => void;
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
  missions: Mission[];
  setMissions: (missions: Mission[]) => void;
  graphStates: Record<string, { nodes: Node[]; edges: Edge[] }>;
  setGraphState: (missionId: string, nodes: Node[], edges: Edge[]) => void;
  viewports: Record<string, { x: number; y: number; zoom: number }>;
  setViewport: (missionId: string, x: number, y: number, zoom: number) => void;
}

const MissionContext = createContext<MissionContextType | undefined>(undefined);

export const MissionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(
    () => {
      return localStorage.getItem("selectedMissionId");
    },
  );
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [missions, setMissions] = useState<Mission[]>([]);
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

  // Persist selected mission
  useEffect(() => {
    if (selectedMissionId) {
      localStorage.setItem("selectedMissionId", selectedMissionId);
    }
  }, [selectedMissionId]);

  // Reset selected node when mission changes
  useEffect(() => {
    setSelectedNodeId(null);
  }, [selectedMissionId]);

  // Persist graph states
  useEffect(() => {
    localStorage.setItem("graphStates", JSON.stringify(graphStates));
  }, [graphStates]);

  // Persist viewports
  useEffect(() => {
    localStorage.setItem("viewports", JSON.stringify(viewports));
  }, [viewports]);

  const setGraphState = (missionId: string, nodes: Node[], edges: Edge[]) => {
    setGraphStates((prev) => ({
      ...prev,
      [missionId]: { nodes, edges },
    }));
  };

  const setViewport = (
    missionId: string,
    x: number,
    y: number,
    zoom: number,
  ) => {
    setViewports((prev) => ({
      ...prev,
      [missionId]: { x, y, zoom },
    }));
  };

  return (
    <MissionContext.Provider
      value={{
        selectedMissionId,
        setSelectedMissionId,
        selectedNodeId,
        setSelectedNodeId,
        missions,
        setMissions,
        graphStates,
        setGraphState,
        viewports,
        setViewport,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};

export const useMission = () => {
  const context = useContext(MissionContext);
  if (context === undefined) {
    throw new Error("useMission must be used within a MissionProvider");
  }
  return context;
};
