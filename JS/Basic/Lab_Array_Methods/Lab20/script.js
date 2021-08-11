// จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property เท่ากับ id
// execute deleteTask(1)
const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
    tasks.splice(tasks.findIndex((item) => item.id === id),1)
    return tasks;
}

console.log(deleteTask(2))

//เฉลย
// function deleteTask(id) {
//   const idx = tasks.findIndex((item) => item.id === id);
//   tasks.splice(idx,1)
//   return tasks;
// }
// console.log(deleteTask(2))
// console.log(tasks.length)
