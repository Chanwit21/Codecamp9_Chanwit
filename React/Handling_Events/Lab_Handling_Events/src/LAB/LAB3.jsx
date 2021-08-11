import React from "react";

function LAB3() {
  function handleChangeCheckBox(e) {
    // e.target.defaultChecked = e.target.checked ? false : true;
    console.log(
      `name: ${e.target.name}, value: ${e.target.value}, checked: ${
        e.target.checked ? "Tick" : "Untick"
      }`
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        name="skill"
        id="html"
        value="html"
        onChange={handleChangeCheckBox}
      />
      <label htmlFor="html">HTML</label>
      <br />
      <input
        type="checkbox"
        name="skill"
        id="css"
        value="css"
        onChange={handleChangeCheckBox}
      />
      <label htmlFor="css">CSS</label>
      <br />
      <input
        type="checkbox"
        name="skill"
        id="java-script"
        value="java-script"
        onChange={handleChangeCheckBox}
      />
      <label htmlFor="java-script">Java Script</label>
      <br />
      <input
        type="checkbox"
        name="skill"
        id="react"
        value="react"
        onChange={handleChangeCheckBox}
      />
      <label htmlFor="react">React</label>
      <br />
    </div>
  );
}

export default LAB3;
