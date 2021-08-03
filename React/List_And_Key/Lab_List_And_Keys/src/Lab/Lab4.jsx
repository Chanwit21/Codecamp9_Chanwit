import React, { useState } from "react";
import "./Lab4.css";

function Lab4() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [idEdit, setIdEdit] = useState(-1);
  const [textToEdit, setTextToEdit] = useState("");

  function runId(list) {
    if (list.length !== 0) return list[list.length - 1].id + 1;
    return 1;
  }

  function addList(e) {
    setList([...list, { text: text, id: runId(list) }]);
    setText("");
  }

  function deleteList(index) {
    const listUpdate = list.filter(item => item !== list[index]);
    setList(listUpdate);
  }

  function editList(index, id) {
    const initialText = list[index].text;
    setTextToEdit(initialText);
    setEditStatus(true);
    setIdEdit(id);
  }

  function saveEditList(index, id) {
    const newList = [...list];
    newList[index].text = textToEdit;
    setList(newList);
    setEditStatus(false);
    setIdEdit(-1);
  }

  function toggleText(e) {
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
      <button className="btn btn-add" onClick={addList}>
        Add
      </button>
      <ul style={{ listStyleType: "none" }}>
        {list.map((val, index) => {
          return (
            <li>
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
                  onClick={e => toggleText(e)}
                  className=""
                >
                  {val.text}
                </span>
              )}
              <div className="button">
                {editStatus && idEdit === val.id ? (
                  <button
                    className="btn btn-save"
                    onClick={() => saveEditList(index, val.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-edit"
                    onClick={() => editList(index, val.id)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-del"
                  onClick={() => deleteList(index)}
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
