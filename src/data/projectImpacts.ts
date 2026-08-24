export type ImpactBar = {
  label: string;
  amount: number;
  display: string;
};

export type ImpactItem = {
  kind: 'metric' | 'comparison' | 'flow';
  label: string;
  value: string;
  caption: string;
  bars?: ImpactBar[];
  tokens?: string[];
  steps?: string[];
};

export type ProjectImpact = {
  eyebrow: string;
  title: string;
  items: ImpactItem[];
};

type Locale = 'en' | 'ko';

export const projectImpacts: Record<Locale, Record<string, ProjectImpact>> = {
  en: {
    'enterprise-data-intelligence': {
      eyebrow: 'Impact snapshot',
      title: 'Adoption, speed, and quality at production scale',
      items: [
        {
          kind: 'metric',
          label: 'Usage scale',
          value: '60.9K requests',
          caption: 'Web, MCP, and Slack · 24 Jun to 22 Aug 2026',
          tokens: ['178 active users', '1,621 sessions', '3 surfaces'],
        },
        {
          kind: 'comparison',
          label: 'Adoption',
          value: '6.3× MAU',
          caption: 'Monthly active users · August is month-to-date',
          bars: [
            { label: 'Mar baseline', amount: 24, display: '24 MAU' },
            { label: 'Aug MTD', amount: 151, display: '151 MAU' },
          ],
        },
        {
          kind: 'comparison',
          label: 'Performance & quality',
          value: '81% faster',
          caption: 'Average response time · Web Trace completion 99.7%',
          bars: [
            { label: 'Mar avg', amount: 21.5, display: '21.5s' },
            { label: 'Aug avg', amount: 4.04, display: '4.0s' },
          ],
          tokens: ['P90 38.6s → 6.8s', '2,173 reviewed traces'],
        },
      ],
    },
    tablerag: {
      eyebrow: 'Impact snapshot',
      title: 'Retrieval quality, answer quality, and speed',
      items: [
        {
          kind: 'comparison',
          label: 'Retrieval correctness',
          value: '84.21%',
          caption: 'Retrieved context contains evidence that can answer the query',
          bars: [
            { label: 'Baseline', amount: 76.85, display: '76.85%' },
            { label: 'Optimized', amount: 84.21, display: '84.21%' },
          ],
        },
        {
          kind: 'comparison',
          label: 'Answer correctness',
          value: '68.36%',
          caption: 'Final-answer accuracy on the task-specific evaluation set',
          bars: [
            { label: 'Baseline', amount: 59.85, display: '59.85%' },
            { label: 'Optimized', amount: 68.36, display: '68.36%' },
          ],
          tokens: ['+8.51 percentage points', 'Reranking +2.0 pp'],
        },
        {
          kind: 'comparison',
          label: 'Total response time',
          value: '58% faster',
          caption: 'Primary comparison · end-to-end response time',
          bars: [
            { label: 'Baseline', amount: 43.51, display: '43.5s' },
            { label: 'Optimized', amount: 18.22, display: '18.2s' },
          ],
          tokens: ['Hybrid retrieval', 'Text-to-SQL', 'Reranking'],
        },
      ],
    },
    nmixx: {
      eyebrow: 'Impact snapshot',
      title: 'Measured model and benchmark gains',
      items: [
        {
          kind: 'comparison',
          label: 'Spearman lift',
          value: '+0.22',
          caption: 'Improvement over the pre-adaptation checkpoint',
          bars: [
            { label: 'KorFinSTS', amount: 0.22, display: '+0.22' },
            { label: 'FinSTS', amount: 0.1, display: '+0.10' },
          ],
        },
        {
          kind: 'metric',
          label: 'Training data',
          value: '18.8K',
          caption: 'High-confidence financial-domain triplets',
          tokens: ['Domain adapted', 'Korean finance'],
        },
        {
          kind: 'metric',
          label: 'Research validation',
          value: '1,921 pairs',
          caption: 'A new Korean financial STS benchmark',
          tokens: ['7 baselines', 'CIKM oral'],
        },
      ],
    },
    'twice-korfinmteb': {
      eyebrow: 'Impact snapshot',
      title: 'A broader, more revealing evaluation standard',
      items: [
        {
          kind: 'metric',
          label: 'Benchmark scale',
          value: '26 datasets',
          caption: 'Native Korean financial evaluation sets released publicly',
          tokens: ['Open source', 'Reproducible'],
        },
        {
          kind: 'metric',
          label: 'Task coverage',
          value: '7 task types',
          caption: 'From retrieval and reranking to similarity and summarization',
          tokens: ['Retrieval', 'STS', 'Reranking'],
        },
        {
          kind: 'comparison',
          label: 'Hidden performance gap',
          value: '5% to 8%',
          caption: 'Drops surfaced by native Korean tasks versus translated evaluation',
          bars: [
            { label: 'Lower bound', amount: 5, display: '5%' },
            { label: 'Upper bound', amount: 8, display: '8%' },
          ],
        },
      ],
    },
    'dialogue-summarization': {
      eyebrow: 'Impact snapshot',
      title: 'Competition outcome and disciplined iteration',
      items: [
        {
          kind: 'metric',
          label: 'Competitive ranking',
          value: '5th place',
          caption: 'Advanced to the national finals',
          tokens: ['National competition', 'Finalist'],
        },
        {
          kind: 'flow',
          label: 'Evaluation discipline',
          value: 'Error led',
          caption: 'Each iteration started from observed failure patterns',
          steps: ['Baseline', 'Failure analysis', 'Focused refinement'],
        },
        {
          kind: 'metric',
          label: 'Model efficiency',
          value: 'Budget fit',
          caption: 'Training and inference stayed within competition constraints',
          tokens: ['Quantization', 'Focused tuning'],
        },
      ],
    },
    'helloworld-aicc': {
      eyebrow: 'Impact snapshot',
      title: 'From hackathon validation to a deployable service',
      items: [
        {
          kind: 'metric',
          label: 'External validation',
          value: '2 recognitions',
          caption: 'Award and Brian Impact Foundation sponsorship secured within six months',
          tokens: ['SeSAC award', 'Brian Impact Foundation'],
        },
        {
          kind: 'flow',
          label: 'Production delivery',
          value: 'End to end',
          caption: 'The prototype matured into a deployable support workflow',
          steps: ['Hackathon MVP', 'Streaming RAG', 'Automated release'],
        },
        {
          kind: 'flow',
          label: 'Service continuity',
          value: 'AI to human',
          caption: 'Relevant session context survives escalation',
          steps: ['AI session', 'Structured summary', 'Counselor handoff'],
        },
      ],
    },
    'my-bestie': {
      eyebrow: 'Impact snapshot',
      title: 'Fast team delivery with a complete user experience',
      items: [
        {
          kind: 'metric',
          label: 'Delivery velocity',
          value: '4 weeks',
          caption: 'From scoped concept to public deployment',
          tokens: ['Public release', 'Final project'],
        },
        {
          kind: 'metric',
          label: 'Team execution',
          value: '7 people',
          caption: 'An NLP team aligned around memory and conversation continuity',
          tokens: ['NLP', 'Product focus'],
        },
        {
          kind: 'flow',
          label: 'Product validation',
          value: 'Live tested',
          caption: 'The full experience moved beyond a notebook demo',
          steps: ['Prototype', 'Public deployment', 'Visitor exhibition'],
        },
      ],
    },
    sejongmate: {
      eyebrow: 'Impact snapshot',
      title: 'Award-winning execution grounded in user feedback',
      items: [
        {
          kind: 'metric',
          label: 'External validation',
          value: '2nd place',
          caption: 'Excellence Award at the university-wide competition',
          tokens: ['15th competition', 'Excellence Award'],
        },
        {
          kind: 'flow',
          label: 'End-to-end delivery',
          value: 'Beta shipped',
          caption: 'One product plan connected language data, modeling, and delivery',
          steps: ['Corpus', 'NLP model', 'API beta'],
        },
        {
          kind: 'flow',
          label: 'User feedback',
          value: 'Evidence led',
          caption: 'Direct student input shaped the next iteration',
          steps: ['Student input', 'Priority review', 'Product iteration'],
        },
      ],
    },
    'shinhan-graphrag': {
      eyebrow: 'Impact snapshot',
      title: 'Relationship-aware evidence for financial-law QA',
      items: [
        {
          kind: 'metric',
          label: 'Product integration',
          value: 'Integrated',
          caption: 'Implemented as an extension of an employee-facing financial-law assistant',
          tokens: ['Employee product', 'Financial law'],
        },
        {
          kind: 'flow',
          label: 'Retrieval capability',
          value: 'Multi-hop',
          caption: 'Legal context follows relationships instead of flat similarity alone',
          steps: ['Provision', 'Citation edge', 'Related rule'],
        },
        {
          kind: 'flow',
          label: 'Answer traceability',
          value: 'Inspectable',
          caption: 'The supporting legal path remains visible with the answer',
          steps: ['Question', 'Evidence path', 'Grounded answer'],
        },
      ],
    },
  },
  ko: {
    'enterprise-data-intelligence': {
      eyebrow: '성과 한눈에 보기',
      title: '제품 채택, 응답 속도, 품질 운영 성과',
      items: [
        {
          kind: 'metric',
          label: '사용 규모',
          value: '6.09만 건',
          caption: 'Web, MCP, Slack · 2026년 6월 24일 ~ 8월 22일',
          tokens: ['활성 사용자 178명', '세션 1,621개', '3개 접점'],
        },
        {
          kind: 'comparison',
          label: '제품 채택',
          value: '6.3배 MAU',
          caption: '월간 활성 사용자 수 · 8월은 월중 집계',
          bars: [
            { label: '3월 기준', amount: 24, display: '24 MAU' },
            { label: '8월 현재', amount: 151, display: '151 MAU' },
          ],
        },
        {
          kind: 'comparison',
          label: '성능·품질',
          value: '81% 단축',
          caption: '평균 응답 시간 · Web Trace completion 99.7%',
          bars: [
            { label: '3월 평균', amount: 21.5, display: '21.5초' },
            { label: '8월 평균', amount: 4.04, display: '4.0초' },
          ],
          tokens: ['P90 38.6초 → 6.8초', '검토 Trace 2,173건'],
        },
      ],
    },
    tablerag: {
      eyebrow: '성과 한눈에 보기',
      title: '검색 품질, 답변 품질, 응답 속도',
      items: [
        {
          kind: 'comparison',
          label: 'Retrieval correctness',
          value: '84.21%',
          caption: '검색 결과에 질문에 답할 수 있는 근거가 포함되는 비율',
          bars: [
            { label: 'Baseline', amount: 76.85, display: '76.85%' },
            { label: 'Optimized', amount: 84.21, display: '84.21%' },
          ],
        },
        {
          kind: 'comparison',
          label: 'Answer correctness',
          value: '68.36%',
          caption: '과제 특화 평가 세트에서 최종 답변이 질문에 정확히 답하는 비율',
          bars: [
            { label: 'Baseline', amount: 59.85, display: '59.85%' },
            { label: 'Optimized', amount: 68.36, display: '68.36%' },
          ],
          tokens: ['+8.51 percentage points', 'Reranking +2.0 pp'],
        },
        {
          kind: 'comparison',
          label: 'Total response time',
          value: '58% 단축',
          caption: '주요 비교 · 질문부터 최종 답변까지의 전체 응답 시간',
          bars: [
            { label: 'Baseline', amount: 43.51, display: '43.5초' },
            { label: 'Optimized', amount: 18.22, display: '18.2초' },
          ],
          tokens: ['Hybrid retrieval', 'Text-to-SQL', 'Reranking'],
        },
      ],
    },
    nmixx: {
      eyebrow: '성과 한눈에 보기',
      title: '모델 개선 폭과 벤치마크 규모',
      items: [
        {
          kind: 'comparison',
          label: 'Spearman 향상 폭',
          value: '+0.22',
          caption: '도메인 적응 전 체크포인트 대비 개선',
          bars: [
            { label: 'KorFinSTS', amount: 0.22, display: '+0.22' },
            { label: 'FinSTS', amount: 0.1, display: '+0.10' },
          ],
        },
        {
          kind: 'metric',
          label: '학습 데이터',
          value: '18.8K',
          caption: '고신뢰 금융 도메인 학습 트리플릿',
          tokens: ['도메인 적응', '한국어 금융'],
        },
        {
          kind: 'metric',
          label: '연구 검증',
          value: '1,921쌍',
          caption: '새롭게 구축한 한국어 금융 STS 벤치마크',
          tokens: ['7개 베이스라인', 'CIKM 구두 발표'],
        },
      ],
    },
    'twice-korfinmteb': {
      eyebrow: '성과 한눈에 보기',
      title: '더 넓고, 실제 차이를 드러내는 평가 표준',
      items: [
        {
          kind: 'metric',
          label: '벤치마크 규모',
          value: '26개 데이터셋',
          caption: '한국어 금융 원문 기반 평가 데이터 공개',
          tokens: ['오픈소스', '재현 가능'],
        },
        {
          kind: 'metric',
          label: '과제 범위',
          value: '7개 과제 유형',
          caption: '검색, 재순위화, 유사도, 요약 등을 폭넓게 평가',
          tokens: ['검색', 'STS', '재순위화'],
        },
        {
          kind: 'comparison',
          label: '숨겨졌던 성능 격차',
          value: '5%에서 8%',
          caption: '번역 평가 대비 한국어 원문 과제에서 확인된 하락 폭',
          bars: [
            { label: '하한', amount: 5, display: '5%' },
            { label: '상한', amount: 8, display: '8%' },
          ],
        },
      ],
    },
    'dialogue-summarization': {
      eyebrow: '성과 한눈에 보기',
      title: '대회 성과와 오류 중심의 개선 과정',
      items: [
        {
          kind: 'metric',
          label: '대회 순위',
          value: '5위',
          caption: '전국 단위 대회 본선 진출',
          tokens: ['전국 대회', '본선 진출'],
        },
        {
          kind: 'flow',
          label: '평가 체계',
          value: '오류 중심',
          caption: '관찰된 실패 패턴에서 다음 실험을 설계',
          steps: ['베이스라인', '오류 분석', '집중 개선'],
        },
        {
          kind: 'metric',
          label: '모델 효율',
          value: '예산 준수',
          caption: '학습 및 추론 제약 안에서 성능을 최적화',
          tokens: ['양자화', '집중 튜닝'],
        },
      ],
    },
    'helloworld-aicc': {
      eyebrow: '성과 한눈에 보기',
      title: '해커톤 검증에서 출시 지향 서비스까지',
      items: [
        {
          kind: 'metric',
          label: '외부 검증',
          value: '2회 선정',
          caption: '6개월 안에 수상과 브라이언임팩트재단 후원 확보',
          tokens: ['SeSAC 수상', '브라이언임팩트재단'],
        },
        {
          kind: 'flow',
          label: '프로덕션 구현',
          value: '엔드투엔드',
          caption: '프로토타입을 배포 가능한 상담 흐름으로 고도화',
          steps: ['해커톤 MVP', '스트리밍 RAG', '자동 배포'],
        },
        {
          kind: 'flow',
          label: '상담 연속성',
          value: 'AI에서 사람으로',
          caption: '상담 전환 후에도 핵심 세션 맥락을 유지',
          steps: ['AI 상담', '구조화 요약', '상담사 인계'],
        },
      ],
    },
    'my-bestie': {
      eyebrow: '성과 한눈에 보기',
      title: '짧은 기간 안에 완성한 실제 사용자 경험',
      items: [
        {
          kind: 'metric',
          label: '개발 속도',
          value: '4주',
          caption: '범위 설정부터 공개 배포까지 완료',
          tokens: ['공개 배포', '최종 프로젝트'],
        },
        {
          kind: 'metric',
          label: '팀 실행',
          value: '7명',
          caption: '기억과 대화 연속성에 집중한 NLP 팀',
          tokens: ['NLP', '제품 집중'],
        },
        {
          kind: 'flow',
          label: '제품 검증',
          value: '실사용 검증',
          caption: '노트북 데모를 넘어 전체 경험을 사용자에게 공개',
          steps: ['프로토타입', '공개 배포', '방문객 전시'],
        },
      ],
    },
    sejongmate: {
      eyebrow: '성과 한눈에 보기',
      title: '사용자 피드백으로 완성한 수상 프로젝트',
      items: [
        {
          kind: 'metric',
          label: '외부 검증',
          value: '2위',
          caption: '교내 창의설계경진대회 우수상',
          tokens: ['제15회 대회', '우수상'],
        },
        {
          kind: 'flow',
          label: '엔드투엔드 구현',
          value: '베타 출시',
          caption: '언어 데이터, 모델, API를 하나의 제품 계획으로 연결',
          steps: ['말뭉치', 'NLP 모델', 'API 베타'],
        },
        {
          kind: 'flow',
          label: '사용자 피드백',
          value: '근거 중심',
          caption: '재학생과 졸업생의 직접 의견으로 다음 우선순위를 결정',
          steps: ['사용자 의견', '우선순위 검토', '제품 개선'],
        },
      ],
    },
    'shinhan-graphrag': {
      eyebrow: '성과 한눈에 보기',
      title: '금융 법률 QA를 위한 관계 기반 근거 검색',
      items: [
        {
          kind: 'metric',
          label: '제품 통합',
          value: '통합 구현',
          caption: '임직원용 금융 법률 AI 어시스턴트의 확장 기능으로 구현',
          tokens: ['임직원 제품', '금융 법률'],
        },
        {
          kind: 'flow',
          label: '검색 역량',
          value: '멀티홉',
          caption: '평면 유사도를 넘어 법률 관계를 따라 맥락을 구성',
          steps: ['조문', '인용 관계', '관련 규정'],
        },
        {
          kind: 'flow',
          label: '답변 추적성',
          value: '검증 가능',
          caption: '답변을 구성한 법률 근거 경로를 함께 유지',
          steps: ['질문', '근거 경로', '근거 기반 답변'],
        },
      ],
    },
  },
};
