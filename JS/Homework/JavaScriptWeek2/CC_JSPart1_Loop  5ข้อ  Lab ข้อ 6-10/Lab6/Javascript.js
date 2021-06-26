console.log("ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง ใน console โดยใช้ loop")
console.log("*")
console.log("*	*")
console.log("*	*	*")
console.log("*	*	*	*")
console.log("")
console.log("	* คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n ")

let string = "";

for (let i = 0 ; i < 4; i++) {
    for (let j = 0; j <= i ; j++ ) {
        string += "*  ";
    };
    string += "\n";
}
console.log(string);