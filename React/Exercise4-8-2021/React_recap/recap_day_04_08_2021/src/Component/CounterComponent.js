import React from "react";
import "./CounterComponent.css";

function CounterComponent(props) {
  // console.log(props);
  const { count, hdlDecreaseButton, hdlResetButton, hdlIncreaseButton, id } =
    props;
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
