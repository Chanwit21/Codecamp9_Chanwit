console.log("ประกาศตัวแปรเป็น const ชื่อ firstName ให้ค่าเป็นชื่อจริงตัวเอง")
console.log("ประกาศตัวแปรเป็น let ชื่อ lastName ให้ค่าเป็นนามสกุลตัวเอง")
console.log("ประกาศตัวแปรเป็น var ชื่อ nickname ให้ค่าเป็นชื่อเล่นตัวเอง")
console.log("ประกาศตัวแปรทั้ง 3 ซ้ำอีกรอบโดยใช้ชื่อตัวแปรเดิม และให้ใส่ข้อมูลของเพื่อนลงในตัวแปร")
console.log("ประกาศตัวแปรชื่อ birthDateโดยไม่ต้องใช้ const let หรือ var นำหน้าชื่อตัวแปร ให้ค่าเป็นวันเกิดของตัวเอง")
const firstName = "Chanwit";
let lastName = "Pansila";
var nickname = "Bomb";
//const firstName = "Prayut"; //Uncaught SyntaxError: Identifier 'firstName' has already been declared
//let lastName = "HaHa"; //Uncaught SyntaxError: Identifier 'lastName' has already been declared
var nickname = "My Life"; //ใส่ค่าใหม่ไปได้
birthDate = "11-08-1998"; //ใส่ค่าไปได้ แต่ไม่ควรทำอย่างยิ่งเพราะจะมีปัญหาเรื่อง Scope
console.log(firstName)
console.log(lastName)
console.log(nickname)
console.log(birthDate)