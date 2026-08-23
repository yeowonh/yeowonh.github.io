---
title: Enterprise Data Intelligence Platform
summary: Launched an AI-assisted data intelligence platform across Web, MCP, and Slack, reaching 151 MAU and 60.9K requests in the latest observed period while cutting average response time by 81%.
category: Enterprise AI
period: 'Jan 2026 to Present'
role: 'Analytics Engineer · Product, AI agent, retrieval, evaluation'
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

- **Usage scale | Recorded 60.9K requests across three product surfaces.** From Jun 24 to Aug 22,
  the product supported 178 active users and 1,621 sessions across Web, MCP, and Slack.
- **Adoption | Reached 151 MAU in August MTD, up 6.3× from March.** The product moved beyond a
  discovery tool into a repeatable self-service path for understanding and using enterprise data.
- **Performance | Cut average response time from 21.5s to 4.0s, an 81% reduction.** P90 latency
  also fell from 38.6s to 6.8s as usage expanded.
- **Quality operations | Sustained 99.7% Web Trace completion in the latest 30-day window.**
  Reviewed 2,173 traces through daily telemetry, scheduled audits, and session-level evaluation.
- **Governance | Made trust controls part of the user experience.** Permission-aware retrieval,
  guarded query execution, visible evidence, and lineage became product contracts rather than
  hidden implementation details.
- **Knowledge operations | Converted recurring answer gaps into a reviewed shared asset.** Created
  a closed loop in which feedback becomes reviewable knowledge candidates that improve both human
  search and agent workflows.
