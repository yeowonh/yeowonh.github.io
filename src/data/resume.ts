/**
 * Résumé data, populated from the LinkedIn profile and the Notion portfolio
 * (yeowonh.notion.site).
 *
 * Bullets marked TODO are the ones only you can write. The rule that matters:
 * state what changed, not what you touched.
 *
 * Never publish internal system details, table names, or unreleased metrics
 * from a current employer. "Large-scale mobility data" is as specific as it
 * needs to get.
 */

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  section?: 'experience' | 'training';
  kind?: string;
  location?: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  notes?: string[];
};

export type PublicationItem = {
  title: string;
  venue: string;
  date: string;
  note?: string;
  href?: string;
};

export type AwardItem = {
  title: string;
  org: string;
  date: string;
  note?: string;
};

export type CredentialItem = {
  name: string;
  issuer: string;
  detail?: string;
};

export const experience: ExperienceItem[] = [
  {
    /**
     * Written from the internal self-review and limited to public-safe aggregate
     * metrics. Do not add internal system names, raw data, or unreleased figures.
     */
    role: 'Analytics Engineer',
    company: 'Kakao Mobility',
    period: 'Jan 2026 to Present',
    kind: 'Full-time',
    location: 'Pangyo, South Korea',
    summary:
      'Design product-growth and campaign-decision analyses, while building self-service data and AI products that make those decisions easier to act on.',
    highlights: [
      '**Designed product and growth analyses for decision-making.** Defined cohorts, exposure and index dates, conversion windows, and comparable baselines to distinguish acquisition, activation, repeat behavior, and campaign impact; validated event coverage and denominators before interpreting results.',
      '**Built reusable audience-analysis frameworks for campaign planning.** Combined behavioral and regional signals, then checked target precision, coverage, and holdout comparisons before activation.',
      '**Launched a self-service data intelligence product** that unifies catalog, lineage, and business terminology across Web, MCP, and Slack. In the latest measurement period, it reached **151 MAU and 60.9K requests** while average response time fell **81%, from 21.5s to 4.0s**.',
      '**Established product-quality operations** with daily adoption reporting, a golden evaluation set for catalog accuracy, weekly consistency checks, and session-level LLM scoring with recurring failure reviews.',
      '**Turned feedback and observed answer gaps into product improvements.** Automated follow-ups, in-app feedback, and biweekly interviews informed multi-turn conversation, image input, answer editing, and a non-developer interface.',
    ],
    stack: ['Python', 'SQL', 'LLM', 'MCP', 'ETL'],
  },
  {
    role: 'AI Research Engineer',
    company: 'emro',
    period: 'May 2025 to Dec 2025',
    kind: 'Full-time',
    location: 'Seoul, South Korea',
    summary: 'Developed and evaluated grounded AI capabilities for enterprise supply-chain workflows as part of the AI research group.',
    highlights: [
      'Built a TableRAG question-answering assistant for supplier workflows, grounding responses in source tables rather than lossy summaries.',
      '**Built a task-specific evaluation set and automated comparison workflow.** Hybrid retrieval, Text-to-SQL, and reranking increased retrieval correctness from **76.85% to 84.21%** and final-answer accuracy from **59.85% to 68.36%**.',
      '**Reduced end-to-end response time from 43.5s to 18.2s** in the primary comparison, while separate reranking of search and SQL results added a further **2.0 percentage-point** answer-quality lift.',
      'Designed an evidence-oriented Agentic RAG architecture with query decomposition, evidence checks, and abstention guidance for unsupported questions.',
    ],
    stack: ['Python', 'LLM', 'RAG', 'TableRAG'],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Shinhan Investment Corp.',
    period: 'Aug 2024 to Nov 2024',
    kind: 'Internship',
    location: 'Seoul, South Korea',
    summary:
      'Developed domain-specific AI for financial law and conducted embedding research on Korean financial text in the AI Solutions division.',
    highlights: [
      'Extended an employee-facing legal and regulatory QA agent from flat retrieval to GraphRAG, enabling answers to follow citations and delegation across provisions, enforcement decrees, and rules.',
      '**Co-authored TWICE (ICLR 2025 Workshop) and NMIXX (CIKM 2025 Workshop)** on Korean financial embeddings and benchmarks.',
      'Conducted hard-negative mining experiments for Korean financial retrieval and published the findings as a Hugging Face community article.',
    ],
    stack: ['PyTorch', 'GraphRAG', 'Neo4j', 'Embeddings', 'RAG'],
  },
  {
    role: 'NLP Engineering Trainee',
    company: 'Naver Boostcamp AI Tech (6th, NLP track)',
    period: 'Nov 2023 to Apr 2024',
    section: 'training',
    kind: '800-hour professional traineeship',
    location: 'Seoul, South Korea · Hybrid',
    summary:
      'Completed six months of intensive NLP engineering through competitions, team delivery, and code review.',
    highlights: [
      'Applied iterative error analysis across sentence similarity, relation extraction, and data-centric NLP competitions.',
      'Took My Bestie, a personalized everyday-conversation chatbot, from team project to public exhibition and deployment.',
    ],
    stack: ['NLP', 'Python', 'PyTorch'],
  },
];

