// จงเขียนคำสั่งเพื่อ access <div>, <ul>, <li> ตัวแรก และ <li> ตัวที่สอง
const element1 = document.querySelector("div")
console.log(element1)
const element2 = document.querySelector("ul")
console.log(element2)
const element3 = element2.querySelector("li")
console.log(element3)
const element4 = element2.querySelector("li:last-child")
console.log(element4)