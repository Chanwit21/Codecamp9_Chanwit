// console.log('A');
// setTimeout(() => console.log('B'), 1000);
// console.log('C');

console.log('A');
const id = setInterval(() => {
  console.log('*');
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 10000);
console.log('B');
