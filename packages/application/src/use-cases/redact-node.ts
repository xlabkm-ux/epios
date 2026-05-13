import { EpistemicNode, RedactionRule } from "@epios/domain";
import { GraphRepositoryPort, SecurityPort } from "@epios/ports";

export class RedactNodeUseCase {
  constructor(
    private graphRepo: GraphRepositoryPort,
    private security: SecurityPort
  ) {}

  async execute(nodeId: string, rules: RedactionRule[]): Promise<EpistemicNode> {
    const node = await this.graphRepo.findNodeById(nodeId);
    if (!node) throw new Error("Node not found");

    const currentUser = await this.security.getCurrentUser();
    if (!currentUser || currentUser.role !== "admin") {
      throw new Error("Only admins can redact content");
    }

    let redactedContent = node.content;

    for (const rule of rules) {
      const regex = new RegExp(rule.pattern, "gi");
      redactedContent = redactedContent.replace(regex, rule.replacement);
    }

    const updatedNode: EpistemicNode = {
      ...node,
      content: redactedContent,
      metadata: {
        ...node.metadata,
        redacted: true,
        redactedAt: new Date().toISOString()
      }
    };

    await this.graphRepo.saveNode(updatedNode);

    await this.security.logAudit({
      actorId: currentUser.id,
      action: "REDACT_NODE",
      resourceId: nodeId,
      resourceType: "node",
      details: { rulesApplied: rules.map(r => r.id) }
    });

    return updatedNode;
  }
}
