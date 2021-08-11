// จงหาผลรวมของ element ใน array โดยใช้ forEach
const array = [29, 17, 13, 47, 23, 31];
let sum = 0;
const sumNumber = (item) => sum += item;
array.forEach(sumNumber)
console.log(sum);