const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

// Case false : lib qs JSON.parse  'foo=bar&abc=xyz&abc=123' to Javascript Object
// Case true : lib query string 'foo=bar&abc=xyz&abc=123' to Javascript Object
app.use(express.urlencoded({ extended: false })); //Content-type application/x-www-form-urlencode

//Content-Type application/json
// parse string to javascript object
app.use(express.json()); //=> convert JSON string to Javascript Object

// Content-Type  multipart/form-data use external middleware such as  busboy,formidable, multer

// // Clien send
// axios.post('/upload', new FormData(), { headers: { ['Content-Type']: 'multypart/form-data' } });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/login.html'));
});

app.post('/post-login', (req, res) => {
  const body = req.body;
  console.log(body.username);
  console.log(typeof body.username);
  console.log(body.password);
  console.log(typeof body.password);
});

app.listen(4567, () => console.log('Server is running on Port 4567'));
