console.log("ให้สร้างตัวแปร a มีค่า 0 ")
console.log("ให้เพิ่มค่า a อีก 1 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Increment")
console.log("ให้เพิ่มค่า a อีก 3 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Modify-in-place")
console.log("ให้คูณ a ด้วย 17 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Modify-in-place")
console.log("ให้หารเอาเศษ a ด้วย 7 แล้วเก็บค่าไว้ใน a โดยใช้วิธี Modify-in-place")
console.log("ผลลัพธ์สุดท้ายของ a คือเท่าไหร ")
let a = 0;
a++;
a += 3;
a *= 17;
a %= 7;
console.log(a); // 5