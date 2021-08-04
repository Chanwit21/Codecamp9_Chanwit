import React, { useState } from "react";
import "./Exercise1.css";

function Exercise1() {
  const LIST_TEST = [
    { id: 1, counter: 0 },
    { id: 2, counter: 0 },
  ];
  const [counterList, setCounterList] = useState([...LIST_TEST]);
  const [counterAmount, setCountAmount] = useState(
    countCounterAmount(LIST_TEST)
  );
  const [counterSum, setCounterSum] = useState(sumCounter(LIST_TEST));

  function sumCounter(list) {
    let result = 0;
    for (let { id, counter } of list) {
      result += counter;
    }
    return result;
  }

  function countCounterAmount(list) {
    return list.length;
  }

  function runId(list) {
    if (list.length !== 0) return list[list.length - 1].id + 1;
    return 1;
  }

  const handleAddButton = () => {
    const newCountList = [...counterList];
    setCounterList([...newCountList, { id: runId(newCountList), counter: 0 }]);
    setCountAmount(newCountList.length + 1);
  };

  const handleButtonDelete = id => {
    const newCounterList = counterList.filter(item => item.id !== id);
    setCounterList(newCounterList);
    setCounterSum(sumCounter(newCounterList));
    setCountAmount(countCounterAmount(newCounterList));
  };

  const handleButtonIncrease = (index, id) => {
    const newCounterList = counterList.filter(item => item.id !== id);
    const newCounterListUpdate = counterList.filter(item => item.id === id);
    newCounterListUpdate[0].counter += 1;
    let indexSearch = newCounterList.findIndex(item => item.id === id - 1);
    // console.log(indexSearch);
    let secoundSearch = false;
    if (indexSearch === -1 && index !== 0) {
      indexSearch = newCounterList.findIndex(item => item.id === id + 1);
      secoundSearch = true;
    }
    if (secoundSearch) {
      newCounterList.splice(indexSearch, 0, newCounterListUpdate[0]);
    } else {
      newCounterList.splice(indexSearch + 1, 0, newCounterListUpdate[0]);
    }
    setCounterList(newCounterList);
    setCounterSum(sumCounter(newCounterList));
  };

  const handleButtonDecrease = (index, id) => {
    const newCounterList = counterList.filter(item => item.id !== id);
    const newCounterListUpdate = counterList.filter(item => item.id === id);
    if (newCounterListUpdate[0].counter > 0) {
      newCounterListUpdate[0].counter -= 1;
    }
    let indexSearch = newCounterList.findIndex(item => item.id === id - 1);
    // console.log(indexSearch);
    let secoundSearch = false;
    if (indexSearch === -1 && index !== 0) {
      indexSearch = newCounterList.findIndex(item => item.id === id + 1);
      secoundSearch = true;
    }
    if (secoundSearch) {
      newCounterList.splice(indexSearch, 0, newCounterListUpdate[0]);
    } else {
      newCounterList.splice(indexSearch + 1, 0, newCounterListUpdate[0]);
    }
    setCounterList(newCounterList);
    setCounterSum(sumCounter(newCounterList));
  };

  const handleButtonReset = (index, id) => {
    const newCounterList = counterList.filter(item => item.id !== id);
    const newCounterListUpdate = counterList.filter(item => item.id === id);
    newCounterListUpdate[0].counter = 0;
    let indexSearch = newCounterList.findIndex(item => item.id === id - 1);
    // console.log(indexSearch);
    let secoundSearch = false;
    if (indexSearch === -1 && index !== 0) {
      indexSearch = newCounterList.findIndex(item => item.id === id + 1);
      secoundSearch = true;
    }
    if (secoundSearch) {
      newCounterList.splice(indexSearch, 0, newCounterListUpdate[0]);
    } else {
      newCounterList.splice(indexSearch + 1, 0, newCounterListUpdate[0]);
    }
    setCounterList(newCounterList);
    setCounterSum(sumCounter(newCounterList));
  };

  return (
    <div className="counter_page">
      <section className="header">
        <h1>Counter Sum : {counterSum}</h1>
        <button className="btn btn-add" onClick={handleAddButton}>
          Add Counter
        </button>
      </section>
      <section className="content">
        <h2>Counter Amount : {counterAmount}</h2>
        {counterList.map((item, index) => {
          return (
            <div className="counter_box">
              <h1>
                Count : {item.counter} (id = {item.id})
              </h1>
              <button
                className="btn btn-increase"
                onClick={() => handleButtonIncrease(index, item.id)}
              >
                +
              </button>
              <button
                className="btn btn-decrease"
                onClick={() => handleButtonDecrease(index, item.id)}
              >
                -
              </button>
              <button
                className="btn btn-reset"
                onClick={() => handleButtonReset(index, item.id)}
              >
                reset
              </button>
              <button
                className="btn btn-delete"
                onClick={() => handleButtonDelete(item.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        {/* <div className="counter_box">
          <h1>Count : 0 (id = 1)</h1>
          <button className="btn btn-increase">+</button>
          <button className="btn btn-decrease">-</button>
          <button className="btn btn-reset">reset</button>
          <button className="btn btn-delete">Delete</button>
        </div> */}
      </section>
    </div>
  );
}

export default Exercise1;
