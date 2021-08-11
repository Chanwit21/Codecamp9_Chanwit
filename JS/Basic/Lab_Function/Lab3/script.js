console.log("บรรทัด *, **, *** และ **** ให้ผลลัพธ์เป็นอะไร เพราะอะไร")
console.log("let message = 'Welcome to Thailand';")
console.log("")
console.log("function logMessage(message) {")
console.log("  message = 'Hello everybody';")
console.log("  console.log(message); // *")
console.log("}")
console.log("")
console.log("logMessage(message);")
console.log("console.log(message); // **")
console.log("")
console.log("let name = 'John';")
console.log("")
console.log("function sayHi(input) {")
console.log("  console.log(name); // ***  ")
console.log("  name = input;  ")
console.log("}")
console.log("")
console.log("sayHi();")
console.log("console.log(name); // ****")


let message = 'Welcome to Thailand';

function logMessage(message) {      //message ในวงเล็บเหมือนเป็นการประกาศตัวแปรเป็น Lacal variable แล้ว
  message = 'Hello everybody';
  console.log(message); // *        //เป็น 'Hello everybody' เพราะว่าในฟังก์ชันมันยึง local variable มากกว่า
}

logMessage(message);
console.log(message); // **         //เป็น 'Welcome to Thailand' เพราะว่ามันใช้ค่า Outer variable



let name = 'John';

function sayHi(input) {
  console.log(name); // ***         // เป็น 'John' เพราะใช้ Outer variable ก่อนยังไม่ได้ Assign ค่าใหม่
  name = input;  
}

sayHi();
console.log(name); // ****          //เป็น undefined เพราะว่าค่า input ยังไม่ได้ใส่
