import { defineConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    include: ["src/**/*.(test|spec).(ts|tsx)", "cli/**/*.(test|spec).ts"],
    environment: "happy-dom",
    setupFiles: ["vitest.setup.ts"],
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
});
