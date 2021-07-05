// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// const result = array.filter((item) => item > 10)
// console.log(result)

// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่
// const result = array.filter((item) => item % 2 === 1)
// const result = array.filter((item) => item % 2)          //ถ้าเป็นเลขคู่ item % 2 จะเป็น 0 ให้ค่า false
// console.log(result)

// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// const result = array.filter((item) => typeof item === 'number')
// console.log(result)

// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const result = array.filter((item) => item.length > 6)
// console.log(result)

// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// const result = array.filter((item) => item > 0)
// console.log(result)

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// const result = array.filter((item) => item % 3 === 0)
// console.log(result)

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// const result = array.filter((item) => item[0] === 'E')
// const result = array.filter((item) => item.startsWith('E'));
// console.log(result)

// มี 2 วิธี
// วิธี1
// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const result = array.filter((item) => {
//     let check = true;
//     for (let element of item) {
//         if(element > 'Z') {
//             check = false;
//         }
//     }
//     return check;
// })
// console.log(result)

//วิธีที่2
// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const result = array.filter((item) => item === item.toUpperCase())
// console.log(result)

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// const result = array.filter((item) => item.toLowerCase().includes('buri'))
// const result = array.filter((item) => item.toUpperCase().includes('BURI'))
// console.log(result)

// const array = [
//   { name: "Ben", age: 14 },
//   { name: "Phil", age: 18 },
//   { name: "John", age: 32 },
//   { name: "Ann", age: 16 },
//   { name: "Paul", age: 24 },
// ];
// // อายุไม่น้อยกว่า 18
// const result = array.filter((item) => item.age >= 18)
// console.log(result)

// const array = [
//   { id: 1, name: "Pepsi" },
//   { id: 2, name: "Mirinda" },
//   { id: 3, name: "Coke" },
//   { id: 4, name: "Fanta" },
//   { id: 5, name: "Sprite" },
// ];
// // id ไม่เท่ากับ 4
// const result = array.filter((item) => item.id !== 4);
// console.log(result);

// const array = [
//   { name: "John", birth: "2001-07-31" },
//   { name: "Jack", birth: "1990-06-24" },
//   { name: "Jim", birth: "1984-12-13" },
//   { name: "Jeff", birth: "1996-02-05" },
//   { name: "Joe", birth: "2002-06-13" },
// ];
// // เกิดเดือน 6
// const result = array.filter((item) => item.birth[6] === '6');
// console.log(result);