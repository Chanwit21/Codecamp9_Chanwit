import React, { useState } from "react";
import ListBoxLab4Component from "../Component/ListBoxLab4Component";
import "./Lab4_1.css";

function Lab4_1() {
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

  function addTodoList() {
    const updateTodoList = textToSearchOrAdd;
    const thisDate = new Date();
    const date = `${thisDate.getDate()}/${
      thisDate.getMonth() + 1
    }/${thisDate.getFullYear()}`;
    setTodoList([...todoList, { list: updateTodoList, date: date }]);
    setTextToSearchOrAdd("");
  }

  // const [todoList, setTodoList] = useState(task);

  // const task = [
  //   { list: "Creat Mylist", date: "08/11/1998", id: 1, status: "todo" },
  //   { list: "Sleep", date: "08/11/1998", id: 2, status: "todo" },
  //   { list: "React App", date: "30/07/2021", id: 3, status: "doing" },
  //   { list: "Figma", date: "08/11/1998", id: 4, status: "doing" },
  // ];

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
          // createIdentify={createIdentify}
          // editList={editList}
          // saveEditList={saveEditList}
          todoList={todoList}
          setTodoList={setTodoList}
          doingList={doingList}
          setDoingList={setDoingList}
          doneList={doneList}
          setDoneList={setDoneList}
        />
        <ListBoxLab4Component
          header="Doing"
          list={doingList}
          // editOnClick={editList}
          // editStatus={editStatus}
          // setEditStatus={setEditStatus}
          todoList={todoList}
          setTodoList={setTodoList}
          doingList={doingList}
          setDoingList={setDoingList}
          doneList={doneList}
          setDoneList={setDoneList}
        />
        <ListBoxLab4Component
          header="Done"
          list={doneList}
          // editOnClick={editList}
          // editStatus={editStatus}
          // setEditStatus={setEditStatus}
          todoList={todoList}
          setTodoList={setTodoList}
          doingList={doingList}
          setDoingList={setDoingList}
          doneList={doneList}
          setDoneList={setDoneList}
        />
      </section>
    </div>
  );
}

export default Lab4_1;
