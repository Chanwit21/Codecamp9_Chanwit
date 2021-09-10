// ให้สร้างไฟล์ user.json
// ให้ใช้คำสั่ง readFile เพื่ออ่านไฟล์ users.json
// ถ้ามี error ให้ log error ออกมา
// ถ้าไม่มีให้ log ข้อมูลในไฟล์
const fs = require('fs');

fs.readFile('./user.json', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
