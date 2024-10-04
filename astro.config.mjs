import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";
import fauxRemarkEmbedder from "@remark-embedder/core";
import fauxOembedTransformer from "@remark-embedder/transformer-oembed";
import m2dx from "astro-m2dx";

const remarkEmbedder = fauxRemarkEmbedder.default;
const oembedTransformer = fauxOembedTransformer.default;

const m2dxOptions = {
  exportComponents: true,
  unwrapImages: true,
  autoImports: true,
};

export default defineConfig({
  site: "https://www.matou-technologies.fr",
  outDir: "./dist",
  image: {
    domains: ["unsplash.com", "images.unsplash.com"],
    cache: true,
  },
  integrations: [tailwind(), mdx({}), sitemap(), icon()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [
      [
        remarkEmbedder,
        {
          transformers: [oembedTransformer],
        },
      ],
      [m2dx, m2dxOptions],
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow"],
          target: ["_blank"],
        },
      ],
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        external: [],
      },
      assetsInlineLimit: 10096,
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/styles/global.css";`,
        },
      },
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  prefetch: {
    defaultStrategy: "viewport",
  },
  scopedStyleStrategy: "attribute",
});
