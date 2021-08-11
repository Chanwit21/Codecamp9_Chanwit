// จงสร้าง Input และ Button ดังรูปเมื่อผู้ใช้กรอกเบอร์โทรและกด Check
// ถ้าผู้ใช้ไม่กรอกให้ขึ้นข้อความ Phone Number is required
// ถ้าผู้ใช้กรอกค่าที่ไม่ใช่ตัวเลขให้ขึ้นข้อความ Phone Number is invalid
// ถ้าผู้ใช้กรอกค่าที่มีความยาวไม่เท่ากับ 10 ให้ขึ้นข้อความ Invalid length
// ถ้ากรอกถูกต้องให้ Alert “Your number is valid”
const button = document.querySelector('button');
const inputTag = document.querySelector('input');
let value = "";
inputTag.addEventListener('input',(e)=>{
    value = e.target.value
    let text = document.querySelector('p')
    if (value.length !== 0){
        text.remove()
    }
})
button.addEventListener('click',()=>{
    if(value.length === 0){
        button.insertAdjacentHTML('afterend', '<p>Phone Number is invalid</p>');
    } else if (value.length !== 10){
        button.insertAdjacentHTML('afterend', '<p>Invalid length</p>');
    }
    if (value.length === 10) {
        alert('Your number is valid')
    }
})