export const education: EducationItem[] = [
  {
    school: 'Sejong University',
    degree: 'B.E. in Data Science',
    period: 'Mar 2019 to Aug 2024',
    notes: [
      'GPA 3.91 / 4.5 · Major GPA 4.02 / 4.5 · 141 credits (79 in major)',
      'BITAMin, inter-university big data club (7th cohort, 2021 to 2022): competitions and a self-run study group',
    ],
  },
];

export const publications: PublicationItem[] = [
  {
    title: 'NMIXX: Domain-Adapted Neural Embeddings for Cross-Lingual eXploration of Finance',
    venue: 'CIKM 2025 Workshop on Advances in Financial AI',
    date: '2025',
    note: 'Co-developed a Korean finance embedding model and paired it with KorFinSTS, a high-quality semantic similarity benchmark; released both with the training data and code.',
    href: 'https://arxiv.org/abs/2507.09601',
  },
  {
    title:
      'TWICE: What Advantages Can Low-Resource Domain-Specific Embedding Models Bring? A Case Study on Korean Financial Texts',
    venue: 'ICLR 2025 Workshop on Advances in Financial AI',
    date: 'Mar 2025',
    note: 'First author. Introduces KorFinMTEB, built from public datasets plus financial reports, news, and DART filings, because translated benchmarks miss the linguistic and cultural nuance of the domain.',
    href: 'https://arxiv.org/abs/2502.07131',
  },
  {
    title: 'Exploring Hard Negative Mining with NV-Retriever in Korean Financial Text',
    venue: 'Hugging Face community article',
    date: 'Jan 2025',
    note: "Explains the limits of random negatives, NV-Retriever's positive-aware approach, and its application to Korean financial text.",
  },
];

export const awards: AwardItem[] = [
  {
    title: "Selected for Brian Impact Foundation's Side Impact 2024 Spark Track",
    org: 'Brian Impact Foundation',
    date: 'Oct 2024 to Feb 2025',
    note: 'Hello World was selected for its public-interest value and the completeness of its implementation. I owned the RAG chatbot: collecting and cleaning consultation data, loading it into MongoDB, and building the chat agent with LangChain.',
  },
  {
    title: 'Finalist, 5th Place, Everyday Dialogue Summarization Challenge',
    org: 'National Institute of Korean Language',
    date: 'Aug 2024',
    note: 'Identified multiple topics within a multi-party conversation and summarized each one. I led EDA and error analysis to guide preprocessing and prompt design, then handled quantization, training, and hyperparameter tuning.',
  },
  {
    title: 'Encouragement Award, SeSAC Hackathon 2024',
    org: 'Seoul Business Agency',
    date: 'Aug 2024',
    note: 'Recognized Hello World, an AI-powered contact center for migrant workers facing reduced access to support-center staff.',
  },
  {
    title: 'Excellence Award (2nd Place), 15th Creative Design Competition',
    org: 'Sejong University',
    date: 'Jun 2023',
    note: 'For SejongMate, a campus information chatbot. As team lead, I drove problem framing, data collection, modeling, and API development, then prioritized improvements using student feedback from the beta.',
  },
];

export const certifications: CredentialItem[] = [
  {
    name: 'SQLD (SQL Developer)',
    issuer: 'Korea Data Agency',
    detail: 'Issued Mar 2026 · valid through Mar 2028',
  },
];

export const languages: CredentialItem[] = [
  { name: 'Korean', issuer: 'Native' },
  { name: 'Japanese', issuer: 'JLPT N1 · Score 160', detail: 'Japan Foundation, Jan 2025' },
  { name: 'English', issuer: 'OPIc IH', detail: 'ACTFL, Jun 2024' },
];
