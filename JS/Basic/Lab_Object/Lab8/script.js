// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย จนกว่าจะกด 0

//อย่าลืมเช็ค Error ที่เกิดจากเครื่องมือ เพราะว่า key ของ Object ต้องเป็น string เท่านั้น
const fruit = {};
while (true) {
  let key = prompt("Enter fruit");
  if (key.toLowerCase() === "stop") break;
  let value = prompt("Enter amout");
  if (value.toLowerCase() === "stop") break;
  if (key && key.trim()) {
    //เช็คว่า key ไม่เป็น NaN undefined Null ""(String ว่า ) "      " (white Space)
    if (value > 1) key = key + "s";
    fruit[key] = value;
  } else {
    alert("Invalid Key");
  }
}

//เฉลย

let fruit = {};

while (true) {
    let key = prompt("Enter fruit");
    if (key.toLowerCase() === "stop") break;
    let value = prompt("Enter amout");
    if (value.toLowerCase() === "stop") break;
    if (key && key.trim()) {
      //เช็คว่า key ไม่เป็น NaN undefined Null ""(String ว่า ) "      " (white Space)
      if (value > 1) key = key + "s";
      fruit[key] = value;
    } else {
      alert("Invalid Key");
    }
  }
