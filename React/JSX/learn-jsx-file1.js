// 1
// const nickName = 'Bomb'
// const age = 23
// const user = {
//   firstname: "Chanwit",
//   lastname: "Pansila",
//   age: 23
// }

// const getFullName = (input) => {
//   return `${input.firstname} ${input.lastname}`
// }
// const element = <h1>Hello JSX {nickName}, {age} years old, {getFullName(user)}.</h1>;

// const user = {
//   firstname: "Chanwit",
//   lastname: "Pansila",
//   age: 23,
// };

// 2
// const getGreeting = (input) => {
//   if (input)
//     return (
//       <h1>
//         Hello {input.firstname} {input.lastname}
//       </h1>
//     );
//   return <h1>Hello Stranger</h1>;
// };
// ReactDOM.render(getGreeting(), rootElement);

// 3
// const style = { 
//   border: "1px solid blue", 
//   fontSize: "48px", 
//   color: "cyan" }
// const element = (
//   <div
//     id="container"
//     className="main-container"
//     style={{ border: "1px solid green", padding: "1rem", margin: "0.5rem" }}
//   >
//     <h1 
//     className="main-header" 
//     style={style}
//     >Hello React</h1>
//     <p>React Lesson</p>
//     <label htmlFor="input">Input</label>
//     <input type='text' id='input'/>
//   </div>
// );

// const rootElement = document.querySelector("#root");
// ReactDOM.render(element, rootElement);

// 4 React Fragment <> </> เพื่อให้ Fragment มันทำตัวเป็น Main Parent element เลยแล้ทำให้ JSX รันผ่านได้ Parent Element จะต้องมีอันเดียวเสมอ
// const style = { 
//   border: "1px solid blue", 
//   fontSize: "48px", 
//   color: "cyan" }
// const element = (
//   <>
//   <div className="header">Header</div>
//   <div
//     id="container"
//     className="main-container"
//     style={{ border: "1px solid green", padding: "1rem", margin: "0.5rem" }}
//   >
//     <h1 
//     className="main-header" 
//     style={style}
//     >Hello React</h1>
//     <p>React Lesson</p>
//     <label htmlFor="input">Input</label>
//     <input type='text' id='input'/>
//   </div>
//   </>
// );

// const rootElement = document.querySelector("#root");
// ReactDOM.render(element, rootElement);

// 5 Boolean null undefined obj JSX สามารถ Renderออกมาหน้าเว็บได้แค่ค่าของ String หรือ Number เท่านั้น className กับ style ใส่เป็น obj ได้
const boo = true;
const nul = null;
const undefin = undefined;
const str = 'String';
const num = 10;
const obj = {
  fname:'Chanwit',
  lname: 'Pansila'
}

const element = (
  <h1>{boo}</h1>
  );
const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);