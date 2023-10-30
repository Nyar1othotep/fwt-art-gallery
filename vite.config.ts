import path from "path";

import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  envPrefix: "REACT_APP_",

  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:8]",
      localsConvention: null,
    },
  },
});
