// Описываем структуру ответа, которую присылает нам Frankfurter API.
// Это защищает нас от использования несуществующих свойств.
interface FrankfurterResponse {
  amount: number;
  base: string;
  date: string;
  rates: {
    [currencyCode: string]: number; // Динамические ключи (например, "EUR": 0.92)
  };
}

export async function getExchangeRate(
  from: string,
  to: string,
): Promise<number | null> {
  // try — это блок "попробуй сделать это". Если внутри него что-то сломается, программа не упадет!
  try {
    const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`;
    const response = await fetch(url);

    // Если сервер ответил ошибкой (например, валюта не найдена, код 400 или 404)
    if (!response.ok) {
      console.error(
        `[Ошибка API]: Не удалось получить курс для ${to} (Статус: ${response.status})`,
      );
      return null; // Возвращаем пустоту вместо падения
    }

    const data = (await response.json()) as FrankfurterResponse;

    // Проверяем, есть ли вообще нужная валюта в ответе сервера
    if (!data.rates || !data.rates[to]) {
      console.error(
        `[Ошибка данных]: Валюта ${to} отсутствует в базе данных сервера.`,
      );
      return null;
    }

    return data.rates[to];
  } catch (error) {
    // catch — это "щит". Если пропадет интернет или сервер отключится, мы окажемся здесь
    console.error(
      `[Сетевая ошибка]: Нет подключения к интернету или сервис недоступен.`,
    );
    return null; // Безопасно возвращаем null
  }
}
