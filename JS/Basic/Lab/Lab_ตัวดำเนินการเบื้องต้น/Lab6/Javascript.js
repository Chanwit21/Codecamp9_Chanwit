console.log("ให้ระบุค่าของ a, b, c , d และ e หลังจากจบ statements ทั้งหมด")
console.log("let a = 1;")
console.log("let b = 2;")
console.log("let c = a++;")
console.log("let d = ++c;")
console.log("let e = ++d + d++ + d;")
let a = 1;                  // a = 1
let b = 2;                  // a =  1; b = 2;
let c = a++;                // a = 2; c = 1; b = 2;
//เหมือนกับ c = a; ก่อน และ a = a + 1;
let d = ++c;                // d = 2; c = 2; a = 2; b = 2;
//เหมือนกับ c = c+1; ก่อน และ d = c; ทีหลัง
let e = ++d + d++ + d;      // a = 2; b = 2; c = 2; e = 10 ; d = 4