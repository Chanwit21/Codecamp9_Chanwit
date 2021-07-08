// จงสร้าง Form ที่มี Button สำหรับ submit form และเขียนคำสั่งเพื่อยกเลิกการส่ง request ไปที่ server เมื่อผู้ใช้งานกด submit form
const button = document.getElementsByClassName('button')[0];
button.addEventListener('click',(event) => {
    event.preventDefault()
    alert('Can not get Out')
})