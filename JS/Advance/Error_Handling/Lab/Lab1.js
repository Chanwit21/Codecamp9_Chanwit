// ให้สร้าง obj ชื่อ user = { username: 'john', password: '1234', birthDate: '18/71/2000'}
// ให้เขียนเพื่อตรวจสอบว่าเงื่อนไขดังนี้
// password ต้องมีอย่างน้อย 6 ตัว
// วันเกิดเป็นวันที่ที่ถูกต้อง
// ให้เขียนโดยใช้ try … catch ถ้าเงื่อนไขไม่ถูกต้องให้ throw error และ log error message ออกมาใน console

class ValidateError extends Error {
  constructor(_message, _name) {
    super(_message);
    this.name = _name;
  }
}

try {
  const user = {
    username: 'john',
    password: '123456',
    birthDate: '18/71/2000',
  };

  if (user.password.length < 6) {
    throw new Error('Password Invalid Length');
  }
  // // ของเรา
  // console.log(new Date(user.birthDate).toString());
  // if (new Date(user.birthDate).toString() === "Invalid Date") {
  //   throw new Error("Birthdate is Invalid format");
  // }
  // ของพี่เอิร์ธ
  // console.log(new Date(user.birthDate).getTime());
  if (isNaN(new Date(user.birthDate).getTime())) {
    throw new Error('Birthdate is Invalid format', 'Go Go');
  }
} catch (err) {
  console.log(err);
}
