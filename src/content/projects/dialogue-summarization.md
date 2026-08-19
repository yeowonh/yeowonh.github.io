---
title: Multi-Party Dialogue Summarization
summary: Built a topic-aware summarization pipeline for multi-party dialogue, finishing 5th on the leaderboard and advancing to the national challenge finals.
category: NLP Research
period: 'Aug 2024'
role: 'Data analysis & modeling'
stack: ['Python', 'PyTorch', 'LLM', 'Quantization']
cover: '../../assets/projects/dialogue-summarization.png'
coverAlt: 'Example of topic-based dialogue keyword extraction and summarization'
tint: tint-2
mark: DS
featured: false
order: 30
---

## Problem

Summarizing a two-person exchange is a solved-enough problem. A group conversation is not: several
topics run in parallel, get dropped, and resume ten turns later. A single summary of the whole thing
loses exactly what someone reading it needs.

The task was to find those topics and summarize each one.

## Approach

- **Used EDA and error analysis to set the direction.** Baseline failures determined the
  preprocessing strategy and prompt design, avoiding blind leaderboard tuning.
- **Separated topic identification from summarization** so the pipeline could preserve distinct
  threads instead of collapsing the entire conversation into one generic summary.
- **Quantized and tuned the model** to stay within the available training and inference budget.

## Result

- **Placed 5th and advanced to the finals** of the National Institute of Korean Language's Everyday
  Dialogue Summarization Challenge.
