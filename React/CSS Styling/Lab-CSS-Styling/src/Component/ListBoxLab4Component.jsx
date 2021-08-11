import React, { useState } from "react";
import "./ListBoxLab4Component.css";

function ListBoxLab4Component({
  header,
  list,
  todoList,
  setTodoList,
  doingList,
  setDoingList,
  doneList,
  setDoneList,
}) {
  const [textToEdit, setTextToEdit] = useState("");
  function createIdentify(tagName, header, index) {
    if (header === "To Do") return `${tagName}-todo-${index}`;
    return `${tagName}-${header.toLowerCase()}-${index}`;
  }
  // console.log(todoList);
  // console.log(setEditStatus);

  // Update List in this Component
  function upDateList(listUpdated) {
    if (header === "To Do") {
      setTodoList(listUpdated);
      console.log("set todo");
    } else if (header === "Doing") {
      setDoingList(listUpdated);
      console.log("set doing");
    } else {
      setDoneList(listUpdated);
      console.log("set done");
    }
  }

  function editList(listType, index) {
    const listClone = [...listType];
    const objToEdit = listClone[index];

    // Hide and Show Element
    const input = document.getElementById(
      createIdentify("input", header, index)
    );
    input.style.display = "";
    const h2 = document.getElementById(createIdentify("h2", header, index));
    h2.style.display = "none";
    const btn_save = document.getElementById(
      createIdentify("btn-save", header, index)
    );
    btn_save.style.display = "";
    const btn_edit = document.getElementById(
      createIdentify("btn-edit", header, index)
    );
    btn_edit.style.display = "none";
    setTextToEdit(objToEdit.list);
  }

  // Save Button Must Config
  function saveEditList(listType, index) {
    const textToUpdateList = textToEdit; //เก็บ State ข้อความ Input
    const listClone = [...listType];
    const objToEdit = listClone[index];
    if (objToEdit.list !== textToUpdateList) {
      objToEdit.list = textToUpdateList;
      // Update day When Save
      const thisDate = new Date();
      const date = `${thisDate.getDate()}/${
        thisDate.getMonth() + 1
      }/${thisDate.getFullYear()}`;
      objToEdit.date = date;
    }
    upDateList(listClone);
    // console.log(todoList);

    // Hide and Show Element
    const input = document.getElementById(
      createIdentify("input", header, index)
    );
    input.style.display = "none";
    const h2 = document.getElementById(createIdentify("h2", header, index));
    h2.style.display = "";
    const btn_save = document.getElementById(
      createIdentify("btn-save", header, index)
    );
    btn_save.style.display = "none";
    const btn_edit = document.getElementById(
      createIdentify("btn-edit", header, index)
    );
    btn_edit.style.display = "";
  }

  // Delete Button Must Config
  function deleteList(listType, index) {
    const listToUpdate = [...listType];
    listToUpdate.splice(index, 1);
    // console.log(listUpdate);
    upDateList(listToUpdate);
  }

  // Click To todoList
  function clickTodoList(listBefore, index) {
    const sendToTodolist = listBefore[index];
    listBefore.splice(index, 1);
    const updateListBeforn = listBefore;
    setTodoList([...todoList, sendToTodolist]);
    upDateList(updateListBeforn);
  }

  // Click To doingList
  function clickDoingList(listBefore, index) {
    const sendToDoinglist = listBefore[index];
    listBefore.splice(index, 1);
    const updateListBeforn = listBefore;
    setDoingList([...doingList, sendToDoinglist]);
    upDateList(updateListBeforn);
  }

  // Click To doneList
  function clickDoneList(listBefore, index) {
    const sendToDonelist = listBefore[index];
    listBefore.splice(index, 1);
    const updateListBeforn = listBefore;
    setDoneList([...doneList, sendToDonelist]);
    upDateList(updateListBeforn);
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
                id={createIdentify("h2", header, index)}
                style={{ display: "" }}
              >
                {item.list}
              </h2>
              <input
                type="text"
                id={createIdentify("input", header, index)}
                value={textToEdit}
                onChange={e => setTextToEdit(e.target.value)}
                style={{ display: "none" }}
              />
              <p>Date : {item.date}</p>
            </div>
            <div className="button">
              <button
                className="btn btn-save"
                id={createIdentify("btn-save", header, index)}
                onClick={() => saveEditList(list, index)}
                style={{ display: "none" }}
              >
                Save
              </button>
              <button
                className="btn btn-edit"
                id={createIdentify("btn-edit", header, index)}
                onClick={() => editList(list, index)}
                style={{ display: "" }}
              >
                Edit
              </button>
              <button
                className="btn btn-del"
                onClick={() => deleteList(list, index)}
              >
                Del
              </button>
              <button
                className="btn"
                style={{ display: header === "To Do" ? "none" : "" }}
                onClick={() => clickTodoList(list, index)}
              >
                To Do
              </button>
              <button
                className="btn"
                style={{ display: header === "Doing" ? "none" : "" }}
                onClick={() => clickDoingList(list, index)}
              >
                Doing
              </button>
              <button
                className="btn"
                style={{ display: header === "Done" ? "none" : "" }}
                onClick={() => clickDoneList(list, index)}
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
