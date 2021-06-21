console.log("จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข")
console.log("ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”")
console.log("ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”")
console.log("ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”")
console.log("ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”")

let num = prompt("ใส่ตัวเลขเข้ามาสิแล้วเราจะบอกว่ามันเป็นอย่างไร");

//ถ้าใช่้วิธีล่างไม่จำเป็นต้องใส่เคสแบบนี้
// if (num.trim().length === 0 || num === null || isNaN(+num) === true ) { 
//     alert("Invalid number");
// }else if (num > 0) {
//     alert("Positive number");
// }else if ( num == 0) {
//     alert("Zero");
// }else if (num < 0) {
//     alert("Negative number");
// }

//หรือแบบนี้ดีกว่า
if (num > 0) {
    alert("Positive number");
}else if ( num === '0') {
    alert("Zero");
}else if (num < 0) {
    alert("Negative number");
}else {
    alert("Invalid number");
}