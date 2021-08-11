// จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี index เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// execute updateTask(2, 'Travelling')
const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function updateTask(id, newName) {
    const element = tasks.find((item) => item.id === id);
    if(element){
      element.name = newName;
    }
    return tasks
}

console.log(updateTask(2, 'Travelling'))
