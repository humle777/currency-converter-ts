import { convertCurrency } from "./engine/converter.js";
import { getExchangeRate } from "./api/api.js";

async function startApp() {
  console.log("Стучимся в сеть за актуальными курсами валют...\n");

  const amount = 100;
  const sourceCurrency = "USD";

  // === БЛОК 1: USD -> EUR ===
  const targetCurrencyEur = "EUR";
  const rateToEur = await getExchangeRate(sourceCurrency, targetCurrencyEur);

  // Проверяем: если курс успешно получен (не null), то считаем!
  if (rateToEur !== null) {
    const resultEur = convertCurrency(amount, rateToEur);
    console.log(
      `[Успех]: ${amount} ${sourceCurrency} = ${resultEur} ${targetCurrencyEur} (Курс: ${rateToEur})`,
    );
  }

  console.log("-----------------------------------------");

  // === БЛОК 2: USD -> UAH ===
  const targetCurrencyUah = "UAH";
  const rateToUah = await getExchangeRate(sourceCurrency, targetCurrencyUah);

  // Если курс null, этот блок просто выведет предупреждение, но приложение продолжит жить!
  if (rateToUah !== null) {
    const resultUah = convertCurrency(amount, rateToUah);
    console.log(
      `[Успех]: ${amount} ${sourceCurrency} = ${resultUah} ${targetCurrencyUah} (Курс: ${rateToUah})`,
    );
  } else {
    console.log(
      `[Инфо]: Пропускаем конвертацию в ${targetCurrencyUah}, так как курс не был получен.`,
    );
  }
}

startApp();
