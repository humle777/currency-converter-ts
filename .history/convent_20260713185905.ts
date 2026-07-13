function convertCurrency(amount: number, rate: number): string {
  const rawResult = amount * rate;

  // toFixed(2) округляет число до 2 знаков после запятой и превращает его в строку.
  // Это как раз спасет нас от странных цифр вроде 92.500000004!
  const formattedResult = rawResult.toFixed(2);

  // Возвращаем красивую строчку обратно
  return formattedResult;
}

// А теперь давай проверим, как работает наша машинка!
const myMoney = 100; // Наш бюджет
const usdToEurRate = 0.925; // Актуальный курс

// Вызываем функцию и сохраняем результат в коробочку result
const result = convertCurrency(myMoney, usdToEurRate);

// Выводим в консоль, чтобы порадоваться успеху
console.log(`Успешно конвертировано: ${result}`);
// Выведет: Успешно конвертировано: 92.50
