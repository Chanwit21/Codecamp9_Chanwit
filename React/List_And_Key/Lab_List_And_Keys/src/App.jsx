import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lab1 from "./Lab/Lab1";
import Lab2 from "./Lab/Lab2";
import Lab3 from "./Lab/Lab3";
import Lab4 from "./Lab/Lab4";
import Lab5 from "./Lab/Lab5";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Lab1 /> */}
      {/* <Lab2 /> */}
      {/* <Lab3 /> */}
      {/* <Lab4 /> */}
      <Lab5 />
    </div>
  );
}

export default App;
