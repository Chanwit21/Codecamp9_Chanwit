// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไรเพราะอะไร
function sayHi(age) {
    if (age < 12) alert('Hi kid');
  }
  console.log(sayHi); // *          //log function ว่าข้างในคืออะไร
  console.log(sayHi(10)); // **     // alert 'Hi kid' และ log undefined เพราะว่าไม่ return ค่า


function sayHi(name) {
  if (name) {
    alert('Hi ' + name);
    return;
  } else {
    return 'Who are you';
  }
}
console.log(sayHi('John')); // ***  //Alert "Hi John " และ Log Undefined
console.log(sayHi()); // ****       //log 'Who are you' เพราะ name เป็น Undefined