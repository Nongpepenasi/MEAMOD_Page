import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://nongpepenasi.github.io/MEAMOD_Page",
  integrations: [tailwind(), mdx(), sitemap(), icon(), react()],
  base: "/MEAMOD_Page/",
  output: "static",
});
