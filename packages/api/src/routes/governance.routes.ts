import { FastifyInstance } from "fastify";
import { SubmitClaimUseCase, CastVoteUseCase } from "@epios/application";

export async function governanceRoutes(
  fastify: FastifyInstance,
  options: {
    submitClaimUseCase: SubmitClaimUseCase;
    castVoteUseCase: CastVoteUseCase;
  },
) {
  fastify.post("/governance/claims", async (request, reply) => {
    const claim = await options.submitClaimUseCase.execute(
      request.body as {
        missionId: string;
        content: string;
        requiredVotes?: number;
      },
    );
    return reply.status(201).send(claim);
  });

  fastify.post("/governance/votes", async (request, reply) => {
    await options.castVoteUseCase.execute(
      request.body as {
        nodeId: string;
        actorId: string;
        decision: "approve" | "reject";
        rationale?: string;
      },
    );
    return reply.status(204).send();
  });
}
