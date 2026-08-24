---
title: 'Hello World: AI-Powered Contact Center for Migrant Workers'
summary: Built the retrieval chatbot for an award-winning support platform, grounding multilingual answers in real consultation cases and passing concise session context to human counselors.
category: Conversational AI
period: 'Aug 2024 to Apr 2025'
role: 'Retrieval chatbot · Data, storage, chat agent'
organization: 'HelloWorld-AICC team'
stack: ['Python', 'LangChain', 'MongoDB', 'Azure', 'RAG']
cover: '../../assets/projects/helloworld.png'
coverAlt: 'Hello World mobile service screens for migrant workers'
tint: tint-1
mark: HW
featured: true
order: 50
links:
  - label: GitHub
    href: 'https://github.com/HelloWorld-AICC/HelloWorld-AI-Azure'
---

## Problem

Migrant workers in Korea need answers about law, visas, daily life, and finding work. At the same
time, the call centers meant to help them were losing staff. People who called could not get through, and the ones
who did faced a language barrier on top of a legal question.

Hello World was built as a single place to handle both: an AI-powered contact center for questions and
practical support such as drafting a cover letter for a job application.

## Approach

- **Retrieval over real consultation cases, not raw statutes.** Legal text states the rule but often
  does not explain what a person should do next. I collected and cleaned consultation cases
  covering migrant worker issues, loaded them into MongoDB, and built the chat agent with LangChain
  so each query is answered from the most similar case a real counselor had already handled. This
  kept answers grounded in counselor-validated examples rather than fluent but unsupported text.
- **Multilingual sources.** The knowledge base draws on translated legal material, analyzed statutes
  and regulations, and case histories, so users can ask questions in their own language.
- **Counselor handoff.** Some cases still require a human. Session logs are summarized and passed
  to the counselor, so escalated conversations continue with the relevant context intact.
- **Serverless backend.** Azure Functions powers streaming chat, summarization, and cover-letter
  generation while keeping idle costs low. GitHub Actions deploys each merged change.

## Result

- **External validation | Received two forms of recognition within six months.** Won the Encouragement
  Award at SeSAC Hackathon 2024 and was selected for the Brian Impact Foundation's Side Impact 2024
  Spark Track sponsorship for public-interest value and implementation completeness.
- **Production delivery | Evolved from a hackathon prototype into a deployable service.** Shipped
  streaming RAG, authenticated conversation history, counselor summaries, and automated deployment
  on a serverless Azure backend.
- **Service continuity | Preserved context across AI and human support.** Designed structured session
  summaries so escalated cases could continue with the relevant conversation context intact.
