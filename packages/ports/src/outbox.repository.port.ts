export interface OutboxMessage {
  id: string;
  type: string;
  payload: Record<string, unknown>;
  status: "pending" | "processed" | "failed";
  createdAt: Date;
}

export interface OutboxRepositoryPort {
  save(message: OutboxMessage): Promise<void>;
  findPending(): Promise<OutboxMessage[]>;
  markProcessed(id: string): Promise<void>;
}
