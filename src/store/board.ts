import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  XYPosition,
} from "reactflow";
import create from "zustand";

interface BoardStore {
  nodes: Array<Node>;
  edges: Array<Edge>;
  lastClickPoint: XYPosition;
  setLastClickPoint: (v: XYPosition) => void;
  updateNodeData: <T>(id: string, data: T) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
}

export const useBoardStore = create<BoardStore>((set, get) => ({
  nodes: [],
  edges: [],
  lastClickPoint: { x: 0, y: 0 },
  setLastClickPoint: (v) => set({ lastClickPoint: v }),
  updateNodeData: (targetId, data) =>
    set((state) => {
      const newNodes = [...state.nodes];
      const targetNode = newNodes.find(({ id }) => id === targetId);
      if (!targetNode) return state;
      targetNode.data = data;
      return { ...state, nodes: newNodes };
    }),
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
}));
