import React from "react";

function RecapEventCounter() {
  function inputChange() {
    // เลี่ยงการใช้แบบนี้มนไม่โอเค
    // console.log("inputChange : " + event.target.value);
  }

  function inputChange2(s) {
    // เลี่ยงการใช้แบบนี้มนไม่โอเค
    // console.log("inputChange2 : " + s + event.target.value);
  }

  function inputChange3(s, e) {
    console.log("inputChange3 : " + s + e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={e => console.log("arrow :" + e.target.value)} />
      <br />
      <input onChange={inputChange} /> <br />
      <input onChange={() => inputChange2("no evt : ")} /> <br />
      <input onChange={e => inputChange3("with evt : ", e)} />
      {/* this is best practice */}
    </div>
  );
}

export default RecapEventCounter;
