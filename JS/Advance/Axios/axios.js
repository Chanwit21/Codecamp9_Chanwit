const axios = require('axios');
const fs = require('fs');

// const url = 'https://jsonplaceholder.typicode.com';

// const route = '/posts';
// // const route = '/todos';
// // const route = '/users';

// // // ส่งมาเป็น 'application/json;แต่ axios แปลงให้แล้ว
// // axios({
// //   url: url + route,
// //   mathode: 'GET',
// // })
// //   .then(res => {
// //     // fs.writeFile('posts.json', JSON.stringify(res.data), 'utf-8', err => {
// //     //   console.log(err);
// //     // });
// //     console.log(res.status);
// //     console.log(res.statusText);
// //     console.log(res.headers);
// //   })
// //   .catch(err => console.log(err));

// //   อีกแบบ + asyncData
// const getPosts = async url => {
//   try {
//     // const res = await axios.get(url);
//     //   const res = await axios(url, { methode: 'get' });
//     // const res = await axios.delete(url);

//     //  Filter By params
//     // const res = await axios(url, {
//     //   methode: 'get',
//     //   params: {
//     //     userId: 1,
//     //   },
//     // });
//     console.log(res.data);
//     console.log(res.status);
//     console.log(res.statusText);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getPosts(url + route);
