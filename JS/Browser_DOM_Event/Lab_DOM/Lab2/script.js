// จงเขียนคำสั่งเพื่อ access <h2> โดยใช้วิธีต่อไปนี้
// querySelector
// querySelectorAll
// getElementsByClassName
// getElementsByTagName
const element1 = document.querySelector('h2');
console.log(element1)
const element2 = document.querySelectorAll('h2')[0];
console.log(element2)
const element3 = document.getElementsByClassName("title-1")[0];
console.log(element3)
const element4 = document.getElementsByTagName('h2')[0];
console.log(element4)