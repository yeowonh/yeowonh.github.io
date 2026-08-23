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
     * Written from the internal self-review, deliberately abstracted: no internal
     * system names, no colleague names, no absolute operating metrics, no business
     * figures. Relative growth only. Keep it that way when editing.
     */
    role: 'Analytics Engineer',
    company: 'Kakao Mobility',
    period: 'Jan 2026 to Present',
    kind: 'Full-time',
    location: 'Pangyo, South Korea',
    summary:
      'Builds analytics systems and AI-assisted data products that help business teams answer questions without waiting on a specialist.',
    highlights: [
      'Launched an internal data catalog that unifies table lineage with a business ontology, then expanded it into AI development workflows through MCP. **Reached 151 MAU and 60.9K requests across Web, MCP, and Slack**, while average response time fell **81% from 21.5s to 4.0s**.',
      '**Built the product quality system**: daily adoption reporting, a golden evaluation set for catalog accuracy, weekly consistency checks, and LLM-based scoring for every session with failures reviewed on a fixed cadence.',
      '**Built a structured product-improvement cycle** with automated follow-ups, in-app feedback, and biweekly interviews. Shipped the capabilities users asked for, including multi-turn conversations, image input, answer regeneration and editing, and an interface for non-developers.',
      'Converted scattered domain expertise into a reviewed knowledge asset. Domain experts contribute, experiments validate changes, and approved gaps flow back into the system automatically; the approach was piloted against a held-out evaluation set.',
      'Owned metric operations and ad hoc analysis across marketing, CX, billing, and logistics, including aggregation logic changes with complete historical backfills.',
    ],
    stack: ['Python', 'SQL', 'LLM', 'MCP', 'ETL'],
  },
  {
    role: 'AI Research Engineer',
    company: 'emro',
    period: 'May 2025 to Dec 2025',
    kind: 'Full-time',
    location: 'Seoul, South Korea',
    summary: 'Developed applied AI capabilities for enterprise supply-chain products in the AI research group.',
    highlights: [
      'Built a TableRAG question-answering assistant for supplier workflows, grounding responses in source tables instead of lossy summaries.',
      'Built an evaluation dataset and automated evaluation cycle, then combined hybrid retrieval, Text-to-SQL, and reranking to deliver stronger retrieval and answer correctness over the baseline.',
      'Designed an Agentic RAG direction with query decomposition, evidence checks, and refusal guidance for unsupported questions.',
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
      'Developed vertical AI for financial law and conducted embedding research for Korean financial text in the AI Solutions division.',
    highlights: [
      'Extended an employee-facing legal and regulatory QA agent from flat retrieval to GraphRAG, enabling answers to follow relationships between provisions, enforcement decrees, and rules.',
      '**Co-authored TWICE (ICLR 2025 Workshop) and NMIXX (CIKM 2025 Workshop)** on Korean financial embeddings and benchmarks.',
      'Ran hard-negative-mining experiments for Korean financial retrieval and published the write-up as a Hugging Face community article.',
    ],
    stack: ['PyTorch', 'GraphRAG', 'Neo4j', 'Embeddings', 'RAG'],
  },
  {
    role: 'Engineering Trainee',
    company: 'Naver Boostcamp AI Tech (6th, NLP track)',
    period: 'Nov 2023 to Apr 2024',
    kind: '800-hour traineeship',
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
    note: 'A Korean finance embedding model paired with KorFinSTS, a high-quality semantic similarity benchmark, and released with the training data and code.',
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
    note: "On why random negatives teach a retriever almost nothing, NV-Retriever's positive-aware approach, and what happened when it was applied to Korean financial text.",
  },
];

export const awards: AwardItem[] = [
  {
    title: 'Side Impact 2024, Spark Track Sponsorship Selection',
    org: 'Brian Impact Foundation',
    date: 'Oct 2024 to Feb 2025',
    note: 'Hello World was selected for its public-interest value and the completeness of its implementation. I owned the retrieval chatbot: collecting and cleaning consultation data, loading it into MongoDB, and building the chat agent with LangChain.',
  },
  {
    title: 'Finalist, 5th Place, Everyday Dialogue Summarization Challenge',
    org: 'National Institute of Korean Language',
    date: 'Aug 2024',
    note: 'Identify the several topics inside a multi-party conversation and summarize each one. I did the EDA and error analysis that drove preprocessing and prompt design, then handled quantization, training, and hyperparameter tuning.',
  },
  {
    title: 'Encouragement Award, SeSAC Hackathon 2024',
    org: 'Seoul Business Agency',
    date: 'Aug 2024',
    note: 'For Hello World, an AI contact center for migrant workers underserved by shrinking support-center staff.',
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
  { name: 'English', issuer: 'OPIc IH · TOEIC 870', detail: 'ACTFL, Jun 2024 · YBM, Feb 2025' },
];
