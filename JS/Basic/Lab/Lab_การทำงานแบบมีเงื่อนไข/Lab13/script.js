console.log("จงเขียนโค้ดรับ input โดยที่")
console.log("ถ้า input = 1 ให้ alert “One”")
console.log("ถ้า input = 0 ให้ alert “Zero”")
console.log("ถ้า input = -1 ให้ alert “Minus zero”")
console.log("ถ้าไม่ใช่ค่าที่กล่าวมาให้ alert “Invalid number”")
console.log("ให้เขียนโดยใช้ switch case")

let num = +prompt("ใส่ค่าระหว่า -1 ถึง 1");

switch (num) {
    case 1 :
        alert("One");
        break;
    case 0 :
        alert("Zero");
        break;
    case -1 :
        alert("Minus zero");
        break;
    default :
        alert("Invalid number")
}
