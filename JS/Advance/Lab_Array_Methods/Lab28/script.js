// จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// ตัวอย่างผลลัพธ์
let arr = ['React', 'Vue', 'Angular'];
function copySorted(array) {
    let clone = [...array];
    function compareString(a,b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }
    let result = clone.sort(compareString)
    return result;
}
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)