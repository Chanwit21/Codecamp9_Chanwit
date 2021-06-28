// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร 
const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // *                   //false เพราะว่า reference ไปที่ address คนละอัน