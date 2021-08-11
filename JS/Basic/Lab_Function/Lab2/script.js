console.log("ให้สร้างตัวแปรเพื่อรับชื่อผู้ใช้งานจากการกรอกของผู้ใช้งาน")
console.log("ให้สร้างฟังก์ชันชื่อ sayHelloUser")
console.log("เมื่อเรียกใช้ฟังก์ชันให้ alert คำว่า “Hello ” ตามด้วยชื่อผู้ใช้งาน")

let user = prompt("Input Your Name");

function sayHelloUser(name) {
    alert("Hello " + name);
};

sayHelloUser(user);