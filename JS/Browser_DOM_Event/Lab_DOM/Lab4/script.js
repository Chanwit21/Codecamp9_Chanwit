// จงเขียนคำสั่งเพื่อ access <li> ตัวที่สอง โดยใช้วิธีต่อไปนี้
// querySelector
// querySelectorAll
// getElementsByClassName
// getElementById
// getElementsByTagName
const element1 = document.querySelector('ul li:nth-child(2)');
console.log(element1)
const element2 = document.querySelectorAll('ul li:nth-child(2)')[0];
console.log(element2)
const element3 = document.getElementsByClassName("active")[0];
console.log(element3)
const element4 = document.getElementById('2');
console.log(element4)
const element5 = document.getElementsByTagName('li')[1];
console.log(element5)

