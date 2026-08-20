---
title: Enterprise Data Intelligence Platform
summary: Built an AI-assisted data discovery platform that connects business definitions, lineage, and governed query workflows, then grew monthly active usage roughly 6x in six months.
category: Enterprise AI
period: 'Jan 2026 to Present'
role: 'Analytics Engineer · Product, AI agent, retrieval, evaluation'
stack: ['Python', 'LangGraph', 'FastAPI', 'Next.js', 'BigQuery', 'Airflow', 'MCP', 'Langfuse']
cover: '../../assets/projects/enterprise-data-intelligence.png'
coverAlt: 'Privacy-safe enterprise data assistant interface with query, catalog, lineage, and quality views'
tint: tint-1
mark: DI
featured: true
order: 70
---

## Problem

Enterprise data is rarely hard to access for just one reason. Tables, business definitions,
ownership, and lineage live in different places, while the context needed to use them safely often
remains with a small group of specialists. Keyword search alone cannot bridge those gaps, and an
ungoverned language model can produce a plausible answer without enough evidence.

The goal was to turn scattered data knowledge into a dependable product that helps business users
move from a question to a trustworthy answer without making analysts the bottleneck for every
request.

## Approach

- **Unified discovery around user intent.** Connected catalog search, business terminology, lineage,
  and natural-language query workflows so users can explore context before acting on an answer.
- **Designed the agent for evidence and safe execution.** Built retrieval and decision workflows
  with permission checks, guarded query execution, and clear evidence surfaces rather than relying
  on fluent generation alone.
- **Made quality measurable.** Established a golden evaluation set, scheduled consistency checks,
  product telemetry, and session-level scoring, then reviewed failures on a fixed cadence to guide
  the next iteration.
- **Closed the knowledge feedback loop.** Turned user feedback and recurring answer gaps into
  reviewable knowledge candidates, giving domain experts a structured way to improve the system
  without editing prompts or code.
- **Met users in their existing workflow.** Delivered the experience through a web product and an
  MCP interface for AI development tools, with multi-turn conversation and practical answer
  refinement features for non-engineers.

## Result

- **Monthly active usage grew roughly 6x in six months** as the product expanded from data discovery
  into a reliable path for understanding and using enterprise data.
- **Established a repeatable quality operating system** that turns production failures and user
  feedback into evaluated improvements instead of one-off fixes.
- **Improved trust in AI-assisted analysis** by making permissions, evidence, and lineage part of
  the product experience, not hidden implementation details.
- **Converted fragmented domain knowledge into a reviewed shared asset** that can improve both human
  search and agent workflows over time.
