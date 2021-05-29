import React, { useState } from "react";
import "./Selector.css";
import GetRate from "./GetRate";

export default function Selector() {
  const [from, setFrom] = useState("gbp");
  const [to, setTo] = useState("eur");
  const [multiplier, setMultiplier] = useState(1);
  const [accuracy, setAccuracy] = useState(2);

  return (
    <div className="selector">
      <GetRate from={from} to={to} multiplier={multiplier} dp={accuracy} />
      <form>
        <label htmlFor="mutliplyer">Convert</label>
        <input
          type="number"
          id="multiplyer"
          placeholder={`Number of ${from.toUpperCase()}`}
          min={0}
          defaultValue={1}
          className="num"
          onChange={() => {
            const nMulti = document.getElementById("multiplyer") as HTMLInputElement;
            if (nMulti.value.length) {
              setMultiplier(parseFloat(nMulti.value));
            }
          }}
        />

        <label htmlFor="from">Of what currency</label>
        <input
          type="text"
          id="from"
          placeholder="From"
          defaultValue="GBP"
          onChange={() => {
            const nFrom = document.getElementById("from") as HTMLInputElement;
            if (nFrom.value.length === 3) {
              setFrom(nFrom.value);
            }
          }}
        />
        <label htmlFor="to">To</label>
        <input
          type="text"
          id="to"
          placeholder="To"
          defaultValue="EUR"
          autoComplete="off"
          onChange={() => {
            const nTo = document.getElementById("to") as HTMLInputElement;
            if (nTo.value.length === 3) {
              setTo(nTo.value);
            }
          }}
        />
        <label htmlFor="dp">Rounded to </label>
        <input
          type="number"
          id="dp"
          placeholder="Accuracy"
          className="num"
          min={0}
          max={16}
          defaultValue={2}
          onChange={() => {
            const nAcc = document.getElementById("dp") as HTMLInputElement;
            const nAccVal = nAcc.value;
            if (nAccVal.length) {
              setAccuracy(Math.abs(parseInt(nAcc.value)));
            }
          }}
        />
      </form>
    </div>
  );
}
