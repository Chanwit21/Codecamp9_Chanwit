import React, { useState } from "react";
import CounterComponentPJeang from "../Component/CounterComponentPJeang";
import "./Counter2.css";

function SolutionCounterByPJeang() {
  const [step, setStep] = useState(1);
  const [sum, setSum] = useState(0);

  return (
    <div className="Counter2">
      <h2>Sum Counter : {sum}</h2>
      <label htmlFor="step">
        <b>Step : </b>
      </label>
      <input
        id="step"
        type="number"
        value={step}
        onChange={e => setStep(+e.target.value)}
      />
      <CounterComponentPJeang sum={sum} setSum={setSum} step={step} />
      <CounterComponentPJeang sum={sum} setSum={setSum} step={step} />
      <CounterComponentPJeang sum={sum} setSum={setSum} step={step} />
      <CounterComponentPJeang sum={sum} setSum={setSum} step={step} />
    </div>
  );
}

export default SolutionCounterByPJeang;
