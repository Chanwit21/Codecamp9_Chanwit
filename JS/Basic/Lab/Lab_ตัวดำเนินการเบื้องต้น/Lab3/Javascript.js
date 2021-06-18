console.log("จาก code ข้างล่างให้เขียน code เพื่อแปลง a, b และ c ให้เป็น Boolean แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ ")
console.log("ให้ console.log ตัวแปร d, e และ f ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร")
console.log("let a = undefined;")
console.log("let b = ' ';")
console.log("let c = !b;")
let a = undefined;
let b = ' ';
let c = !b;
let d = Boolean(a);
let e = Boolean(b);
let f = Boolean(c);
console.log(d);     //false //flase Boolean ของค่าที่ไม่ได้ใส่จะมีค่าเป็น false
console.log(e);     //false //true  Boolean ของค่าที่มี Spacebar เป็น True เพราะว่ามีตัวอักษรอยู่
console.log(f);     //true  //flase เพราะว่าเป็น  not true ของบรรทัดบน