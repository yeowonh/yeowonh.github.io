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
    role: '애널리틱스 엔지니어',
    company: '카카오모빌리티',
    period: '2026년 1월 ~ 현재',
    kind: '정규직',
    location: '대한민국 판교',
    summary:
      '비즈니스 조직이 데이터 전문가를 기다리지 않고 질문에 답할 수 있도록 분석 시스템과 AI 기반 데이터 제품을 개발합니다.',
    highlights: [
      '테이블 리니지와 비즈니스 온톨로지를 연결한 사내 데이터 카탈로그를 출시하고 MCP를 통해 AI 개발 업무까지 확장했습니다. MAU(월간 활성 사용자 수)는 6개월 동안 약 6배 성장했습니다.',
      '일별 사용 현황 리포트, 카탈로그 정확도 골든 평가 세트, 주간 정합성 점검, 모든 세션에 대한 LLM 기반 스코어링과 정기 실패 리뷰를 포함한 제품 품질 체계를 구축했습니다.',
      '자동 후속 질문, 인앱 피드백, 격주 사용자 인터뷰로 피드백 루프를 닫았습니다. 멀티턴 대화, 이미지 입력, 답변 재생성 및 편집, 비개발자용 인터페이스 등 사용자가 요청한 기능을 제품에 반영했습니다.',
      '분산되어 있던 도메인 지식을 검토 가능한 공통 자산으로 전환했습니다. 도메인 전문가가 지식을 기여하고 실험으로 변경을 검증하며, 승인된 지식 공백이 시스템에 자동 반영되는 흐름을 홀드아웃 평가 세트로 검증했습니다.',
      '마케팅, CX, 결제, 물류 영역의 지표 운영과 비정형 분석을 담당했으며, 집계 로직 변경 시 전체 과거 데이터까지 일관되게 재처리했습니다.',
    ],
    stack: ['Python', 'SQL', 'LLM', 'MCP', 'ETL'],
  },
  {
    role: 'AI 리서치 엔지니어',
    company: '엠로',
    period: '2025년 5월 ~ 2025년 12월',
    kind: '정규직',
    location: '대한민국 서울',
    summary: 'AI 연구 조직에서 엔터프라이즈 공급망 제품을 위한 응용 AI 기능을 개발했습니다.',
    highlights: [
      '공급사 업무를 위한 TableRAG 질의응답 어시스턴트를 구축해, 정보가 손실된 요약 대신 원본 테이블에 근거한 답변을 제공했습니다.',
    ],
    stack: ['Python', 'LLM', 'RAG', 'TableRAG'],
  },
  {
    role: 'AI 엔지니어 인턴',
    company: '신한투자증권',
    period: '2024년 8월 ~ 2024년 11월',
    kind: '인턴십',
    location: '대한민국 서울',
    summary: 'AI Solutions 부서에서 금융 법률 특화 AI를 개발하고 한국어 금융 텍스트 임베딩 연구를 수행했습니다.',
    highlights: [
      '임직원용 법률 및 규정 QA 에이전트를 단순 검색에서 GraphRAG로 확장해, 조문과 시행령, 규칙 사이의 관계를 따라 답변할 수 있게 했습니다.',
      '한국어 금융 임베딩과 벤치마크 연구인 TWICE와 NMIXX를 공동 집필해 각각 ICLR 2025, CIKM 2025 워크숍에 게재했습니다.',
      '한국어 금융 검색을 위한 하드 네거티브 마이닝 실험을 수행하고 결과를 Hugging Face 커뮤니티 아티클로 공개했습니다.',
    ],
    stack: ['PyTorch', 'GraphRAG', 'Neo4j', 'Embeddings', 'RAG'],
  },
  {
    role: '엔지니어링 교육생',
    company: '네이버 부스트캠프 AI Tech 6기 NLP 트랙',
    period: '2023년 11월 ~ 2024년 4월',
    kind: '800시간 교육 과정',
    location: '대한민국 서울 · 하이브리드',
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
    school: '세종대학교',
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
    title: 'Side Impact 2024 Spark Track 후원 선정',
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
    org: '세종대학교',
    date: '2023년 6월',
    note: '교내 정보 챗봇 SejongMate로 수상했습니다. 팀장으로서 문제 정의, 데이터 수집, 모델링, API 개발을 이끌고 베타 사용자 피드백으로 개선 우선순위를 정했습니다.',
  },
];

export const certifications: CredentialItem[] = [
  {
    name: 'SQLD, SQL 개발자',
    issuer: '한국데이터산업진흥원',
    detail: '2026년 3월 취득 · 2028년 3월까지 유효',
  },
];

export const languages: CredentialItem[] = [
  { name: '한국어', issuer: '원어민' },
  { name: '일본어', issuer: 'JLPT N1 · 160점', detail: '일본국제교류기금, 2025년 1월' },
  { name: '영어', issuer: 'OPIc IH · TOEIC 870', detail: 'ACTFL, 2024년 6월 · YBM, 2025년 2월' },
];
