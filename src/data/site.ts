/**
 * Site-wide profile data. Sourced from the LinkedIn profile
 * (linkedin.com/in/yewon-hwang-b414b32ab). Verify anything you want worded
 * differently in public.
 */

export const site = {
  name: 'Yewon Hwang',
  initials: 'YH',

  title: 'Analytics Engineer · AI Systems',

  /** Optional line under the badge. Set to '' to hide. */
  company: 'Kakao Mobility',

  /**
   * About page body, one string per paragraph.
   * Adapted from the LinkedIn summary. Edit freely; this is your voice.
   */
  intro: [
    'I am an Analytics Engineer and AI Systems builder who turns ambiguous business questions into reliable products. At Kakao Mobility, I build self-service data systems and AI workflows; previously, I shipped retrieval and GraphRAG assistants and researched Korean finance language models.',
    'I connect data, retrieval, evaluation, APIs, and user feedback into one product loop. I care about adoption, quality, and speed in production, make trade-offs explicit, and turn operating signals into the next improvement.',
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
      text: 'Turn retrieval, LLM, and agent capabilities into user-facing products with clear outcomes.',
    },
    {
      icon: 'network',
      title: 'Retrieval & Evaluation',
      text: 'Design evidence-grounded RAG and evaluation systems that make quality visible and improvable.',
    },
    {
      icon: 'database',
      title: 'Analytics Engineering',
      text: 'Model data, define trusted metrics, and build self-service workflows for better business decisions.',
    },
    {
      icon: 'server',
      title: 'Production Delivery',
      text: 'Take systems from prototype to reliable operation through APIs, observability, and feedback.',
    },
  ],
} as const;

export const siteKo = {
  ...site,
  title: 'Analytics Engineer · AI Systems',
  intro: [
    'Analytics Engineer이자 AI Systems builder입니다. 모호한 비즈니스 질문을 신뢰할 수 있는 제품으로 바꾸며, Kakao Mobility에서는 셀프서비스 데이터 시스템과 AI 워크플로를, 이전에는 retrieval·GraphRAG assistant와 Korean finance language model을 개발했습니다.',
    '데이터와 검색, 평가, API, 사용자 피드백을 하나의 제품 루프로 연결합니다. 모델 성능과 실제 채택, 운영 속도를 함께 보고, 운영 데이터에서 다음 개선의 근거를 찾습니다.',
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
      text: '검색, LLM, 에이전트 기술을 실제 사용자 문제와 측정 가능한 제품 성과로 연결합니다.',
    },
    {
      icon: 'network',
      title: 'Retrieval & Evaluation',
      text: '근거 중심 RAG와 평가 체계를 설계해 답변 품질을 보이게 만들고 지속적으로 개선합니다.',
    },
    {
      icon: 'database',
      title: 'Analytics Engineering',
      text: '신뢰할 수 있는 데이터 모델과 지표, 셀프서비스 워크플로로 비즈니스 의사결정을 지원합니다.',
    },
    {
      icon: 'server',
      title: 'Production Delivery',
      text: '프로토타입을 안정적인 API와 운영 가능한 제품으로 전환하고 사용 데이터로 고도화합니다.',
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
