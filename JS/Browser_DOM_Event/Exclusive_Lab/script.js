const expend = document.getElementsByName("expend")[0];
expend.addEventListener("input", (e) => changeExpend(e));
// console.log(expend)

const amount = document.getElementsByName("amount")[0];
amount.addEventListener("input", (e) => changeAmount(e));
// console.log(amount)

const date = document.getElementsByName("date")[0];
date.addEventListener("input", (e) => changeDate(e));
// console.log(date)

let listTextUpdate = "";
function changeExpend(e) {
  listTextUpdate = e.target.value;
  // console.log(e.target.value)
}

let amountTextUpdate = "";
function changeAmount(e) {
  amountTextUpdate = e.target.value;
  // console.log(e.target.value)
}

let dateTextUpdate = "";
function changeDate(e) {
  dateTextUpdate = e.target.value;
  // console.log(e.target.value)
}

// Add Button
const buttonInAdd = document.querySelector(".button button");
// console.log(buttonInAdd)
const totalValue = document.querySelector(".totalAmount span");
let count = 1;
// console.log(totalValue)
buttonInAdd.addEventListener("click", (e) => clickAdd(e));
function clickAdd(e) {
  // ถ้าปุ่มยังเป็น Add อยู่
  if (buttonInAdd.innerHTML === "Add") {
    let ul = document.querySelector(".contentListUpdate ul");
    // console.log(ul)
    ul.insertAdjacentHTML(
      "beforeend",
      `<li id="${count}"><span class="dateList">${dateTextUpdate}</span><span class="expendList">${listTextUpdate}</span><div class="contentListUpdateRight"><span class="amountList">${amountTextUpdate}</span><button onclick="delList(${count})">Del</button><button onclick="editList(${count++})">Edit</button></div></li>`
    );
    totalValue.innerHTML = `${+totalValue.innerHTML + +amountTextUpdate}`;
    dateTextUpdate = "";
    listTextUpdate = "";
    amountTextUpdate = "";
    expend.value = "";
    amount.value = "";
    date.value = "";
  } else {
    // ถ้าปุ่มเป็น Save
    const idToSearch = buttonInAdd.id;
    // console.log(buttonInAdd.id)
    const allLi = document.querySelectorAll("li");
    let selectListToEdit = "";
    for (let value of allLi) {
      if (value.id === `${idToSearch}`) {
        selectListToEdit = value;
      }
    }
    // console.log(selectListToEdit)
    const dateToEdit = selectListToEdit.querySelector(".dateList");
    dateToEdit.innerHTML = date.value;
    const listToEdit = selectListToEdit.querySelector(".expendList");
    listToEdit.innerHTML = expend.value;
    const amoutToEdit = selectListToEdit.querySelector(".amountList");
    amoutToEdit.innerHTML = amount.value;
    // console.log(selectListToEdit.querySelector('.dateList'))
    // dateTextUpdate = date.value;
    // amountTextUpdate = amount.value;
    // listTextUpdate = expend.value;
    // console.log(dateTextUpdate)
    // console.log(amountTextUpdate)
    // console.log(listTextUpdate)
    date.value = '';
    amount.value = '';
    expend.value = '';
    buttonInAdd.innerHTML = "Add";
    buttonInAdd.id = '';
  }
}

//Del Button
const delButton = document.querySelector(".contentListUpdate button");
// console.log(delButton)

function delList(numberOfList) {
  const liToDel = document.getElementById(`${numberOfList}`);
  // console.log(liToDel)
  liToDel.remove();
}

//Edit
function editList(numberOfList) {
  const liToeEdit = document.getElementById(`${numberOfList}`);
  let dateInList = liToeEdit.getElementsByTagName("span")[0];
  let textInList = liToeEdit.getElementsByTagName("span")[1];
  let amountInList = liToeEdit.getElementsByTagName("span")[2];
  // console.log(liToeEdit)
  // console.log(dateInList)
  // console.log(textInList)
  // console.log(amountInList)
  const expend = document.getElementsByName("expend")[0];
  const amount = document.getElementsByName("amount")[0];
  const date = document.getElementsByName("date")[0];
  expend.value = textInList.innerHTML;
  amount.value = amountInList.innerHTML;
  date.value = dateInList.innerHTML;
  const buttonInAdd = document.querySelector(".button button");
  // console.log(buttonInAdd)
  buttonInAdd.innerHTML = "Save";
  buttonInAdd.id = `${numberOfList}`;
}


//To ENTER
expend.addEventListener('keypress',(e)=>{
    if (e.keyCode === 13) {
        e.preventDefault();
        buttonInAdd.click();
       }
})

date.addEventListener('keypress',(e)=>{
    if (e.keyCode === 13) {
        e.preventDefault();
        buttonInAdd.click();
       }
})

amount.addEventListener('keypress',(e)=>{
    if (e.keyCode === 13) {
        e.preventDefault();
        buttonInAdd.click();
       }
})