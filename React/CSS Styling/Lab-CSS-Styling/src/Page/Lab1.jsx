import React, { useState } from "react";
import "./Lab1.css";

function Lab1() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    const update = count + 1;
    setCount(update);
  }

  function decreaseCount() {
    if (count > 0) {
      const update = count - 1;
      setCount(update);
    }
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="lab1">
        <button className="btn btn-increase" onClick={increaseCount}>
          +
        </button>
        <h1>{count}</h1>
        <button className="btn btn-decrease" onClick={decreaseCount}>
          -
        </button>
        <button className="btn btn-reset" onClick={resetCount}>
          reset
        </button>
      </div>
    </div>
  );
}

export default Lab1;
