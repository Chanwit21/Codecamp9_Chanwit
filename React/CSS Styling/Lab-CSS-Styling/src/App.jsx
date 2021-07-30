import React, { useState } from "react";
import "./App.css";
import ListBoxLab4Component from "./Component/ListBoxLab4Component";
import PlayerComponentLab3 from "./Component/PlayerComponentLab3";

// // Lab1
// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     const update = count + 1;
//     setCount(update);
//   }

//   function decreaseCount() {
//     if (count > 0) {
//       const update = count - 1;
//       setCount(update);
//     }
//   }

//   function resetCount() {
//     setCount(0);
//   }

//   return (
//     <div className="App">
//       <div className="lab1">
//         <button className="btn btn-increase" onClick={increaseCount}>
//           +
//         </button>
//         <h1>{count}</h1>
//         <button className="btn btn-decrease" onClick={decreaseCount}>
//           -
//         </button>
//         <button className="btn btn-reset" onClick={resetCount}>
//           reset
//         </button>
//       </div>
//     </div>
//   );
// }

// // Lab2
// function App() {
//   const [text, setText] = useState("");
//   const [list, setList] = useState([]);
//   const [editStatus, setEditStatus] = useState(false);
//   const [textToEdit, setTextToEdit] = useState("");

//   function addList(e) {
//     setList([...list, text]);
//     setText("");
//   }

//   function deleteList(index) {
//     const listUpdate = list.filter(item => item !== list[index]);
//     setList(listUpdate);
//   }

//   function editList(index) {
//     const initialText = list[index];
//     setTextToEdit(initialText);
//     setEditStatus(true);
//   }

//   function saveEditList(index) {
//     list[index] = textToEdit;
//     const updateList = list;
//     setList(updateList);
//     setEditStatus(false);
//   }

//   function toggleText(index) {
//     const element = document.getElementById(`id-${index}`);
//     element.classList.toggle("toggle");
//     // console.log(element);
//   }

//   return (
//     <div className="lab2">
//       <input
//         type="text"
//         className="add-todo"
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button className="btn btn-add" onClick={addList}>
//         Add
//       </button>
//       <ul style={{ listStyleType: "none" }}>
//         {/* <li>
//           <span
//             style={{
//               textDecoration: "line-through",
//               color: "green",
//             }}
//           >
//             Task1
//           </span>
//           <div className="button">
//             <button className="btn btn-save">Save</button>
//             <button className="btn btn-edit">Edit</button>
//             <button className="btn btn-del">Del</button>
//           </div>
//         </li> */}
//         {list.map((val, index) => {
//           return (
//             <li>
//               <span
//                 style={{ display: editStatus ? "none" : "" }}
//                 id={`id-${index}`}
//                 onClick={() => toggleText(index)}
//               >
//                 {val}
//               </span>
//               <input
//                 type="text"
//                 className="input-edit"
//                 value={textToEdit}
//                 onChange={e => setTextToEdit(e.target.value)}
//                 style={{ display: editStatus ? "" : "none" }}
//               />
//               <div className="button">
//                 <button
//                   className="btn btn-save"
//                   style={{ display: editStatus ? "" : "none" }}
//                   onClick={() => saveEditList(index)}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="btn btn-edit"
//                   onClick={() => editList(index)}
//                   style={{ display: editStatus ? "none" : "" }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-del"
//                   onClick={() => deleteList(index)}
//                 >
//                   Del
//                 </button>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// // Lab3
// function App() {
//   const [scorePlayer1, setScorePlayer1] = useState(0);
//   const [scorePlayer2, setScorePlayer2] = useState(0);
//   const [randomNumber, setRandomNumber] = useState(0);
//   const [roundScore, setRoundScore] = useState(0);
//   const [rollStatus, setRollStatus] = useState(false);

//   function newGame() {
//     setScorePlayer1(0);
//     setScorePlayer2(0);
//     setRandomNumber(0);
//     setRoundScore(0);
//     setRollStatus(false);
//   }

//   if (rollStatus) {
//     setTimeout(() => {
//       let random = Math.floor(Math.random() * 7);
//       setRandomNumber(random);
//     }, 1);
//   }

//   function roll() {
//     setRollStatus(true);
//   }

//   function keep() {
//     setRollStatus(false);
//   }

//   return (
//     <div className="App">
//       <div className="lab3">
//         <nav>
//           <button className="btn btn-newGame" onClick={() => newGame()}>
//             New game
//           </button>
//         </nav>
//         <section className="game">
//           <PlayerComponentLab3
//             playerName="Player 1"
//             score={"0"}
//             backgroundColor="pink"
//           />
//           <div className="game-control">
//             <div className="row-button">
//               <button className="btn btn-roll" onClick={() => roll()}>
//                 Roll
//               </button>
//               <button className="btn btn-keep" onClick={() => keep()}>
//                 Keep
//               </button>
//             </div>
//             <div className="row-number">
//               <h1>{randomNumber}</h1>
//             </div>
//             <h2>Round Score : 0</h2>
//           </div>
//           <PlayerComponentLab3
//             playerName="Player 2"
//             score={"1"}
//             backgroundColor="white"
//           />
//         </section>
//       </div>
//     </div>
//   );
// }

// Lab4
function App() {
  const [todoList, setTodoList] = useState([
    { list: "Creat Mylist", date: "08/11/1998" },
    { list: "Sleep", date: "08/11/1998" },
  ]);
  const [doingList, setDoingList] = useState([
    { list: "React App", date: "30/07/2021" },
  ]);
  const [doneList, setDoneList] = useState([
    { list: "Figma", date: "08/11/1998" },
  ]);
  const [textToSearchOrAdd, setTextToSearchOrAdd] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  function addTodoList() {
    const updateTodoList = textToSearchOrAdd;
    const thisDate = new Date();
    const date = `${thisDate.getDay()}/${thisDate.getMonth()}/${thisDate.getFullYear()}`;
    setTodoList([...todoList, { list: updateTodoList, date: date }]);
    setTextToSearchOrAdd("");
  }

  function editList(listType, index) {
    const listToUpdate = listType;
    const objToEdit = listToUpdate[index];
    // console.log(objToEdit);
    setEditStatus(true);
    setTextToEdit(objToEdit.list);
  }

  return (
    <div className="lab4">
      <nav>
        <div className="logo">To Do List App</div>
        <div className="search-and-add">
          <input
            type="text"
            placeholder="Search or Add Todo list"
            value={textToSearchOrAdd}
            onChange={e => setTextToSearchOrAdd(e.target.value)}
          />
          <button className="btn btn-Search">Search</button>
          <button className="btn btn-add" onClick={addTodoList}>
            Add
          </button>
        </div>
      </nav>
      <section className="todo-doing-done">
        <ListBoxLab4Component
          header="To Do"
          list={todoList}
          // editOnClick={editList}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
          setTodoList={setTodoList}
          setDoingList={setDoingList}
          setDoneList={setDoneList}
        />
        <ListBoxLab4Component
          header="Doing"
          list={doingList}
          // editOnClick={editList}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
          setTodoList={setTodoList}
          setDoingList={setDoingList}
          setDoneList={setDoneList}
        />
        <ListBoxLab4Component
          header="Done"
          list={doneList}
          // editOnClick={editList}
          editStatus={editStatus}
          setEditStatus={setEditStatus}
          setTodoList={setTodoList}
          setDoingList={setDoingList}
          setDoneList={setDoneList}
        />
      </section>
    </div>
  );
}

export default App;
