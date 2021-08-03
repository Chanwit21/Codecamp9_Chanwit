import React, { useState } from "react";
import "./Lab5.css";

function Lab5() {
  const [addText, handleInputAdd] = useState("");
  const [list, setList] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [idEdit, setIdEdit] = useState(-1);
  const [textToEdit, handleInputEdit] = useState("");

  function runId(list) {
    if (list.length !== 0) return list[list.length - 1].id + 1;
    return 1;
  }

  function handleButtonAdd(e) {
    setList([...list, { text: addText, id: runId(list) }]);
    if (searchText) {
      setListFilter([
        ...listFilter,
        searchText === addText ? { text: addText, id: runId(list) } : null,
      ]);
    } else {
      setListFilter([...list, { text: addText, id: runId(list) }]);
    }
    setsearchText("");
    handleInputAdd("");
  }

  function handleButtonDelete(id) {
    const listUpdate = list.filter(item => item.id !== id);
    setList(listUpdate);
    if (searchText) {
      setListFilter(listUpdate.filter(item => item.text.includes(searchText)));
    } else {
      setListFilter(listUpdate);
    }
  }

  function handleButtonEdit(index, id) {
    const initialText = list[index].text;
    handleInputEdit(initialText);
    setEditStatus(true);
    setIdEdit(id);
  }

  function handleButtonSave(index, id) {
    const newList = [...list];
    newList[index].text = textToEdit;
    setList(newList);
    setEditStatus(false);
    setIdEdit(-1);
    if (searchText) {
      setListFilter(newList.filter(item => item.text.includes(searchText)));
    } else {
      setListFilter(newList);
    }
  }

  function handleOnClickText(e) {
    const oldClassName = e.target.className;
    e.target.className = oldClassName ? "" : "toggle";
  }

  function handleInputSearch(e) {
    setsearchText(e.target.value);
    if (e.target.value) {
      setListFilter(list.filter(item => item.text.includes(e.target.value)));
    } else {
      setListFilter(list);
    }
  }

  function hadleButtonSearchList(e) {
    if (searchText) {
      setListFilter(list.filter(item => item.text.includes(searchText)));
    } else {
      setListFilter(list);
    }
  }

  return (
    <div className="lab5">
      <input
        type="text"
        className="add-todo"
        value={addText}
        onChange={e => handleInputAdd(e.target.value)}
      />
      <button className="btn btn-add" onClick={handleButtonAdd}>
        Add
      </button>
      <br />
      <div className="search_box">
        <input
          type="text"
          className="serach-todo"
          value={searchText}
          onChange={handleInputSearch}
        />
        <button className="btn btn-search" onClick={hadleButtonSearchList}>
          Search
        </button>
      </div>
      <ul style={{ listStyleType: "none" }}>
        {listFilter.map((val, index) => {
          return (
            <li>
              {editStatus && idEdit === val.id ? (
                <input
                  type="text"
                  className="input-edit"
                  value={textToEdit}
                  onChange={e => handleInputEdit(e.target.value)}
                />
              ) : (
                <span
                  id={`id-${val.id}`}
                  onClick={e => handleOnClickText(e)}
                  className=""
                >
                  {val.text}
                </span>
              )}
              <div className="button">
                {editStatus && idEdit === val.id ? (
                  <button
                    className="btn btn-save"
                    onClick={() => handleButtonSave(index, val.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-edit"
                    onClick={() => handleButtonEdit(index, val.id)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-del"
                  onClick={() => handleButtonDelete(val.id)}
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

export default Lab5;
