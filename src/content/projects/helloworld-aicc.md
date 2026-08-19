---
title: 'Hello World: AI Contact Center for Migrant Workers'
summary: Built the retrieval chatbot for an award-winning support platform, grounding multilingual answers in real consultation cases and handing concise session context to human counselors.
category: Conversational AI
period: 'Aug 2024 to Apr 2025'
role: 'Retrieval chatbot · Data, storage, chat agent'
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

Hello World was built as a single place to handle all of it: an AI contact center for the questions,
and support that goes as far as helping someone write a cover letter for a job application.

## Approach

- **Retrieval over real consultation cases, not raw statutes.** Legal text states the rule but often
  does not explain what a person should do next. I collected and cleaned consultation cases
  covering migrant worker issues, loaded them into MongoDB, and built the chat agent with LangChain
  so each query is answered from the most similar case a real counselor had already handled. That
  single decision is what made answers trustworthy rather than merely fluent.
- **Multilingual sources.** The knowledge base draws on translated legal material, analyzed
  statutes and regulations, and case histories, so a question can arrive in the user's language.
- **Summaries for the humans.** Chat alone does not close every case. Session logs are summarized
  and handed to the human counselor, so when a conversation escalates they already know the context
  instead of starting the interview over.
- **Serverless backend.** Azure Functions serves streaming chat, summarization, and cover letter
  generation while keeping idle costs low. GitHub Actions deploys on merge.

### Endpoints

| Endpoint | Purpose |
| --- | --- |
| `POST /api/chat/ask` | Streaming chat response |
| `POST /api/summary` | Summarize a conversation for the counselor |
| `POST /api/cv_generation` | Draft a cover letter from the conversation |
| `GET /api/chat/rooms` | List conversation rooms |

## Result

- **Encouragement Award, SeSAC Hackathon 2024** (Seoul Business Agency, Aug 2024)
- **Selected for sponsorship by Side Impact / Brian Impact Foundation** (Spark Track, Oct 2024 to
  Feb 2025), on the strength of its public-interest value and how complete the implementation was
- Went past the demo stage: performance work continued after the award, with a Play Store release
  planned
