import { FastifyInstance } from "fastify";
import {
  SubmitClaimUseCase,
  CastVoteUseCase,
  ProposePatchUseCase,
  ListPatchesUseCase,
} from "@epios/application";

export async function governanceRoutes(
  fastify: FastifyInstance,
  options: {
    submitClaimUseCase: SubmitClaimUseCase;
    castVoteUseCase: CastVoteUseCase;
    proposePatchUseCase: ProposePatchUseCase;
    listPatchesUseCase: ListPatchesUseCase;
  },
) {
  fastify.get("/governance/patches", async (request, reply) => {
    const { workspaceId } = request.query as { workspaceId: string };
    const patches = await options.listPatchesUseCase.execute({ workspaceId });
    return reply.status(200).send(patches);
  });

  fastify.post("/governance/claims", async (request, reply) => {
    const claim = await options.submitClaimUseCase.execute(
      request.body as {
        workspaceId: string;
        content: string;
        requiredVotes?: number;
      },
    );
    return reply.status(201).send(claim);
  });

  fastify.post("/governance/patches", async (request, reply) => {
    const patch = await options.proposePatchUseCase.execute(
      request.body as {
        targetNodeId: string;
        workspaceId: string;
        authorId: string;
        content: string;
        requiredVotes?: number;
      },
    );
    return reply.status(201).send(patch);
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
