import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.aamira.me",
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
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js",
            "data-project": "6849b51a09e0969e5bd76619",
            defer: true,
          },
        },
      ],
      routeMiddleware: "./src/routeMiddleware.ts",
      customCss: ["./src/styles/global.css"],
      pagination: false,
      favicon: "/favicon.svg",
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
