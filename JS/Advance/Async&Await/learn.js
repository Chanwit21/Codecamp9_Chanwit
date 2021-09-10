const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
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

// // ลองทำแบบ async Await
// const fn = async () => {
//   try {
//     const number = await readFile('./number.json');
//     const data = await readFile('./product.json');
//     console.log(number + data.products[1].price);
//     console.log(number * data.products[1].price);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fn().then(() => console.log('call fn'));

//#1 save ข้อมูล user ในรูปแบบ then catch
//#2 save ข้อมูล user ในรูปแบบ  async await
const users = [
  {
    id: uuidv4(),
    email: 'bom.suthi@gmail.com',
    password: 'df861gvfd',
    point: 100,
  },
  {
    id: uuidv4(),
    email: 'chanwit.p@gmail.com',
    password: 'dgd7d25f',
    point: 50,
  },
  {
    id: uuidv4(),
    email: 'Bon.suchart@gmail.com',
    password: 'dtwe435d4',
    point: 60,
  },
  {
    id: uuidv4(),
    email: 'Boy.Patthadon@gmail.com',
    password: 'dfs645',
    point: 70,
  },
  {
    id: uuidv4(),
    email: 'Boom.Sugrit@gmail.com',
    password: 'sdgfrtf4sd',
    point: 80,
  },
];

const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, JSON.stringify(data), 'utf-8', err => {
      if (err) {
        reject(err);
      }
      resolve('Write file success');
    });
  });
};

// //#1 save ข้อมูล user ในรูปแบบ then catch
// writeFile('userThenCath.json', users)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

//#2 save ข้อมูล user ในรูปแบบ  async await
// const runWriteFile = async (fileName, data) => {
//   try {
//     const result = await writeFile(fileName, data);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// runWriteFile('userAsyncAwait.json', users);

//   ให้ readFile user ที่สร้างเมื่อกี้
// เพิ่ม newUser เข้าไป แล้วเซฟไปในไฟล์เดิม แล้ว save ในไฟล์ชื่อดเดิม ( update ข้อมูล)
// #1 save ข้อมูล user ในรูปแบบ then catch
// #2 save ข้อมูล user ในรูปแบบ  async await

const newUser = {
  id: uuidv4(),
  email: 'Boss.supop@gmail.com',
  password: 'hgdfgds05',
  point: 100,
};

// readFile('userThenCath.json')
//   .then(result => {
//     const newUsers = [...result];
//     newUsers.push(newUser);
//     return writeFile('userThenCath.json', newUsers);
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

async function addUser(fileName, newUser) {
  try {
    const oldUsers = await readFile(fileName);
    const newUsers = [...oldUsers];
    newUsers.push(newUser);
    const result = await writeFile(fileName, newUsers);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

addUser('userAsyncAwait.json', newUser);
