// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร 
var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();                  // บันทัดนี้เหมือน user = { name: 'John',ref: this};
console.log(user.ref.name); // *        //log John ออกมา user.ref คือ this this คือ user คือ { name: 'John',ref: this}; ดังนั้น user.ref.name จึงได้ John