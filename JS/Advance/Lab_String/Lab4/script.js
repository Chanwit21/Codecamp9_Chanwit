// จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

//แบบชัดเจน
// function checkText(str) {
//   if (
//     str.toLowerCase().includes("xxx") ||
//     str.toLowerCase().includes("sex") ||
//     str.toLowerCase().includes("porn")
//   ) {
//     return true;
//   }
//   return false;
// }

//แบบสั้นๆ
function checkText(str) {
  return (
    str.toLowerCase().includes("xxx") ||
    str.toLowerCase().includes("sex") ||
    str.toLowerCase().includes("porn")
  );
}

let string = prompt("Enter text");
console.log(checkText(string));
