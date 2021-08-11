// จงสร้าง <ul>
// เขียนคำสั่ง prompt เพื่อรับข้อความ
// นำข้อความที่ได้มาสร้าง <li> และ เพิ่มเข้าไปใน <ul>
// เพิ่มไปเรื่อยๆจนกว่าผู้ใช้จะกด Cancel หรือ พิมพ์ข้อความว่าง
const element = document.querySelector('ul');
while(true) {
    let text = prompt("Enter Text");
    if(!text){
        break;
    }
    element.insertAdjacentHTML('afterbegin', `<li>${text}</li>`);
}