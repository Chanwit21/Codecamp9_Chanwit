const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use('/public', express.static('public'));

app.get('/', (req, res, nest) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.listen(8888, () => console.log('Server is running on port 8888'));
