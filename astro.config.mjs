// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://lidkaglobal.com",
  output: "static",
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      entryLimit: 5000,
      filter: (page) => !page.includes("/admin") && !page.includes("/private") && !page.includes("/draft"),
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
