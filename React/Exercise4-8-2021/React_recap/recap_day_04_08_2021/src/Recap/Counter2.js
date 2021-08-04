import React, { useState } from "react";
import CounterComponent from "../Component/CounterComponent";
import "./Counter2.css";

function Counter2() {
  const TEST = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    { id: 4, count: 0 },
  ];
  const [countArray, setCountArray] = useState(TEST);
  const [step, setStep] = useState("");
  const [sumCount, setSumCount] = useState(0);

  function sumCountValue(array) {
    let result = 0;
    for (let { id, count } of array) {
      result += count;
    }
    return result;
  }

  const hdlResetButton = id => {
    const newCountArray = [...countArray];
    const newCountArrayUpdate = countArray.filter(item => item.id === id);

    newCountArrayUpdate[0].count = 0;
    const IndexOfInsert = countArray.indexOf(item => item.id === id);
    newCountArray[IndexOfInsert] = newCountArrayUpdate[0];
    setCountArray(newCountArray);
    // setStep("");
    setSumCount(sumCountValue(newCountArray));
  };

  const hdlDecreaseButton = id => {
    const newCountArray = [...countArray];
    const newCountArrayUpdate = countArray.filter(item => item.id === id);
    if (newCountArrayUpdate[0].count - +step > 0) {
      newCountArrayUpdate[0].count -= +step;
    } else {
      newCountArrayUpdate[0].count = 0;
    }
    const IndexOfInsert = countArray.indexOf(item => item.id === id);
    newCountArray[IndexOfInsert] = newCountArrayUpdate[0];
    setCountArray(newCountArray);
    setSumCount(sumCountValue(newCountArray));
  };

  const hdlIncreaseButton = id => {
    const newCountArray = [...countArray];
    const newCountArrayUpdate = newCountArray.filter(item => item.id === id);
    newCountArrayUpdate[0].count += +step;
    // console.log(newCountArrayUpdate);
    const IndexOfInsert = countArray.findIndex(item => {
      return item.id === id;
    });
    newCountArray[IndexOfInsert] = newCountArrayUpdate[0];
    setCountArray(newCountArray);
    setSumCount(sumCountValue(newCountArray));
  };

  function hdlInputStep(event) {
    setStep(event.target.value);
  }

  return (
    <div className="Counter2">
      <h2>Sum Counter : {sumCount}</h2>
      <label htmlFor="step">
        <b>Step : </b>
      </label>
      <input id="step" type="number" value={step} onChange={hdlInputStep} />
      {countArray.map(item => {
        return (
          <CounterComponent
            count={item.count}
            hdlIncreaseButton={hdlIncreaseButton}
            hdlDecreaseButton={hdlDecreaseButton}
            hdlResetButton={hdlResetButton}
            id={item.id}
          />
        );
      })}
      {/* <CounterComponent
        count=""
        hdlIncreaseButton=""
        hdlDecreaseButton=""
        hdlResetButton=""
        id=""
      /> */}
    </div>
  );
}

export default Counter2;
