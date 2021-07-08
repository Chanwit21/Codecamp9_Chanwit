// จงสร้าง Form ที่มี Button สำหรับ submit form และเขียนคำสั่งเพิ่ม Event Handler ลงใน Form เมื่อผู้ใช้กด submit form ให้ Alert คำว่า “Form is submitted” โดยใช้วิธีดังนี้
// HTML-attribute
function submmit() {
    alert("Form is submitted")
}
// DOM property
const dom = document.getElementsByClassName('DOM')[0]
console.log(dom)
dom.onclick = () => {
    alert("Form is submitted")
}
// Event listener
const el = document.getElementsByClassName('El')[0]
console.log(el)
el.addEventListener('click',submmit)


// จงเขียนคำสั่งยกเลิก Event Handler
// // HTML-attribute
// function submmit() {
//     alert("Form is submitted")
// }
// DOM property
dom.onclick = null;
// Event listener
console.log(el)
el.removeEventListener('click',submmit)
