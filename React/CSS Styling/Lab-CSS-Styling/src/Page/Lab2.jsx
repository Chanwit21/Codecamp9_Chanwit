import React, { useState } from "react";
import "./Lab2.css";

function Lab2() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [textToEdit, setTextToEdit] = useState("");

  function addList(e) {
    setList([...list, text]);
    setText("");
  }

  function deleteList(index) {
    const listUpdate = list.filter(item => item !== list[index]);
    setList(listUpdate);
  }

  function editList(index) {
    const initialText = list[index];
    setTextToEdit(initialText);
    setEditStatus(true);
  }

  function saveEditList(index) {
    list[index] = textToEdit;
    const updateList = list;
    setList(updateList);
    setEditStatus(false);
  }

  function toggleText(index) {
    const element = document.getElementById(`id-${index}`);
    element.classList.toggle("toggle");
    // console.log(element);
  }

  return (
    <div className="lab2">
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
        {/* <li>
          <span
            style={{
              textDecoration: "line-through",
              color: "green",
            }}
          >
            Task1
          </span>
          <div className="button">
            <button className="btn btn-save">Save</button>
            <button className="btn btn-edit">Edit</button>
            <button className="btn btn-del">Del</button>
          </div>
        </li> */}
        {list.map((val, index) => {
          return (
            <li>
              <span
                style={{ display: editStatus ? "none" : "" }}
                id={`id-${index}`}
                onClick={() => toggleText(index)}
              >
                {val}
              </span>
              <input
                type="text"
                className="input-edit"
                value={textToEdit}
                onChange={e => setTextToEdit(e.target.value)}
                style={{ display: editStatus ? "" : "none" }}
              />
              <div className="button">
                <button
                  className="btn btn-save"
                  style={{ display: editStatus ? "" : "none" }}
                  onClick={() => saveEditList(index)}
                >
                  Save
                </button>
                <button
                  className="btn btn-edit"
                  onClick={() => editList(index)}
                  style={{ display: editStatus ? "none" : "" }}
                >
                  Edit
                </button>
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

export default Lab2;
