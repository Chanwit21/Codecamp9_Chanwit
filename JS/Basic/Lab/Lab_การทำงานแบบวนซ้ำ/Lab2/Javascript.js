console.log("โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม")
console.log("1.")
console.log("let i = 0;")
console.log("while (++i < 5) alert(i);")
console.log("2.")
console.log("let i = 0;")
console.log("while (i++ < 5) alert(i);")


// let i = 0;
// while (i++ < 5) alert(i); // ก่อนไป alert มันได้เพิ่มค่าไปก่อนแล้วแต่ตัวนี้ในวงเล็บเริ่มจาก 0 

let i = 0;
while (++i < 5) alert(i);   // ก่อนไป alert มันได้เพิ่มค่าไปก่อนแล้วแต่ตัวนี้ในวงเล็บเริ่มจาก 1 

//ตอบไม่เหมือน 1.ได้ 1 2 3 4 5 2.ได้  1 2 3 4