import { Claim, GovernanceProcess, EpistemicNode } from "@epios/domain";
import { GraphRepositoryPort, GovernanceRepositoryPort } from "@epios/ports";
import { randomUUID } from "crypto";

export interface SubmitClaimRequest {
  workspaceId: string;
  content: string;
  requiredVotes?: number;
}

export class SubmitClaimUseCase {
  constructor(
    private graphRepo: GraphRepositoryPort,
    private governanceRepo: GovernanceRepositoryPort,
  ) {}

  async execute(request: SubmitClaimRequest): Promise<Claim> {
    const claimId = randomUUID();
    const now = new Date();

    const claim = new EpistemicNode({
      id: claimId,
      workspaceId: request.workspaceId,
      type: "claim",
      content: request.content,
      strength: "none",
      evidence: [],
      metadata: {},
      createdAt: now,
      updatedAt: now,
    });

    const governance = new GovernanceProcess({
      nodeId: claimId,
      workspaceId: request.workspaceId,
      status: "pending",
      votes: [],
      requiredVotes: request.requiredVotes || 3,
      createdAt: now,
      updatedAt: now,
    });

    await this.graphRepo.saveNode(claim);
    await this.governanceRepo.saveProcess(governance);

    return claim;
  }
}
