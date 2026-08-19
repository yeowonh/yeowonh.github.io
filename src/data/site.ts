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
