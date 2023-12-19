import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/features/auth";
import { FiltersProvider } from "@/features/filters";
import { ThemeProvider } from "@/features/theme";

import { buildProviderTree } from "./buildProviderTree";

const Providers = buildProviderTree([
  AuthProvider,
  ThemeProvider,
  BrowserRouter,
  FiltersProvider,
]);

export default Providers;
