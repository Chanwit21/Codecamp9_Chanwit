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

// const promiseProduct = new Promise((resolve, reject) => {
//   fs.readFile('product.json', 'utf-8', (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(JSON.parse(data).products);
//       // resolve(data);
//     }
//     // if (err) reject(err);
//     // resolve(data);
//     // resolve(JSON.parse(data).products);
//   });
// });

// promiseProduct.then(
//   function (result) {
//     console.log(result);
//   }
//   // function (err) {
//   //   console.log(err);
//   // }
// );

// promiseProduct.catch(function (err) {
//   console.log(err);
// });

// // Chaining
// promiseProduct
//   .then(function (result) {
//     // console.log(result);
//     console.log('Fulfilled');
//   })
//   .catch(function (err) {
//     // console.log(err);
//     console.log('Rejected');
//   })
//   .finally(function () {
//     console.log('Finally block');
//   });

// Or
// function successCallback(result) {
//   console.log(result);
//   // more code.....
// }

// function errorCallback(err) {
//   console.log(err);
//   // more code.....
// }

// promiseProduct.then(successCallback).catch(errorCallback);

// // Promist Chaining
// const promise = new Promise((resolve, reject) => {
//   resolve(1);
// });

// promise
//   .then(result => {
//     console.log('then1', result);
//     return result * 2;  // Return ตัวนี้จะไปเป็น Result ของตัวถัดไป
//   })
//   .then(result => {
//     console.log('then2', result);
//     return result * 2;
//   })
//   .then(result => {
//     console.log('then3', result);
//     return result * 2;
//   })
//   .then(result => {
//     console.log('then4', result);
//     return result * 2;
//   })
//   .then(result => {
//     console.log('then5', result);
//     return result * 2;
//   })
//   .then(result => {
//     console.log('then6', result);
//     return result * 2;
//   });

// // Lab ABCD
// // ASCII 65-90
// const promiseLogDelayNum = num =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(String.fromCharCode(num));
//       resolve(num);
//     }, 1000);
//   });

// promiseLogDelayNum(65)
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1))
//   .then(result => promiseLogDelayNum(result + 1));

//  เฉลย
// const delayLog = (text, ms) =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve();
//       console.log(text);
//     }, ms)
//   );

// delayLog('A', 1000)
//   .then(result => delayLog('B', 1000))
//   .then(result => delayLog('C', 1000))
//   .then(result => delayLog('D', 1000))
//   .then(result => delayLog('E', 1000))
//   .then(result => delayLog('F', 1000));

// // ส้รางฟังก์ชัน ทอยลูกเต๋า
// // ทอยสามครั้งแล้วรวมกัน
// const promiseRollDice = (num = 0) =>
//   new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 6) + 1;
//     console.log(`current value is ${random} sum value is ${num + random}`);
//     resolve(random + num);
//   });

// promiseRollDice().then(successCallback).then(successCallback);

// function successCallback(result) {
//   return promiseRollDice(result);
// }

// // ทอยได้มากกว่า 3 ครั้งทอยต่อถ้าทอยไม่ได้ 3 หยุด
// const promiseRollDice2 = () =>
//   new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 6) + 1;
//     if (random > 3) {
//       console.log('Value More than 3 is', random);
//       resolve(random);
//     } else {
//       reject('The value of the dice is less than 3');
//     }
//   });
// promiseRollDice2().then(success).then(success).catch(errorRolDice);

// function success() {
//   return promiseRollDice2();
// }

// function errorRolDice(err) {
//   console.log(err);
//   console.log('Exit');
// }

// เฉลย
const rollDice = () => Math.floor(Math.random() * 6) + 1;

// ข้อ1
// const promise = new Promise((resolve, reject) => {
//   const score = rollDice();
//   resolve(score);
// });
// promise
//   .then(result1 => {
//     console.log(`Current ${result1} Accumulate ${result1}`);
//     return result1;
//   })
//   .then(result2 => {
//     const score2 = rollDice();
//     console.log(`Current ${score2} Accumulate ${result2 + score2}`);
//     return result2 + score2;
//   })
//   .then(result3 => {
//     const score3 = rollDice();
//     console.log(`Current ${score3} Accumulate ${result3 + score3}`);
//     return result3 + score3;
//   });

// ข้อ 2
// const play = () => {
//   return new Promise((resolve, reject) => {
//     const score = rollDice();
//     if (score > 3) {
//       resolve(score);
//     } else {
//       reject(score);
//     }
//   });
// };

// play()
//   .then(result => {
//     console.log('Score : ' + result);
//     return play();
//   })
//   .then(result => {
//     console.log('Score : ' + result);
//     return play();
//   })
//   .then(result => {
//     console.log('Score : ' + result);
//   })
//   .catch(err => {
//     console.log('Stop : ' + err);
//   });

// // ข้อ 2 อีกแบบ
// const dice = new Promise((resolve, reject) => {
//   const score = rollDice();
//   resolve(score);
// });

// dice
//   .then(result1 => {
//     if (result1 > 3) {
//       console.log('score : ' + result1);
//     } else {
//       throw result1;
//     }
//     return new Promise((resolve, reject) => {
//       const score = rollDice();
//       resolve(score);
//     });
//   })
//   .then(result1 => {
//     if (result1 > 3) {
//       console.log('score : ' + result1);
//     } else {
//       throw result1;
//     }
//   })
//   .catch(err => {
//     console.log('stop : ' + err);
//   });

// // LAB เอาข้อมูลจาก 2 pric และตัวเลขไฟล์มาคูณกัน และบวกกัน
// // แบบที่เราทำยังไม่ดี ใช้งานได้ไม่ยืดหยุ่น
// const getProductPriceFromIndex = index => {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./product.json', 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(JSON.parse(data).products[index].price);
//       }
//     });
//   });
// };

// const getParamAndOperate = price => {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./number.json', 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         const number = JSON.parse(data);
//         resolve(
//           `Sum value is ${number + price}, Multiply value is ${number * price}`
//         );
//       }
//     });
//   });
// };

// getProductPriceFromIndex(1)
//   .then(price => getParamAndOperate(price))
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// เฉลย
const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

// readFile('./number.json')
//   .then(number => {
//     readFile('./product.json').then(data => {
//       const { products } = data;
//       const price = products[1].price;
//       console.log(
//         `Sum value is ${number + price}, Multiply value is ${number * price}`
//       );
//     });
//   })
//   .catch(err => console.log(err));

// // เฉลยอีกแบบ
// let number;
// readFile('./number.json')
//   .then(result1 => {
//     number = result1;
//     return readFile('./product.json');
//   })
//   .then(result2 => {
//     console.log(number + result2.products[1].price);
//     console.log(number * result2.products[1].price);
//   })
//   .catch(err => console.log(err));

// ใช้แบบ Promist.all
const promiseArr = [readFile('./product.json'), readFile('./number.json')];
Promise.all(promiseArr)
  .then(result => {
    const [data, number] = result;
    console.log(data.products[1].price + number);
    console.log(number * data.products[1].price);
  })
  .catch(err => console.log(err));
