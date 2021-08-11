// จงเรียงข้อมูล object ใน arr โดยเรียงตามค่า age จากน้อยไปหามาก
const arr = [
  { name: "John", age: 25 },
  { name: "Leon", age: 26 },
  { name: "Mick", age: 29 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

const result = arr.sort((a,b) => a.age - b.age);
console.log(result)
