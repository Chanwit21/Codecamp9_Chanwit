// จงเขียนคำสั่งเพื่อ Alert ค่าที่อยู่ใน <li> ทุกตัว
const element = document.querySelectorAll('li')
for (let value of element){
    alert(value.innerHTML);
}