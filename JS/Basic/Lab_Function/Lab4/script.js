console.log("บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร");
console.log("function sayHi(name) {");
console.log("    let name = 'Guest';");
console.log(
  "    console.log(name); // *     // เป็น 'Guest' เพราะว่ามันใช้ค่า local variable"
);
console.log("  }");
console.log("  ");
console.log("  sayHi('Jim');");

function sayHi(name) {
  let name = "Guest";
  console.log(name); // *     // เป็น 'Guest' เพราะว่ามันใช้ค่า local variable   //error เพราะว่าใน parameter ได้ประกาศตัวแปรไปแล้วมันมองว่าเป็นการประกาศตัวแปรซ้ำ
}
sayHi("Jim");
