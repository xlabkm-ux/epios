import React, { createContext, useContext, useState, ReactNode } from "react";

interface Mission {
  id: string;
  title: string;
  status: string;
}

interface MissionContextType {
  selectedMissionId: string | null;
  setSelectedMissionId: (id: string | null) => void;
  missions: Mission[];
  setMissions: (missions: Mission[]) => void;
}

const MissionContext = createContext<MissionContextType | undefined>(undefined);

export const MissionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(
    null,
  );
  const [missions, setMissions] = useState<Mission[]>([]);

  return (
    <MissionContext.Provider
      value={{ selectedMissionId, setSelectedMissionId, missions, setMissions }}
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
