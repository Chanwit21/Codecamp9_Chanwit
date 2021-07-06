// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10 
// sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// subtract() ให้รับค่าตัวเลขและหักออกจาก value
// multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// divide() ให้รับค่าตัวเลขและนำไปหาร value
// show() ให้ alert ค่า value
class Calculator {
    value = 0;
    constructor (props){
        this.value = props;
    };
    sum(num) {
        return this.value + num;
    };
    subtract(num1) {
        return this.value - num1;
    };
    multiply(num2) {
        return this.value * num2;
    };
    divide(num3) {
        return this.value/num3;
    };
    show() {
        return alert(this.value);
    }
}

const cal = new Calculator(10);
console.log(cal.sum(5))
console.log(cal.subtract(5))
console.log(cal.multiply(5))
console.log(cal.divide(5))
console.log(cal.show())