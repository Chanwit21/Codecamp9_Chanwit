// เฉลยใช้วิธีนี้
// function Calculator() {
//   this.read = function () {
//     this.num1 = +prompt("Enter First Number");
//     this.num2 = +prompt("Enter Secound Number");
//   };
//   this.sum = function () {
//     return this.num1 + this.num2;
//   };
//   this.mul = function () {
//     return this.num1 * this.num2;
//   };
// }

// วิธีนี้ยืดหยุ่นกว่า
function Calculator() {
  // ... your code ...
  this.read = function () {
    //ใส่ตัวเลขได้กี่ตัว
    // let round = +prompt("จำนวนตัวเลขที่ต้องการใส่");
    for (let i = 0; i < 2; i++) {
      this[`num${i}`] = +prompt(`Enter Number ${i + 1}`);
    }
  };
  this.sum = function () {
    let sum = 0;
    for (let key in this) {
      if (typeof this[key] === "number") sum += this[key];
    }
    return sum;
  };
  this.mul = function () {
    let mul = 1;
    for (let key in this) {
      if (typeof this[key] === "number") mul *= this[key];
    }
    return mul;
  };
}

let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
