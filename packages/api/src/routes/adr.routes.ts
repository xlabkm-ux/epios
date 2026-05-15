import { FastifyInstance } from "fastify";
import { ListADRsUseCase, GetADRUseCase } from "@epios/application";

export async function adrRoutes(
  fastify: FastifyInstance,
  options: {
    listADRsUseCase: ListADRsUseCase;
    getADRUseCase: GetADRUseCase;
  },
) {
  fastify.get("/adrs", async () => {
    return options.listADRsUseCase.execute();
  });

  fastify.get<{ Params: { id: string } }>(
    "/adrs/:id",
    async (request, reply) => {
      const adr = await options.getADRUseCase.execute(request.params.id);

      if (!adr) {
        return reply.status(404).send({ error: "ADR_NOT_FOUND" });
      }
      return adr;
    },
  );
}
