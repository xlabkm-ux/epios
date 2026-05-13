import {
  Workspace,
  EpistemicNode,
  EpistemicEdge,
  ADR,
  Source,
  Rating,
} from "@epios/domain";
import {
  WorkspaceRepositoryPort,
  GraphRepositoryPort,
  SourceRepositoryPort,
  RatingRepositoryPort,
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
    this.nodes.set(node.id, node);
  }

  async saveEdge(edge: EpistemicEdge): Promise<void> {
    this.edges.set(edge.id, edge);
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
}

export class InMemorySourceRepository implements SourceRepositoryPort {
  private sources: Map<string, Source> = new Map();

  async save(source: Source): Promise<void> {
    this.sources.set(source.id, source);
  }

  async findByMissionId(missionId: string): Promise<Source[]> {
    return Array.from(this.sources.values()).filter(
      (s) => s.missionId === missionId,
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
