---
title: 'NMIXX: Korean Finance Embeddings'
summary: Co-developed a Korean finance embedding model that improved Spearman correlation by +0.22 on KorFinSTS, supported by 18.8K training triplets and a new 1,921-pair benchmark.
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
links:
  - label: Paper
    href: 'https://arxiv.org/abs/2507.09601'
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

- **Model quality | Improved Spearman correlation by +0.22 on KorFinSTS and +0.10 on English
  FinSTS** over the pre-adaptation checkpoint.
- **Dataset scale | Built with 18.8K high-confidence training triplets and a 1,921-pair Korean
  financial STS benchmark** spanning news, disclosures, research reports, and regulations.
- **Research validation | Outperformed seven open-license baselines and earned an oral presentation**
  at the CIKM 2025 Workshop on Advances in Financial AI.
- **Reproducibility | Released the models and benchmark publicly,** while documenting the explicit
  trade-off between financial specialization and general-purpose STS performance.

## Related work

This follows [TWICE](/projects/twice-korfinmteb), the benchmark work that showed how much translated
evaluation was hiding, and the hard-negative-mining experiments that shaped how the model was trained.
