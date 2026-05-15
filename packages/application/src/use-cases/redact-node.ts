import { EpistemicNode, RedactionRule } from "@epios/domain";
import { GraphRepositoryPort, SecurityPort } from "@epios/ports";

const MAX_PATTERN_LENGTH = 500;

function isSafeRegex(pattern: string): boolean {
  if (pattern.length > MAX_PATTERN_LENGTH) return false;
  try {
    new RegExp(pattern);
    return true;
  } catch {
    return false;
  }
}

export class RedactNodeUseCase {
  constructor(
    private graphRepo: GraphRepositoryPort,
    private security: SecurityPort,
  ) {}

  async execute(
    nodeId: string,
    rules: RedactionRule[],
  ): Promise<EpistemicNode> {
    const node = await this.graphRepo.findNodeById(nodeId);
    if (!node) throw new Error("NODE_NOT_FOUND");

    const currentUser = await this.security.getCurrentUser();
    if (!currentUser || currentUser.role !== "admin") {
      throw new Error("FORBIDDEN");
    }

    let redactedContent = node.content;

    for (const rule of rules) {
      if (!isSafeRegex(rule.pattern)) {
        throw new Error(`INVALID_REDACTION_PATTERN: ${rule.id}`);
      }
      const regex = new RegExp(rule.pattern, "gi");
      redactedContent = redactedContent.replace(regex, rule.replacement);
    }

    node.updateContent(redactedContent);
    node.updateMetadata({
      redacted: true,
      redactedAt: new Date().toISOString(),
    });

    await this.graphRepo.saveNode(node);

    await this.security.logAudit({
      actorId: currentUser.id,
      action: "REDACT_NODE",
      resourceId: nodeId,
      resourceType: "node",
      details: { rulesApplied: rules.map((r) => r.id) },
    });

    return node;
  }
}
