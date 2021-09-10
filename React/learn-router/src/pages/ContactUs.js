import React from 'react';

function ContactUs(props) {
  console.log(props);
  //   history match location ที่ส่งผ่าน Props ส่งมาแค่ชั้นเดี๋ยวที่เป็นหน้า Parent เท่านั้น ถ้าเราจะใช้ในหน้าของหลันๆ ต้องใช้ Hooks  ของมัน
  return <h1>ContactUs</h1>;
}

export default ContactUs;
