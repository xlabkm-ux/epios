import { Workspace, EpistemicNode, EpistemicEdge } from "@epios/domain";
import { WorkspaceRepositoryPort, GraphRepositoryPort } from "@epios/ports";

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
