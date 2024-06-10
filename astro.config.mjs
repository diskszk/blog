import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: {
    port: 3000,
  },
  vite: {
    ssr: {
      noExternal: ["@radix-ui/themes"],
    },
    plugins: [vanillaExtractPlugin()],
  },
});
