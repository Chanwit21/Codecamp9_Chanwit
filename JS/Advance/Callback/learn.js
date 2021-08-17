const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// fs.readFile('./user.json', 'utf-8', (err, data) => {
//   if (err) throw err;
//   //   Data ที่ส่งมา จะเป็น text อยู่ถ้ายังไม่ได้แปลง
//   console.log(data);
//   //   จะแปลงก็ได้
//   const obj = JSON.parse(data);
//   console.log(obj);
// });

// const data = fs.readFileSync('./user.json', 'utf-8', (err) => {
//   if (err) throw err;
//   console.log('Read Success');
// });
// console.log(data);

// const data = {
//   transaction: [
//     {
//       id: 2345,
//       product: 'Paprika',
//       price: 20,
//       amount: 2,
//       user: 'a1@gmail.com',
//     },
//   ],
// };

// fs.writeFile('transaction.json', JSON.stringify(data), 'utf-8', (err) => {
//   if (err) throw err;
//   else console.log('Write File Success');
// });

fs.readFile('user.json', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  const user = JSON.parse(data).users;
  const targetUser = user.find((item) => item.id === 5679);
  console.log(targetUser);
  fs.readFile('product.json', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    const product = JSON.parse(data).products;
    const targetProduct = product.find((item) => item.id === 1346);
    console.log(targetProduct);
    const newData = {
      transactions: [
        {
          id: uuidv4(),
          email: targetUser.email,
          productName: targetProduct.name,
          price: targetProduct.price,
          amount: 5,
        },
      ],
    };
    fs.writeFile(
      'transactions.json',
      JSON.stringify(newData),
      'utf-8',
      (err) => {
        if (err) console.log(err);
      }
    );
  });
});

// Pomist Part

// const promist = new Promise((reslove, reject) => {
//   fs.readFile('./user.json', 'utf-8', (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       reslove(data);
//     }
//   });
// });

// // promist.then((data) => console.log(data)).catch((err) => console.log(err));

// const Test = async () => {
//   const promist = new Promise((resolve, reject) => {
//     fs.readFile('./user.json', 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
//   const data = await promist;
//   //   console.log(data);
//   // // ต่อให้ Return data  ตรงนี้ออกมาก็ตาม ถ้าใน async มี Promist async function นั้นๆ จะ Return Promist Object ออกมา
//   //   return data;
// };

// Test();
// console.log(Test().then((data) => console.log(data)));
