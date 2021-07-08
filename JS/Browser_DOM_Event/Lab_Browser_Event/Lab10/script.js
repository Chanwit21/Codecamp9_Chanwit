// จงสร้าง Label และ Select ดังรูป
// เมื่อ click <select> ของ Province ให้แสดงรายชื่อจังหวัด
// เมื่อ click <select> ของ District ให้แสดงอำเภอของจังหวัดที่ถูกเลือก
const data = {
    bangkok :{
        sathorn:"sathorn",
        chatuchak:"chatuchak"
    },
    samutprakarn:{
        bangpree:"bangpree",
        bangboor:"bangboor"
    },
    yala:{
        batong:"batong",
        meung:"meung"
    }
}
const selectProvince = document.querySelectorAll('select')[0]
console.log(selectProvince)
let province1 = "";
selectProvince.addEventListener('change',(e)=>{
    province2 = e.target.value;
    let selectDistrict = document.querySelectorAll('select')[1]
    if(province1 !== province2) {
        let optionInDistric = document.querySelectorAll("#district option")
        console.log(optionInDistric)
        for (let option of optionInDistric){
            option.remove()
        }
    }
    province1 = province2;
    // console.log(province)
    let optionDistrict = "";
    // console.log(Object.values(data[province]))
    for(let value  of Object.values(data[province1])){
        optionDistrict += `<option value="${value}">${value}</option>`
    }
    selectDistrict.insertAdjacentHTML('afterbegin',optionDistrict)
})