//บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();

// เหมือนกับ 
// const answer = function (x) {
//   return x * 42;
// };

// console.log(answer); // *               //log function ที่ return เข้ามา
// console.log(answer(1337)); // **        //1337*42 = 56154 
// console.log(magic(1337)(42)); // ***    //42*42 = 1764 เพราะว้ามันเรียกใช้ magic(1337) parameter 1337 ไม่ได้นำไปใช้ เพราะในฟังก์ชั่นไม่ได้บอกให้เรียกใช้ แล้ว return function ภายในเข้ามา แล้ว assign x = 42 เข้าไปใน Function ได้ผลลัพเป็น 42*42
