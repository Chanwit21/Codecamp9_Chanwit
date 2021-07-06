// จงเขียนฟังก์ชัน byField(key, type) เพื่อเรียงค่า array ใน object ตาม key ที่ต้องการ และมีชนิดการเรียง type ค่าเป็น asc หรือ desc (ไม่มีถือว่าเป็น asc)
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
// console.log(users.sort())
console.log(users.sort(byField("name"))); // sort by name ascending
console.log(users.sort(byField("age", "desc"))); // sort by age descending

function byField(key,type="asc") {
    return function (a,b) {
        if(type === "desc") {
            if (a[key] < b[key]) return 1;
            if (a[key] === b[key]) return 0;
            if (a[key] > b[key]) return -1;
        } else {
            if (a[key] > b[key]) return 1;
            if (a[key] === b[key]) return 0;
            if (a[key] < b[key]) return -1;
        }
    }
}
