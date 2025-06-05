// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: '/', // Netlify에서 배포한 URL
  site: "https://nyung.netlify.app/",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
