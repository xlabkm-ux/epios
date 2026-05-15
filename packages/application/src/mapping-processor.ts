import {
  MappingRepositoryPort,
  OutboxRepositoryPort,
  GraphRepositoryPort,
} from "@epios/ports";
import { EpistemicNode } from "@epios/domain";

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

    const { runId, workspaceId, missionId } = message.payload as {
      runId: string;
      workspaceId: string;
      missionId: string;
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
        const node = new EpistemicNode({
          id: claimId,
          workspaceId,
          missionId: run.missionId || missionId,
          type: "claim",
          content: `Automated Claim ${i} from run ${runId.slice(0, 8)}`,
          strength: "moderate",
          metadata: { runId },
          version: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        await this.graphRepo.saveNode(node);
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
