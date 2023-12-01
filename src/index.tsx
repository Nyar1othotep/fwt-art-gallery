import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/base.scss";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AppRouting, store } from "./app";
import { AuthProvider } from "./features/auth";
import { FiltersProvider } from "./features/filters";
import { ThemeProvider } from "./features/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <FiltersProvider>
              <AppRouting />
            </FiltersProvider>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
