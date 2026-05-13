import { Mission, EpistemicNode, EpistemicEdge } from "@epios/domain";
import { MissionRepositoryPort, GraphRepositoryPort } from "@epios/ports";

export class InMemoryMissionRepository implements MissionRepositoryPort {
  private missions: Map<string, Mission> = new Map();

  constructor(initialMissions: Mission[] = []) {
    for (const m of initialMissions) {
      this.missions.set(m.id, m);
    }
  }

  async save(mission: Mission): Promise<void> {
    this.missions.set(mission.id, mission);
  }

  async findById(id: string): Promise<Mission | null> {
    return this.missions.get(id) || null;
  }

  async findAll(): Promise<Mission[]> {
    return Array.from(this.missions.values());
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

  async findNodesByMissionId(missionId: string): Promise<EpistemicNode[]> {
    return Array.from(this.nodes.values()).filter(
      (n) => n.missionId === missionId,
    );
  }

  async findEdgesByMissionId(missionId: string): Promise<EpistemicEdge[]> {
    return Array.from(this.edges.values()).filter(
      (e) => e.missionId === missionId,
    );
  }

  async findNodeById(id: string): Promise<EpistemicNode | null> {
    return this.nodes.get(id) || null;
  }

  async findEdgeById(id: string): Promise<EpistemicEdge | null> {
    return this.edges.get(id) || null;
  }
}
