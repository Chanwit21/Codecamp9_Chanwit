// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
const mul = (...arr) => {
    let result = 1;
    for (let value of arr) {
        if (!value || !value.trim() || isNaN(value) ){
            result *= value;
        }
    }
    return result;
}

