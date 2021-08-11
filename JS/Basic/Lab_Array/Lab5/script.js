// ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// ตัวอย่างผลลัพธ์
const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]

// function squareArr(arr){
//     let result = [];
//     for (let index in arr) {
//         result[index] = Math.pow(arr[index],2);
//     }
//     return result;
// }

//อีกแบบ
function squareArr(arr){
    let result = [];
    for (let i = 0; i < arr.length ; i++) {
        result[i] = Math.pow(arr[i],2);
    }
    return result;
}
console.log(squareArr(arr));