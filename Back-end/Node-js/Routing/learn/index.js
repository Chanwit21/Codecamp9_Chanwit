const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

// app.get('/', (req, res) => {
//   res.send('<h1>This is Root Path</h1>');
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>This is About Page</h1>');
// });

// app.post('/create-something', (req, res) => {
//   res.send(`This is methode path: /create-something`);
// });

// app.put('/users/update', (req, res) => {
//   res.send(`This is methode put, path: /users/update`);
// });

// app.post('/', (req, res) => {
//   res.send('This is methode post of root paths');
// });

// app.delete('/', (req, res) => {
//   res.status(400).send({ message: 'Delete methode', title: 'Test ststus 400 ' });
// });

// app.use((req, res) => {
//   res.send('<h1>Hello my first express web app</h1>');
// });

// __dirname คือ path จาก root มาถึงปัจจุบัน
// console.log(__dirname);
// path.resolve('./') เหมือนกับ __dirname
// console.log(path.resolve('./'));
// __filename คือเอาไฟล์บัจจุบัณมา join กับ absolute path แล้ว

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/login.html'));
});

app.post('/post-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/login.html'));
});

// app.get('/test', (req, res) => {
//   fs.readFile('./pages/index.html', 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

app.listen(8888, () => console.log('Server is Running on port 8888'));
