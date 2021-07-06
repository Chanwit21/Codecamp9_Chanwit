// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // *           // Hi, Pete เพราะว่ามันถูกเปลี่ยนค่า name แล้ว Function ดึง Global Scope ไปใช้
