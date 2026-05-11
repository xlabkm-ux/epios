import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  Connection,
  Edge,
  Node,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import { useMission } from "../context/MissionContext";
import { useApi } from "../hooks/useApi";

interface GraphData {
  nodes: Array<{ id: string; content: string; type: string }>;
  edges: Array<{
    id: string;
    sourceNodeId: string;
    targetNodeId: string;
    type: string;
  }>;
}

const GraphCanvas: React.FC = () => {
  const { selectedMissionId } = useMission();
  const { data: graphData, loading } = useApi<GraphData>(
    selectedMissionId ? `/missions/${selectedMissionId}/graph` : "",
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (graphData) {
      const rfNodes: Node[] = graphData.nodes.map((node, index) => ({
        id: node.id,
        position: {
          x: 100 + ((index * 200) % 600),
          y: 100 + Math.floor(index / 3) * 150,
        },
        data: {
          label:
            node.content.substring(0, 30) +
            (node.content.length > 30 ? "..." : ""),
        },
        style: {
          background: "var(--bg-card)",
          color: "var(--text-main)",
          border: `1px solid ${node.type === "HYPOTHESIS" ? "var(--primary)" : "var(--secondary)"}`,
          borderRadius: "8px",
          padding: "10px",
          width: 150,
        },
      }));

      const rfEdges: Edge[] = graphData.edges.map((edge) => ({
        id: edge.id,
        source: edge.sourceNodeId,
        target: edge.targetNodeId,
        animated: true,
        label: edge.type,
        style: { stroke: "var(--primary)" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "var(--primary)" },
      }));

      setNodes(rfNodes);
      setEdges(rfEdges);
    }
  }, [graphData, setNodes, setEdges]);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, style: { stroke: "var(--primary)" } },
          eds,
        ),
      ),
    [setEdges],
  );

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "var(--text-dim)",
        }}
      >
        Loading Graph...
      </div>
    );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--bg-dark)",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background color="#222" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default GraphCanvas;
