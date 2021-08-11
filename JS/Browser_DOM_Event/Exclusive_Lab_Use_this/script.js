const expendInput = document.getElementsByName("expend")[0];
const amountInput = document.getElementsByName("amount")[0];
const dateInput = document.getElementsByName("date")[0];
const buttonAdd = document.querySelector(".button button");
const buttonSave = document.querySelectorAll(".button button")[1];
const total = document.querySelector(".totalAmount span");
// console.log(buttonSave);
const ul = document.querySelector(".contentListUpdate ul");
let list = [];

//creat Function To createElement
function createElement(tagName, innerHtml, className) {
  const tag = document.createElement(tagName);
  if (innerHtml) tag.innerHTML = innerHtml;
  if (className) tag.className = className;
  return tag;
}

//Add Event OnbuttonAdd
buttonAdd.addEventListener("click", function () {
  const li = createElement("li");
  const divAmountAndButton = createElement("div", "", "contentListUpdateRight");
  const spanDate = createElement("span", dateInput.value, "dateList");
  const spanExpend = createElement("span", expendInput.value, "expendList");
  const spanAmount = createElement("span", amountInput.value, "amountList");
  const buttonEdit = createElement("button", "Edit");
  const buttonDel = createElement("button", "Del");

  //Append To list / Clear Input / update ListArray and Update Total
  divAmountAndButton.append(spanAmount);
  divAmountAndButton.append(buttonEdit);
  divAmountAndButton.append(buttonDel);
  li.append(spanDate);
  li.append(spanExpend);
  li.append(divAmountAndButton);
  ul.append(li);
  total.innerHTML = +total.innerHTML + +amountInput.value;
  let obj = {
    expend: expendInput.value,
    date: dateInput.value,
    amount: amountInput.value,
  };
  list = [...list, obj];
  // console.log(list);
  dateInput.value = "";
  expendInput.value = "";
  amountInput.value = "";

  //Add Event To Del Button And Update List
  buttonDel.addEventListener("click", function () {
    const liToDelete = this.parentElement.parentElement;
    const dateToDeleteList = liToDelete.querySelector(".dateList").innerHTML;
    const expendToDeleteList =
      liToDelete.querySelector(".expendList").innerHTML;
    const amountToDeleteList =
      liToDelete.querySelector(".amountList").innerHTML;

    // minus Del Value
    total.innerHTML = +total.innerHTML - +amountToDeleteList;

    //  Search Index of Data In list
    let index = 0;
    for (let { expend, date, amount } of list) {
      if (
        expend === expendToDeleteList &&
        date === dateToDeleteList &&
        amount === amountToDeleteList
      )
        break;
      index++;
    }
    //Delete in list
    if (index < list.length) {
      list.splice(index, 1);
    }
    // console.log(list);
    liToDelete.remove();
  });

  //Add Event To Edit Button And Update List
  buttonEdit.addEventListener("click", function () {
    const liToEdit = this.parentElement.parentElement;
    const dateToEditList = liToEdit.querySelector(".dateList");
    const expendToEditList = liToEdit.querySelector(".expendList");
    const amountToEditList = liToEdit.querySelector(".amountList");

    //Clone data To Input Tag
    dateInput.value = dateToEditList.innerHTML;
    expendInput.value = expendToEditList.innerHTML;
    amountInput.value = amountToEditList.innerHTML;

    //Show/Hide Button
    buttonAdd.classList.toggle("hide");
    buttonSave.classList.toggle("hide");

    //Add Event On Save Button
    buttonSave.onclick = function () {
      //  Search Index of Data In list Old Value
      let index = 0;
      for (let { expend, date, amount } of list) {
        if (
          expend === expendToEditList.innerHTML &&
          date === dateToEditList.innerHTML &&
          amount === amountToEditList.innerHTML
        )
          break;
        index++;
      }

      // minus old Value
      total.innerHTML = +total.innerHTML - +amountToEditList.innerHTML;

      //Add Value To li element
      dateToEditList.innerHTML = dateInput.value;
      expendToEditList.innerHTML = expendInput.value;
      amountToEditList.innerHTML = amountInput.value;
      buttonAdd.classList.toggle("hide");
      buttonSave.classList.toggle("hide");

      // Plus newValue Value
      total.innerHTML = +total.innerHTML + +amountInput.value;

      //Update List
      if (index < list.length) {
        list[index].expend = expendInput.value;
        list[index].date = dateInput.value;
        list[index].amount = amountInput.value;
      }
      // console.log(list);
      dateInput.value = "";
      expendInput.value = "";
      amountInput.value = "";
    };
  });
});
