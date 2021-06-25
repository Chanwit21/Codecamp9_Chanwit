// ให้เขียน function ข้างล่างให้อยู่ในรูป Arrow Function

let ask = (question, yes, no) => (confirm(question))? yes(): no();
  ask('Do you agree?', 
    function () { alert('You agreed.'); },
    function () { alert('You canceled the execution.'); }
  );

console.log(ask('Do you agree?',function () { alert('You agreed.'); },function () { alert('You canceled the execution.');}));