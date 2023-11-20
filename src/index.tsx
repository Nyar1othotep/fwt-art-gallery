import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/base.scss";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { routing, store } from "./app";
import { AuthProvider } from "./features/auth";
import { ThemeProvider } from "./features/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={routing()} />
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
