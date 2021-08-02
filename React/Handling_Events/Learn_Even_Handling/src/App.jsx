import React, { useState } from "react";

function App() {
  const handleClick = () => {
    alert("Clicked");
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Form is submitted");
  };

  const handleSelect = () => {
    alert("Your value has been change");
  };

  const handleClickButtonWidthId = id => {
    alert(id);
    // ไม่ควรทำ
    console.log(event);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "60px", with: "100%" }}>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("Anonymus")}>Click Anonymus</button>
      <button
        onClick={function () {
          alert("Function Expression");
        }}
      >
        Function Expression
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={event => console.log(event.target.value)}
        />
        <br />
        <label htmlFor="select">Please select</label>
        <select name="select" onChange={handleSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
      <button onClick={() => handleClickButtonWidthId(1)}>Click1</button>
      {/* <button onClick={() => handleClickButtonWidthId(2)}>Click2</button> */}
    </div>
  );
}

export default App;
