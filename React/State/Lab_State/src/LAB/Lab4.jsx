import React, { useState } from "react";

function Lab4() {
  const [bath, setBath] = useState(0);

  function convertDollarToBath(e) {
    setBath((+e.target.value * 32.97).toFixed(2));
  }
  return (
    <div style={{ textAlign: "center" }}>
      <label htmlFor="dollar">Enter Dollar: </label>
      <input
        type="number"
        name="dollar"
        id="dollar"
        onChange={convertDollarToBath}
      />
      <br />
      <label htmlFor="bath">Convert To Bath: </label>
      <p style={{ display: "inline-block" }}>
        <span style={{ color: "red", fontWeight: "500" }}>{bath}</span> Bath
      </p>
      <br />
    </div>
  );
}

export default Lab4;
