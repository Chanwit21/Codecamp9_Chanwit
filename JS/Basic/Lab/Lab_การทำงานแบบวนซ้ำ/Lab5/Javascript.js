console.log("ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี ")
console.log("โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป เมื่อครบ 10 ปี ")
console.log("จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก) ")

let initialNumber = 100000;
let interest = 2.5;
let result = initialNumber;

for (i = 1; i < 10; i++ ) {
    result = result*(100 + +interest.toFixed(1))/100;
};

console.log(result);