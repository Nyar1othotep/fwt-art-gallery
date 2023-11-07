import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/base.scss";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { routing } from "./app/routing";
import { store } from "./app/store/store";
import { ThemeProvider } from "./features/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <RouterProvider router={routing()} />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
