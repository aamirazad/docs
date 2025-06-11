import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  site: "https://louisescher.github.io",
  integrations: [
    starlight({
      title: "Docs",
      sidebar: [
        {
          label: "[rocket] FBLA",
          autogenerate: {
            directory: "fbla",
          },
        },
        {
          label: "[book] History Club",
          autogenerate: {
            directory: "history-club",
          },
        },
      ],
      routeMiddleware: "./src/routeMiddleware.ts",
      customCss: ["./src/styles/global.css"],
      pagination: false,
      plugins: [
        ion({
          icons: {
            iconDir: "./src/icons",
          },
          footer: {
            text: "©️ Aamir Azad 2025. Content Licensed under CC BY-SA 4.0",
          },
        }),
      ],
    }),
  ],
  output: "static",
});
