import React from "react";

function Lab2() {
  const posts = [
    {
      id: 1,
      message: "I love my pig",
      date: "31/7/2021",
      author: "John",
      time: "00.01 AM",
    },
    {
      id: 2,
      message: "I want to learn",
      date: "1/8/2021",
      author: "Benze",
      time: "09.01 AM",
    },
    {
      id: 3,
      message: "Game over",
      date: "2/8/2021",
      author: "Bell",
      time: "10.01 AM",
    },
    {
      id: 4,
      message:
        "ไม่รู้ทำไม ทุกครั้งที่ตื่นมาตอนเช้าสิ่งๆแรกที่ฉันนั้นคิด the only thing I think about … is you",
      date: "3/8/2021",
      author: "Bomb",
      time: "03.01 AM",
    },
  ];
  return (
    <div style={{ paddingTop: "50px" }}>
      <ul style={{ width: "50%", margin: "0 auto" }}>
        {posts.map(item => (
          <li
            key={item.id}
          >{`id is ${item.id},message is ${item.message}, date is ${item.date},author is ${item.author}, time is ${item.time}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lab2;
