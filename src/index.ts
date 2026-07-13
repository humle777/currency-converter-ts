// Импортируем наши функции из папки engine
import { convertCurrency, convertBackToUsd } from "./engine/converter.js";

// Наш тестовый запуск (как и раньше)
const myMoney = 100;
const usdToEurRate = 0.925;

const eurResult = convertCurrency(myMoney, usdToEurRate);
console.log(
  `[Успех]: ${myMoney} USD = ${eurResult} EUR (Курс: ${usdToEurRate})`,
);

const usdResult = convertBackToUsd(Number(eurResult), usdToEurRate);
console.log(`[Проверка обратного хода]: Получили обратно ${usdResult} USD`);
