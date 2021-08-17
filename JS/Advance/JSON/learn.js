// const test = JSON.stringify('bob');
// console.log(test);

// const obj = {
//   firstname: 'john',
//   lastname: 'Doe',
//   age: 27,
//   isMarried: false,
//   phoneNumbers: ['089-697-7689', '084-659-7235'],
//   address: {
//     distric: 'Sathorn',
//     province: 'bangkok',
//     country: 'Thailand',
//   },
//   //   Function ก็จะไม่สามารถแปลงเป็น json File ได้
//   sayHi: function () {
//     console.log('Hi');
//     return 'Hi';
//   },
// };
// console.log(obj);

// //  Function แปลง เป็น json
// const json = JSON.stringify(obj);
// console.log(json);

// // เขียนแบบ JSON File String ต้อง  Double Quote Key ต้องครอบด้วย Double Quote เสมอ
// const json1 = `(
// {"firstname":"john",
// "lastname":"Doe",
// "age":27,
// "isMarried":false,
// // จะเห็นว่า undefined หายไป
// "car":null,
// "number":[1,2,3,4],
// "object":{"city":"bangkok","country":"Thailand"}
// })`;

// // JSON.stringify แปลง primitive ได้โดยตรงเลย
// const num = 18;
// const json_num = JSON.stringify(num);
// console.log(json_num);
// console.log(JSON.stringify('String'));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify({ name: 'bomb' }));

// แปลง Json กลับมา
const res = '{"status":"success", "time":"2021-08-17T08:13:27"}';
const parseRes = JSON.parse(res);
console.log(res);
console.log(typeof parseRes);

// File Json ห้ามี Comment นะ
