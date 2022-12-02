import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";

import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </React.StrictMode>
);
