# 💱 Interactive Currency Converter CLI

Welcome to the **Currency Converter CLI**! This is a modern, interactive command-line application built from scratch using **TypeScript** and **Node.js**.

This project was designed and developed with a strong focus on clean architecture, modern asynchronous programming, and resilient error-handling patterns—essential pillars for writing robust automated tests.

---

## 🎯 Project Overview & Purpose

As a QA Automation Engineer, writing reliable test scripts requires a deep understanding of how applications communicate with APIs and handle runtime failures. This project serves as a practical playground to master:

1. **Asynchronous JS/TS (`async/await`):** Managing non-blocking execution flows (essential for UI automation with Playwright).
2. **API Integration & Validation:** Fetching dynamic data from a real-world third-party service (`Frankfurter API`) and parsing JSON payloads safely.
3. **Resilience & Guardrails:** Implementing robust `try-catch` blocks and input validations to prevent unexpected application crashes.

---

## ✨ Key Features

- **Interactive Command Line:** Powered by `inquirer` to provide clean, selectable menus for choosing currencies instead of prone-to-error manual text input.
- **Live Exchange Rates:** Fetching up-to-the-minute, real-world conversion rates on the fly.
- **Zero `any` Strict Typings:** Fully strictly typed configuration (`strict: true` in `tsconfig.json`) using custom TS interfaces like `FrankfurterResponse` to define API contracts.
- **Global Error Boundaries:** Protected execution flow ensuring that network disconnections, invalid currencies, or API errors are intercepted gracefully without spilling stack traces to the user.

---

## 🛠️ Tech Stack & Architecture

- **Runtime Environment:** Node.js (configured with ES Modules / `NodeNext` resolution)
- **Language:** TypeScript
- **Dependencies:**
  - `inquirer` — for rich CLI terminal prompts
- **Dev Dependencies:**
  - `tsx` — a lightning-fast TypeScript execute engine for Node.js
  - `@types/node` & `@types/inquirer` — full type definitions for compilation safety

### Project Structure

```text
currency-converter-ts/
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── src/
    ├── index.ts          # Orchestrator / CLI Entry Point
    ├── api/
    │   └── api.ts        # API Service Layer (Network requests & validation)
    └── engine/
        └── converter.ts  # Isolated Mathematical Core Engine
```
