console.log("จาก code ข้างล่างให้เขียน code เพื่อแปลง a, b และ c ให้เป็น Number แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ ")
console.log("ให้ console.log ตัวแปร d, e และ f ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร")
console.log("let a = undefined;")
console.log("let b = null;")
console.log("let c = b + '4 2';")
let a = undefined;
let b = null;
let c = b + '4 2';
let d = Number(a);
let e = Number(b);
let f = Number(c);
console.log(d);     // NaN มันพยายามแปลง undefined ให้เป็นตัวเลขเลยได้ค่า NaN
console.log(e);     // 0 มันแปลงจากค่าว่างๆให้เป็น 0 
console.log(f);     // c ได้เป็น 'null4 2' Number ของ String คือ NaN
