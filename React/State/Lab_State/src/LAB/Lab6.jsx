import React, { useState } from "react";

function Lab6() {
  const provinceDistrict = {
    bangkok: ["sathorn", "chatuchak"],
    samutprakarn: ["bangpree", "bangboor"],
    yala: ["batong", "meung"],
  };
  const [district, setDistrict] = useState([]);
  const [provinceSelected, setProvinceSelected] = useState("");
  const [districtSelected, setDistrictSelected] = useState("");

  function handleProvince(e) {
    const provinceSelectedValue = e.target.value;
    if (provinceSelectedValue) {
      setDistrict(provinceDistrict[provinceSelectedValue]);
    } else {
      setDistrict([]);
    }
    setProvinceSelected(e.target.value);
    setDistrictSelected("");
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
      <select
        name="dictrict"
        id="dictrict"
        value={districtSelected}
        onChange={e => setDistrictSelected(e.target.value)}
      >
        <option value="">-</option>
        {convertArrayToOption(district)}
      </select>
      <h2>Province : {provinceSelected}</h2>
      <h2>District : {districtSelected}</h2>
    </div>
  );
}

export default Lab6;
