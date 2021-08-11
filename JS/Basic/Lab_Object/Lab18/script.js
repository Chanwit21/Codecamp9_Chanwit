// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร 
var name = 'Joe';           //การใช้ var จะเหมือนกับการประกาศว่า window.name = "Joe" window == window object 
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();                  // บันทัดนี้เหมือน user = { name: 'John',ref: window}; this จะหมายถึง window object เพราะการประกาศตัวแรไว้ข้างนอกเหมือนกับการประกาศตัวแปรไว้ที่ Widow object 
console.log(user.ref.name); // *        //log Joe ออกมา user.ref คือ this this คือ window  ดังนั้น user.ref.name จึงได้ Joe เพราะว่า var name = 'Joe';