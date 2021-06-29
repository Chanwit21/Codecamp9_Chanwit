// ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

function sumNumber() {
  let Array = [];
  let length = 0;
  // กรอง NaN undefined null
  while (true) {
    let num = prompt("Enter Number");
    if (!num || num.trim() === "" || isNaN(+num)) {
      break;
    }
    Array[length] = +num;
    length++;
  }

  let result = 0;

  for (let value of Array) {
    result += value;
  }
  return result;
}

console.log(sumNumber())