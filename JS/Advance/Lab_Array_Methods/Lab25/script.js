// จงเรียงข้อมูลใน arr จากมากไปหาน้อย
const arr = [11, 17, 23, 13, 7, 19];

function compareNumeric(a, b) {
  if (a < b) return 1;
  if (a === b) return 0;
  if (a > b) return -1;
}
const result = arr.sort(compareNumeric);
const result1 = arr.sort((a,b) => b-a);
console.log(result)
console.log(result1)
