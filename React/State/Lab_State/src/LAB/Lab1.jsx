import React, { useState } from "react";

function Lab1() {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
  };

  let classed = hide ? "hide" : "";

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleClick} className={classed}>
        Click To Hide Me
      </button>
    </div>
  );
}

export default Lab1;
