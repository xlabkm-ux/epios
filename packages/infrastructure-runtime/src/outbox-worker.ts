import { OutboxRepositoryPort } from "@epios/ports";
import { auditLogger } from "@epios/observability";

export interface OutboxWorkerOptions {
  intervalMs: number;
}

export class OutboxWorker {
  private timer: NodeJS.Timeout | null = null;
  private isProcessing = false;

  constructor(
    private readonly outboxRepo: OutboxRepositoryPort,
    private readonly options: OutboxWorkerOptions = { intervalMs: 5000 },
  ) {}

  public start(): void {
    if (this.timer) return;
    console.log(
      `[OutboxWorker] Starting with interval ${this.options.intervalMs}ms`,
    );
    this.timer = setInterval(() => this.process(), this.options.intervalMs);
  }

  public stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private async process(): Promise<void> {
    if (this.isProcessing) return;
    this.isProcessing = true;

    try {
      const messages = await this.outboxRepo.findPending();
      if (messages.length === 0) {
        this.isProcessing = false;
        return;
      }

      console.log(`[OutboxWorker] Processing ${messages.length} messages`);

      for (const message of messages) {
        try {
          // 1. Process the message (for now, log to audit logger)
          auditLogger.log({
            actorId: (message.payload.actorId as string) || "system",
            action: message.type,
            targetId:
              (message.payload.nodeId as string) ||
              (message.payload.id as string) ||
              "unknown",
            metadata: message.payload,
          });

          // 2. Mark as processed
          await this.outboxRepo.markProcessed(message.id);
        } catch (err) {
          console.error(
            `[OutboxWorker] Failed to process message ${message.id}:`,
            err,
          );
          // In a real app, we might update status to 'failed' in the repo
        }
      }
    } catch (err) {
      console.error("[OutboxWorker] Error during process loop:", err);
    } finally {
      this.isProcessing = false;
    }
  }
}
