// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// const result = array.map((item) => item*2)
// console.log(array)
// console.log(result)

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// const result = array.map((item) => "" + item)
// console.log(array)
// console.log(result)

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// const result = array.map((item) => typeof item)
// console.log(array)
// console.log(result)

// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const result = array.map((item) => item.toUpperCase())
// console.log(array)
// console.log(result)

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result = array.map((item) => (item % 2 === 0)? "even":"odd")
// console.log(array)
// console.log(result)

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// const result = array.map((item) => Math.abs(item))
// console.log(array)
// console.log(result)

// const array1 = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// const result = array1.map((item) => item.toFixed(2))
// console.log(array1)
// console.log(result)

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const result = array.map((item) => {
//     let result = "";
//   switch (item) {
//     case 0:
//         result = "Jan";
//       break;
//     case 1:
//         result = "Feb";
//       break;
//     case 2:
//         result = "Mar";
//       break;
//     case 3:
//         result = "Apr";
//       break;
//     case 4:
//         result = "May";
//         break;
//     case 5:
//         result = "Jun";
//         break;
//     case 6:
//         result = "Jul";
//         break;
//     case 7:
//         result = "Aug";
//         break;
//     case 8:
//         result = "Sep";
//         break;
//     case 9:
//         result = "Oct";
//         break;
//     case 10:
//         result = "Nov";
//         break;
//     case 11:
//         result = "Dec";
//         break;
//   }
//   return result;
// });
// console.log(array);
// console.log(result);

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// let i = 0;
// const result = array.map(() => ++i )
// console.log(array)
// console.log(result)

// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
//   ];
//   // result: ["apple", "banana", "watermelon"]
//   const result = array.map((element) => element.name )
// console.log(array)
// console.log(result)

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// // result: [14, 18, 32]
// const result = array.map((element) => element.age);
// console.log(array)
// console.log(result)

// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// const result = array.map((element) => `${element.name} ${element.surname}`);
// console.log(array)
// console.log(result)

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 19 },
// //   { name: "banana", birth: "1990-10-01", age: 29 },
// //   { name: "watermelon", birth: "1985-12-01", age: 33 },
// // ]
// const result = array.map((element) => {
//     let clone = {...element}
//     clone.age = 2021 - +element.birth.split("-")[0]
//     return clone;
// });
// console.log(array)
// console.log(result)

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
// const result = array.map((element) => {
//     let month = "";
//   switch (+element.birth.split("-")[1]) {
//     case 0:
//         month = "Jan";
//       break;
//     case 1:
//         month = "Feb";
//       break;
//     case 2:
//         month = "Mar";
//       break;
//     case 3:
//         month = "Apr";
//       break;
//     case 4:
//         month = "May";
//         break;
//     case 5:
//         month = "Jun";
//         break;
//     case 6:
//         month = "Jul";
//         break;
//     case 7:
//         month = "Aug";
//         break;
//     case 8:
//         month = "Sep";
//         break;
//     case 9:
//         month = "Oct";
//         break;
//     case 10:
//         month = "Nov";
//         break;
//     case 11:
//         month = "Dec";
//         break;
//   }
//     return `<tr><td>${element.name}</td><td>${element.birth.split("-")[2]} ${month} ${element.birth.split("-")[0]}</td></tr>`
// });
// console.log(array);
// console.log(result);
