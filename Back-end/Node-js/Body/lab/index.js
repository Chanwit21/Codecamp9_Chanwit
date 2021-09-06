const express = require('express');
const app = express();
const validator = express('validator');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/users', (req, res, next) => {
  const { id, email } = req.body;

  if (!id || !email) {
    return res.status(400).json({ message: 'id and email is require' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Email is invalid' });
  }

  res.status(200).json({ user: { id, email } });
});

app.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(400).json({ message: 'password and email is require' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Email is invalid' });
  }

  res.status(200).json({ user: { email, password } });
});

app.put('/products', (req, res, next) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ message: 'name and price is require' });
  }

  if (!validator.isNumeric(price)) {
    return res.status(400).json({ message: 'price must be a number' });
  }

  res.status(200).json({ product: { name, price, description } });
});

app.delete('/products', (req, res, next) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ messcompleteage: 'ProductID is require' });
  }

  res.status(200).json({ message: 'Delete complete' });
});

app.listen(9898, () => console.log('Server is running on port 9898'));
