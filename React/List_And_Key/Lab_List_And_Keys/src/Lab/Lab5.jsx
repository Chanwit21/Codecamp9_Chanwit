import React, { useState } from "react";
import "./Lab5.css";

function Lab5() {
  const TESTLIST = [
    { text: "Work out", id: 1 },
    { text: "Creat To Do List", id: 2 },
    { text: "Play Football", id: 3 },
    { text: "Play Game", id: 4 },
  ];
  const [addText, handleInputAdd] = useState("");
  const [list, setList] = useState(TESTLIST);
  const [listFilter, setListFilter] = useState(TESTLIST);
  const [searchText, setSearchText] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [idEdit, setIdEdit] = useState(-1);
  const [textToEdit, handleInputEdit] = useState("");
  const [textTofilterList, setTextTofilterList] = useState("");

  function runId(list) {
    if (list.length !== 0) return list[list.length - 1].id + 1;
    return 1;
  }

  function handleButtonAdd(e) {
    setList([...list, { text: addText, id: runId(list) }]);
    if (textTofilterList) {
      setListFilter([
        ...listFilter,
        searchText === addText ? { text: addText, id: runId(list) } : null,
      ]);
    } else {
      setListFilter([...list, { text: addText, id: runId(list) }]);
    }
    setSearchText("");
    handleInputAdd("");
  }

  function handleButtonDelete(id) {
    const listUpdate = list.filter(item => item.id !== id);
    setList(listUpdate);
    if (textTofilterList) {
      setListFilter(
        listUpdate.filter(item =>
          item.text.toLowerCase().includes(textTofilterList.toLowerCase())
        )
      );
    } else {
      setListFilter(listUpdate);
    }
  }

  function handleButtonEdit(index, id) {
    const initArr = list.filter(item => item.id === id);
    const initialText = initArr[0].text;
    handleInputEdit(initialText);
    setEditStatus(true);
    setIdEdit(id);
  }

  function handleButtonSave(index, id) {
    const newList = [...list];
    const indexToUpdate = newList.findIndex(item => item.id === id);
    newList[indexToUpdate].text = textToEdit;
    // const newList = list.filter(item => item.id !== id);
    // const newListUpdate = list.filter(item => item.id === id);
    // newListUpdate[0].text = textToEdit;
    // let indexSearch = newList.findIndex(item => item.id === id - 1);
    // let secoundSearch = false;
    // if (indexSearch === -1 && id !== 0) {
    //   indexSearch = newList.findIndex(item => item.id === id + 1);
    //   secoundSearch = true;
    // }
    // if (secoundSearch) {
    //   newList.splice(indexSearch, 0, newListUpdate[0]);
    // } else {
    //   newList.splice(indexSearch + 1, 0, newListUpdate[0]);
    // }
    console.log(newList);
    setList(newList);
    setEditStatus(false);
    setIdEdit(-1);
    if (textTofilterList) {
      setListFilter(
        newList.filter(item =>
          item.text.toLowerCase().includes(textTofilterList.toLowerCase())
        )
      );
    } else {
      setListFilter(newList);
    }
  }

  function handleOnClickText(e) {
    const oldClassName = e.target.className;
    e.target.className = oldClassName ? "" : "toggle";
  }

  function handleInputSearch(e) {
    setSearchText(e.target.value);
    // if (e.target.value) {
    //   setListFilter(list.filter(item => item.text.includes(e.target.value)));
    // } else {
    //   setListFilter(list);
    // }
  }

  function hadleButtonSearchList(e) {
    if (searchText) {
      setListFilter(
        list.filter(item =>
          item.text.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else {
      setListFilter(list);
    }
    setTextTofilterList(searchText);
    setSearchText("");
  }

  const hadleButtonClearFilter = () => {
    setTextTofilterList("");
    setListFilter(list);
  };

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
      {textTofilterList ? (
        <div className="text_filter_box">
          <span>{textTofilterList}</span>
          <button className="btn btn-clear" onClick={hadleButtonClearFilter}>
            Clear
          </button>
        </div>
      ) : null}
      <ul style={{ listStyleType: "none" }}>
        {listFilter.map((val, index) => {
          return (
            <li key={val.id}>
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
