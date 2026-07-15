// Импортируем inquirer для интерактивных вопросов в терминале
import inquirer from "inquirer";
import { convertCurrency } from "./engine/converter.js";
import { getExchangeRate } from "./api/api.js";

async function startApp() {
  console.log("=== Добро пожаловать в Currency Converter CLI ===\n");

  // inquirer.prompt принимает массив вопросов и ждет, пока пользователь на них ответит
  const answers = await inquirer.prompt([
    {
      type: "list", // Тип 'list' создаст красивое меню с выбором стрелочками
      name: "source", // Имя коробочки, куда сохранится ответ
      message: "Выберите исходную валюту:",
      choices: ["USD", "EUR", "GBP"], // Варианты на выбор
    },
    {
      type: "list",
      name: "target",
      message: "Выберите целевую валюту:",
      choices: ["EUR", "USD", "GBP", "UAH"], // Добавим UAH для проверки нашей защиты!
    },
    {
      type: "input", // Тип 'input' — это обычное текстовое поле для ввода
      name: "amount",
      message: "Введите сумму для конвертации:",
      // Валидация: проверяем, что пользователь ввел именно число, а не буквы
      validate: (value: string) => {
        const valid = !isNaN(parseFloat(value)) && parseFloat(value) > 0;
        return valid || "Пожалуйста, введите корректное число больше 0";
      },
    },
  ]);

  // Достаем ответы пользователя из получившегося объекта answers
  const sourceCurrency = answers.source;
  const targetCurrency = answers.target;
  const amount = parseFloat(answers.amount); // Переводим строчку из ввода в число

  console.log("\nВычисляем...");

  // Наш защищенный поход в сеть за живым курсом
  const liveRate = await getExchangeRate(sourceCurrency, targetCurrency);

  // Если защита сработала и вернула null, то расчеты не запускаем
  if (liveRate !== null) {
    const result = convertCurrency(amount, liveRate);
    console.log(
      `\n🎉 Успех: ${amount.toFixed(2)} ${sourceCurrency} = ${result} ${targetCurrency} (Курс: ${liveRate})`,
    );
  } else {
    console.log(
      `\n❌ Не удалось выполнить конвертацию из ${sourceCurrency} в ${targetCurrency}.`,
    );
  }
}

// Запускаем наше приложение
startApp();
