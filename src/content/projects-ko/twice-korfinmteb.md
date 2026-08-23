---
title: 'TWICE: 한국어 금융 임베딩 벤치마크'
summary: 7개 과제와 26개 데이터셋으로 구성된 KorFinMTEB를 공동 구축·공개해 번역 기반 금융 평가가 가리던 5%에서 8%의 성능 격차를 확인했습니다.
category: NLP Research
period: '2024년 12월 ~ 2025년 3월'
role: '벤치마크 구축 및 평가'
organization: 'Shinhan Investment Corp.'
stack: ['PyTorch', 'Embeddings', 'Evaluation', 'Finance NLP']
cover: '../../assets/projects/twice.png'
coverAlt: '7개 과제 유형과 26개 데이터셋으로 구성된 KorFinMTEB 벤치마크 개요'
tint: tint-2
mark: TW
featured: true
order: 45
links:
  - label: 논문
    href: 'https://arxiv.org/abs/2502.07131'
---

## 문제

임베딩 모델은 도메인에 맞을 때 가치를 만들지만, FinMTEB 같은 벤치마크는 고자원 언어를 중심으로
구축되어 있습니다. 한국어에서는 영어 벤치마크를 번역해 사용하는 것이 일반적인 지름길입니다.

하지만 번역된 벤치마크에는 영어식 문장과 금융 관습이 남습니다. 모델이 높은 점수를 얻더라도
한국어 금융 텍스트의 표현, 문화적 맥락, 도메인 용어를 놓치는 중요한 실패가 가려질 수 있습니다.

## 접근 방식

- **번역본이 아니라 한국어 원천 자료로 KorFinMTEB를 구축했습니다.** 언어와 문화, 금융 도메인의
  특성을 실제로 반영하도록 설계했습니다.
- **동일한 모델을 번역 FinMTEB와 KorFinMTEB에서 함께 평가했습니다.** 두 결과를 직접 비교해
  이론적인 주장이 아니라 측정 가능한 차이로 제시했습니다.

## 성과

- **벤치마크 규모 | 7개 과제 유형, 26개 데이터셋 공개.** 분류, 클러스터링, 검색, 요약, 문장쌍
  분류, 재순위화, 의미 유사도를 하나의 한국어 금융 평가 체계로 구성했습니다.
- **평가 인사이트 | 깊은 의미 이해가 필요한 한국어 원천 과제에서 5%에서 8%의 성능 하락 확인.**
  번역 벤치마크가 실제 도메인 실패를 가릴 수 있음을 정량적으로 보여줬습니다.
- **연구 검증 | ICLR 2025 Workshop on Advances in Financial AI 채택.**
- **재현성 | 전체 벤치마크 오픈소스 공개.** 저자원 도메인 평가를 번역 테스트에 의존하지 않고
  재현하고 확장할 수 있는 기반을 제공했습니다.

## 관련 연구

연계 아티클 *Exploring Hard Negative Mining with NV-Retriever in Korean Financial Text*에서는
무작위 네거티브의 한계와 실제로 어려운 네거티브를 사용할 때 학습이 어떻게 달라지는지 다룹니다.
