// function timeOut(text) {
//   return new Promise((resolve, reject) => {
//     console.log(text);
//     setTimeout(() => resolve(text), 1000);
//   });
// }

// timeOut('A')
//   .then(data => timeOut('B'))
//   .then(data => timeOut('C'))
//   .then(data => timeOut('D'))
//   .then(data => timeOut('E'))
//   .then(data => timeOut('F'))
//   .then(data => timeOut('G'))
//   .then(data => timeOut('H'))
//   .then(data => timeOut('I'))
//   .then(data => timeOut('J'))
//   .then(data => timeOut('K'))
//   .then(data => timeOut('L'))
//   .then(data => timeOut('M'))
//   .then(data => timeOut('N'))
//   .then(data => timeOut('O'))
//   .then(data => timeOut('P'))
//   .then(data => timeOut('Q'))
//   .then(data => timeOut('R'))
//   .then(data => timeOut('S'))
//   .then(data => timeOut('T'))
//   .then(data => timeOut('U'))
//   .then(data => timeOut('V'))
//   .then(data => timeOut('W'))
//   .then(data => timeOut('X'))
//   .then(data => timeOut('Y'))
//   .then(data => timeOut('Z'))
//   .then(data => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log('--------------------------------');
//     console.log('Success');
//   });

//   เฉลย
const delayLog = (text, ms) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
      console.log(text);
    }, ms)
  );
delayLog('A', 1000).then(() => {
  delayLog('B', 1000).then(() => {
    delayLog('C', 1000).then(() => {
      delayLog('D', 1000);
    });
  });
});
