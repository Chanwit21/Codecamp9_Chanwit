// ให้สร้างฟังก์ชันเพื่อเช็ค object ว่าเป็น object ว่างหรือไม่ 
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

const checkEmphasizeObject = (obj) => {
    let isEmphasize = true;
    for (let key in obj) {
        isEmphasize = false;
    }
    if (isEmphasize) return true;
    return false;
}