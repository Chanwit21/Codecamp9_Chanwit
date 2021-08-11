// จงเขียนฟังก์ชัน unique(arr) ให้คืนค่าเป็น array ที่มี element ไม่ซ้ำกัน โดยใช้ Set
const values = [1, 4, 8, 2, 1, 3, 3, 8];
function unique(arr) {
    const array = new Set(arr);
    const result = [];
    
    for (let value of array.values()) {
        result.push(value);
    }
    return result;
}
console.log(unique(values)); // [1, 4, 8, 2, 3]

function unique2(arr) {
    return Array.from(new Set(arr));
}
console.log(unique2(values));