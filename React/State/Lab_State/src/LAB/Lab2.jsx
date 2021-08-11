import React, { useState } from "react";

function Lab2() {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
  };

  let classed = hide ? "hide" : "";

  return (
    <div>
      <button onClick={handleClick}>Click To Hide Text</button>
      <h1 className={classed}>Text</h1>
    </div>
  );
}

export default Lab2;
