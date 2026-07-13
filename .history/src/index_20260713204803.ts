// Забираем логику конвертации из папки engine
import { convertCurrency } from "./engine/converter.js";
// Забираем логику похода в сеть из папки api
import { getExchangeRate } from "./api/api.js";

// Создаем главную асинхронную функцию приложения
async function startApp() {
  console.log("Стучимся в сеть за актуальными курсами валют...");

  const sourceCurrency = "USD";
  const targetCurrency = "EUR";
  const amount = 100;

  // Ждем (await), пока getExchangeRate сходит на Frankfurter API и вернет нам число
  const liveRate = await getExchangeRate(sourceCurrency, targetCurrency);

  // Передаем живую цифру курса в наш движок расчетов
  const result = convertCurrency(amount, liveRate);

  // Гордо выводим результат работы нашей живой сети!
  console.log(
    `[Успех]: ${amount} ${sourceCurrency} = ${result} ${targetCurrency} (Живой курс из сети: ${liveRate})`,
  );
}

// Запускаем наше приложение
startApp();
