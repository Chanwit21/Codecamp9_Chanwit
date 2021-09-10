const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  fs.readFile('./html/index.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Read File Error');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/login', (req, res) => {
  fs.readFile('./html/login.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('ReadFile Error');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/register', (req, res) => {
  fs.readFile('./html/register.html', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('ReadFile Error');
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/submit-login', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.post('/submit-register', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen(8080, () => console.log('Server is running in port 8080'));
