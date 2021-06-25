//ให้สร้างฟังก์ชัน login ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

function login(username = prompt("Input Your Username"),password = prompt("Input Your password")) {
    if (username === "admin" && password === "P@ssw0rd") {
        alert("Login สำเร็จ");
    } else {
        alert("login ไม่สำเร็จ");
    }
}

login();