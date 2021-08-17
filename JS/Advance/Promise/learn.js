const fs = require('fs');
// const promist = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Promise');
//     resolve('DONE');
//   }, 3000);
// });
// // Promise
// // วินาทีที่ 0 - 3 state:pending,result:undefined
// // ตั้งแต่วินาทีที่ 3 เป็นต้นไป state:Fullfilled result:"DONE"

// setTimeout(() => console.log(promist), 1000);
// setTimeout(() => console.log(promist), 2000);
// setTimeout(() => console.log(promist), 3000);

// const promist2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Promise');
//     reject('Error');
//   }, 3000);
// });
// // Promise
// // วินาทีที่ 0 - 3 state:pending,result:undefined
// // ตั้งแต่วินาทีที่ 3 เป็นต้นไป state:rejected result:"Error"
// setTimeout(() => console.log(promist2), 1000);
// setTimeout(() => console.log(promist2), 2000);
// setTimeout(() => console.log(promist2), 3000);

// const promisify = new Promise((resolve, reject) => {
//   fs.readFile('user.json', 'utf-8', (err, data) => {
//     if (err) reject(err);
//     resolve(data);
//   });
// });

// promisify.then(
//   function (result) {
//     console.log(result);
//   },
//   function (err) {
//     console.log(err);
//   }
// );

const promisify2 = new Promise((resolve, reject) => {
  fs.readFile('product.json', 'utf-8', (err, data) => {
    if (err) reject(err);
    resolve(JSON.parse(data).products);
  });
});

promisify2.then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log(err);
  }
);
