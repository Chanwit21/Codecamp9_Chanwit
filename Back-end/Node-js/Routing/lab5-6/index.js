const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Lab 5

// app.get('/', (req, res) => {
//   res.status(200).send('<h1>Welcome To My Website</h1>');
// });

// app.get('/home', (req, res) => {
//   res.status(200).send('<h1>This is home page</h1>');
// });

// แบบนี้
// app.use((req, res) => {
//   res.status(404).send('<h1>Page Not Found</h1>');
// });

// แบบนี้ก็ได้ แต่ไม่ควรทำ
// app.get('*',(req, res) => {
//   res.status(404).send('<h1>Page Not Found</h1>');
// });

// Lab 6

app.get('/', (req, res) => {
  // อีกแบบ
  // res.sendFile(path.join(__dirname + '/html/index.html'));
  //  แบบปกติ
  fs.readFile('./html/index.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(`<h1>Have Error 500 ${err}</h1>`);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/home', (req, res) => {
  // res.sendFile(path.join(__dirname + '/html/home.html'));
  //  แบบปกติ
  fs.readFile('./html/home.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(`<h1>Have Error 500 ${err}</h1>`);
    } else {
      res.status(200).send(data);
    }
  });
});

// แบบนี้ใช้ดักจับ path ไม่ตรง
app.use((req, res) => {
  // res.sendFile(path.join(__dirname + '/html/notfound.html'));
  //  แบบปกติ
  fs.readFile('./html/notfound.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(`<h1>Have Error 500 ${err}</h1>`);
    } else {
      res.status(200).send(data);
    }
  });
});

// แบบนี้ก็ได้ แต่ไม่ควรทำ ใช้ดักจับ path ไม่ตรง
// app.get('*',(req, res) => {
//   // res.sendFile(path.join(__dirname + '/html/notfound.html'));
// //  แบบปกติ
// fs.readFile('./html/notfound.html', 'utf-8', (err, data) => {
//   if (err) {
//     res.status(500).send(`<h1>Have Error 500 ${err}</h1>`);
//   } else {
//     res.status(200).send(data);
//   }
// });
// });

app.listen(8000, () => console.log('Server is running in port 8000'));
