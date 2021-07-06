// จงเขียนฟังก์ชัน truncate(str, length) เพื่อตัดข้อความ ถ้าหากข้อความมีความยาวมากกว่ากำหนด ให้ตัดความยาวของข้อความให้เท่ากับความยาวที่กำหนดแล้วต่อท้ายด้วย …
// ถ้าความยาวข้อความสั้นกว่าความยาวที่กำหนดให้ return เป็นข้อความเดิม
// ตัวอย่าง ผลลัพธ์ของฟังก์ชัน
// truncate("What I'd like to tell on this topic is:", 20); // What I'd like to te…
// truncate("Hi everyone!", 20); // Hi everyone!

function truncate(str, length) {
  if (str.length < length) {
    return str;
  } else {
    return str.slice(0, length - 1) + "...";
  }
}

//เฉลย
function truncate1(str, length) {
  if (!str || str.length < length) return str;
  return str.slice(0, length - 1) + "...";
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
