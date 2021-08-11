console.log("เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators")
console.log("let age = prompt('How old are you');")
console.log("let message;")
console.log("if (age >= 18) {")
console.log("  message = 'Allowed';")
console.log("} else {")
console.log("  message = 'Not allowed';")
console.log("}")

let age = prompt('How old are you');
let message = (age >= 18)?'Allowed' : 'Not allowed';

alert(message);

