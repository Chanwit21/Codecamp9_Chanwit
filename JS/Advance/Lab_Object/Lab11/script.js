// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร 
const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // *       // log Object {email: "cc@gmail.com", isActive: false}
  user = {};
  console.log(user); // **      // log Object {email: "cc@gmail.com", isActive: false} เพราะว่า const ไม่สามารถเปลี่ยนค่าได้
  