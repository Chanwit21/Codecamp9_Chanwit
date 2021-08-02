import React, { useState } from "react";

function Lab3() {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(hide ? false : true);
  };

  let classed = hide ? "hide" : "";
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleClick}>Hide</button>
      <button onClick={handleClick}>Show</button>
      <br />
      <h5 className={classed}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima
        sunt laudantium velit dolorem ea modi autem similique ullam earum.
      </h5>
    </div>
  );
}

export default Lab3;
