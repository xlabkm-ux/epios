import {
  MappingRepositoryPort,
  OutboxRepositoryPort,
  GraphRepositoryPort,
} from "@epios/ports";

export class MappingProcessor {
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(
    private mappingRepo: MappingRepositoryPort,
    private outboxRepo: OutboxRepositoryPort,
    private graphRepo: GraphRepositoryPort,
  ) {}

  async processNext(): Promise<boolean> {
    const pending = await this.outboxRepo.findPending();
    const message = pending.find((m) => m.type === "MAPPING_RUN_STARTED");

    if (!message) return false;

    const { runId, workspaceId } = message.payload as {
      runId: string;
      workspaceId: string;
    };
    const run = await this.mappingRepo.findById(runId);

    if (run) {
      run.status = "running";
      await this.mappingRepo.save(run);

      // Simulate mapping process
      for (let i = 1; i <= 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        run.progress = i * 20;
        run.claimsFound += 1;
        run.evidenceFound += 2;
        run.updatedAt = new Date();
        await this.mappingRepo.save(run);

        // Actually create a claim node
        const claimId = `claim-${runId}-${i}`;
        await this.graphRepo.saveNode({
          id: claimId,
          workspaceId,
          type: "claim",
          content: `Automated Claim ${i} from run ${runId.slice(0, 8)}`,
          strength: "moderate",
          evidence: [
            {
              id: `ev-${claimId}`,
              sourceType: "auto",
              sourceUri: "epios://mapping",
              timestamp: new Date(),
            },
          ],
          metadata: { runId },
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      run.status = "completed";
      run.completedAt = new Date();
      run.updatedAt = new Date();
      await this.mappingRepo.save(run);
    }

    await this.outboxRepo.markProcessed(message.id);
    return true;
  }

  start(intervalMs: number = 2000) {
    if (this.intervalId !== null) return; // Prevent duplicate starts

    this.intervalId = setInterval(async () => {
      try {
        await this.processNext();
      } catch (e) {
        console.error("MappingProcessor error:", e);
      }
    }, intervalMs);
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
