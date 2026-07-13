// Слово export делает эту функцию видимой для других файлов проекта
export function convertCurrency(amount: number, rate: number): string {
  const rawResult = amount * rate;
  return rawResult.toFixed(2);
}

export function convertBackToUsd(
  amountEur: number,
  reverseRate: number,
): string {
  const rawUsd = amountEur / reverseRate;
  return rawUsd.toFixed(2);
}
