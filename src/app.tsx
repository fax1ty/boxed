import "reactflow/dist/style.css";
import "react-contexify/dist/ReactContexify.css";

import { Board } from "./components/board";
import { CreateBoxModal } from "./modals/create-box";
import { CreateRunnerModal } from "./modals/create-runner";

export const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Board />
      <CreateRunnerModal />
      <CreateBoxModal />
    </div>
  );
};
