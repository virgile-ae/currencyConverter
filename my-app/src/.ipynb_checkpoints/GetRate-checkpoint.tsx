import React, { useState, useEffect } from "react";
import "./GetRate.css";

export default function GetRate() {
  const [worth, setWorth] = useState<number>();

  const getUsdTo = async (currency: string): Promise<number> => {
    const apiKey = "492309f9595b2288cda297bfa46cfc88";
    const url = "http://api.currencylayer.com/live";
    const formattedCurrency = currency.toUpperCase();

    const response = await fetch(`${url}?access_key=${apiKey}`);
    const formatted = await response.json();
    const wantedVal: number = await formatted.quotes[`USD${formattedCurrency}`];
    return wantedVal.valueOf();
  };

  const convertCurrency = async (from: string, to: string): Promise<void> => {
    const fromVal = await getUsdTo(from);
    const toVal = await getUsdTo(to);
    setWorth(toVal / fromVal);
  };

  useEffect(() => {
    convertCurrency("gbp", "eur");
  });

  return (
    <div>
      <br />
      <h1>{worth}</h1>
    </div>
  );
}
