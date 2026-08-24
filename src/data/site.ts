/**
 * Site-wide profile data. Sourced from the LinkedIn profile
 * (linkedin.com/in/yewon-hwang-b414b32ab). Verify anything you want worded
 * differently in public.
 */

export const site = {
  name: 'Yewon Hwang',
  initials: 'YH',

  title: 'Analytics Engineer · Applied AI & Data Products',

  /** Optional line under the badge. Set to '' to hide. */
  company: 'Kakao Mobility',

  /**
   * About page body, one string per paragraph.
   * Adapted from the LinkedIn summary. Edit freely; this is your voice.
   */
  intro: [
    'I am an Analytics Engineer who builds trustworthy AI and data products from ambiguous business questions. At Kakao Mobility, I develop self-service data systems and applied AI workflows; previously, I built evidence-based AI assistants for financial-law and counseling workflows and co-developed Korean financial embedding benchmarks.',
    'I work end to end, from data modeling and RAG evaluation to production instrumentation. I use adoption, quality, and latency signals to make trade-offs explicit and guide the next product improvement.',
  ],

  url: 'https://yeowonh.github.io',

  email: 'hwyewon@gmail.com',

  location: 'Seongnam, South Korea',

  /** Sidebar status line. Set to '' to hide the row. */
  availability: 'Open to data & AI opportunities',

  links: {
    github: 'https://github.com/yeowonh',
    linkedin: 'https://www.linkedin.com/in/yewon-hwang-b414b32ab/',
    blog: 'https://ll2ll.tistory.com/',
  },

  nav: [
    { href: '/', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Portfolio' },
  ],

  /** "What I'm Doing" cards on the About page. icon = key in Icon.astro */
  services: [
    {
      icon: 'sparkles',
      title: 'AI Product Development',
      text: 'Turn RAG, LLM, and agent capabilities into user-facing products with clear, measurable outcomes.',
    },
    {
      icon: 'network',
      title: 'RAG & Evaluation',
      text: 'Design evidence-based RAG pipelines and evaluation systems that make answer quality visible and improvable.',
    },
    {
      icon: 'database',
      title: 'Analytics Engineering',
      text: 'Model data, define trusted metrics, and design cohort, funnel, and growth analyses for better business decisions.',
    },
    {
      icon: 'server',
      title: 'Production Delivery',
      text: 'Move systems from prototype to dependable operation through APIs, observability, and structured iteration.',
    },
  ],
} as const;

export const siteKo = {
  ...site,
  title: 'Analytics Engineer · Applied AI & Data Products',
  intro: [
    '데이터·AI 제품을 설계하는 Analytics Engineer입니다. Kakao Mobility에서 셀프서비스 데이터 시스템과 Applied AI 워크플로를 만들고 있으며, 이전에는 금융 법률과 상담 업무를 위한 근거 기반 AI 어시스턴트를 개발하고 한국어 금융 임베딩 벤치마크를 공동 구축했습니다.',
    '데이터 모델링, RAG 평가, 운영 지표를 연결해 제품 품질과 사용자 경험을 함께 개선합니다. 제품 채택, 품질, 응답 속도 데이터를 바탕으로 우선순위와 기술적 선택을 결정합니다.',
  ],
  location: 'Seongnam, South Korea',
  availability: 'Open to data & AI opportunities',
  nav: [
    { href: '/', label: '소개' },
    { href: '/resume', label: '이력' },
    { href: '/projects', label: '포트폴리오' },
  ],
  services: [
    {
      icon: 'sparkles',
      title: 'AI Product Development',
      text: 'RAG, LLM, 에이전트 기술을 실제 사용자 문제와 측정 가능한 제품 성과로 연결합니다.',
    },
    {
      icon: 'network',
      title: 'RAG & Evaluation',
      text: '근거 중심 RAG와 평가 체계를 설계해 답변 품질을 보이게 만들고 지속적으로 개선합니다.',
    },
    {
      icon: 'database',
      title: 'Analytics Engineering',
      text: '신뢰할 수 있는 데이터 모델과 지표를 바탕으로 코호트, 퍼널, 성장 분석을 설계해 비즈니스 의사결정을 지원합니다.',
    },
    {
      icon: 'server',
      title: 'Production Delivery',
      text: '프로토타입을 안정적인 API와 운영 가능한 제품으로 전환하고, 운영 지표를 바탕으로 개선합니다.',
    },
  ],
} as const;

export type Locale = 'en' | 'ko';

export const getSite = (locale: Locale) => (locale === 'ko' ? siteKo : site);

export const localizedPath = (path: string, locale: Locale) => {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return locale === 'ko' ? (normalized === '/' ? '/ko' : `/ko${normalized}`) : normalized;
};

export const cleanPagePath = (pathname: string) => {
  const withoutHtml = pathname.replace(/\.html$/, '');
  return withoutHtml.replace(/\/$/, '') || '/';
};

export const localePathFor = (pathname: string, locale: Locale) => {
  const clean = cleanPagePath(pathname);
  const unprefixed = clean === '/ko' ? '/' : clean.replace(/^\/ko(?=\/)/, '');
  return localizedPath(unprefixed, locale);
};
