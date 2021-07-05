// ให้สร้าง Object calculator ซึ่งมี 3 method
// read() ให้รับค่า input 2 ค่า
// sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// วิธีเฉลย
// let calculator = {
//   // ... your code ...
//   read() {
//       this.num1 = +prompt("Enter First Number");
//       this.num2 = +prompt("Enter Secound Number");
//   },
//   sum() {
//       return this.num1+this.num2
//   },
//   mul() {
//     return this.num1*this.num2
//     },
// };

// วิธีนี้ยืดหยุ่นกว่า
let calculator = {
  read() {
      for(let i = 0; i < 2; i++ ) {
          this[`num${i}`] = +prompt(`Enter Number ${i+1}`)
      }
  },
  sum() {
      let sum = 0;
      for (let key in this) {
          if(typeof(this[key]) === "number" ) sum += this[key];
      }
      return sum
  },
  mul() {
    let mul = 1;
      for (let key in this) {
        if(typeof(this[key]) === "number" ) mul *= this[key];
      }
      return mul
    },
};


calculator.read();
alert(calculator.sum());
alert(calculator.mul());
