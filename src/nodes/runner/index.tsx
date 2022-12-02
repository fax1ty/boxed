import { Handle, NodeProps, Position } from "reactflow";

interface Data {
  name: string;
}

export const RunnerNode = ({ data, selected }: NodeProps<Data>) => {
  return (
    <button
      style={{
        outline: selected ? "solid 1px red" : undefined,
        width: 200,
        height: 80,
        backgroundColor: "black",
        borderRadius: 12,
        paddingInline: 12,
        paddingBlock: 6,
        color: "white",
      }}
    >
      <p>{data.name}</p>
      <Handle type="target" position={Position.Bottom} id="runner-in" />
    </button>
  );
};
