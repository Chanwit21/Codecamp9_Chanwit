// จงสร้าง Label และ Select ดังรูป
// เมื่อ click <select> ของ Province ให้แสดงรายชื่อจังหวัด
// เมื่อ click <select> ของ District ให้แสดงอำเภอของจังหวัดที่ถูกเลือก
const data = {
  bangkok: {
    sathorn: "sathorn",
    chatuchak: "chatuchak",
  },
  samutprakarn: {
    bangpree: "bangpree",
    bangboor: "bangboor",
  },
  yala: {
    batong: "batong",
    meung: "meung",
  },
};
const updateProvince = document.querySelectorAll("select")[0];
console.log(updateProvince)
let optionProvince = "" 
for(let option of Object.keys(data)){
    optionProvince += `<option value="${option}">${option}</option>`;
}
updateProvince.insertAdjacentHTML("beforeend", optionProvince);
console.log(updateProvince);
let province1 = "";
updateProvince.addEventListener("change", (e) => {
  province2 = e.target.value;
  // console.log(province2)
  let updateDistrict = document.querySelectorAll("select")[1];
//   console.log(selectDistrict);
  if (province1 !== province2) {
    let optionInDistric = document.querySelectorAll("#district option");
    // console.log(optionInDistric)
    for (let [index,option] of Object.entries(optionInDistric)) {
        // console.log(`index ${index} option ${option}`)
        if (index !== '0'){
            option.remove();
        }
    }
  }
  province1 = province2;
  // console.log(province)
  let optionDistrict = "";
  // console.log(Object.values(data[province]))
  if (data[province1]) {
    for (let value of Object.values(data[province1])) {
      optionDistrict += `<option value="${value}">${value}</option>`;
    }
  }
  updateDistrict.insertAdjacentHTML("beforeend", optionDistrict);
});
