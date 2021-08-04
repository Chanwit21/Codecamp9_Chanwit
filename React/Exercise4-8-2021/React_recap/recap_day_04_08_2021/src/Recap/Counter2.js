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
    for (let item of array) {
      result += item.count;
    }
    return result;
  }

  const hdlResetButton = id => {
    const newCountArray = [...countArray];
    const IndexOfInsert = countArray.indexOf(item => item.id === id);
    newCountArray[IndexOfInsert].count = 0;
    setCountArray(newCountArray);
    // setStep("");
    setSumCount(sumCountValue(newCountArray));
  };

  const hdlDecreaseButton = id => {
    const newCountArray = [...countArray];
    // const newCountArrayUpdate = countArray.filter(item => item.id === id);
    const IndexOfInsert = newCountArray.findIndex(item => item.id === id);
    // newCountArray[IndexOfInsert] = newCountArrayUpdate[0];
    if (newCountArray[IndexOfInsert].count - +step > 0) {
      newCountArray[IndexOfInsert].count -= +step;
      // newCountArrayUpdate[0].count -= +step;
    } else {
      newCountArray[IndexOfInsert].count = 0;
    }
    setCountArray(newCountArray);
    setSumCount(sumCountValue(newCountArray));
  };

  const hdlIncreaseButton = id => {
    const newCountArray = [...countArray];
    // const newCountArrayUpdate = newCountArray.filter(item => item.id === id);
    const IndexOfInsert = newCountArray.findIndex(item => {
      return item.id === id;
    });
    // console.log(IndexOfInsert);
    newCountArray[IndexOfInsert].count += +step;
    // newCountArrayUpdate[0].count += +step;
    // console.log(newCountArrayUpdate);
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
            key={`id-${item.id}`}
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
