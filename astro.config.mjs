// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://yeowonh.github.io';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages User site 주소.
  // <username>.github.io 형태이므로 base 설정은 불필요하다.
  // (Project site라면 base: '/repo-name' 이 필요함)
  site: siteUrl,

  build: {
    // GitHub Pages에서도 /projects/<slug>/ 형태의 clean URL을 유지한다.
    format: 'directory',
    // GitHub Pages의 HTML 캐시와 해시된 CSS 파일이 엇갈릴 때 무스타일 페이지가
    // 노출되지 않도록, 페이지 스타일을 HTML에 포함한다.
    inlineStylesheets: 'always',
  },

  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],
});
