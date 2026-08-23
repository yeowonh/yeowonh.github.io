---
title: GraphRAG Agent for Financial Law
summary: Extended an employee-facing financial law QA agent from flat retrieval to GraphRAG so answers could follow citations and delegation across related provisions.
category: Enterprise AI
period: 'Aug 2024 to Nov 2024'
role: 'AI Engineer Intern · Shinhan Investment Corp.'
organization: 'Shinhan Investment Corp.'
stack: ['Python', 'GraphRAG', 'Neo4j', 'LLM', 'Vertical AI']
cover: '../../assets/projects/shinhan-graphrag.png'
coverAlt: 'GraphRAG indexing, retrieval, and generation pipeline for legal QA'
tint: tint-2
mark: KG
featured: true
order: 45
links:
  - label: Related repo (legal_graph)
    href: 'https://github.com/yeowonh/legal_graph'
---

## Problem

Financial regulation is layered on purpose. A clause in the Capital Markets Act cites other clauses
and delegates the detail to enforcement decrees and rules, so the text that answers an employee's
question is often three hops away from the text they searched for.

Flat retrieval handles that badly. It tends to return the passage that looks most like the query,
which is often the provision that *states* the rule rather than the ones that qualify it.

## Approach

- **Modeled the corpus as a graph, not a pile of chunks.** Provisions became nodes; citation,
  delegation, and amendment became edges. Retrieval could then traverse the relationship instead of
  hoping the related text was lexically similar.
- **Parsed structure from raw legal text**, including article, paragraph, and item hierarchy plus
  the reference expressions that connect them.
- **Used graph traversal to complement semantic retrieval**, allowing the agent to gather legally
  related context even when the relevant provisions were not lexically similar.

## Result

- **Productionization | Shipped as an extension of an employee-facing vertical AI assistant,** not
  as a standalone research prototype.
- **Retrieval capability | Expanded legal QA from single-hop similarity search to relationship-aware
  multi-hop context,** covering citations and delegation across provisions, decrees, and rules.
- **Answer traceability | Preserved the legal relationship path used to assemble context,** making
  supporting provisions easier to inspect than in flat retrieval.
