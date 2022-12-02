import { BarLoader } from "react-spinners";
import { Handle, NodeProps, Position } from "reactflow";

import { useBoardStore } from "../../store/board";

interface Data {
  name: string;
  loading?: boolean;
}

export const BoxNode = ({ data, selected }: NodeProps<Data>) => {
  const nodes = useBoardStore((state) => state.nodes);
  const updateNodeData = useBoardStore((state) => state.updateNodeData);

  return (
    <button
      style={{
        outline: selected ? "solid 1px red" : undefined,
        width: 200,
        height: 80,
        backgroundColor: "black",
        borderRadius: 12,
        color: "white",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingInline: 12,
          paddingBlock: 6,
        }}
      >
        <p>{data.name}</p>
      </div>
      {data.loading && <BarLoader color="white" width="100%" />}
      <Handle
        type="source"
        position={Position.Top}
        id="box-out"
        onConnect={({ source, target }) => {
          const sourceNode = nodes.find(({ id }) => id === source);
          const targetNode = nodes.find(({ id }) => id === target);
          if (!sourceNode || !targetNode) return;

          if (sourceNode.type === "box" && targetNode.type === "runner")
            updateNodeData(sourceNode.id, {
              ...sourceNode.data,
              loading: true,
            });
        }}
      />
    </button>
  );
};
