// จงเรียงข้อมูล object ใน arr โดยเรียงตามค่า age จากน้อยไปหามาก
const arr = [
  { name: "John", age: 25 },
  { name: "Leon", age: 26 },
  { name: "Mick", age: 29 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

function compareObjectAge(a, b) {
  if (a.age > b.age) return 1;
  if (a.age === b.age) return 0;
  if (a.age < b.age) return -1;
}

const result = arr.sort(compareObjectAge);
console.log(result)
