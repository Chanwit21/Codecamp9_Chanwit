//บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const square = (n) => {
  n ** 2;
};

console.log(square(7)); // *                    //undefined เพราะว่าไม่มี return
const calcCircleArea = r => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **           //28.274333882308138
