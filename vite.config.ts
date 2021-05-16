import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path = require("path");

export default defineConfig({
  plugins: [reactRefresh()],
  alias: {
    "~": path.resolve(__dirname, "src"),
  },
});
