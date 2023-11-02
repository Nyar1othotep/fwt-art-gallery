import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/base.scss";
import { RouterProvider } from "react-router-dom";

import { routing } from "./app/routing";
import { ThemeProvider } from "./features/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routing()} />
    </ThemeProvider>
  </React.StrictMode>,
);
