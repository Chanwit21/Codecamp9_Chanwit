// const fs = require('fs');

// exports.readFileJSON = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// exports.writeFileJSON = (fileName, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(fileName, JSON.stringify(data), (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// };

// เฉลย
const fs = require('fs/promises');

const readFileJSON = async (filename) => {
  //  ตัวนี้มันจะรีเทินเป็น Promise อยู่แล้ว
  const result = await fs.readFile(filename, 'utf-8');
  return JSON.parse(result);
};

const writeFileJSON = async (filename, data) => {
  return fs.writeFile(filename, JSON.stringify(data));
};

// methode1
module.exports = {
  writeFileJSON,
  readFileJSON,
};

// methode2
exports.readFileJSON = readFileJSON;
exports.writeFileJSON = writeFileJSON;
