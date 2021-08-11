// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
function cloneArray(array) {
    return [...array];
}
console.log(cloneArray([1,2,3,4,5,6,7,8,9]))