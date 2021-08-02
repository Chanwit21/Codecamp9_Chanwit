import React from "react";

function LAB1() {
  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" onChange={e => console.log(e.target.value)} />
    </div>
  );
}

export default LAB1;
