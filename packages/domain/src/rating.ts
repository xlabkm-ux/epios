export type EpistemicRatingValue = 0 | 1 | 2 | 3 | 4 | 5;

export interface Rating {
  id: string;
  nodeId: string;
  actorId: string;
  value: EpistemicRatingValue;
  comment?: string;
  createdAt: Date;
}
