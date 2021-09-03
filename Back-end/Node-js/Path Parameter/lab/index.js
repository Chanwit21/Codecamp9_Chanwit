const express = require('express');
const app = express();
const fs = require('fs/promises');

// LAb1
app.get('/sum/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.status(200).json({ sum: +a + +b });
});

app.post('/products/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id: id });
});

app.get('/users/:id/bookings/:bid', (req, res) => {
  const { id, bid } = req.params;
  res.status(200).json({ id, bid });
});

// LAB2
app.get('/countries/:commonName', async (req, res, next) => {
  try {
    const { commonName } = req.params;
    const data = await fs.readFile('./data/country.json');
    const result = JSON.parse(data).filter((item) => item.name.common.toLowerCase() === commonName.toLowerCase());
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(8000, () => console.log('Server is running on port 8000'));
