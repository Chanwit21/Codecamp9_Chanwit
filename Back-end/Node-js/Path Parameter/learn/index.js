const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/product/:productId/shop/:shopId', (req, res, next) => {
  const params = req.params;
  console.log(params);
  res.status(200).json({ message: 'test' });
});

app.listen(7894, () => console.log('Server is running on port 7894'));
