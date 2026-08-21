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
    'I build reliable AI and data products that turn complex information into decisions people can act on. At Kakao Mobility, I develop analytics systems and self-service data tools used across business teams. Before that, I shipped retrieval-based assistants and Korean finance NLP research.',
    'My work spans the full path from an ambiguous question to a production system: data modeling, retrieval and evaluation, APIs and interfaces, and the feedback loops that keep quality improving. I care about measurable adoption as much as model performance; one internal product grew monthly active users roughly 6× in six months.',
    'I work at the boundary of research, engineering, and the people using the product. I make trade-offs explicit, build evidence before scaling, and document what I learn at ll2ll.tistory.com.',
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
      title: 'AI Products',
      text: 'Retrieval-based assistants for multilingual counseling, enterprise Q&A, and everyday dialogue, designed around trustworthy answers and real user workflows.',
    },
    {
      icon: 'network',
      title: 'Retrieval & Evaluation',
      text: 'RAG pipelines, hard negative mining, and Korean domain embeddings, paired with benchmarks and evaluation sets that make quality measurable.',
    },
    {
      icon: 'database',
      title: 'Analytics & Data Products',
      text: 'Clear data models, tested transformations, shared metrics, and self-service tools that let more people answer questions with confidence.',
    },
    {
      icon: 'server',
      title: 'Production Engineering',
      text: 'Serving models through dependable APIs with Azure Functions, FastAPI, Docker, and GitHub Actions, then improving them with usage and feedback data.',
    },
  ],
} as const;

export const siteKo = {
  ...site,
  title: '애널리틱스 엔지니어 · AI 시스템',
  intro: [
    '복잡한 정보를 사람들이 실제로 행동할 수 있는 의사결정으로 바꾸는 신뢰도 높은 AI·데이터 제품을 만듭니다. 카카오모빌리티에서 여러 비즈니스 조직이 활용하는 분석 시스템과 셀프서비스 데이터 도구를 개발하고 있습니다. 이전에는 검색 기반 어시스턴트와 한국어 금융 NLP 연구를 수행했습니다.',
    '모호한 질문을 프로덕션 시스템으로 만드는 전 과정을 다룹니다. 데이터 모델링, 검색과 평가, API와 인터페이스, 품질을 지속적으로 높이는 피드백 루프까지 연결합니다. 모델 성능만큼 실제 사용과 확산을 중요하게 생각하며, 사내 제품 한 곳의 월간 활성 사용자를 6개월 동안 약 6배 성장시켰습니다.',
    '연구, 엔지니어링, 실제 사용자 사이의 경계에서 일합니다. 선택과 트레이드오프를 명확히 하고, 확장 전에 근거를 만들며, 배운 내용을 ll2ll.tistory.com에 기록합니다.',
  ],
  location: '대한민국 성남',
  availability: '데이터·AI 분야의 새로운 기회에 열려 있습니다',
  nav: [
    { href: '/', label: '소개' },
    { href: '/resume', label: '이력' },
    { href: '/projects', label: '포트폴리오' },
  ],
  services: [
    {
      icon: 'sparkles',
      title: 'AI 제품',
      text: '다국어 상담, 엔터프라이즈 Q&A, 일상 대화를 위한 검색 기반 어시스턴트를 설계합니다. 신뢰할 수 있는 답변과 실제 사용자 흐름을 중심에 둡니다.',
    },
    {
      icon: 'network',
      title: '검색 및 평가',
      text: 'RAG 파이프라인, 하드 네거티브 마이닝, 한국어 도메인 임베딩을 구축하고 벤치마크와 평가 세트로 품질을 측정합니다.',
    },
    {
      icon: 'database',
      title: '분석 및 데이터 제품',
      text: '명확한 데이터 모델, 검증된 변환, 공통 지표, 셀프서비스 도구를 통해 더 많은 사람이 확신을 갖고 질문에 답할 수 있게 합니다.',
    },
    {
      icon: 'server',
      title: '프로덕션 엔지니어링',
      text: 'Azure Functions, FastAPI, Docker, GitHub Actions로 모델을 안정적인 API로 제공하고 사용 및 피드백 데이터로 지속해서 개선합니다.',
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
