import React from "react";

function Lab1() {
  const friends = ["Go", "Do", "Lee", "Lisa", "Lomosonic"];
  return (
    <div style={{ paddingTop: "50px", textAlign: "center" }}>
      <ul style={{ width: "50%", margin: "0 auto" }}>
        {friends.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lab1;
