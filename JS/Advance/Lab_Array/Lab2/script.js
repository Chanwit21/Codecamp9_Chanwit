// ผลลัพธ์ในบรรทัด * มีค่าเป็นอะไรและเพราะอะไร
const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // *            // เป็น 3 เพราะอ้างอิงถึง address เดียวกัน