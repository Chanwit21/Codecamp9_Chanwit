import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// let i = 1;

function App() {
  // const [count, setCount] = useState(0);
  // const [languge, setLanguge] = useState('THAI');
  const [users, setUsers] = useState([
    {
      id: 0,
      name: 'John',
      username: 'johndoe',
      phone: 1234567890,
    },
  ]);

  // Don't Have Dependency
  // useEffect(() => {
  //   console.log(i);
  //   console.log('Effect Call');
  //   i++;
  //   document.title = `You Click ${count} time`;
  // });
  // // ถ้าไม่ใส่ Dependency Array ทุกครั้งที่มีการ rerender จะเรียกใช้ useEffect ที่ไม่ใส่ Dependency Array

  // For Watch Dependency
  // useEffect(() => {
  //   console.log(i);
  //   console.log('Effect Call');
  //   i++;
  //   document.title = languge === 'THAI' ? 'สวัสดี รีแอค' : 'Hello React ';
  //   // const getPost = async url =>{
  //   //   try{
  //   //     const res = await axios.get(url)
  //   //     console.log(res.data)
  //   //   }catch (err){
  //   //     console.log(err)
  //   //   }
  //   // }
  //   // getPost('https://jsonplaceholder.typicode.com/posts')
  // }, [count, languge]); // ถ้าใส่ dependency List เป็น Array เปล่า Effect จะทำงานแค่ครั้งแรกครั้งเดียว ที่ render Component
  // // ถ้าใส่เป็น Count เมื่อ Count เกิดการเปลี่ยนแปลง Effect จะทำงาน ค่า ที่อยู่ใน Depemdency Array จะเป็นตัวที่ useEffect สังเกตุว่า ตัวไหนเปลี่ยนแปลงปล้วจะทำงาน

  //  For Call API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {/* <h1>Hello useEffect</h1>
      <button onClick={() => setCount(current => current + 1)}>Click</button>
      <button
        onClick={() =>
          setLanguge(current => (current === 'THAI' ? 'ENG' : 'THAI'))
        }
      >
        Change Languge
      </button> */}
      <ul>
        {users.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
