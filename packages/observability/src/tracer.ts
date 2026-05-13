export type TraceEvent = {
  type: string;
  workspaceId?: string;
  payload: Record<string, unknown>;
  timestamp: Date;
};

export interface Tracer {
  emit(event: Omit<TraceEvent, "timestamp">): void;
}

export class ConsoleTracer implements Tracer {
  emit(event: Omit<TraceEvent, "timestamp">): void {
    console.log(
      JSON.stringify({
        ...event,
        timestamp: new Date().toISOString(),
      }),
    );
  }
}

export const tracer = new ConsoleTracer();
