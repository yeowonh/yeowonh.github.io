import type {
  AwardItem,
  CredentialItem,
  EducationItem,
  ExperienceItem,
  PublicationItem,
} from './resume';

/**
 * 한국어 이력 데이터입니다. 현재 재직 중인 회사의 내부 시스템명, 테이블명,
 * 절대 운영 지표와 사업 수치는 공개하지 않습니다.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Analytics Engineer',
    company: 'Kakao Mobility',
    period: '2026년 1월 ~ 현재',
    kind: 'Full-time',
    location: 'Pangyo, South Korea',
    summary:
      '제품 성장과 캠페인 의사결정을 위한 분석을 설계하고, 이를 뒷받침하는 셀프서비스 데이터·AI 제품을 개발합니다.',
    highlights: [
      '**제품·성장 분석을 설계했습니다.** 신규 유입, 활성화, 재이용, 캠페인 효과를 구분할 수 있도록 코호트, 노출·기준 시점, 전환 윈도우, 비교 기준을 정의하고 이벤트 커버리지와 분모를 검증했습니다.',
      '**캠페인 기획을 위한 재사용 가능한 타깃 분석 프레임워크를 구축했습니다.** 행동·지역 신호를 결합하고 타깃 정확도, 도달 범위, 홀드아웃 비교를 점검했습니다.',
      '**셀프서비스 데이터 인텔리전스 제품을 출시했습니다.** 카탈로그, 리니지, 비즈니스 용어를 Web, MCP, Slack에서 연결해 최근 집계 기간 **151 MAU와 6.09만 건의 요청**을 기록했고, 평균 응답 시간은 **21.5초에서 4.0초로 81% 단축**했습니다.',
      '**제품 품질 운영 체계를 구축했습니다.** 일별 사용 현황 리포트, 카탈로그 정확도 골든 평가 세트, 주간 정합성 점검, 세션별 LLM 스코어링과 정기 실패 리뷰를 운영했습니다.',
      '**사용자 피드백과 반복되는 답변 공백을 제품 개선으로 연결했습니다.** 자동 후속 질문, 인앱 피드백, 격주 사용자 인터뷰를 바탕으로 멀티턴 대화, 이미지 입력, 답변 편집, 비개발자용 인터페이스를 반영했습니다.',
    ],
    stack: ['Python', 'SQL', 'LLM', 'MCP', 'ETL'],
  },
  {
    role: 'AI Research Engineer',
    company: 'emro',
    period: '2025년 5월 ~ 2025년 12월',
    kind: 'Full-time',
    location: 'Seoul, South Korea',
    summary: 'AI 연구 조직에서 엔터프라이즈 공급망 업무를 위한 근거 기반 AI 기능을 개발하고 평가했습니다.',
    highlights: [
      '공급사 업무를 위한 TableRAG 질의응답 어시스턴트를 구축해, 정보가 손실된 요약 대신 원본 테이블에 근거한 답변을 제공했습니다.',
      '**과제 특화 평가 세트와 자동 비교 흐름을 구축했습니다.** Hybrid Search, Text-to-SQL, Reranking을 결합해 retrieval correctness를 **76.85%에서 84.21%로**, 최종 답변 정확도를 **59.85%에서 68.36%로** 높였습니다.',
      '**주요 비교에서 전체 응답 시간을 43.5초에서 18.2초로 단축했습니다.** 검색 결과와 SQL 결과를 분리해 Reranking한 비교에서는 답변 품질이 추가로 **2.0%p** 개선되었습니다.',
      '질의 분해, 근거 검증, 근거가 부족한 질문의 응답 보류 기준을 포함하는 Agentic RAG 설계안을 마련했습니다.',
    ],
    stack: ['Python', 'LLM', 'RAG', 'TableRAG'],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Shinhan Investment Corp.',
    period: '2024년 8월 ~ 2024년 11월',
    kind: 'Internship',
    location: 'Seoul, South Korea',
    summary: 'AI Solutions 부서에서 금융 법률 특화 AI를 개발하고 한국어 금융 텍스트 임베딩 연구를 수행했습니다.',
    highlights: [
      '임직원용 법률 및 규정 QA 에이전트를 단순 검색에서 GraphRAG로 확장해, 조문과 시행령, 규칙 사이의 인용·위임 관계를 따라 답변할 수 있게 했습니다.',
      '**한국어 금융 임베딩과 벤치마크 연구인 TWICE와 NMIXX를 공동 집필**해 각각 ICLR 2025, CIKM 2025 워크숍에 게재했습니다.',
      '한국어 금융 검색을 위한 하드 네거티브 마이닝 실험을 수행하고 결과를 Hugging Face 커뮤니티 아티클로 공개했습니다.',
    ],
    stack: ['PyTorch', 'GraphRAG', 'Neo4j', 'Embeddings', 'RAG'],
  },
  {
    role: 'NLP Engineering Trainee',
    company: 'Naver Boostcamp AI Tech (6th, NLP track)',
    period: '2023년 11월 ~ 2024년 4월',
    section: 'training',
    kind: '800시간 전문 교육과정',
    location: 'Seoul, South Korea · Hybrid',
    summary: '대회, 팀 개발, 코드 리뷰를 통해 6개월간 집중적인 NLP 엔지니어링 과정을 수료했습니다.',
    highlights: [
      '문장 유사도, 관계 추출, 데이터 중심 NLP 대회에서 반복적인 오류 분석을 적용했습니다.',
      '개인화 일상 대화 챗봇 My Bestie를 팀 프로젝트에서 공개 전시와 배포까지 발전시켰습니다.',
    ],
    stack: ['NLP', 'Python', 'PyTorch'],
  },
];

export const education: EducationItem[] = [
  {
    school: 'Sejong University',
    degree: '데이터사이언스학과 공학사',
    period: '2019년 3월 ~ 2024년 8월',
    notes: [
      '전체 평점 3.91 / 4.5 · 전공 평점 4.02 / 4.5 · 141학점 이수, 전공 79학점',
      '연합 빅데이터 동아리 BITAMin 7기, 2021년 ~ 2022년: 대회 참여 및 자율 스터디 운영',
    ],
  },
];

export const publications: PublicationItem[] = [
  {
    title: 'NMIXX: Domain-Adapted Neural Embeddings for Cross-Lingual eXploration of Finance',
    venue: 'CIKM 2025 Workshop on Advances in Financial AI',
    date: '2025년',
    note: '한국어 금융 임베딩 모델과 고품질 의미 유사도 벤치마크 KorFinSTS를 함께 제안하고 학습 데이터와 코드를 공개했습니다.',
    href: 'https://arxiv.org/abs/2507.09601',
  },
  {
    title:
      'TWICE: What Advantages Can Low-Resource Domain-Specific Embedding Models Bring? A Case Study on Korean Financial Texts',
    venue: 'ICLR 2025 Workshop on Advances in Financial AI',
    date: '2025년 3월',
    note: '제1저자. 번역 벤치마크가 놓치는 언어·문화적 맥락을 평가하기 위해 공개 데이터셋과 금융 보고서, 뉴스, DART 공시로 KorFinMTEB를 구축했습니다.',
    href: 'https://arxiv.org/abs/2502.07131',
  },
  {
    title: 'Exploring Hard Negative Mining with NV-Retriever in Korean Financial Text',
    venue: 'Hugging Face 커뮤니티 아티클',
    date: '2025년 1월',
    note: '무작위 네거티브의 한계, NV-Retriever의 positive-aware 방식, 이를 한국어 금융 텍스트에 적용한 결과를 정리했습니다.',
  },
];

export const awards: AwardItem[] = [
  {
    title: '브라이언임팩트재단 Side Impact 2024 Spark Track 후원 선정',
    org: '브라이언임팩트재단',
    date: '2024년 10월 ~ 2025년 2월',
    note: 'Hello World가 공익성과 구현 완성도를 인정받아 선정되었습니다. 상담 데이터 수집과 정제, MongoDB 적재, LangChain 채팅 에이전트 구축 등 검색 챗봇 전반을 담당했습니다.',
  },
  {
    title: '일상 대화 요약 경진대회 본선 5위',
    org: '국립국어원',
    date: '2024년 8월',
    note: '다자간 대화 속 여러 주제를 식별하고 각각 요약하는 과제였습니다. EDA와 오류 분석으로 전처리 및 프롬프트 방향을 정하고 양자화, 학습, 하이퍼파라미터 튜닝을 담당했습니다.',
  },
  {
    title: 'SeSAC 해커톤 2024 장려상',
    org: '서울경제진흥원',
    date: '2024년 8월',
    note: '지원센터 인력 감소로 도움을 받기 어려운 이주노동자를 위한 AI 컨택센터 Hello World로 수상했습니다.',
  },
  {
    title: '제15회 창의설계경진대회 우수상, 2위',
    org: 'Sejong University',
    date: '2023년 6월',
    note: '교내 정보 챗봇 SejongMate로 수상했습니다. 팀장으로서 문제 정의, 데이터 수집, 모델링, API 개발을 이끌고 베타 사용자 피드백으로 개선 우선순위를 정했습니다.',
  },
];

export const certifications: CredentialItem[] = [
  {
    name: 'SQLD (SQL Developer)',
    issuer: '한국데이터산업진흥원',
    detail: '2026년 3월 취득 · 2028년 3월까지 유효',
  },
];

export const languages: CredentialItem[] = [
  { name: '한국어', issuer: '원어민' },
  { name: '일본어', issuer: 'JLPT N1 · 160점', detail: '일본국제교류기금, 2025년 1월' },
  { name: '영어', issuer: 'OPIc IH', detail: 'ACTFL, 2024년 6월' },
];
