console.log("จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข")
console.log("ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”")
console.log("ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”")

let num = prompt("ใส่ตัวเลขเข้ามาสิ");

// ของเรา
// if (num === '' || num === ' ' || num === null || isNaN(+num) === true ) {
//     alert("ไม่ใช่ตัวเลขโว้ยยยยยย !!!!!!");
// }else if (num%2 === 0) {
//     alert("Even number");
// }else {
//     alert("Odd number");
// }


//เฉลย 

const remainder = num % 2;
if (remainder === 0) {
    alert("Even number");
}else if (remainder === 1) {
    alert("Odd number");
}else {
    alert("Invalid Number");
}