// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]
function mergeArr(arr) {
    const result = arr.reduce(function (accumulator,item) {
        accumulator = accumulator.concat(item)
        return accumulator;
    },[])
    return result;
}

console.log(mergeArr(flattened))