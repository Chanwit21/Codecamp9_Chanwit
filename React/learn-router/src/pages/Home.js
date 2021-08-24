import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <h1>Home</h1>
      {/*  ใส่ optional chaining ไว้เผื่อว่าค่าที่ส่งมายังไม่เจอและเป็น Undefined */}
      <p>Welcome Back !! you have {location.state?.point} point</p>
    </>
  );
}

export default Home;
