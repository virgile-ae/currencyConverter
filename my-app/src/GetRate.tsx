import React, { useState, useEffect } from "react";
import "./GetRate.css";

interface IProps {
  from: string;
  to: string;
  multiplier: number;
  dp: number;
}

export default function GetRate(props: IProps) {
  const [worth, setWorth] = useState<number>();

  const getUsdTo = async (currency: string): Promise<number> => {
    const apiKey = "492309f9595b2288cda297bfa46cfc88";
    const url = "http://api.currencylayer.com/live";
    const formattedCurrency = currency.toUpperCase();

    const response = await fetch(`${url}?access_key=${apiKey}`);
    const formatted = await response.json();
    const wantedVal: number = await formatted.quotes[`USD${formattedCurrency}`];
    return wantedVal;
  };

  const convertCurrency = async (from: string, to: string): Promise<void> => {
    const fromVal = await getUsdTo(from);
    const toVal = await getUsdTo(to);
    setWorth(parseFloat(((toVal / fromVal) * props.multiplier).toFixed(props.dp)));
  };

  useEffect(() => {
    convertCurrency(props.from, props.to);
  });

  return (
    <h1>
      {props.from.toUpperCase()} {props.multiplier} equals {props.to.toUpperCase()} {worth}
    </h1>
  );
}
