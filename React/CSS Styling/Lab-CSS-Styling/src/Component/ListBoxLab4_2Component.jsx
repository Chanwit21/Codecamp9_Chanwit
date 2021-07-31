import React, { useState } from "react";
import "./ListBoxLab4_2Component.css";

function ListBoxLab4_2Component({ header, list, setList, arrayButton }) {
  const listFilter = list.filter(item => item.status === header);
  const [textToEdit, setTextToEdit] = useState("");

  // Del Button
  function deleteList(id) {
    const listUpdate = list.filter(item => item.id !== id);
    setList(listUpdate);
  }

  // Edit Button
  function editList(id) {
    const filter = list.filter(item => item.id === id);
    setTextToEdit(filter[0].list);

    // Hide And Show Element
    const h2 = document.getElementById(`h2-${id}`);
    h2.style.display = "none";
    const input = document.getElementById(`input-${id}`);
    input.style.display = "";
    const btn_save = document.getElementById(`btn-save-${id}`);
    btn_save.style.display = "";
    const btn_edit = document.getElementById(`btn-edit-${id}`);
    btn_edit.style.display = "none";
  }

  // Save Button
  function saveEditList(id) {
    const textToUpdate = textToEdit;
    const filterToEdit = list.filter(item => item.id === id);
    const filterToUpdate = list.filter(item => item.id !== id);
    //เพื่อให้ Copy By Ref
    const objToUpdate = filterToEdit[0];
    if (objToUpdate.list !== textToUpdate) {
      objToUpdate.list = textToUpdate;
      // Update Dete When Save
      const thisDate = new Date();
      const date = `${thisDate.getDate()}/${
        thisDate.getMonth() + 1
      }/${thisDate.getFullYear()}`;
      objToUpdate.date = date;
      filterToUpdate.push(objToUpdate);
      // console.log(thisDate);
      setList(filterToUpdate);
    }
    setTextToEdit("");

    // Hide And Show Element
    const h2 = document.getElementById(`h2-${id}`);
    h2.style.display = "";
    const input = document.getElementById(`input-${id}`);
    input.style.display = "none";
    const btn_save = document.getElementById(`btn-save-${id}`);
    btn_save.style.display = "none";
    const btn_edit = document.getElementById(`btn-edit-${id}`);
    btn_edit.style.display = "";
  }

  function clickChangeList(status, id, toList) {
    const filterToUpdate = list.filter(item => item.id !== id);
    const filterToEdit = list.filter(item => item.id === id);
    // console.log(status);
    // console.log(toList);

    const objToUpdate = filterToEdit[0];
    objToUpdate.status = toList;
    filterToUpdate.push(objToUpdate);
    setList(filterToUpdate);

    // ข้อควรระวัง ไม่ควรแก้ไขโดยการ Copy By Ref เพราะจะทำให้การ Update State มีปัญหาได้
    // const filterToUpdate = list.filter(item => item.id === id);
    // // console.log(status);
    // // console.log(toList);

    // //เพื่อให้ Copy By Ref
    // const objToUpdate = list[list.indexOf(filter[0])];
    // objToUpdate.status = toList;
    // setList(list);
  }

  return (
    <div className="list-box">
      <div className="header">
        <h1>{header}</h1>
      </div>
      {list.map((item, index) => {
        if (item.status === header) {
          return (
            <div key={`lis-row-${item.id}`} className="list-row">
              <div className="list-text">
                <h2 id={`h2-${item.id}`} style={{ display: "" }}>
                  {item.list}
                </h2>
                <input
                  type="text"
                  id={`input-${item.id}`}
                  value={textToEdit}
                  onChange={e => setTextToEdit(e.target.value)}
                  style={{ display: "none" }}
                />
                <p>Date : {item.date}</p>
              </div>
              <div className="button">
                <button
                  className="btn btn-save"
                  id={`btn-save-${item.id}`}
                  onClick={() => saveEditList(item.id)}
                  style={{ display: "none" }}
                >
                  Save
                </button>
                <button
                  className="btn btn-edit"
                  id={`btn-edit-${item.id}`}
                  onClick={() => editList(item.id)}
                  style={{ display: "" }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-del"
                  onClick={() => deleteList(item.id)}
                >
                  Del
                </button>
                {arrayButton.map(item2 => {
                  if (item2 !== item.status) {
                    return (
                      <button
                        key={`btn-${item2}-${item.id}`}
                        className="btn"
                        onClick={() =>
                          clickChangeList(item.status, item.id, item2)
                        }
                      >
                        {item2}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ListBoxLab4_2Component;
