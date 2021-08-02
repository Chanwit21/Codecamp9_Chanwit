import React, { useState } from "react";
import LAB1 from "./LAB/LAB1";
import LAB2 from "./LAB/LAB2";
import LAB3 from "./LAB/LAB3";
import LAB4 from "./LAB/LAB4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <LAB1 /> */}
      {/* <LAB2 /> */}
      {/* <LAB3 /> */}
      <LAB4 />
    </div>
  );
}

export default App;
