import React from "react";

import ReactDOM from "react-dom/client";
import "@/shared/styles/base.scss";
import { RouterProvider } from "react-router-dom";

import { routing } from "./routing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routing()} />
  </React.StrictMode>,
);
