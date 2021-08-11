// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร 
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *                     //เป็น { name: 'Pepsi', price: 18, size: '500mL' }เพราะว่ามาจาก reference เดียวกันแล้วมีการแก้ไขค่าที่ reference นั้นๆ
console.log(product2); // **                    //เป็น { name: 'Pepsi', price: 18, size: '500mL' }เพราะว่ามาจาก reference เดียวกันแล้วมีการแก้ไขค่าที่ reference นั้นๆ
console.log(product1 === product2); // ***      // เป็น true เพราะมาจาก reference ไปที่ address เดียวกัน