//ให้สร้างฟังก์ชัน login ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

let user = prompt("Input Your Username");
let pass = prompt("Input Your password")

// แบบที่ 1
function login(username = null,password = null) {
    if (username === "admin" && password === "P@ssw0rd") return true;
    return false;
}

// แบบที่ 2
function login(username = null,password = null) {
    return username === "admin" && password === "P@ssw0rd"
}

login(user,pass);