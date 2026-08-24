---
title: Enterprise Data Intelligence Platform
summary: Launched a self-service AI data product across Web, MCP, and Slack, helping teams move from a data question to an evidence-backed answer without waiting on a specialist.
category: Enterprise AI
period: 'Jan 2026 to Present'
role: 'Analytics Engineer · Product, RAG, evaluation'
organization: 'Kakao Mobility'
stack: ['Python', 'LangGraph', 'FastAPI', 'Next.js', 'BigQuery', 'Airflow', 'MCP', 'Langfuse']
cover: '../../assets/projects/enterprise-data-intelligence.png'
coverAlt: 'Privacy-safe enterprise data assistant interface with query, catalog, lineage, and quality views'
tint: tint-1
mark: DI
featured: true
order: 70
---

## Problem

Enterprise data is rarely difficult to use for a single reason. Tables, business definitions,
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
- **Made product improvement evidence-led.** User feedback and recurring answer gaps became
  reviewable knowledge candidates, giving domain experts a clear way to improve the system without
  editing prompts or code.
- **Met users in their existing workflow.** Delivered the experience through a web product and an
  MCP interface for AI development tools, with multi-turn conversation and practical answer
  refinement features for non-engineers.

## Result

- **Self-service adoption | Reached 151 MAU in August MTD, up from 24 MAU in March.** From Jun 24
  to Aug 22, the product supported 178 active users, 1,621 sessions, and 60.9K requests across
  Web, MCP, and Slack.
- **Speed | Cut average response time from 21.5s to 4.0s, an 81% reduction.** P90 latency also
  fell from 38.6s to 6.8s as usage expanded.
- **Operational quality | Sustained 99.7% Web Trace completion in the latest 30-day window.**
  The team reviewed 2,173 traces through daily telemetry, scheduled audits, and session-level evaluation.
- **Trust by design | Made safeguards visible to users.** Permission-aware RAG, guarded query
  execution, evidence, and lineage are part of the product experience rather than hidden implementation details.
