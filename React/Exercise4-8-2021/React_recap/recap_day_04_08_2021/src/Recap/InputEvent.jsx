import React, { useState } from "react";

function InputEvent() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  function handleInput1(event) {
    setInput1(event.target.value);
    console.log(`Input1 Text: ${event.target.value}`);
  }

  function handleInput2(event) {
    setInput2(event.target.value);
    console.log(`Input2 Text: ${event.target.value}`);
  }

  function handleInput3(event) {
    setInput3(event.target.value);
    console.log(`Input3 Text: ${event.target.value}`);
  }

  function handleInput4(event) {
    setInput4(event.target.value);
    console.log(`Input4 Text: ${event.target.value}`);
  }

  return (
    <div>
      <input
        type="text"
        onChange={event => handleInput1(event)}
        value={input1}
      />
      <br />
      <input
        type="text"
        onChange={event => handleInput2(event)}
        value={input2}
      />
      <br />
      <input
        type="text"
        onChange={event => handleInput3(event)}
        value={input3}
      />
      <br />
      <input
        type="text"
        onChange={event => handleInput4(event)}
        value={input4}
      />
      <br />
    </div>
  );
}

export default InputEvent;
