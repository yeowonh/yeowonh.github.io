---
title: 'TableRAG: Grounded QA for Enterprise Tables'
summary: Upgraded a table-focused RAG pipeline for enterprise supply-chain workflows, combining hybrid retrieval and Text-to-SQL to improve search and answer quality.
category: Enterprise AI
period: 'May 2025 to Dec 2025'
role: 'AI Research Engineer · RAG, evaluation, pipeline design'
organization: 'emro'
stack: ['Python', 'RAG', 'Text-to-SQL', 'OpenSearch', 'Reranking']
cover: '../../assets/projects/tablerag-v2.svg'
coverAlt: 'Abstract TableRAG pipeline connecting structured tables with grounded answers'
tint: tint-1
mark: TR
featured: true
order: 60
---

## Problem

Table-heavy enterprise workflows are difficult to answer reliably when natural-language questions
and source data use different languages, schemas, and naming conventions. The existing retrieval
pipeline could miss the right rows or answer without enough evidence after a data transition.

## Approach

- **Made evaluation reproducible.** Built a task-specific evaluation set, defined quantitative
  retrieval and answer metrics, and automated the comparison cycle so each change could be measured.
- **Combined retrieval strategies.** Paired hybrid OpenSearch retrieval with Text-to-SQL and
  DocumentSQL paths so structured queries and unstructured search could complement each other.
- **Improved ranking and language alignment.** Added cross-encoder reranking, prompt refinement,
  and translation/normalization steps for Korean questions over English table schemas.
- **Designed for grounded answers.** Explored an Agentic RAG flow with query decomposition, evidence
  checks, and refusal guidance for questions that did not have sufficient support.

## Result

- **Retrieval quality | Reached 84.21% retrieval correctness, up from 76.85% at baseline.** This
  measures whether the retrieved context contains evidence that can answer the query.
- **Answer quality | Reached 68.36% answer correctness, up from 59.85% at baseline.** This measures
  whether the final response correctly answers the query, rather than merely retrieving relevant context.
- **Latency | Reduced total response time from 43.5s to 18.2s in the primary comparison.** Separate
  reranking of OpenSearch and SQL results also delivered a 2.0 percentage-point answer-quality lift.
- **Evaluation operations | Turned quality work into a repeatable engineering cycle** with a maintained
  dataset, decomposed latency metrics, and automated score comparisons.
- **Trustworthy answers | Established a product direction for evidence checks and refusal behavior**
  instead of rewarding fluent answers without sufficient support.
