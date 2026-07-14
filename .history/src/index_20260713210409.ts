// Импортируем модули из правильных мест относительно корня папки src
import { convertCurrency } from "./engine/converter.js";
import { getExchangeRate } from "./api/api.js";

async function startApp() {
  console.log("Стучимся в сеть за актуальными курсами валют...");

  const amount = 100;
  const sourceCurrency = "USD";

  // Конвертация USD -> EUR
  const targetCurrencyEur = "EUR";
  const rateToEur = await getExchangeRate(sourceCurrency, targetCurrencyEur);
  const resultEur = convertCurrency(amount, rateToEur);
  console.log(
    `[Успех]: ${amount} ${sourceCurrency} = ${resultEur} ${targetCurrencyEur} (Курс: ${rateToEur})`,
  );

  // Конвертация USD -> UAH
  const targetCurrencyUah = "UAH";
  const rateToUah = await getExchangeRate(sourceCurrency, targetCurrencyUah);
  const resultUah = convertCurrency(amount, rateToUah);
  console.log(
    `[Успех]: ${amount} ${sourceCurrency} = ${resultUah} ${targetCurrencyUah} (Курс: ${rateToUah})`,
  );
}

// Запускаем наше приложение
startApp();
