// จงเขียนคำสั่งเพื่อเปลี่ยนสีพื้นหลังของ button ให้เป็นสีแดงเมื่อเวลาผ่านไป 3 วินาที หลังจากนั้นอีก 3 วินาทีให้เปลี่ยนสีพื้นหลังกลับมาเหมือนเดิม

// ใช้วิธีเปลี่ยน property style ของ element object
// const button = document.querySelector('button');
// console.log(button);
// setTimeout(() => {
//     button.style.backgroundColor = "red"
// }, 3000);
// setTimeout(() => {
//     button.style.backgroundColor = ""
// }, 6000);

// ใช้วิธีเพิ่มลด class
const button1 = document.querySelector('button');
console.log(button1);
setTimeout(() => {
    button1.classList.add('red')
}, 3000);
setTimeout(() => {
    button1.classList.remove('red')
}, 6000);

