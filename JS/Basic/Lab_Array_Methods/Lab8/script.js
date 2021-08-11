// ให้เขียนโค้ดเพื่อลบ Jay ออกและใส่ Jack และ Joe เข้าไปแทน
const person = ['John', 'Jay', 'Jim', 'Jame'];
person.splice(1,1);
person.splice(1,0,"Jack","Joe");
console.log(person)