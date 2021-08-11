import React from "react";

function LAB2() {
  return (
    <div>
      <select
        name="country"
        id="country"
        onChange={e => console.log(e.target.value)}
      >
        <option value="">-</option>
        <option value="thailand">Thailand</option>
        <option value="england">England</option>
        <option value="India">India</option>
        <option value="japan">Japan</option>
        <option value="south-korea">South Korea</option>
      </select>
    </div>
  );
}

export default LAB2;
