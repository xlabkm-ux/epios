export type TraceEvent = {
  type: string;
  workspaceId?: string;
  payload: Record<string, unknown>;
  timestamp: Date;
};

export interface Tracer {
  emit(event: Omit<TraceEvent, "timestamp">): void;
}

const REDACTION_PATTERNS = [
  /password/i,
  /secret/i,
  /token/i,
  /key/i,
  /auth/i,
  /sk-[a-zA-Z0-9]{48}/, // OpenAI
];

function redact(obj: any): any {
  if (typeof obj !== "object" || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(redact);

  const redacted: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    let shouldRedact = REDACTION_PATTERNS.some((p) =>
      typeof p === "string" ? key.includes(p) : p.test(key),
    );

    // Also check value for known secret patterns
    const valueStr = String(value);
    const valueMatches = REDACTION_PATTERNS.some(
      (p) => p instanceof RegExp && p.test(valueStr),
    );

    if (shouldRedact || valueMatches) {
      redacted[key] = "[REDACTED]";
    } else {
      redacted[key] = redact(value);
    }
  }
  return redacted;
}

export class ConsoleTracer implements Tracer {
  emit(event: Omit<TraceEvent, "timestamp">): void {
    const redactedPayload = redact(event.payload);
    console.log(
      JSON.stringify({
        ...event,
        payload: redactedPayload,
        timestamp: new Date().toISOString(),
      }),
    );
  }
}

export const tracer = new ConsoleTracer();
