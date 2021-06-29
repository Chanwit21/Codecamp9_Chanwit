// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม
function ucFirst(str) {
    let result = "";
    result = str.slice(0,1).toUpperCase() + str.slice(1,str.length);
    return result;
}