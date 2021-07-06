// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
// คูณเฉพาะ value ที่เป็น number เท่านั้น
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj, num) {
  let result = {};
    for (let key in obj) {
        if (isNaN(obj[key]) || typeof(obj[key]) !== "number") {
          result[key] = obj[key];  
        } else {
          //ถ้า .key จะไปหา key ที่ชื่อ "key" เลยมาใส่
        result[key] = obj[key]*num;
      }
    }
    return obj;
}

console.log(multiplyNumeric(menu,3));

//เฉลย
// const multiplyNumeric = (obj,num) => {
//   let result = {};
//   for(let key in  obj) {
//     if (isNaN(obj[key])){
//       result[key] = obj[key];
//     } else {
//       result[key] = obj[key]*num;
//     }
//   }
//   return result;
// }