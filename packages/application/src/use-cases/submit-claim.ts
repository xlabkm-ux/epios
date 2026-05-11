import { Claim, GovernanceProcess } from "@epos/domain";
import { GraphRepositoryPort, GovernanceRepositoryPort } from "@epos/ports";
import { v4 as uuidv4 } from "uuid";

export interface SubmitClaimRequest {
  missionId: string;
  content: string;
  requiredVotes?: number;
}

export class SubmitClaimUseCase {
  constructor(
    private graphRepo: GraphRepositoryPort,
    private governanceRepo: GovernanceRepositoryPort,
  ) {}

  async execute(request: SubmitClaimRequest): Promise<Claim> {
    const claimId = uuidv4();
    const now = new Date();

    const claim: Claim = {
      id: claimId,
      missionId: request.missionId,
      type: "claim",
      content: request.content,
      strength: "none",
      evidence: [],
      metadata: {},
      createdAt: now,
      updatedAt: now,
    };

    const governance: GovernanceProcess = {
      nodeId: claimId,
      missionId: request.missionId,
      status: "pending",
      votes: [],
      requiredVotes: request.requiredVotes || 3,
      createdAt: now,
      updatedAt: now,
    };

    await this.graphRepo.saveNode(claim);
    await this.governanceRepo.saveProcess(governance);

    return claim;
  }
}
