// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values และ Object.entries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let result1 = 0;
for (let key of Object.keys(salaries)) {
    result1 += salaries[key];
}
console.log(result1)

let result2 = 0;
for (let value1 of Object.values(salaries)) {
    result2 += value1;
}
console.log(result2)

let result3 = 0;
// for (let [key2,value2] of Object.entries(salaries)) {
//     result3 += value2;
// }
//เฉลย
for (let entries of Object.entries(salaries)) {
    result3 += entries[1];
}
console.log(result3)
