// ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

function sumNumber() {
  let Array = [];
  // กรอง NaN undefined null
  while (true) {
    let num = prompt("Enter Number");
    // isNaN Check ว่าเป็น ตัวอักษรหรือไม่กรณีเดียวเพราะก่อนหน้านี้กรองอย่างอื่นมาแล้ว
    if (!num || num.trim() === "" || isNaN(num)) {
      break;
    }
    Array[Array.length] = +num;
  }

  let result = 0;

  for (let value of Array) {
    result += value;
  }
  return result;
}

console.log(sumNumber());

//เฉลย
let Array1 = [];
// กรอง NaN undefined null
while (true) {
  let num1 = prompt("Enter Number");
  // isNaN Check ว่าเป็น ตัวอักษรหรือไม่กรณีเดียวเพราะก่อนหน้านี้กรองอย่างอื่นมาแล้ว
  if (num1  === null || num1 === '' || num1.trim() === "" || isNaN(num1)) break;
  Array1[Array1.length] = +num1;
}

let result1 = 0;
for (let i = 0; i < Array1.length; i++) {
  result1 += Array1[i];
}
console.log(result);