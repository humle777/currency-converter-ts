function convertCurrency(amount: number, rate: number): string {
  const rawResult = amount * rate;

  // toFixed(2) округляет число до 2 знаков после запятой и превращает его в строку.
  // Это как раз спасет нас от странных цифр вроде 92.500000004!
  const formattedResult = rawResult.toFixed(2);

  return formattedResult;
}

const myMoney = 1006;
const usdToEurRate = 0.925;

const result = convertCurrency(myMoney, usdToEurRate);

console.log(`Successfully converted: ${result}`);
