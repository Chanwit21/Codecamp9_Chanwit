// จงสร้าง Set เก็บไว้ในตัวแปรชื่อ set
// เพิ่ม value เข้าไปใน set ตามลำดับดังนี้ Thailand, Japan, Thailand, China, India, Thailand, China, Singapore, Japan
// ลบ india ออกจาก set
// หาจำนวนของข้อมูลใน set
// สร้างตัวแปร array โดยมี element เป็นข้อมูลใน set ทั้งหมด


const set = new Set()
set.add("Thailand")
set.add("Japan")
set.add("Thailand")
set.add("China")
set.add("India")
set.add("Thailand")
set.add("China")
set.add("Singapore")
set.add("Japan")
console.log(set);
set.delete("India");
console.log(set.size);

let arr = [];
for (let value of set.values()) {
    arr.push(value);
}
console.log(arr);

//เฉลย
let arr1 = Array.from(set)
let arr2 = [...set]
let arr3 = new Array(...set)
console.log(arr2);