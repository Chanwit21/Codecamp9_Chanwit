// จงสร้าง Button มีข้อความว่า “Click to hide me”
// เมื่อผู้ใช้ click button ให้ซ่อน button
const button = document.querySelector('button')
console.log(button)
button.addEventListener('click',()=>{
    button.remove()
})