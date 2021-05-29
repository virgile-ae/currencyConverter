const getConvertedCurrency = async (from: string, to: string): Promise<number> => {
  const apiKey = "ce1b13705ed584726ed4";
  const fFrom = from.toUpperCase();
  const fTo = to.toUpperCase();
  const url = `https://free.currconv.com/api/v7/convert?q=${fFrom}_${fTo}&compact=ultra&apiKey=${apiKey}`;

  const response = await fetch(url);
  console.log(response);
  const formatted = await response.json();
  console.log(formatted);
  const wantedVal: number = await formatted[`${fFrom}_${fTo}`];
  return wantedVal;
};

async function log<T>(query: Promise<T>): Promise<void> {
  console.log(`${await query}`);
}

log<number>(getConvertedCurrency("usd", "gbp"));
