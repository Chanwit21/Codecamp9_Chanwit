// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร 
let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // *              //log John ออกมาเพราะว่า this คือ Object user และ user.name คือ  John 
  
