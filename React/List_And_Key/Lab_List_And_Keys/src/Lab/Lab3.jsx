import React from "react";

function Lab3() {
  const posts = [
    {
      id: 1,
      message: "I love my pig",
      date: "31/7/2021",
      author: "John",
      time: "00.01AM",
    },
    {
      id: 2,
      message: "I want to learn",
      date: "1/8/2021",
      author: "Benze",
      time: "09.01AM",
    },
    {
      id: 3,
      message: "Game over",
      date: "2/8/2021",
      author: "Bell",
      time: "10.01AM",
    },
    {
      id: 4,
      message: "The only thing I think about … is you.",
      date: "3/8/2021",
      author: "Bomb",
      time: "03.01AM",
    },
  ];
  return (
    <div className="Lab3">
      {posts.map(item => {
        return (
          <div className="box_of_post" key={item.id}>
            <div className="message">
              <h1>{item.message}</h1>
            </div>
            <div className="row_author_date_time">
              <div className="left">
                <span>{item.author}</span>
              </div>
              <div className="right">
                <span>{item.date}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Lab3;
