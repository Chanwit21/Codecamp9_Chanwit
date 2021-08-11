// ให้เพิ่ม Method defer เข้าไปใน Prototype ของ Function โดยให้ได้ผลลัพธ์ตามด้านล่าง (Hint: setTimeout)
function f() {
  alert("Hello!");
}
Function.prototype.defer = function (ms) {
    return setTimeout(this,ms);
}
f.defer(1000); // shows "Hello!" after 1 second