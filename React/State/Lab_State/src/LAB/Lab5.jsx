import React, { useState } from "react";

function Lab5() {
  const [validatePhoneNumbersText, setValidatePhoneNumbersText] = useState("");
  const [input, setInput] = useState("");

  const validatePhoneNumbers = () => {
    if (input.trim() === "") {
      setValidatePhoneNumbersText("Phone Number is required");
    } else if (!input || isNaN(input)) {
      setValidatePhoneNumbersText("Phone Number is invalid");
    } else if (input.length !== 10) {
      setValidatePhoneNumbersText("Invalid length");
    } else {
      alert("Your number is valid");
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <input
        type="text"
        placeholder="Phone Numbers"
        value={input}
        onChange={e => {
          setInput(e.target.value);
          setValidatePhoneNumbersText("");
        }}
      />
      <button style={{ marginLeft: "30px" }} onClick={validatePhoneNumbers}>
        Check
      </button>
      <p style={{ color: "red" }}>{validatePhoneNumbersText}</p>
    </div>
  );
}

export default Lab5;
