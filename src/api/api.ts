// Мы создаем асинхронную функцию (async), потому что поход в интернет требует времени
export async function getExchangeRate(
  from: string,
  to: string,
): Promise<number> {
  // Ссылка на бесплатный и живой сервис курсов валют (Frankfurter API)
  const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`;

  // await fetch(url) — отправляем «официанта» в интернет и ЖДЕМ ответа от сервера
  const response = await fetch(url);

  // Ждем, пока ответ от сервера превратится в понятный TypeScript-объект (JSON)
  const data = (await response.json()) as any;

  // Из полученного сложного объекта забираем точную цифру курса
  // Например, из структуры data.rates.EUR
  const rate = data.rates[to];

  // Возвращаем «живой» курс валюты наружу
  return rate;
}
