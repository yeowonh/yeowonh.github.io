// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages User site 주소.
  // <username>.github.io 형태이므로 base 설정은 불필요하다.
  // (Project site라면 base: '/repo-name' 이 필요함)
  site: 'https://yeowonh.github.io',

  build: {
    // /resume/ 대신 /resume 로 링크가 생성되도록
    format: 'file',
  },

  integrations: [sitemap()],
});