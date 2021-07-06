// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
function cloneObject(object) {
    return {...object};
};
const result = cloneObject({name:"BOMB",age:23})
console.log(result)