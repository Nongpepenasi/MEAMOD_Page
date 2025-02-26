import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import github from "@astrojs/github";

// https://astro.build/config
export default defineConfig({
  site: "https://nongpepenasi.github.io/MEAMOD-Page",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  base: "/MEAMOD-Page/",
  output: "static",
  adapter: github(),
});
