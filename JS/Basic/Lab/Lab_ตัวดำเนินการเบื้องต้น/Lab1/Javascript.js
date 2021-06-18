console.log("จาก code ข้างล่างให้เขียน code เพื่อแปลง a, b และ c ให้เป็น String แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ ")
console.log("ให้ console.log ตัวแปร d, e และ f ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร")
console.log("let a = undefined;")
console.log("let b = 2;")
console.log("let c = a++;")
let a = undefined;
let b = 2;
let c = a++;
let d = String(a);
let e = String(b);
let f = String(c);
console.log(d)      //ได้ NaN ก่อนลงมาที่บรรทัด let d = String(a); ได้เกิด a++ มันเจอ undefined++ เลยได้ NaN
console.log(e)      //ได้ "2" เพราะมันนำคำว่า 2 ไปใส่ใน Qoute
console.log(f)      //ได้ NaN เพราะว่า มันคือ undefined++
