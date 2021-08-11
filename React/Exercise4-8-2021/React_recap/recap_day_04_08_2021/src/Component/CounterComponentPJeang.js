import React, { useState } from "react";

function CounterComponentP_Jeang({ sum, setSum, step }) {
  const [count, setCount] = useState(0);

  const hdlIncreaseButton = () => {
    setCount(count + step);
    setSum(sum + step);
  };

  const hdlDecreaseButton = () => {
    setCount(count - step);
    setSum(sum - step);
  };

  const hdlResetButton = () => {
    setCount(0);
    // ทำแบบนี้ได้เพราะมันจะเอา Count ที่หน้าตัวเองมาใช้เป็นหลัก
    setSum(sum - count);
  };

  return (
    <div className="CounterComponent">
      <h3>Counter : {count}</h3>
      <button onClick={e => hdlIncreaseButton()}>+</button>
      <button onClick={e => hdlDecreaseButton()}>-</button>
      <button onClick={e => hdlResetButton()}>Reset</button>
    </div>
  );
}

export default CounterComponentP_Jeang;
