import { useId, useMemo } from "react";
import {
  Item,
  Menu,
  RightSlot,
  Submenu,
  useContextMenu,
} from "react-contexify";
import ReactFlow, { Background, Controls, useReactFlow } from "reactflow";

import { BoxNode } from "../nodes/box";
import { RunnerNode } from "../nodes/runner";
import { useBoardStore } from "../store/board";
import { useModalStore } from "../store/modal";

export const Board = () => {
  const id = useId();
  const contextId = useMemo(() => `context-menu-${id}`, [id]);
  const nodes = useBoardStore((state) => state.nodes);
  const edges = useBoardStore((state) => state.edges);
  const onNodesChange = useBoardStore((state) => state.onNodesChange);
  const onEdgesChange = useBoardStore((state) => state.onEdgesChange);
  const onConnect = useBoardStore((state) => state.onConnect);
  const flowInstance = useReactFlow();

  const { show } = useContextMenu({
    id: contextId,
  });

  const setCreateRunnerModalVisible = useModalStore(
    (state) => state.setCreateRunnerModalVisible
  );
  const setCreateBoxModalVisible = useModalStore(
    (state) => state.setCreateBoxModalVisible
  );
  const setLastClickPoint = useBoardStore((state) => state.setLastClickPoint);

  const nodeTypes = useMemo(() => ({ runner: RunnerNode, box: BoxNode }), []);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onContextMenu={(event) => {
        show({ event });
        const clickedPosition = flowInstance.project({
          x: event.clientX,
          y: event.clientY,
        });
        setLastClickPoint(clickedPosition);
      }}
    >
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{ hideAttribution: true }}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>

      <Menu id={contextId}>
        <Submenu label="Create">
          <Item
            onClick={() => setCreateRunnerModalVisible(true)}
            keyMatcher={(e) => e.ctrlKey && e.key === "a"}
          >
            Runner <RightSlot>⌘F</RightSlot>
          </Item>
          <Item onClick={() => setCreateBoxModalVisible(true)}>Box</Item>
        </Submenu>
      </Menu>
    </div>
  );
};
