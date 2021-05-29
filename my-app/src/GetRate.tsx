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

  const getConvertedCurrency = async (from: string, to: string): Promise<void> => {
    const apiKey = "ce1b13705ed584726ed4";
    const fFrom = from.toUpperCase();
    const fTo = to.toUpperCase();
    const url = `https://free.currconv.com/api/v7/convert?q=${fFrom}_${fTo}&compact=ultra&apiKey=${apiKey}`;

    const response = await fetch(url);
    const formatted = await response.json();
    const wantedVal: number = await formatted[`${fFrom}_${fTo}`];
    setWorth(parseFloat((wantedVal * props.multiplier).toFixed(props.dp)));
  };

  useEffect(() => {
    getConvertedCurrency(props.from, props.to);
  });

  return (
    <h1>
      {props.from.toUpperCase()} {props.multiplier} equals {props.to.toUpperCase()} {worth}
    </h1>
  );
}
