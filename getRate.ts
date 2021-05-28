/**
 * @param currency takes in a currency code
 * @returns the current value of a single USD in that currency
 */

export async function getUsdTo(currency: string): Promise<number> {
  const apiKey = "492309f9595b2288cda297bfa46cfc88";
  const url = "http://api.currencylayer.com/live";
  const formattedCurrency = currency.toUpperCase();

  const response = await fetch(`${url}?access_key=${apiKey}`);
  const formatted = await response.json();
  const wantedVal: number = await formatted.quotes[`USD${formattedCurrency}`];
  return wantedVal.valueOf();
}

/**
 *
 * @param from the currency code of the currency that is being converted
 * @param to the currency code of the currency that is being converted to
 * @returns the value of a unit of the 'from' currency in the 'to' currency
 */
export async function convertCurrency(from: string, to: string): Promise<number> {
  const fromVal = await getUsdTo(<string>from);
  const toVal = await getUsdTo(<string>to);
  return toVal / fromVal;
}
async function log<T>(val: Promise<T>) {
  console.log(`${await val}`);
}
log(convertCurrency("gbp", "eur"));
