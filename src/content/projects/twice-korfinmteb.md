---
title: 'TWICE: A Korean Financial Embedding Benchmark'
summary: Co-developed and open-sourced KorFinMTEB, a 26-dataset benchmark across seven tasks that revealed 5% to 8% performance gaps hidden by translated financial evaluations.
category: NLP Research
period: 'Dec 2024 to Mar 2025'
role: 'Benchmark construction & evaluation'
organization: 'Shinhan Investment Corp.'
stack: ['PyTorch', 'Embeddings', 'Evaluation', 'Finance NLP']
cover: '../../assets/projects/twice.png'
coverAlt: 'KorFinMTEB benchmark overview across seven task categories and 26 datasets'
tint: tint-2
mark: TW
featured: true
order: 45
links:
  - label: Paper
    href: 'https://arxiv.org/abs/2502.07131'
---

## Problem

Embedding models are useful only when they reflect the target domain, but benchmarks such as FinMTEB are
built for high-resource languages. For Korean, the common shortcut is to translate an English benchmark
and treat it as sufficient.

That shortcut hides the interesting failures. A translated benchmark carries English phrasing and
English financial convention with it, so a model can score well on it while still missing the
idiom, cultural framing, and domain vocabulary that Korean financial text actually uses.

## Approach

- **Built KorFinMTEB from Korean sources**, designed to reflect the linguistic and cultural
  specifics of the domain rather than a translation of an existing benchmark.
- **Evaluated the same models on both** a translated FinMTEB and KorFinMTEB, making the gap
  measurable rather than theoretical.

## Result

- **Benchmark scale | Released 26 datasets across seven task categories,** covering classification,
  clustering, retrieval, summarization, pair classification, reranking, and semantic similarity.
- **Evaluation insight | Revealed 5% to 8% performance drops on native Korean tasks** requiring
  deeper semantic understanding, gaps that translated benchmarks had obscured.
- **Research validation | Accepted at the ICLR 2025 Workshop on Advances in Financial AI.**
- **Reproducibility | Open-sourced the full benchmark** so low-resource domain evaluation can be
  reproduced and extended instead of relying on translated test sets.

## Related work

A companion write-up, *Exploring Hard Negative Mining with NV-Retriever in Korean Financial Text*,
covers the training side: why random negatives teach a retriever almost nothing, and what changes
when the negatives are genuinely hard.
