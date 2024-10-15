import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["@journeyapps/wa-sqlite", "@powersync/web"],
    },
    worker: {
      format: "es",
      plugins: () => [wasm(), topLevelAwait()],
    },
    plugins: [
      wasm(),
      topLevelAwait(),
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
