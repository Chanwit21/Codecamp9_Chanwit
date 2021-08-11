import React from "react";

function LAB4() {
  function handleGoogleClick(e) {
    e.preventDefault();
    const status = confirm("Leave for https://google.com?");
    if (status) window.location = "https://google.com";
  }

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <a href="https://google.com" onClick={e => handleGoogleClick(e)}>
        Google
      </a>
    </div>
  );
}

export default LAB4;
