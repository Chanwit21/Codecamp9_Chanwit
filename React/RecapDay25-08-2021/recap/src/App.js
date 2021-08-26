import { useEffect, useState } from 'react';
import './App.css';

// function App() {
//   const [msg, setMsg] = useState('');
//   const [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     console.log('No dependencies');
//   });

//   useEffect(() => {
//     console.log('Blank Dependencies');
//   }, []);

//   useEffect(() => {
//     console.log(msg);
//   }, [msg]);

//   const handleChangeMsg = (e, text) => {
//     setMsg(text);
//     console.log(msg);
//     // console.log(e.target.innerText);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>
//         Message : <span>{msg}</span>
//       </h1>
//       <input
//         type="text"
//         value={msg}
//         onChange={e => setMsg(e.target.value)}
//         readOnly={toggle}
//       />
//       <input
//         type="text"
//         value={msg}
//         onChange={e => setMsg(e.target.value)}
//         disabled={toggle}
//       />
//       <br />
//       <button onClick={e => handleChangeMsg(e, 'one')}>one</button>
//       <button onClick={e => handleChangeMsg(e, 'two')}>two</button>
//       <button onClick={e => handleChangeMsg(e, 'three')}>three</button>
//       <button onClick={e => setToggle(current => !current)}>Toggle</button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClickCount = e => {
//     // setCount(count + 1);
//     // setCount(count + 1);
//     // setCount(count + 1);

//     setCount(current => current + 1);
//     setCount(current => current + 1);
//     setCount(current => current + 1);
//   };
//   return (
//     <div>
//       <h1>Welcome to React</h1>
//       <h3>{new Date().toString()}</h3>
//       <button onClick={handleClickCount}>Counter : {count}</button>
//     </div>
//   );
// }

function App() {
  return <div></div>;
}

export default App;
