// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง
function changeIndex3OfArray(array1) {
    clone = [...array1];
    if (clone[3]){
        clone[3] = clone[3]**2;
    }
    return clone;
}
console.log(changeIndex3OfArray([1,2,3,4,5,6,7,8]));
console.log(changeIndex3OfArray([1,2,3]));