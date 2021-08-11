import React, { useState } from "react";

function Lab5() {
  // const [errorMessage, setErrorMessage] = useState("");
  // const [input, setInput] = useState("");

  // // Validate ต้องคลิก Check
  // const validatePhoneNumbers = () => {
  //   if (input.trim() === "") {
  //     setErrorMessage("Phone Number is required");
  //   } else if (!input || isNaN(input)) {
  //     setErrorMessage("Phone Number is invalid");
  //   } else if (input.length !== 10) {
  //     setErrorMessage("Invalid length");
  //   } else {
  //     alert("Your number is valid");
  //     setInput("");
  //   }
  // };

  // function handleChangInput(e) {
  //   setInput(e.target.value);
  //   setErrorMessage("");
  // }

  // // validate ตอน Change ไปเลย
  // function handleChangInput(e) {
  //   setInput(e.target.value);
  //   const newValue = e.target.value;
  //   if (newValue.trim() === "") {
  //     setErrorMessage("Phone Number is required");
  //   } else if (!newValue || isNaN(newValue)) {
  //     setErrorMessage("Phone Number is invalid");
  //   } else if (newValue.length !== 10) {
  //     setErrorMessage("Invalid length");
  //   } else {
  //     setInput("");
  //     setErrorMessage("");
  //   }
  // }

  // // ควรเขียนแบบนี้
  // const errorMessageShowElement = errorMessage ? (
  //   <p style={{ color: "red" }}>{errorMessage}</p>
  // ) : null;
  // const style = errorMessage ? { borderColor: "red", color: "red" } : {};

  // return (
  //   <div style={{ textAlign: "center", paddingTop: "50px" }}>
  //     <input
  //       type="text"
  //       placeholder="Phone Numbers"
  //       value={input}
  //       onChange={handleChangInput}
  //       style={style}
  //     />
  //     <button style={{ marginLeft: "30px" }} onClick={validatePhoneNumbers}>
  //       Check
  //     </button>
  //     {/* ควรเขียนแบบนี้ */}
  //     {errorMessageShowElement}
  //     {/*
  //     ไม่ควรเขียนแบบนี้
  //     <p style={{ color: "red" }}>{errorMessage}</p> */}
  //   </div>
  // );

  //  ทำแบบสั้นๆ กว่าข้างบน
  const [state, setState] = useState({
    error: "",
    phoneNumber: "",
  });

  const haddleChangePhoneNumber = e => {
    // const newState = { ...state };
    // newState.phoneNumber = e.target.value;
    // setState(newState);
    // เขียนแบบสั้น
    // setState({ ...state, phoneNumber: e.target.value });
    //   // โชว์ข้อความเลยเมื่อ onChange
    //   const newState = { ...state };
    //   newState.phoneNumber = e.target.value;
    //   newState.error =
    //     newState.phoneNumber.trim() === ""
    //       ? "Phone Number is required"
    //       : !newState.phoneNumber || isNaN(newState.phoneNumber)
    //       ? "Phone Number is invalid"
    //       : newState.phoneNumber.length !== 10
    //       ? "Invalid length"
    //       : "";
    //   if (!newState.error) {
    //     alert("Valid Phone Number");
    //     newState.phoneNumber = "";
    //   }
    //   setState(newState);
  };

  const handleClickChackBtn = e => {
    const newState = { ...state };
    newState.error =
      newState.phoneNumber.trim() === ""
        ? "Phone Number is required"
        : !newState.phoneNumber || isNaN(newState.phoneNumber)
        ? "Phone Number is invalid"
        : newState.phoneNumber.length !== 10
        ? "Invalid length"
        : "";

    if (!newState.error) {
      alert("Valid Phone Number");
      newState.phoneNumber = "";
    }
    setState(newState);
  };

  const style = state.error ? { borderColor: "red", color: "red" } : {};
  const errorMessageShowElement = state.error ? (
    <p style={{ color: "red" }}>{state.error}</p>
  ) : null;

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <input
        type="text"
        placeholder="Phone Numbers"
        value={state.phoneNumber}
        onChange={haddleChangePhoneNumber}
        style={style}
      />
      <button style={{ marginLeft: "20px" }} onClick={handleClickChackBtn}>
        Check
      </button>
      {/* ควรเขียนแบบนี้ */}
      {errorMessageShowElement}
    </div>
  );
}

export default Lab5;
