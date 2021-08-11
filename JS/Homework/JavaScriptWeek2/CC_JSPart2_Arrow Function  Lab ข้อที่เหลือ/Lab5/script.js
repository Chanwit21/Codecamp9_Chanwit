// ให้เขียน function ข้างล่างให้อยู่ในรูป Arrow Function

let ask = (question, yes, no) => (confirm(question))? yes(): no();

console.log(ask('Do you agree?',() => {alert('You agreed.');},() => {alert('You canceled the execution.');} ));