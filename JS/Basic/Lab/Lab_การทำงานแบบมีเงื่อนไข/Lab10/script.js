console.log("เปลี่ยน if-else ให้อยู่ในรูป");
console.log("ของ Ternary Operators");
console.log("let login = prompt('Enter username');");
console.log("let message;");
console.log("if (login == 'Employee') {");
console.log("  message = 'Hello';");
console.log("} else if (login == 'Director') {");
console.log("  message = 'Greetings';");
console.log("} else if (login == '') {");
console.log("  message = 'No login';");
console.log("} else {");
console.log("  message = '';");
console.log("}");

let login = prompt("Enter username");
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

alert(message);
