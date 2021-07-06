// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *                              //[10, 30, 20] เพราะว่ามีการใช้ Destructuring ในการสลับค่ากัน
