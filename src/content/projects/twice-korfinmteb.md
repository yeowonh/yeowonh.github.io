---
title: 'TWICE: A Korean Financial Embedding Benchmark'
summary: Co-built KorFinMTEB to reveal the domain failures that translated English benchmarks miss, with the work accepted at the ICLR 2025 Workshop on Advances in Financial AI.
category: NLP Research
period: 'Dec 2024 to Mar 2025'
role: 'Benchmark construction & evaluation'
stack: ['PyTorch', 'Embeddings', 'Evaluation', 'Finance NLP']
cover: '../../assets/projects/twice.png'
coverAlt: 'KorFinMTEB benchmark overview across seven task categories and 26 datasets'
tint: tint-2
mark: TW
featured: true
order: 45
---

## Problem

Embedding models only earn their keep when they fit the domain, but benchmarks such as FinMTEB are
built for high-resource languages. For Korean, the usual shortcut is to
translate an English benchmark and call it done.

That shortcut hides the interesting failures. A translated benchmark carries English phrasing and
English financial convention with it, so a model can score well on it while still missing the
idiom, cultural framing, and domain vocabulary that Korean financial text actually uses.

## Approach

- **Built KorFinMTEB from Korean sources**, designed to reflect the linguistic and cultural
  specifics of the domain rather than a translation of someone else's test set.
- **Evaluated the same models on both** a translated FinMTEB and KorFinMTEB, which is what makes
  the gap visible instead of theoretical.

## Result

- Models that looked robust on the translated benchmark showed **subtle but consistent gaps on
  KorFinMTEB**, concentrated in the tasks that need deeper semantic understanding. Those are exactly
  the cases where a translated benchmark provides the least insight.
- **Accepted at the ICLR 2025 Workshop on Advances in Financial AI** (Mar 2025).
- The takeaway we argued for: low-resource domains need evaluation built in the language, not
  ported into it.

## Related work

A companion write-up, *Exploring Hard Negative Mining with NV-Retriever in Korean Financial Text*,
covers the training side: why random negatives teach a retriever almost nothing, and what changes
when the negatives are genuinely hard.
