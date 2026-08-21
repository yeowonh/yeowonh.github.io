---
title: 'TWICE: 한국어 금융 임베딩 벤치마크'
summary: 번역된 영어 벤치마크가 놓치는 도메인 실패를 드러내기 위해 KorFinMTEB를 공동 구축하고, ICLR 2025 금융 AI 워크숍에 연구 결과를 발표했습니다.
category: NLP 연구
period: '2024년 12월 ~ 2025년 3월'
role: '벤치마크 구축 및 평가'
stack: ['PyTorch', 'Embeddings', 'Evaluation', 'Finance NLP']
cover: '../../assets/projects/twice.png'
coverAlt: '7개 과제 유형과 26개 데이터셋으로 구성된 KorFinMTEB 벤치마크 개요'
tint: tint-2
mark: TW
featured: true
order: 45
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

- 번역 벤치마크에서 안정적으로 보였던 모델이 **KorFinMTEB에서는 작지만 일관된 성능 격차**를
  보였습니다. 특히 더 깊은 의미 이해가 필요한 과제에 차이가 집중되었습니다.
- **ICLR 2025 Workshop on Advances in Financial AI에 채택되었습니다.**
- 저자원 도메인의 평가는 다른 언어의 테스트를 옮기는 데서 끝나지 않고, 해당 언어 안에서 직접
  구축되어야 한다는 근거를 제시했습니다.

## 관련 연구

연계 아티클 *Exploring Hard Negative Mining with NV-Retriever in Korean Financial Text*에서는
무작위 네거티브의 한계와 실제로 어려운 네거티브를 사용할 때 학습이 어떻게 달라지는지 다룹니다.
