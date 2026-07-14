// Этот файл отвечает ТОЛЬКО за получение курса из интернета
export async function getExchangeRate(
  from: string,
  to: string,
): Promise<number> {
  const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`;
  const response = await fetch(url);
  const data = (await response.json()) as any;
  const rate = data.rates[to];
  return rate;
}
