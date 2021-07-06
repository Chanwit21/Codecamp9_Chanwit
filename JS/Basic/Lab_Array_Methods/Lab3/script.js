// จงสร้างตัวแปร Array ชื่อ animals โดยมี element 3 ตัว คือ Dog, Cat, Rat
// ให้เพิ่ม Fish ต่อท้ายเข้าไปใน animals
// ให้เพิ่ม Horse เข้าไปข้างหน้า animals
// ให้เพิ่ม Giraffe และ Snake ต่อท้าย animals โดยต้องเพิ่มเข้าไปพร้อมกัน
// ให้เอา Horse ออกจาก animals
// ให้เอา Snake ออกจาก animals
// ให้เอา Dog ออกจาก animals
// ผลลัพธ์สุดท้ายของ animals คืออะไร

let Array = ["Dog","Cat","Rat"];
Array.push("Fish");
Array.unshift("Horse");
Array.push("Giraffe","Snake");
Array.shift();
Array.pop();
Array.shift();
console.log(Array);                 // ["Cat","Rat","Fish","Giraffe"]
