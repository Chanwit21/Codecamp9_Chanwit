console.log("ให้สร้างฟังก์ชัน max ซึ่งจะ return ค่ามากสุดของพารามิเตอร์ของฟังก์ชัน")
console.log("พารามิเตอร์มีได้มากสุด 4 ตัว")
console.log("เมื่อเรียกใช้งานต้องได้ผลลัพธ์ ดังนี้")
console.log("max(); // undefined")
console.log("max(2); // 2")
console.log("max(3, 1); // 3")
console.log("max(7, 3, 9, 2); // 9")
console.log("หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้ return NaN")

function max(num1=NaN,num2,num3,num4) {
    let result = num1;
    if (num2 > result) {
        result = num2;
    }
    if (num3 > result) {
        result = num3;
    }
    if (num4 > result) {
        result = num4;
    }
    return result;
}
