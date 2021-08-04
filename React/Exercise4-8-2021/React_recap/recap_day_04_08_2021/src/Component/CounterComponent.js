import React from "react";
import "./CounterComponent.css";

function CounterComponent({
  count,
  hdlDecreaseButton,
  hdlResetButton,
  hdlIncreaseButton,
  id,
}) {
  return (
    <div className="CounterComponent">
      <h3>Counter : {count}</h3>
      <button onClick={e => hdlIncreaseButton(id)}>+</button>
      <button onClick={e => hdlDecreaseButton(id)}>-</button>
      <button onClick={e => hdlResetButton(id)}>Reset</button>
    </div>
  );
}

export default CounterComponent;
