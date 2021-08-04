import React from "react";
import "./CounterComponent.css";

function CounterComponent({
  key,
  id,
  counter,
  handleButtonIncrease,
  handleButtonDecrease,
  handleButtonReset,
  handleButtonDelete,
}) {
  return (
    <div className="counter_box">
      <h1>
        Count : {counter} (id = {id})
      </h1>
      <button
        className="btn btn-increase"
        onClick={() => handleButtonIncrease(id)}
      >
        +
      </button>
      <button
        className="btn btn-decrease"
        onClick={() => handleButtonDecrease(id)}
      >
        -
      </button>
      <button className="btn btn-reset" onClick={() => handleButtonReset(id)}>
        reset
      </button>
      <button className="btn btn-delete" onClick={() => handleButtonDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default CounterComponent;
