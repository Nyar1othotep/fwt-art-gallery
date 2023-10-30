import React from "react";

import { App } from "app";
import ReactDOM from "react-dom/client";
import "./shared/styles/base.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
