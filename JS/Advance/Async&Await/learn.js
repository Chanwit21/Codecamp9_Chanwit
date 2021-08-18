const fs = require('fs');
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

// ลองทำแบบ async Await
const fn = async () => {
  try {
    const number = await readFile('./number.json');
    const data = await readFile('./product.json');
    console.log(number + data.products[1].price);
    console.log(number * data.products[1].price);
  } catch (err) {
    console.log(err);
  }
};

fn().then(() => console.log('call fn'));
