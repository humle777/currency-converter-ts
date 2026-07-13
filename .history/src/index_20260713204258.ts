import { convertCurrency } from "./engine/converter.js";
// Импортируем нашу новую функцию для работы с сетью
import { getExchangeRate } from "./api/api.js";

// Поскольку мы используем await на верхнем уровне, TypeScript разрешает это делать!
async function startApp() {
  console.log("Получаем актуальные курсы валют из интернета...");

  const sourceCurrency = "USD";
  const targetCurrency = "EUR";
  const amount = 100;

  // Стучимся в сеть за реальным курсом!
  const liveRate = await getExchangeRate(sourceCurrency, targetCurrency);

  // Передаем живой курс в наш движок конвертации
  const result = convertCurrency(amount, liveRate);

  console.log(
    `[Успех]: ${amount} ${sourceCurrency} = ${result} ${targetCurrency} (Живой курс: ${liveRate})`,
  );
}

// Запускаем наше приложение
startApp();
