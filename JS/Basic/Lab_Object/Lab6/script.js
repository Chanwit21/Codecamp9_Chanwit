// ให้เขียนโค้ดเพื่อรับค่า 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

const username = prompt("Enter Username");
const email = prompt("Enter Email");
const password = prompt("Enter Password");

const user = {
    username,
    email,
    password,
}
//อีกแบบ
const user1 = {
    username: username,
    email:email,
    password:password,
}