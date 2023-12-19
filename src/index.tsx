import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/base.scss";
import { Provider as ReduxProvider } from "react-redux";

import { AppRouting, store } from "./app";
import { Providers } from "./app/providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Providers>
        <AppRouting />
      </Providers>
    </ReduxProvider>
  </React.StrictMode>,
);
