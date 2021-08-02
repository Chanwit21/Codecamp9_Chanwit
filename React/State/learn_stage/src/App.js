import "./App.css";
import React, { useState } from "react";

function App() {
  //  ก้อน 4 บันทัดนี้ เวลามัน Re-render ใหม่ มันไม่ถือว่าเป็นการ Assign ค่าอีกรอบนึง แต่เป็นการเก็บ Stage ไว้ใน Memory
  // const result = useState("Hello React!!!");
  // console.log(result);
  // let state = result[0];
  // const update = result[1];

  //  ใช้  Destructuring ได้
  // const [message, setMessage] = useState("Hello React!!!");
  // const [title, setTitle] = useState("My Title");

  // แบบนี้ไม่ควรทำ
  // state = "You Click a Button";

  // // Wrong !!
  // console.log("App is Call");
  // let text = "Hello React";

  // function handleClick() {
  //   // แบบนี้ไม่ควรทำ
  //   // state = "You Click a Button";
  //   // update(state); Dont Do This

  //   // ต้องทำแบบนี้
  //   // update("You Click a Button");
  //   setMessage("You Click a Button");

  //   // Wrong!!แบบนี้ไม่ควรทำ
  //   // console.log("Clicked");
  //   // text = "You clicked a button";
  //   // console.log(text);
  // }

  // ในส่วนของ Jsx ควรที่จะ  Clean
  // return (
  //   <div>
  //     <h2>{message}</h2>
  //     <button onClick={handleClick}>Click To Change Text</button>
  //     <button onClick={() => setMessage("You click anonymus")}>
  //       Click anonymus
  //     </button>
  //   </div>
  // );

  //   const [count, setCount] = useState(0);

  //   const handleClickAdd = () => {
  //     // // ท่าปกติ
  //     // setCount(count + 1);

  //     // วิธีการ Update Stage แบบ Call Back function ได้เหมือนกัน แล้วรับ parameters state มาจาก setState ได้เลย
  //     setCount(currentstage => currentstage + 1);
  //   };

  //   const handleClickSubtract = () => {
  //     if (count > 0) {
  //       setCount(currentstage => currentstage - 1);
  //     }
  //   };

  //   const handleClickReset = () => {
  //     setCount(0);
  //   };

  //   return (
  //     <div className="container">
  //       <button onClick={handleClickAdd}>+</button>
  //       <span>{count}</span>
  //       <button onClick={handleClickSubtract}>-</button>
  //       <button onClick={handleClickReset}>reset</button>
  //     </div>
  //   );

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [birthDate, setBirthDate] = useState("");

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    birthDate: "",
  });

  return (
    <div>
      <h2>test</h2>
    </div>
  );
}

export default App;
