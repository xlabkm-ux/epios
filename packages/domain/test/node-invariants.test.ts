import { describe, expect, it } from "vitest";
import { EpistemicNode, NodeStrength, NodeType } from "../src";

describe("EpistemicNode invariants", () => {
  it("creates a valid epistemic node", () => {
    const node: EpistemicNode = {
      id: "n1",
      workspaceId: "w1",
      type: "claim",
      content: "The system is stable",
      strength: "strong",
      evidence: [],
      metadata: {},
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    expect(node.type).toBe("claim");
    expect(node.strength).toBe("strong");
  });

  it("supports all node types", () => {
    const types: NodeType[] = [
      "claim",
      "observation",
      "hypothesis",
      "risk",
      "decision",
      "question",
    ];
    types.forEach((type) => {
      const node: Partial<EpistemicNode> = { type };
      expect(node.type).toBe(type);
    });
  });

  it("supports all strength levels", () => {
    const strengths: NodeStrength[] = [
      "none",
      "weak",
      "moderate",
      "strong",
      "indisputable",
    ];
    strengths.forEach((strength) => {
      const node: Partial<EpistemicNode> = { strength };
      expect(node.strength).toBe(strength);
    });
  });
});
