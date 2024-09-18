import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://www.matou-technologies.fr",
  image: {
    domains: ["unsplash.com", "images.unsplash.com"],
  },
  integrations: [tailwind(), mdx(), icon(), sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/global.css";`,
        },
      },
    },
  },
});
