//ให้สร้างฟังก์ชัน min ของตัวเลข 2 ตัว ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของตัวเลขทั้งสอง

// ทางเลือกที่1
function min(num1,num2){
    if (num1 < num2) {
        return num1;
    }else {
        return num2;
    }
}

//แบบที่2
function min(num1,num2){
    if (num1 < num2) return num1;
    return num2;
}

//แบบที่3
function min(num1,num2){
    return num1 < num2 ? num1 : num2;
}