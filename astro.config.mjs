// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      head: [
        // Example: add Fathom analytics script tag.
        {
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js",
            "data-project": "6849b51a09e0969e5bd76619",
            defer: true,
          },
        },
      ],
      plugins: [ion()],
    }),
  ],
});
