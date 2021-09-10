const express = require('express');
const multer = require('multer');
const cors = require('cors');
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file);
  // console.log(req.body);
  const { firstName } = req.body;
  console.log(firstName);
  //   console.log(req.body);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
});

const cpUpload = upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 8 },
]);
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
});

app.listen(8000, () => console.log('Server is running in Port 8000'));
