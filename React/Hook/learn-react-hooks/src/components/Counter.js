import React, { useEffect, useState } from 'react';

function Counter() {
  const [secound, setSecound] = useState(0);

  // Clean Up Effect
  useEffect(() => {
    const id = setInterval(() => {
      setSecound(current => current + 1);
    }, 1000);

    //  clean Up effect ให้ใส่ Return in useEffect เป็น Function
    // เพื่อให้เวลาที่ Component ที่เรียกใช้ Effect หายไปจาก Dom ให้ ยกเลิก Effect ของมันด้วย
    // Function ที่ return ออกไปจะทำงานหลังจาก Component นั้นถูก Unmount หรือ Remove ออกจาก DOM
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>{secound}</h1>
    </div>
  );
}

export default Counter;
