// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
// คูณเฉพาะ value ที่เป็น number เท่านั้น
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj, num) {
    for (let key in obj) {
        if (typeof(obj[key]) !== "number") continue;  //ถ้า .key จะไปหา key ที่ชื่อ "key" เลยมาใส่
        obj[key] = obj[key]*num;
    }
}

console.log(multiplyNumeric(menu,3));