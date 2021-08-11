// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10
const obj = { prop: 5, prop2: 10 };
const {prop:a,prop2:b} = obj;
console.log(a)
console.log(b)