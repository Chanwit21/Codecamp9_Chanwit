import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// // LAB1
// function App() {
//   return (
//     <div className="my-friend">
//       <h1>Hello My Friend</h1>
//       <p>Friend List</p>
//       <ul>
//         <li>Jay</li>
//         <li>Boy</li>
//         <li>Bam</li>
//       </ul>
//     </div>
//   )
// }

// // LAB2
// function App() {
//   const provinceDistric = {
//     bangkok: ["sathorn", "chatuchak"],
//     samutprakarn: ["bangpree", "bangboor"],
//     yala: ["batong", "meung"],
//   };
//   let districArray = [];

//   function setSelectProvince(e) {
//     let selected = e.target.value
//     optionDistric = createOptionDistric();
//     const selectDistric = document.querySelectorAll('select')[1]
//     selectDistric.innerHTML = `<option value="">-</option>`;
//     for(let val of optionDistric){
//       const option = document.createElement('option')
//       option.innerHTML = val;
//       option.value = val
//       selectDistric.append(option)
//     }
//     // console.log(selectDistric)
//   }

//   function createOptionDistric() {
//     if(selected){
//       return provinceDistric[selected]
//     } else {
//       return []
//     }
//   }

//   return (
//     <div className="Lab2">
//       <label htmlFor="province">Province: </label>
//       <select name="province" id="province" onChange={setSelectProvince}>
//         <option value="">-</option>
//         {Object.keys(provinceDistric).map((item) => {
//           return <option value={item}>{item}</option>;
//         })}
//       </select>
//       <label htmlFor="distric">Distric: </label>
//       <select name="distric" id="distric">
//         <option value="">-</option>
//       </select>
//     </div>
//   );
// }

// // LAB3
// function App() {

//   function increaseCount() {
//     let count = +document.getElementById('count').innerHTML
//     document.getElementById('count').innerHTML = count + 1
//   }

//   function decreaseCount() {
//     let count = +document.getElementById('count').innerHTML
//     if(count > 0){

//       document.getElementById('count').innerHTML = count - 1
//     }
//   }

//   function resetCount() {
//     document.getElementById('count').innerHTML = 0;
//   }

//   return (
//     <div className="App">
//       <div style={{textAlign: 'center'}}>
//         <button
//         onClick={increaseCount}
//         >+</button>
//         <span
//         style={{fontSize: '30px', fontWeight: '600'}}
//         id='count'
//         >0</span>
//         <button
//         onClick={decreaseCount}
//         >-</button>
//         <button
//         onClick={resetCount}
//         >reset</button>
//       </div>
//     </div>
//   )
// }

// LAB4
function App() {
  const listArray = [];
  function addTodo() {
    const ulTagList = document.querySelector(".list-order");
    const inputAdd = document.querySelector("input");
    const textToUpdateList = inputAdd.value;
    listArray.push(textToUpdateList);
    ulTagList.innerHTML = '';
    for (let val of listArray) {
      if (val) {
        const liToUpdate = createLi(val);
        ulTagList.append(liToUpdate);
        document.querySelector("input").value = "";
        // console.log(listArray.indexOf(val))
      }
    }
  }

  // สร้าง Tag
  function creatTag(tag, innerHTML = "", className = "") {
    const Tag = document.createElement(tag);
    Tag.innerHTML = innerHTML;
    Tag.className = className;
    return Tag;
  }

  // สร้าง li และ add event ให้แต่ละตัว
  function createLi(text) {
    const liTag = creatTag("li");
    const spanTag = creatTag("span", text, "span-in-list");
    const btnEditTag = creatTag("button", "Edit", "btn btn-edit");
    const btnDelTag = creatTag("button", "Delete", "btn btn-del");

    // Add Event spantag Toggle
    spanTag.addEventListener("click", function () {
      // console.log(this)
      this.classList.toggle("toggle");
    });

    //Add Event Button Del
    btnDelTag.addEventListener("click", function () {
      const liTagToDel = this.parentElement;
      const textToDelete = this.parentElement.querySelector('span').innerHTML
      const indexToDel = listArray.indexOf(textToDelete)
      listArray.splice(indexToDel,1)
      liTagToDel.remove();
      console.log(listArray)
    });

    //Add Event Button Edit
    btnEditTag.addEventListener("click", function () {
      const editButton = this;
      const liTagToEdit = this.parentElement;
      const spanTagToEdit = this.previousElementSibling;
      const textToEdit = spanTagToEdit.innerHTML;
      const indexToEdit = listArray.indexOf(textToEdit)
      const inputEdit = creatTag("input");
      inputEdit.value = textToEdit;
      const saveButton = creatTag("button", "Save", "btn btn-save");

      // Add Event To save Button
      saveButton.onclick = function () {
        const inputToSave = this.previousElementSibling;
        const textToSave = inputToSave.value;
        spanTagToEdit.innerHTML = textToSave;
        listArray[indexToEdit] = textToSave;
        inputToSave.remove();
        saveButton.remove();
        spanTagToEdit.style.display = "";
        editButton.style.display = "";
        console.log(listArray)
      };

      liTagToEdit.prepend(saveButton);
      liTagToEdit.prepend(inputEdit);
      spanTagToEdit.style.display = "none";
      editButton.style.display = "none";

      // console.log(inputEdit)
    });

    liTag.append(spanTag);
    liTag.append(btnEditTag);
    liTag.append(btnDelTag);
    return liTag;
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1>To Do List</h1>
        <input type="text" />
        <button className="btn btn-add" onClick={addTodo}>
          Add
        </button>
        <ul className="list-order">
          {/* <li>
            <span className="span-in-list">Test</span>
            <button className="btn btn-edit">Edit</button>
            <button className="btn btn-del">Delete</button>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
