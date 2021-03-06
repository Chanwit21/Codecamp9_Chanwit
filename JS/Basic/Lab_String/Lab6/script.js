// จงเขียนฟังก์ชัน extractCurrencyValue(string, rate) ในการแปลงค่า string ที่อยู่ในรูปแบบสกุลเงินดอลลาร์ ให้อยู่ในรูปแบบสกุลเงินบาท
// rate คือ อัตราในการแปลงดอลลาร์ให้เป็นบาท
// ตัวอย่าง ผลลัพธ์ของฟังก์ชัน
// extractCurrencyValue('$120', 30); // THB3600

function extractCurrencyValue(string, rate) {
    return "THB" + (string.slice(1)*rate)
}

//เฉลย
function extractCurrencyValue1(string, rate) {
    if(!string) return string;
    return string.slice(1)*rate;
}

console.log(extractCurrencyValue('$120', 30));
console.log(extractCurrencyValue1('$120', 30));