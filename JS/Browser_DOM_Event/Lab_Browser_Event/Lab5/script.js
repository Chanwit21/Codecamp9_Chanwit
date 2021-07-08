// จงสร้าง <input> และมี attribute ชื่อ name มีค่าเท่ากับ “nickname”
// จงสร้าง <input> อีกอันให้มี attribute ชื่อ name มีค่าเท่ากับ “job”
// เมื่อผู้ใช้ click ที่ <input> ให้ console.log ค่า attribute name ของ <input>
// เมื่อผู้ใช้พิมพ์ค่าลงใน <input> ให้ console.log ค่าที่ผู้ใช้พิมพ์
// Hint: event.target และ oninput event
const inputName = document.getElementsByName("nickname")[0];
const inputJob = document.getElementsByName("job")[0];

inputName.addEventListener('click',e=>{
    console.log(e.target.name)
})
inputName.addEventListener('change',e=>{
    console.log(e.target.value)
})


inputJob.addEventListener('click',e=>{
    console.log(e.target.name)
})
inputJob.addEventListener('change',e=>{
    console.log(e.target.value)
})