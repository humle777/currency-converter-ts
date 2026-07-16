# 💱 Currency Converter CLI (TypeScript)

Интерактивный консольный конвертер валют, написанный на **TypeScript** с использованием современной среды **Node.js** и сборщика **tsx**.

Проект разработан в учебных целях для демонстрации навыков автоматизации тестирования (QA Automation) и уверенной работы со строгой типизацией, асинхронными сетевыми запросами и обработкой ошибок.

---

## ✨ Ключевые особенности

- **Интерактивный интерфейс:** Удобные консольные меню и валидация ввода пользователя с помощью библиотеки `inquirer`.
- **Живые курсы валют:** Интеграция в реальном времени с бесплатным API `Frankfurter API` для получения актуальных мировых котировок.
- **Устойчивость к сбоям (Resiliency):** Внедрены строгие защитные блоки (Guardrails) и конструкция `try-catch` на сетевом уровне и уровне запуска приложения, предотвращающие аварийное падение программы при отсутствии сети.
- **Строгая типизация (TypeScript):** Полное отсутствие небезопасного типа `any`, использование четких интерфейсов (`FrankfurterResponse`) для сетевых контрактов.

---

## 🛠️ Стек технологий

- **Language:** TypeScript (strict mode)
- **Runtime:** Node.js (ES Modules, NodeNext resolution)
- **API Integration:** Fetch API (Frankfurter.dev)
- **CLI Tooling:** Inquirer.js, tsx

---

## 🚀 Как запустить проект локально

### 1. Клонируйте репозиторий

```bash
git clone [https://github.com/humle777/currency-converter-ts.git](https://github.com/humle777/currency-converter-ts.git)
cd currency-converter-ts
```

git clone [https://github.com/humle777/currency-converter-ts.git](https://github.com/humle777/currency-converter-ts.git)
cd currency-converter-ts

npm install

npm run convert
