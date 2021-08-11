import React, { useState } from "react";

function Lab4() {
  const [bath, setBath] = useState(0);

  function onChangeDollarToBathHandleInput(e) {
    setBath((+e.target.value * 30).toFixed(2));
  }

  // //  Lab Spacial
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function onClickClearValueInput(e) {
  //   e.preventDefault();
  //   setPassword("");
  //   setEmail("");
  // }

  return (
    <div style={{ textAlign: "center" }}>
      <label htmlFor="dollar">Enter Dollar: </label>
      <input
        type="number"
        name="dollar"
        id="dollar"
        onChange={onChangeDollarToBathHandleInput}
      />
      <br />
      <label htmlFor="bath">Convert To Bath: </label>
      <p style={{ display: "inline-block" }}>
        <span style={{ color: "red", fontWeight: "500" }}>{bath}</span> Bath
      </p>
      <br />
    </div>

    // //  Lab Spacial
    // <form action="#">
    //   <div style={{ marginTop: "50px" }}>
    //     <label htmlFor="email"> Email :</label>
    //     <input
    //       type="text"
    //       name="email"
    //       id="email"
    //       value={email}
    //       onChange={e => setEmail(e.target.value)}
    //     />
    //     <br />
    //     <label htmlFor="password"> Password :</label>
    //     <input
    //       type="text"
    //       name="password"
    //       id="password"
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //     />
    //     <br />
    //     <input type="submit" value="Lonin" onClick={onClickClearValueInput} />
    //   </div>
    // </form>
  );
}

export default Lab4;
