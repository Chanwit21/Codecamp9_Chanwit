console.log("จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า")
console.log("ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2")
console.log("หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”")

let num1 = prompt("ใส่ตัวเลขตัวแรกเข้ามาสิ");
let num2 = prompt("ใส่ตัวเลขตัวที่สองเข้ามาสิ");

//วิธีของเรา
// ต้องสลับลำดับ Check null ให้มาก่อนเพราะมันรันจากซ้ายไปขวา  null.trim() จะฟ้อง error
// if (num1 === null || num1.trimp().length || isNaN(+num1) === true ) {
//     alert("Invalid Number");
// }else if (num2 === null || num2.trimp().length || isNaN(+num2) === true ) {
//     alert("Invalid Number");
// }else {
//     alert(+num1 + +num2);
// }

//error ที่ใส่ค่า 0
// if (num1.trimp().length || num1 === null || !(+num1) ) {
//     alert("Invalid Number");
// }else if (num2.trimp().length || num2 === null || isNaN(+num2) === true ) {
//     alert("Invalid Number");
// }else {
//     alert(+num1 + +num2);
// }


//เฉลย
if (num1 === null || num2 === null) {
    alert("Invalid Number")
} else {
    if (num1.trimp() === "" || num2.trimp() === "" ) {
        alert("Invalid Number")
    } else {
        if( !isNaN(num1) && !isNaN(num2)) {
            alert(+num1 + +num2);
        } else {
            alert("Invalid Number")
        }
    }
}