import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://cartas-eternas.github.io',
  markdown: { /* lo que ya tienes */ },
});