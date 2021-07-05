// จงหาค่ามากสุดและน้อยสุดใน arr
let array = [3.24, 2.78, 3.86, 1.37, 0.52];
// function sendMaxAndMin(arr) {
//     const clone = [...arr];
//     // const clone = arr.slice();
//     const sort = clone.sort(compareNumber);
//     function compareNumber(a,b) {
//         if (a > b) return 1;
//         if (a === b) return 0;
//         if (a < b) return -1;
//     }
//     return `max is ${sort[clone.length - 1 ]} min is ${sort[0]}`
// }

//เฉลย reduce
function sendMaxAndMin(arr) {
const result = arr.reduce((acc,item,index) => {
    if (index === 0) return {min: item ,max: item};         //return คือออกจาก callback function แต่ไม่ออกจาก Redude นะ
    if (item > acc.max) acc.max = item;
    if (item < acc.min) acc.min = item;
    return acc;
},{min:0,max:0})
return result;
};
console.log(sendMaxAndMin(array));