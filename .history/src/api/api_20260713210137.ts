// Импортируем наши модули, как и раньше
import { convertCurrency } from "./engine/converter.js";
import { getExchangeRate } from "./api/api.js";

async function startApp() {
  console.log("Стучимся в сеть за актуальными курсами валют...");

  const amount = 100; // Наша базовая сумма в USD
  const sourceCurrency = "USD";

  // === БЛОК 1: Конвертация USD -> EUR ===
  const targetCurrencyEur = "EUR";
  // Запрашиваем курс евро
  const rateToEur = await getExchangeRate(sourceCurrency, targetCurrencyEur);
  // Считаем сумму в евро
  const resultEur = convertCurrency(amount, rateToEur);
  console.log(
    `[Успех]: ${amount} ${sourceCurrency} = ${resultEur} ${targetCurrencyEur} (Курс: ${rateToEur})`,
  );

  // === БЛОК 2: Конвертация USD -> UAH ===
  const targetCurrencyUah = "UAH";
  // Запрашиваем курс гривны из сети!
  const rateToUah = await getExchangeRate(sourceCurrency, targetCurrencyUah);
  // Считаем сумму в гривнах через наш движок
  const resultUah = convertCurrency(amount, rateToUah);
  console.log(
    `[Успех]: ${amount} ${sourceCurrency} = ${resultUah} ${targetCurrencyUah} (Курс: ${rateToUah})`,
  );
}

// Запускаем наше обновленное приложение
startApp();
