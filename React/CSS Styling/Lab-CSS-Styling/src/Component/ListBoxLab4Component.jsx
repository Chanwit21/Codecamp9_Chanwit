import React, { useState } from "react";
import "./ListBoxLab4Component.css";

function ListBoxLab4Component({
  header,
  list,
  editStatus,
  setEditStatus,
  setTodoList,
  setDoingList,
  setDoneList,
  // editOnClick,
}) {
  const [textToEdit, setTextToEdit] = useState("");
  // console.log('Test');
  // console.log(setEditStatus);

  function editList(listType, index) {
    const listToUpdate = listType;
    const objToEdit = listToUpdate[index];
    // console.log(objToEdit);
    // console.log(setEditStatus);
    setEditStatus(true);
    // console.log(editStatus);
    setTextToEdit(objToEdit.list);
    // if (header === "To Do") {
    //   setTodoList();
    // } else if (header === "Doing") {
    //   setDoingList();
    // } else {
    //   setDoneList();
    // }
  }

  return (
    <div className="list-box">
      <div className="header">
        <h1>{header}</h1>
      </div>
      {list.map((item, index) => {
        return (
          <div key={`lis-row-${index}`} className="list-row">
            <div className="list-text">
              <h2
                id={`id-${index}`}
                style={{ display: editStatus ? "none" : "" }}
              >
                {item.list}
              </h2>
              <input
                type="text"
                value={textToEdit}
                onChange={e => setTextToEdit(e.target.value)}
                style={{ display: editStatus ? "" : "none" }}
              />
              <p>Date : {item.date}</p>
            </div>
            <div className="button">
              <button
                className="btn btn-save"
                onClick={() => saveEditList(list, index)}
                style={{ display: editStatus ? "" : "none" }}
              >
                Save
              </button>
              <button
                className="btn btn-edit"
                onClick={() => editList(list, index)}
                style={{ display: editStatus ? "none" : "" }}
              >
                Edit
              </button>
              <button className="btn btn-del">Del</button>
              <button
                className="btn"
                style={{ display: header === "To Do" ? "none" : "" }}
              >
                To Do
              </button>
              <button
                className="btn"
                style={{ display: header === "Doing" ? "none" : "" }}
              >
                Doing
              </button>
              <button
                className="btn"
                style={{ display: header === "Done" ? "none" : "" }}
              >
                Done
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListBoxLab4Component;
