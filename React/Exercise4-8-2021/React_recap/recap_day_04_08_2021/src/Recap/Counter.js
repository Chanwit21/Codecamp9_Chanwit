import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");

  const hdlResetButton = () => {
    setCount(0);
    setStep("");
  };

  const hdlDecreaseButton = () => {
    if (count - +step > 0) {
      setCount(curCount => curCount - +step);
    } else {
      setCount(0);
    }
  };

  const hdlIncreaseButton = () => {
    // setCount(curCount => curCount + +step);
    setCount(function (curCount) {
      return curCount + +step;
    });
    console.log(count);
    // let curCount = count
    // setCount(curCount + +step)
  };

  function hdlInputStep(event) {
    setStep(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div className="Counter">
      <h3>Counter : {count}</h3>
      <label htmlFor="step">
        <b>Step : </b>
      </label>
      <input id="step" type="number" value={step} onChange={hdlInputStep} />
      <br />
      <button onClick={hdlIncreaseButton}>+</button>
      <button onClick={hdlDecreaseButton}>-</button>
      <button onClick={hdlResetButton}>Reset</button>
    </div>
  );
}

export default Counter;
