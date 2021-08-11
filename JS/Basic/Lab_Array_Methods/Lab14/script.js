// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets
const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]
// const result = [];
// for (let i = 0; i < alphabets.length; i++ ){
//     if (alphabets[i] === 'a') {
//         result.push(i);
//     } 
// }
// console.log(result)


const indexes = [];
let idx = alphabets.indexOf('a');

while (idx !== -1) {
    indexes.push(idx)
    idx = alphabets.indexOf('a', idx + 1 );
}

console.log(indexes)