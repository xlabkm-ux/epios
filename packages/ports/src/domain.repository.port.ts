import { Workspace, Source, Rating } from "@epios/domain";

export interface WorkspaceRepositoryPort {
  save(workspace: Workspace): Promise<void>;
  findById(id: string): Promise<Workspace | null>;
  findAll(): Promise<Workspace[]>;
}

export interface SourceRepositoryPort {
  save(source: Source): Promise<void>;
  findByMissionId(missionId: string): Promise<Source[]>;
  findById(id: string): Promise<Source | null>;
}

export interface RatingRepositoryPort {
  save(rating: Rating): Promise<void>;
  findByNodeId(nodeId: string): Promise<Rating[]>;
}
