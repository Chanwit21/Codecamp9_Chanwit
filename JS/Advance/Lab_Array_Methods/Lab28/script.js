// จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// ตัวอย่างผลลัพธ์
let arr = ['React', 'Vue', 'Angular'];


// function copySorted(array) {
//     let clone = [...array];
//     let result = clone.sort();
//     return result;
// }

// เฉลย
function copySorted(array) {
    // const result = arr.slice();
    // return result.sort();
    // return arr.slice().sort(); หรือใช้แบบนี้
}
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)