// จงสร้าง Todo List ดังรูป
// เมื่อผู้ใช้ click Add ให้เพิ่มรายการ
// เมื่อผู้ใช้ click Edit ให้แก้ไขข้อความ
// เมื่อผู้ใช้ click Del ให้ลบรายการ
// เมื่อผู้ใช้ click ที่รายการใน List ให้
// Toggle เส้นที่ขีดค่าข้อความ
const btnAdd = document.querySelector('.btn-add')
const inputMain = document.querySelector('.mainInput')
const ul = document.querySelector('.listTodo')

function creatElement(tagName,innerHtml,className) {
  const ele = document.createElement(tagName);
  if(innerHtml) ele.innerHTML = innerHtml;
  if(className) ele.className = className;
  return ele
}

// console.log(creatElement("span","innerHtml","span"))

btnAdd.addEventListener('click',(e)=>{
  const li = creatElement('li')
  const spanTag = creatElement('span',inputMain.value)
  const buttonEdit = creatElement('button','Edit');
  const buttonDel = creatElement('button','Del');
  li.append(spanTag)
  li.append(buttonEdit)
  li.append(buttonDel)
  ul.append(li);
  inputMain.value = ''

  //Add Event To Toggle Span
  spanTag.addEventListener('click',function(){
    this.classList.toggle("toggle")
    // console.log(this)
  })

  //Add Event to Edit Button
  const edit = li.querySelector('button')
  edit.addEventListener('click',function (){
    if(this.innerHTML === 'Edit') {
      const span = this.previousElementSibling
      const inputEdit = creatElement('input')
      inputEdit.value = span.innerHTML
      const liParent = span.parentElement
      liParent.prepend(inputEdit)
      // console.log(liParent)
      span.remove()
      this.innerHTML = "Save"
      // console.log(span)
    } else {
      const newSpan = creatElement('span')
      const inputEdit = this.previousElementSibling
      const liParent = this.parentElement
      newSpan.innerHTML = inputEdit.value
      liParent.prepend(newSpan)
      inputEdit.remove()
      this.innerHTML = "Edit"

      //Add Event In New Span
      newSpan.addEventListener('click',function(){
        this.classList.toggle("toggle")
        // console.log(this)
      })
    }
  })
  
  // Add Event In Del Button
  const delButton = li.querySelectorAll('button')[1]
  // console.log(delButton)
  delButton.addEventListener('click',function(){
    const liToDel = this.parentElement;
    // console.log(liToDel)
    liToDel.remove()
  })

})