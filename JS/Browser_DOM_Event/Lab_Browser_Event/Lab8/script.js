// จงสร้าง Button มีข้อความว่า “Hide”
// เมื่อผู้ใช้ click button ให้ซ่อนข้อความและเปลี่ยนข้อความบน Button เป็น “Show” เมื่อ click button อีกครั้งให้แสดงข้อความและเปลี่ยนข้อความบน Button เป็น Hide
const show = document.querySelectorAll('button')[0];
const hide = document.querySelectorAll('button')[1];
let center = document.querySelector('center')
console.log(center)
hide.addEventListener('click',()=>{
    let text = document.querySelector('h1');
    text.innerHTML = ""
})

show.addEventListener('click',()=>{
    let text = document.querySelector('h1');
    text.innerHTML = "Lorem, ipsum dolor."
})