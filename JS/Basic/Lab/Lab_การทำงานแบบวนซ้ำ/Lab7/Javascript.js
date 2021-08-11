console.log("ให้เขียนโค้ดแสดงสูตรคูณใน console ตั้งแต่ แม่ 2 ถึง แม่ 12")
console.log("2 x 1 = 2")
console.log("2 x 2 = 4")
console.log("...")
console.log("")
console.log("	* คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n ")

let result = "";

for (let i = 2; i < 13; i++ ) {
    for (let j = 1; j < 13; j++ ) {
        result += `${i} x ${j} = ${i*j} \n`
    };
    result += "\n";
};
console.log(result);