// จงสร้าง Todo List ดังรูป
// เมื่อผู้ใช้ click Add ให้เพิ่มรายการ
// เมื่อผู้ใช้ click Edit ให้แก้ไขข้อความ
// เมื่อผู้ใช้ click Del ให้ลบรายการ
// เมื่อผู้ใช้ click ที่รายการใน List ให้
// Toggle เส้นที่ขีดค่าข้อความ
let text = "";
let upDateInput = document.querySelector("h1");
let input = document.querySelector("input.mainInput");
const button = document.querySelector("#add");
let count = 1;

input.addEventListener("change", (e) => {
  text = e.target.value;
});

button.addEventListener("click", (e) => {
  let input = document.querySelector("input.mainInput");
  let list = document.querySelector("ul");
  if (text.trim() !== "") {
    list.insertAdjacentHTML(
      "beforeend",
      `<li id="${count}"><span onclick="toggle(${count})">${text}</span><button class="${count}" onclick="clickEdit(${count})">Edit</button><button class="${count}" onclick="clickDel(${count})">Del</button></li>`
    );
  }
  count++;
  text = "";
  input.value = "";
  let editTest = document.querySelectorAll("li")[count - 2];
  // console.log(editTest)
});

function clickEdit(numberOfClass) {
  let liEdit = document.getElementById(`${numberOfClass}`);
  let editText = liEdit.getElementsByTagName("span")[0].innerHTML;
  // console.log(editText)
  // console.log(Object.values(document.querySelectorAll('li')).indexOf(liEdit))
  // for(let e of Object.values(document.querySelectorAll('li')) ){

  //   console.log(e)
  // }
  let update = "";
  if (
    numberOfClass === 1 ||
    Object.values(document.querySelectorAll("li")).indexOf(liEdit) === 0
  ) {
    update = liEdit.parentElement;
    // console.log(update)
    liEdit.remove();
    update.insertAdjacentHTML(
      "afterbegin",
      `<li id="${numberOfClass}"><input type="text" value="${editText}" /><button class="${numberOfClass}" onclick="clickOk(${numberOfClass})">OK</button><button class="${numberOfClass}" onclick="clickDel(${numberOfClass})">Del</button></li>`
    );
  } else {
    update = liEdit.previousSibling;
    // console.log(update)
    liEdit.remove();
    update.insertAdjacentHTML(
      "afterend",
      `<li id="${numberOfClass}"><input type="text" value="${editText}" /><button class="${numberOfClass}" onclick="clickOk(${numberOfClass})">OK</button><button class="${numberOfClass}" onclick="clickDel(${numberOfClass})">Del</button></li>`
    );
  }
}

function clickDel(numberOfClass) {
  // console.log(numberOfClass)
  let liDel = document.getElementById(`${numberOfClass}`);
  liDel.remove();
}

function clickOk(numberOfClass) {
  let liOK = document.getElementById(`${numberOfClass}`);
  let text = liOK.getElementsByTagName("input")[0].value;
  if (
    numberOfClass === 1 ||
    Object.values(document.querySelectorAll("li")).indexOf(liOK) === 0
  ) {
    update = liOK.parentElement;
    // console.log(update)
    liOK.remove();
    update.insertAdjacentHTML(
      "afterbegin",
      `<li id="${numberOfClass}"><span onclick="toggle(${numberOfClass})">${text}</span><button class="${numberOfClass}" onclick="clickEdit(${numberOfClass})">Edit</button><button class="${numberOfClass}" onclick="clickDel(${numberOfClass})">Del</button></li>`
    );
  } else {
    update = liOK.previousSibling;
    // console.log(update)
    liOK.remove();
    update.insertAdjacentHTML(
      "afterend",
      `<li id="${numberOfClass}"><span onclick="toggle(${numberOfClass})">${text}</span><button class="${numberOfClass}" onclick="clickEdit(${numberOfClass})">Edit</button><button class="${numberOfClass}" onclick="clickDel(${numberOfClass})">Del</button></li>`
    );
  }
}

function toggle(numberOfClass) {
  let liToggle = document.getElementById(`${numberOfClass}`);
  let toToggle = liToggle.getElementsByTagName("span")[0];
  if (toToggle.style.color !== "green") {
    toToggle.style.color = "green";
    toToggle.style.textDecoration = "line-through";
  } else {
    toToggle.style.color = "black";
    toToggle.style.textDecoration = "none";
  }
}
