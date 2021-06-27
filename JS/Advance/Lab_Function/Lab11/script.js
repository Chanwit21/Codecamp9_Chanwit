// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไรเพราะอะไร
function sayHi(age) {
    if (age < 12) alert('Hi kid');
  }
  console.log(sayHi); // *          //log function ว่าข้างในคืออะไร
  console.log(sayHi(10)); // **     // alert 'Hi kid' และ log undefined เพราะว่าไม่ return ค่า
  