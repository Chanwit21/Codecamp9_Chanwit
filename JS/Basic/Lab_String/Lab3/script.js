// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม

function ucFirst(str) {
    if (!str1) return str;
    let result = "";
    result = str.slice(0,1).toUpperCase() + str.slice(1,str.length);
    return result;
}

//เฉลย
function ucFirst1(str1) {
    if (!str1) return str1;
    return str1[0].toUpperCase() + str1.slice(1);
}

console.log(ucFirst1('sDoa'))