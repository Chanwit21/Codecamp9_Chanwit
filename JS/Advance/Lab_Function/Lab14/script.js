console.log(
  "ให้สร้างฟังก์ชัน max ซึ่งจะ return ค่ามากสุดของพารามิเตอร์ของฟังก์ชัน"
);
console.log("พารามิเตอร์มีได้มากสุด 4 ตัว");
console.log("เมื่อเรียกใช้งานต้องได้ผลลัพธ์ ดังนี้");
console.log("max(); // undefined");
console.log("max(2); // 2");
console.log("max(3, 1); // 3");
console.log("max(7, 3, 9, 2); // 9");
console.log("หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้ return NaN");

//แบบเรา
// function max(num1, num2, num3, num4) {
//     if (num1 === undefined && num2 === undefined && num3 === undefined && num4 === undefined) {
//         return undefined;
//     }
//     if (typeof(num1) === "string" || typeof(num2) === "string"|| typeof(num3)=== "string"|| typeof(num4) === "string"){
//         return NaN;
//     }
//     let result = num1;
//     if (num2 > result) {
//       result = num2;
//     }
//     if (num3 > result) {
//       result = num3;
//     }
//     if (num4 > result) {
//       result = num4;
//     }
//     return result;
// }

//เฉลย
// function isNumeric(str) {
//   return !(!str || str.trim() === "" || !+str);
// }

// function max(a,b,c,d) {
//     if (a === undefined) {
//         return undefined;
//     } else {
//         if(b === undefined) {
//             return isNumeric(a)? a:NaN;
//         } else {
//             if(c === undefined) {
//                 return (isNumeric(a)&& isNumeric(b))? ((a>b)?a:b):NaN;
//             } else {
//                 if (d === undefined){
//                     return (isNumeric(a)&& isNumeric(b) && isNumeric(c))? ((a>b && a>c)? a :(b>c)? b:c):NaN;
//                 } else {
//                     return (isNumeric(a)&& isNumeric(b) && isNumeric(c) && isNumeric(d))? ((a>b && a>c && a>d)? a :(b>c && b>d)? b:(c>d)?c:d):NaN;
//                 };
//             };
//         };
//     };
// }
