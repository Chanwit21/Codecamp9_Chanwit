// จงสร้าง Button มีข้อความว่า “Click to hide text”
// เมื่อผู้ใช้ click button ให้ซ่อน Text
const button = document.querySelector('button');
const text = document.querySelector('h1');
button.addEventListener('click',()=>{
    text.remove()
})