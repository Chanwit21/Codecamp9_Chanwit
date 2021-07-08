// จงเขียนคำสั่งเพื่อ access <li> ตัวที่สาม โดยใช้วิธีต่อไปนี้
// querySelector
// querySelectorAll
// getElementById
// getElementsByTagName
const element1 = document.querySelector('ul li:last-child');
console.log(element1)
const element2 = document.querySelectorAll('ul li:last-child')[0];
console.log(element2)
const element3 = document.getElementById("3");
console.log(element3)
const element4 = document.getElementsByTagName('li')[2];
console.log(element4)
