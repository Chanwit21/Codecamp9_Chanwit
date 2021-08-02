import React, { useState } from "react";

function Lab6() {
  const provinceDistrict = {
    bangkok: ["sathorn", "chatuchak"],
    samutprakarn: ["bangpree", "bangboor"],
    yala: ["batong", "meung"],
  };
  const [district, setDistrict] = useState([]);
  const [provinceSelected, setProvinceSelected] = useState("");

  function handleProvince(e) {
    setProvinceSelected(e.target.value);
    const provinceSelected = e.target.value;
    if (provinceSelected) {
      setDistrict(provinceDistrict[provinceSelected]);
    } else {
      setDistrict([]);
    }
  }

  function convertArrayToOption(array) {
    return array.map(item => (
      <option key={`id-${item}`} value={item}>
        {item}
      </option>
    ));
  }

  return (
    <div>
      <label htmlFor="province">Province :</label>
      <select
        name="province"
        id="province"
        value={provinceSelected}
        onChange={handleProvince}
      >
        <option value="">-</option>
        {convertArrayToOption(Object.keys(provinceDistrict))}
      </select>
      <label htmlFor="dictrict">Dictrict :</label>
      <select name="dictrict" id="dictrict">
        <option value="">-</option>
        {convertArrayToOption(district)}
      </select>
    </div>
  );
}

export default Lab6;
