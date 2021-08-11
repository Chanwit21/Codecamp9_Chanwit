console.log("จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password")
console.log("หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”")
console.log("หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username")
console.log("หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”")

// white space เอาด้วย
// let username = prompt("input your username :");
// if (username === "" || username == null ) {
//     alert("username is required");
// };
// let password = prompt("input your password :");
// if (password === "" || password == null ) {
//     alert("password is required");
// };

// if ((username === "admin" && password === "1234") || (username === "john" && password === "qwerty")) {
//     alert(`Hello ${username}`);
// }else {
//     alert("invalid username or password");
// };

//เฉลย
// if (username === '' || username === null) {
//     alert("username is required");
// }else if (password === '' || password === null) {
//     alert("password is required");
// } else {
//     if (username === "admin" && password === "1234") {
//         alert(`Hello ${username}`);
//     } else if (username === "john" && password === "qwerty"){
//         alert(`Hello ${username}`);
//     } else {
//         alert("invalid username or password");
//     }
// }

if (username === '' || username === null) {
    alert("username is required");
}else if (password === '' || password === null) {
    alert("password is required");
} else {
    if ((username === "admin" && password === "1234") || (username === "john" && password === "qwerty")) {
        alert(`Hello ${username}`);
    } else {
        alert("invalid username or password");
    }
}