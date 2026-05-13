import { FastifyInstance } from "fastify";
import { RateNodeUseCase, GetNodeRatingsUseCase } from "@epios/application";
import { EpistemicRatingValue } from "@epios/domain";

export async function ratingRoutes(
  fastify: FastifyInstance,
  options: {
    rateNodeUseCase: RateNodeUseCase;
    getNodeRatingsUseCase: GetNodeRatingsUseCase;
  },
) {
  fastify.get<{ Params: { nodeId: string } }>(
    "/nodes/:nodeId/ratings",
    async (request) => {
      return options.getNodeRatingsUseCase.execute(request.params.nodeId);
    },
  );

  fastify.post<{
    Params: { nodeId: string };
    Body: { actorId: string; value: EpistemicRatingValue; comment?: string };
  }>("/nodes/:nodeId/ratings", async (request, reply) => {
    const rating = await options.rateNodeUseCase.execute({
      nodeId: request.params.nodeId,
      ...request.body,
    });
    return reply.status(201).send(rating);
  });
}
