import React, { useState } from "react";
import "./Lab4.css";

function Lab4() {
  const TESTLIST = [
    { text: "Work out", id: 1 },
    { text: "Creat To Do List", id: 2 },
    { text: "Play Football", id: 3 },
    { text: "Play Game", id: 4 },
  ];
  const [text, setText] = useState("");
  const [list, setList] = useState([...TESTLIST]);
  const [editStatus, setEditStatus] = useState(false);
  const [idEdit, setIdEdit] = useState(-1);
  const [textToEdit, setTextToEdit] = useState("");

  function runId(list) {
    if (list.length !== 0) return list[list.length - 1].id + 1;
    return 1;
  }

  function handleButtonAddList(e) {
    setList([...list, { text: text, id: runId(list) }]);
    setText("");
  }

  function handleButtonDeleteList(id) {
    const listUpdate = list.filter(item => item.id !== id);
    setList(listUpdate);
  }

  function handleButtonEditList(id) {
    const newList = [...list];
    const indexToEdit = newList.findIndex(item => item.id === id);
    const initialText = newList[indexToEdit].text;
    setTextToEdit(initialText);
    setEditStatus(true);
    setIdEdit(id);
  }

  function handleButtonSaveEditList(id) {
    const newList = [...list];
    const indexToEdit = newList.findIndex(item => item.id === id);
    newList[indexToEdit].text = textToEdit;
    setList(newList);
    setEditStatus(false);
    setIdEdit(-1);
  }

  function handleClickToggleText(e) {
    const oldClassName = e.target.className;
    e.target.className = oldClassName ? "" : "toggle";
    // const element = document.getElementById(`id-${id}`);
    // element.classList.toggle("toggle");
    // // console.log(element);
  }

  return (
    <div className="lab4">
      <input
        type="text"
        className="add-todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn btn-add" onClick={handleButtonAddList}>
        Add
      </button>
      <ul style={{ listStyleType: "none" }}>
        {list.map((val, index) => {
          return (
            <li style={{ userSelect: "none" }} key={val.id}>
              {editStatus && idEdit === val.id ? (
                <input
                  type="text"
                  className="input-edit"
                  value={textToEdit}
                  onChange={e => setTextToEdit(e.target.value)}
                />
              ) : (
                <span
                  id={`id-${val.id}`}
                  onClick={e => handleClickToggleText(e)}
                  className=""
                >
                  {val.text}
                </span>
              )}
              <div className="button">
                {editStatus && idEdit === val.id ? (
                  <button
                    className="btn btn-save"
                    onClick={() => handleButtonSaveEditList(val.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-edit"
                    onClick={() => handleButtonEditList(val.id)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-del"
                  onClick={() => handleButtonDeleteList(val.id)}
                >
                  Del
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Lab4;
