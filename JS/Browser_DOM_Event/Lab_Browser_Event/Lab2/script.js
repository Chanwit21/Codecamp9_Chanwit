// จงสร้าง Form ที่มี Button สำหรับ submit form และเขียนคำสั่งเพิ่ม Event Handler ลงใน Form เมื่อผู้ใช้กด submit form ให้ Alert คำว่า “Form is submitted” โดยใช้วิธีดังนี้
// HTML-attribute
function submmit() {
    alert("Form is submitted")
}
// DOM property
const form = document.querySelector('form')
console.log(form)
dom.onsubmit = () => {
    alert("Form is submitted")
}
// Event listener
const form1 = document.querySelector('form')
console.log(form1)
form1.addEventListener('click',submmit)


// จงเขียนคำสั่งยกเลิก Event Handler
// // HTML-attribute
// function submmit() {
//     alert("Form is submitted")
// }
// DOM property
form.onsubmit = null;
// Event listener
console.log(form1)
form1.removeEventListener('click',submmit)
