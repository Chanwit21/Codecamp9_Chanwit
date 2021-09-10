// const pm = new Promise((resolve, reject) => {
//   console.log('Start...');
//   resolve('OK');
//   setTimeout(() => {
//     console.log('IN PM');
//   }, 1000);
//   //   console.log('End..');
// }).then((r) => console.log(r));

// ถ้า .then ไปที่ Promise แล้ว
// pm.then((r) => console.log(r));

function pmShow(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n + 1);
    }, 1000);
  });
}

pmShow(1)
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x))
  .then((x) => pmShow(x));

// function pmShow1(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(n);
//       reject(n + 1);
//     }, 1000);
//   });
// }

// pmShow1(1)
//   .catch((x) => pmShow1(x))
//   .catch((x) => pmShow1(x))
//   .catch((x) => pmShow1(x))
//   .catch((x) => pmShow1(x));
