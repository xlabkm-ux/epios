import { FastifyInstance, FastifyReply } from "fastify";
import { RedactNodeUseCase, ApplyRetentionUseCase } from "@epios/application";
import { SecurityPort } from "@epios/ports";
import { RedactionRule, RetentionPolicy } from "@epios/domain";

function forbidden(reply: FastifyReply) {
  return reply.status(403).send({ error: "FORBIDDEN" });
}

export async function securityRoutes(
  fastify: FastifyInstance,
  options: {
    security: SecurityPort;
    redactNodeUseCase: RedactNodeUseCase;
    applyRetentionUseCase: ApplyRetentionUseCase;
  },
) {
  fastify.get("/api/v1/security/me", async () => {
    const user = await options.security.getCurrentUser();
    return { user };
  });

  fastify.get("/api/v1/security/audit", async (_request, reply) => {
    const user = await options.security.getCurrentUser();
    if (!user || user.role !== "admin") {
      return forbidden(reply);
    }
    const logs = await options.security.listAuditLogs({});
    return { logs };
  });

  fastify.get("/api/v1/system/stats", async (_request, reply) => {
    const user = await options.security.getCurrentUser();
    if (!user || user.role !== "admin") {
      return forbidden(reply);
    }
    return {
      uptime: process.uptime(),
      version: "1.1.0-alpha",
    };
  });

  fastify.post("/api/v1/security/redact", async (request, reply) => {
    const user = await options.security.getCurrentUser();
    if (!user || user.role !== "admin") {
      return forbidden(reply);
    }
    const { nodeId, rules } = request.body as {
      nodeId: string;
      rules: RedactionRule[];
    };
    const node = await options.redactNodeUseCase.execute(nodeId, rules);
    return { node };
  });

  fastify.post("/api/v1/security/retention", async (request, reply) => {
    const user = await options.security.getCurrentUser();
    if (!user || user.role !== "admin") {
      return forbidden(reply);
    }
    const { policy } = request.body as { policy: RetentionPolicy };
    const result = await options.applyRetentionUseCase.execute(policy);
    return result;
  });
}
