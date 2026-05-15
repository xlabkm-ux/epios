import { FastifyInstance } from "fastify";
import {
  SubmitClaimUseCase,
  CastVoteUseCase,
  ProposePatchUseCase,
  ListPatchesUseCase,
  AssessReadinessUseCase,
  GetReadinessUseCase,
  ApplyPatchUseCase,
  GetTraceUseCase,
} from "@epios/application";
import { SecurityPort } from "@epios/ports";

export async function governanceRoutes(
  fastify: FastifyInstance,
  options: {
    submitClaimUseCase: SubmitClaimUseCase;
    castVoteUseCase: CastVoteUseCase;
    proposePatchUseCase: ProposePatchUseCase;
    listPatchesUseCase: ListPatchesUseCase;
    assessReadinessUseCase: AssessReadinessUseCase;
    getReadinessUseCase: GetReadinessUseCase;
    applyPatchUseCase: ApplyPatchUseCase;
    getTraceUseCase: GetTraceUseCase;
    security: SecurityPort;
  },
) {
  const { security } = options;

  async function checkRole(roles: string[]) {
    const user = await security.getCurrentUser();
    if (!user || !roles.includes(user.role)) {
      throw new Error("FORBIDDEN");
    }
  }

  fastify.get("/governance/patches", async (request, reply) => {
    const { workspaceId } = request.query as { workspaceId: string };
    const patches = await options.listPatchesUseCase.execute({ workspaceId });
    return reply.status(200).send(patches);
  });

  fastify.post(
    "/governance/claims",
    {
      schema: {
        body: {
          type: "object",
          required: ["workspaceId", "missionId", "content"],
          properties: {
            workspaceId: { type: "string" },
            missionId: { type: "string" },
            content: { type: "string" },
            requiredVotes: { type: "number" },
          },
        },
      },
    },
    async (request, reply) => {
      await checkRole(["admin", "reviewer"]);
      const claim = await options.submitClaimUseCase.execute(
        request.body as {
          workspaceId: string;
          missionId: string;
          content: string;
          requiredVotes?: number;
        },
      );
      return reply.status(201).send(claim);
    },
  );

  fastify.post("/governance/patches", async (request, reply) => {
    await checkRole(["admin", "reviewer"]);
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
    await checkRole(["admin", "reviewer"]);
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

  fastify.post("/governance/readiness", async (request, reply) => {
    await checkRole(["admin", "reviewer"]);
    const assessment = await options.assessReadinessUseCase.execute(
      request.body as { workspaceId: string; profileId: string },
    );
    return reply.status(200).send(assessment);
  });

  fastify.get("/governance/readiness", async (request, reply) => {
    const { workspaceId } = request.query as { workspaceId: string };
    const assessment = await options.getReadinessUseCase.execute(workspaceId);
    return reply.status(200).send(assessment);
  });

  fastify.post("/governance/apply-patch", async (request, reply) => {
    await checkRole(["admin"]);
    const version = await options.applyPatchUseCase.execute(
      request.body as { patchId: string; actorId: string },
    );
    return reply.status(201).send(version);
  });

  fastify.get("/governance/trace", async (request, reply) => {
    const { workspaceId } = request.query as { workspaceId: string };
    const trace = await options.getTraceUseCase.execute(workspaceId);
    return reply.status(200).send(trace);
  });
}
