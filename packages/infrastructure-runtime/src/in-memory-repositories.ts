import {
  Workspace,
  EpistemicNode,
  EpistemicEdge,
  ADR,
  Source,
  Rating,
  MappingRun,
  ConcurrencyError,
} from "@epios/domain";
import {
  WorkspaceRepositoryPort,
  GraphRepositoryPort,
  SourceRepositoryPort,
  RatingRepositoryPort,
  MappingRepositoryPort,
  OutboxRepositoryPort,
  OutboxMessage,
} from "@epios/ports";

export class InMemoryADRRepository {
  private adrs: Map<string, ADR> = new Map();

  constructor(initialAdrs: ADR[] = []) {
    for (const adr of initialAdrs) {
      this.adrs.set(adr.id, adr);
    }
  }

  async list(): Promise<ADR[]> {
    return Array.from(this.adrs.values());
  }

  async get(id: string): Promise<ADR | null> {
    return this.adrs.get(id) || null;
  }

  async save(adr: ADR): Promise<void> {
    this.adrs.set(adr.id, adr);
  }
}

export const MOCK_ADRS: ADR[] = [
  {
    id: "ADR-0001",
    title: "Create Epistemic OS as a New Project",
    status: "Accepted",
    priority: "P0",
    date: "2026-05-10",
    author: "Kernel Team",
    context: "Initial project setup.",
    decision: "Create a new project named Epistemic OS.",
    consequences: {
      positive: ["Clean slate", "Purpose built"],
      negative: ["Initial setup overhead"],
    },
  },
  {
    id: "ADR-0026",
    title: "Use Apache-2.0 as Recommended Default License",
    status: "Proposed",
    priority: "P1",
    date: "2026-05-13",
    author: "Legal",
    context: "Need a permissive license for open source.",
    decision: "Adopt Apache-2.0.",
    consequences: {
      positive: ["Permissive", "Well-known"],
      negative: ["Requires attribution"],
    },
  },
  {
    id: "ADR-ES-001",
    title: "Adopt Event Sourcing for Mission History",
    status: "Proposed",
    priority: "P1",
    date: "2026-05-13",
    author: "Architect",
    context:
      "A draft ADR proposes event sourcing for all mission history. It claims better auditability and replay, but ignores complexity, migration cost, query model overhead and team familiarity.",
    decision: "Use append-only trace for MVP, defer full event sourcing.",
    consequences: {
      positive: ["Reduced complexity", "Sufficient auditability for MVP"],
      negative: ["Delayed full event sourcing benefits"],
    },
  },
];

export class InMemoryWorkspaceRepository implements WorkspaceRepositoryPort {
  private workspaces: Map<string, Workspace> = new Map();

  constructor(initialWorkspaces: Workspace[] = []) {
    for (const m of initialWorkspaces) {
      this.workspaces.set(m.id, m);
    }
  }

  async save(workspace: Workspace): Promise<void> {
    this.workspaces.set(workspace.id, workspace);
  }

  async findById(id: string): Promise<Workspace | null> {
    return this.workspaces.get(id) || null;
  }

  async findAll(): Promise<Workspace[]> {
    return Array.from(this.workspaces.values());
  }
}

export class InMemoryGraphRepository implements GraphRepositoryPort {
  private nodes: Map<string, EpistemicNode> = new Map();
  private edges: Map<string, EpistemicEdge> = new Map();

  constructor(
    initialNodes: EpistemicNode[] = [],
    initialEdges: EpistemicEdge[] = [],
  ) {
    for (const n of initialNodes) this.nodes.set(n.id, n);
    for (const e of initialEdges) this.edges.set(e.id, e);
  }

  async saveNode(node: EpistemicNode): Promise<void> {
    const existing = this.nodes.get(node.id);
    if (existing && existing.version !== node.version) {
      throw new ConcurrencyError(`Node ${node.id} concurrency conflict`);
    }
    this.nodes.set(node.id, node);
  }

  async saveEdge(edge: EpistemicEdge): Promise<void> {
    this.edges.set(edge.id, edge);
  }

  async deleteNode(id: string): Promise<boolean> {
    return this.nodes.delete(id);
  }

  async deleteEdge(id: string): Promise<boolean> {
    return this.edges.delete(id);
  }

  async findNodesByWorkspaceId(workspaceId: string): Promise<EpistemicNode[]> {
    return Array.from(this.nodes.values()).filter(
      (n) => n.workspaceId === workspaceId,
    );
  }

  async findEdgesByWorkspaceId(workspaceId: string): Promise<EpistemicEdge[]> {
    return Array.from(this.edges.values()).filter(
      (e) => e.workspaceId === workspaceId,
    );
  }

  async findNodeById(id: string): Promise<EpistemicNode | null> {
    return this.nodes.get(id) || null;
  }

  async findEdgeById(id: string): Promise<EpistemicEdge | null> {
    return this.edges.get(id) || null;
  }

  async findAllNodes(): Promise<EpistemicNode[]> {
    return Array.from(this.nodes.values());
  }
}

export class InMemorySourceRepository implements SourceRepositoryPort {
  private sources: Map<string, Source> = new Map();

  constructor(initialSources: Source[] = []) {
    for (const s of initialSources) {
      this.sources.set(s.id, s);
    }
  }

  async save(source: Source): Promise<void> {
    this.sources.set(source.id, source);
  }

  async findByWorkspaceId(workspaceId: string): Promise<Source[]> {
    return Array.from(this.sources.values()).filter(
      (s) => s.workspaceId === workspaceId,
    );
  }

  async findById(id: string): Promise<Source | null> {
    return this.sources.get(id) || null;
  }
}

export class InMemoryRatingRepository implements RatingRepositoryPort {
  private ratings: Map<string, Rating> = new Map();

  async save(rating: Rating): Promise<void> {
    this.ratings.set(rating.id, rating);
  }

  async findByNodeId(nodeId: string): Promise<Rating[]> {
    return Array.from(this.ratings.values()).filter((r) => r.nodeId === nodeId);
  }
}

export class InMemoryMappingRepository implements MappingRepositoryPort {
  private runs: Map<string, MappingRun> = new Map();

  async save(run: MappingRun): Promise<void> {
    this.runs.set(run.id, run);
  }

  async findById(id: string): Promise<MappingRun | null> {
    return this.runs.get(id) || null;
  }

  async findByWorkspaceId(workspaceId: string): Promise<MappingRun[]> {
    return Array.from(this.runs.values()).filter(
      (r) => r.workspaceId === workspaceId,
    );
  }
}

export class InMemoryOutboxRepository implements OutboxRepositoryPort {
  private messages: Map<string, OutboxMessage> = new Map();

  async save(message: OutboxMessage): Promise<void> {
    this.messages.set(message.id, message);
  }

  async findPending(): Promise<OutboxMessage[]> {
    return Array.from(this.messages.values()).filter(
      (m) => m.status === "pending",
    );
  }

  async markProcessed(id: string): Promise<void> {
    const message = this.messages.get(id);
    if (message) {
      message.status = "processed";
    }
  }
}
