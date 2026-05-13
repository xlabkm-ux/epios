import { describe, it, expect } from "vitest";
import { Source, Rating } from "../src/index.js";

describe("Source Domain", () => {
  it("should create a valid source object", () => {
    const source: Source = {
      id: "s1",
      missionId: "m1",
      type: "text",
      content: "Important evidence",
      metadata: {},
      createdAt: new Date(),
    };
    expect(source.id).toBe("s1");
    expect(source.type).toBe("text");
  });
});

describe("Rating Domain", () => {
  it("should create a valid rating object", () => {
    const rating: Rating = {
      id: "r1",
      nodeId: "n1",
      actorId: "a1",
      value: 5,
      comment: "Excellent claim",
      createdAt: new Date(),
    };
    expect(rating.value).toBe(5);
    expect(rating.comment).toBe("Excellent claim");
  });
});
