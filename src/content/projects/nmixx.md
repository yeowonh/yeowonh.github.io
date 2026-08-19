---
title: 'NMIXX: Korean Finance Embeddings'
summary: Co-developed a domain-adapted Korean finance embedding model and KorFinSTS benchmark, accepted for oral presentation at the CIKM 2025 Workshop on Advances in Financial AI.
category: NLP Research
period: '2025'
role: 'Co-author · Benchmark & model'
stack: ['PyTorch', 'Embeddings', 'STS', 'Finance NLP']
cover: '../../assets/projects/nmixx.png'
coverAlt: 'NMIXX model performance before and after domain-adaptive training'
tint: tint-3
mark: NM
featured: true
order: 50
---

## Problem

A general-purpose embedding model treats "the stock fell sharply" and "the stock dropped slightly" as
near-identical. In finance, that distinction is the whole point. Korean lacked both a model tuned
for the domain and a benchmark rigorous enough to measure it.

## Approach

- **Domain-adapted the embedding model** on Korean financial text rather than translating an English
  one, so the idiom and convention of the domain survive.
- **Built KorFinSTS alongside it**, creating a semantic textual similarity benchmark for Korean
  finance so improvement claims could be tested directly.
- **Released the training data, code, and benchmark**, so the result can be reproduced and argued
  with.

## Result

- **Accepted at the CIKM 2025 Workshop on Advances in Financial AI** (oral presentation).
- The model is deliberately specialized. It is strong on financial STS and weaker on
  general-purpose tasks, an explicit trade-off rather than an accidental limitation.

## Related work

This follows [TWICE](/projects/twice-korfinmteb), the benchmark work that showed how much translated
evaluation was hiding, and the hard-negative-mining experiments that shaped how the model was trained.
