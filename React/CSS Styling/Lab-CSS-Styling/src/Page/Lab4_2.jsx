import React, { useState } from "react";
import ListBoxLab4_2Component from "../Component/ListBoxLab4_2Component";
import "./Lab4_2.css";

function Lab4_2() {
  const task = [
    { list: "Creat Mylist", date: "08/11/1998", id: 1, status: "To Do" },
    { list: "Sleep", date: "08/11/1998", id: 2, status: "To Do" },
    { list: "React App", date: "30/07/2021", id: 3, status: "Doing" },
    { list: "Figma", date: "08/11/1998", id: 4, status: "Done" },
  ];
  const [list, setList] = useState(task);
  const [textToSearchOrAdd, setTextToSearchOrAdd] = useState("");
  const arrayButton = ["To Do", "Doing", "Done"];

  function checkAndCreateID(task) {
    if (task.length !== 0) {
      const lastId = task[task.length - 1].id;
      return lastId + 1;
    }
    return 1;
  }

  function addTodoList() {
    const updateTodoList = textToSearchOrAdd;
    const thisDate = new Date();
    const date = `${thisDate.getDate()}/${
      thisDate.getMonth() + 1
    }/${thisDate.getFullYear()}`;
    const creatId = checkAndCreateID(list);
    // console.log(creatId);
    setList([
      ...list,
      { list: updateTodoList, date: date, id: creatId, status: "To Do" },
    ]);
    setTextToSearchOrAdd("");
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
        <ListBoxLab4_2Component
          header="To Do"
          list={list}
          setList={setList}
          arrayButton={arrayButton}
        />
        <ListBoxLab4_2Component
          header="Doing"
          list={list}
          setList={setList}
          arrayButton={arrayButton}
        />
        <ListBoxLab4_2Component
          header="Done"
          list={list}
          setList={setList}
          arrayButton={arrayButton}
        />
      </section>
    </div>
  );
}

export default Lab4_2;
