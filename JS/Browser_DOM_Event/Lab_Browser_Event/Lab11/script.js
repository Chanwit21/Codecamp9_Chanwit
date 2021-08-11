// จงสร้าง Counter มี button การทำงานและตัวเลขดังรูป
// เมื่อผู้ใช้ click + ให้เพิ่มค่าตัวเลขขึ้น 1
// เมื่อผู้ใช้ click - ให้ลดค่าตัวเลขลง 1
// เมื่อผู้ใช้ click Reset ให้ reset ค่าตัวเลขเป็น 0
// ตัวเลขห้ามติดลบ
const plus = document.querySelectorAll('button')[0];
const minus = document.querySelectorAll('button')[1];
const reset = document.querySelectorAll('button')[2];
let count = 0;
plus.addEventListener('click',()=>{
    // let update = document.querySelectorAll('button')[0];
    let plus1 = document.querySelector('h1')
    // count = count+1;
    plus1.innerHTML = ++count;
    // console.log(del.innerHTML)
    // del.remove()
    // update.insertAdjacentHTML('afterend',`<h1 style="display: inline-block;">${count}</h1>`)
})
minus.addEventListener('click',()=>{
    // let update = document.querySelectorAll('button')[0];
    let minus1 = document.querySelector('h1')
    if(count > 0){
        // count = count-1;
        minus1.innerHTML = --count
    }
    // del.remove()
    // update.insertAdjacentHTML('afterend',`<h1 style="display: inline-block;">${count}</h1>`)
})
reset.addEventListener('click',()=>{
    // let update = document.querySelectorAll('button')[0];
    let resetCount = document.querySelector('h1')
    count = 0
    resetCount.innerHTML = count;
    // del.remove()
    // update.insertAdjacentHTML('afterend',`<h1 style="display: inline-block;">${count}</h1>`)
})