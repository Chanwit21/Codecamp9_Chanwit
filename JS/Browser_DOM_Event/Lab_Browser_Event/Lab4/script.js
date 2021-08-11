// จงสร้างลิงค์ <a> Tag มีข้อความว่า “Google”
// เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
// ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
// ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com
// const aTag = document.querySelector('a');
// aTag.addEventListener('click',(event)=>{
//     const CF = confirm('Leave for https://google.com?');
//     if(!CF){
//         event.preventDefault()
//     }
// })

//อีกแบบ
const aTag = document.querySelector('a');
aTag.addEventListener('click',(event)=>{
    event.preventDefault()
    const CF = confirm('Leave for https://google.com?');
    if(CF){
        location.href = "https://google.com"
        // location.assign("https://google.com")
        // location.replace("https://google.com")
    }
})