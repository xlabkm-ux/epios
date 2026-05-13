export type SourceType = "text" | "url" | "file";

export interface Source {
  id: string;
  missionId: string;
  type: SourceType;
  content: string;
  metadata: Record<string, unknown>;
  createdAt: Date;
}
